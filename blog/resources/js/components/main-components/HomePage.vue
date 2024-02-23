<template>
    <div>
        <header class="header">
            <HomePageHeader />
        </header>

        <section class="carusel-section">
            <CaruselApp />
        </section>

        <h2 class="header-title text-center text-3xl text-white font-bold py-8">
            Latest Blog Posts
        </h2>

        <section class="cards-blog latest-blog grid grid-cols-2 gap-12">
            <div class="card-blog-content" v-for="post in posts" :key="post.id">
                <router-link
                    :to="{
                        name: 'SinglePage',
                        params: {
                            slug: post.slug,
                        },
                    }"
                >
                    <img :src="post.imagePath" alt="" class="card-image" />
                    <p class="mt-4 mb-2 text-sm">
                        {{ post.created_at }}
                        <span class="float-right"
                            >Written By {{ post.user }}</span
                        >
                    </p>
                    <h4 class="font-bold text-xl">
                        {{ post.title }}
                    </h4></router-link
                >
            </div>
        </section>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import HomePageHeader from "./helper-components/HomePageHeader.vue";
import CaruselApp from "../library/CaruselApp.vue";
import { Post } from "../interfaces/Post";

export default defineComponent({
    components: {
        HomePageHeader,
        CaruselApp,
    },
    emits: ["updateSidebar"],
    data() {
        return {
            posts: [] as Post[],
        };
    },
    mounted() {
        axios
            .get<{ data: Post[] }>("/api/home-posts")
            .then((response) => (this.posts = response.data.data))
            .catch((error) => {
                console.log(error);
            });
    },
});
</script>

<style scoped>
.text-sm {
    font-size: 16px;
}

.card-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}

section {
    font-size: 2rem;
    padding: 2rem;
    background-color: #000;
    color: white;
}

.header-title {
    text-align: center;
    padding: 80px 0 40px 0;
    font-size: 30px;
    font-weight: 300;
    background-color: #000;
}
</style>
