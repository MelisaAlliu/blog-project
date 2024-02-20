<template>
    <div class="blog-page-wrapper">
        <h2 class="header-title text-center text-3xl font-bold py-8">
            All Blog Posts
        </h2>

        <div class="searchbar flex justify-center mb-6">
            <form action="">
                <input
                    type="text"
                    placeholder="Search..."
                    name="search"
                    class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                    v-model="title"
                />
                <button
                    type="submit"
                    class="ml-2 px-4 py-2 text-white rounded-md"
                >
                    <i class="fas fa-search"></i>
                </button>
            </form>
        </div>

        <div class="categories flex justify-center mb-6">
            <ul class="flex">
                <li
                    class="mr-4 bg-gray-800 rounded-lg"
                    v-for="category in categories"
                    :key="category.id"
                >
                    <a
                        href="#"
                        @click="filterByCategory(category.name)"
                        class="text-white px-6 py-2"
                        >{{ category.name }}</a
                    >
                </li>
            </ul>
        </div>

        <section class="cards-blog grid grid-cols-3 gap-12 mx-12">
            <div class="card-blog-content" v-for="post in posts" :key="post.id">
                <img :src="`/${post.imagePath}`" alt="" class="card-image" />
                <p class="mt-4">
                    {{ post.created_at }}
                    <span class="float-right">Written By {{ post.user }}</span>
                </p>
                <h4 class="font-bold text-xl">
                    <router-link
                        :to="{
                            name: 'SinglePage',
                            params: {
                                slug: post.slug,
                            },
                        }"
                        >{{ post.title }}</router-link
                    >
                </h4>
            </div>
        </section>

        <h3 v-if="!posts.length" class="text-center text-white">
            Sorry, no match was found!
        </h3>

        <div class="pagination flex justify-center mt-8" id="pagination">
            <a
                href="#"
                class="mr-2"
                v-for="(link, index) in links"
                :key="index"
                v-html="link.label"
                :class="{ active: link.active, disabled: !link.url }"
                @click="changePage(link.url)"
            ></a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { Post } from "./interfaces/Post";
import { Category } from "./interfaces/Category";
import { Link } from "./interfaces/Link";

export default defineComponent({
    emits: ["updateSidebar"],
    data() {
        return {
            posts: [] as Post[],
            categories: [] as Category[],
            title: "",
            links: [] as Link[],
        };
    },
    methods: {
        filterByCategory(name: string) {
            axios
                .get("/api/posts", {
                    params: {
                        category: name,
                    },
                })
                .then((response) => {
                    this.posts = response.data.data;
                    this.links = response.data.meta.links;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        changePage(url: string | null) {
            if (url !== null) {
                axios
                    .get(url)
                    .then((response) => {
                        this.posts = response.data.data;
                        this.links = response.data.meta.links;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
    },
    watch: {
        title() {
            axios
                .get("/api/posts", {
                    params: {
                        search: this.title,
                    },
                })
                .then((response) => {
                    this.posts = response.data.data;
                    this.links = response.data.meta.links;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        axios
            .get("/api/posts")
            .then((response) => {
                this.posts = response.data.data;
                this.links = response.data.meta.links;
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("/api/categories")
            .then((response) => {
                this.categories = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
});
</script>

<style scoped>
.disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.5;
}
.cards-blog {
    justify-content: space-around;
}
.card-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
.categories ul li {
    list-style: none;
    background-color: #45444c;
    margin: 20px 5px;
    border-radius: 15px;
}

.categories ul {
    display: flex;
    justify-content: center;
}

.categories a {
    color: white;
    padding: 10px 20px;
    display: inline-block;
}

​.pagination {
    display: inline-block;
}

#pagination {
    margin: 3rem 3rem;
}

.pagination a {
    color: white;
    float: left;
    padding: 6px 16px;
    text-decoration: none;
}

.pagination a.active {
    background-color: #837861;
    color: white;
}

.pagination a:hover {
    background-color: #ddd;
    color: black;
}

button {
    background-color: #837861;
}
</style>
