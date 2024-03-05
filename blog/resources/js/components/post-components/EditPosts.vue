<template>
    <main class="create-post">
        <div class="container">
            <h1 class="text-black text-center text-4xl font-bold">
                Edit Post!
            </h1>
            <div class="success-msg" v-if="success">
                <i class="fa fa-check"></i>
                Post created successfully
            </div>

            <div class="contact-form">
                <form @submit.prevent="submit">
                    <label for="title"><span>Title</span></label>
                    <input type="text" id="title" v-model="fields.title" />
                    <span v-if="errors.title" class="error">{{
                        errors.title[0]
                    }}</span>
                    <br />

                    <label for="image"><span>Image</span></label>
                    <input type="file" id="image" @input="grabFile" />
                    <span v-if="errors.file" class="error">{{
                        errors.file[0]
                    }}</span>
                    <div class="preview">
                        <img :src="url" alt="" />
                    </div>
                    <br />

                    <label for="categories"
                        ><span>Choose a category:</span></label
                    >
                    <select v-model="fields.category_id" id="categories">
                        <option disabled value="">Select option</option>
                        <option
                            :value="category.id"
                            v-for="category in categories"
                            :key="category.id"
                        >
                            {{ category.name }}
                        </option>
                    </select>
                    <span v-if="errors.category_id" class="error">{{
                        errors.category_id[0]
                    }}</span>
                    <br />

                    <label for="body"><span>Body</span></label>
                    <textarea id="body" v-model="fields.body"></textarea>
                    <span v-if="errors.body" class="error">{{
                        errors.body[0]
                    }}</span>
                    <SubmitButton />

                    <div class="go-to-btn">
                        <router-link :to="{ name: 'DashboardPostsList' }"
                            ><button class="index">
                                Post List
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, PropType } from "vue";
import { Category } from "../interfaces/Category";
import { PostFields } from "../interfaces/PostFields";
import { Errors } from "../interfaces/Errors";
import SubmitButton from "../main-components/helper-components/SubmitButton.vue";

export default defineComponent({
    components: { SubmitButton },
    props: {
        slug: {
            type: String as PropType<string>,
            required: true,
        },
    },
    data() {
        return {
            success: false,
            fields: {} as PostFields,
            errors: {} as Errors,
            url: "",
            categories: {} as Category,
        };
    },
    methods: {
        grabFile(e: Event) {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                this.fields.file = file;
                this.url = URL.createObjectURL(file);
                URL.revokeObjectURL(this.url);
            }
        },
        submit() {
            const fd = new FormData();
            Object.entries(this.fields).forEach(([key, value]) => {
                if (key === "file" && value instanceof File) {
                    fd.append("file", value);
                } else {
                    fd.append(key, value as string);
                }
            });
            fd.append("_method", "PUT");
            axios
                .post(`/api/posts/${this.slug}`, fd, {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    this.success = true;
                    this.$router.push({ name: "DashboardPostsList" });
                })
                .catch((error) => {
                    this.errors = error.response.data.errors || {};
                    if (error.response.status === 403) {
                        this.$router.push({ name: "DashboardPostsList" });
                    }
                });
        },
    },
    mounted() {
        axios
            .get("/api/categories")
            .then((response) => {
                this.categories = response.data || [];
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get(`/api/posts/${this.slug}`)
            .then((response) => {
                this.fields = response.data.data || {};
                this.url = "/" + (response.data.data?.imagePath || "");
            })
            .catch((error) => {
                console.log(error);
                if (error.response && error.response.status === 403) {
                    this.$router.push({ name: "DashboardPostsList" });
                }
            });
    },
});
</script>

<style scoped>
.contact-form {
    color: black;
}
.create-post {
    background-color: #fff;
    padding: 0 3vw;
}
.container input,
textarea,
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 20px;
    font-size: 16px;
}
h1 {
    text-align: center;
    padding: 60px 0 50px 0;
}

.add-post-btn {
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
}

.add-post-btn:hover {
    transform: translateY(-4px);
}

.preview img {
    max-width: 100%;
    max-height: 120px;
}
</style>
