<template>
    <div class="categories-list">
        <DashboardButton />
        <h1 class="text-black text-center text-4xl font-bold">Posts List</h1>

        <div class="success-msg" v-if="success">
            <i class="fa fa-check"></i>
            Post deleted successfully
        </div>
        <div class="success-msg" v-if="editSuccess">
            <i class="fa fa-check"></i>
            Post edited successfully
        </div>
        <div class="post-cart">
            <div class="item" v-for="(post, index) in posts" :key="post.id">
                <span
                    ><strong>Post number {{ index + 1 }}</strong></span
                >
                <p><strong>Post title:</strong> {{ post.title }}</p>
                <div class="post-buttons">
                    <router-link
                        class="edit-link"
                        :to="{ name: 'EditPosts', params: { slug: post.slug } }"
                        ><i class="fa-solid fa-pen-to-square"></i
                        >Edit</router-link
                    >

                    <button class="delete-btn" @click="destroy(post.slug)">
                        <i class="fa-solid fa-trash"></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
        <div class="go-to-btn">
            <router-link :to="{ name: 'CreatePosts' }"
                ><button class="index">
                    Create Posts
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import axios from "axios";
import { Post } from "../interfaces/Post";
import DashboardButton from "../main-components/helper-components/DashboardButton.vue";

export default defineComponent({
    components: { DashboardButton },
    props: {
        editSuccess: Boolean as PropType<boolean>,
    },
    emits: ["updateSidebar"],
    data() {
        return {
            posts: [] as Post[],
            success: false,
        };
    },
    methods: {
        destroy(slug: string) {
            if (confirm("Are you sure you want to delete this post?")) {
                axios
                    .delete(`/api/posts/${slug}`)
                    .then(() => {
                        this.fetchPosts();
                        this.success = true;
                        setTimeout(() => {
                            this.success = false;
                        }, 2500);
                    })
                    .catch((error) => {
                        console.log(error.response.data);
                    });
            }
        },

        fetchPosts() {
            axios
                .get("/api/dashboard-posts")
                .then((response) => (this.posts = response.data.data))
                .catch((error) => {
                    console.log(error);
                });
        },
    },

    mounted() {
        this.fetchPosts();
    },
});
</script>

<style scoped>
.categories-list {
    min-height: 100vh;
    background: #fff;
    padding-bottom: 50px;
}

.categories-list h1 {
    padding: 50px 0 30px 0;
    text-align: center;
}
.post-cart {
    margin: 0 40px;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr;
}
.post-buttons {
    margin-top: 10px;
}

.categories-list .item {
    margin: 10px;
    color: black;
    padding: 20px;
    flex: 0 0 calc(33.33% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #f3f3f3 30%, #aa9b72);
}
.categories-list p {
    margin: 10px 0;
}
.categories a {
    color: white;
    padding: 10px 20px;
    display: inline-block;
}

.index-post {
    width: 200px;
    text-align: center;
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    margin-left: 20px;
    background-color: black;
}
.go-to-btn {
    text-align: center;
    margin-top: 20px;
}
.edit-link {
    margin-right: 10px;
    color: white;
    padding: 10px;
    background-color: green;
    border-radius: 5px;
}
.delete-btn {
    color: white;
    padding: 7px;
    background-color: red;
    border-radius: 5px;
}

@media (max-width: 1320px) {
    .post-cart {
        display: grid;
        grid-template-columns: 0.5fr 0.5fr;
    }
}

@media (max-width: 600px) {
    .post-cart {
        display: grid;
        grid-template-columns: 0.5fr;
        justify-content: center;
    }
}
</style>
