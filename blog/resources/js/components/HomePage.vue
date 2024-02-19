<template>
    <div>
        <header class="header">
            <HomePageHeader />
        </header>

        <section>
            <CaruselApp />
        </section>

        <h2 class="header-title text-center text-3xl text-white font-bold py-8">
            Latest Blog Posts
        </h2>

        <section class="cards-blog latest-blog grid grid-cols-2 gap-12">
            <div class="card-blog-content" v-for="post in posts" :key="post.id">
                <img :src="post.imagePath" alt="" class="card-image" />
                <p class="mt-4 mb-2 text-sm">
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
    </div>
</template>

<script>
import CaruselApp from "./library/CaruselApp.vue";
import axios from "axios";
import HomePageHeader from "./HomePageHeader.vue";
export default {
    components: {
        CaruselApp,
        HomePageHeader,
    },
    emits: ["updateSidebar"],
    data() {
        return {
            posts: [],
        };
    },
    mounted() {
        axios
            .get("/api/home-posts")
            .then((response) => (this.posts = response.data.data))
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style scoped>
.text-sm {
    font-size: 16px;
}

.card-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
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
