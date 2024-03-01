<template>
    <section class="single-blog-post">
        <h1 class="text-center mt-16 mb-8 text-2xl font-semibold capitalize">
            {{ post.title }}
        </h1>

        <p class="time-and-author text-center mb-4 grid grid-cols-2">
            <span class="justify-self-start mx-2">{{ post.created_at }}</span>
            <span class="justify-self-end mx-2"
                >Written By {{ post.user }}</span
            >
        </p>

        <div class="single-blog-post-ContentImage" data-aos="fade-left">
            <img
                :src="`/${post.imagePath}`"
                alt=""
                class="sigle-blog-post-image h-[70vh] object-cover w-full"
            />
        </div>

        <div class="about-text max-w-3xl mx-auto my-8 leading-6">
            <p>{{ post.body }}</p>
        </div>
    </section>

    <p class="text-center mb-4">Related</p>
    <section class="recommended-cards mt-8 grid grid-cols-3 gap-2">
        <div
            class="recommended-card"
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.id"
        >
            <router-link
                :to="{
                    name: 'SinglePage',
                    params: {
                        slug: relatedPost.slug,
                    },
                }"
            >
                <img
                    :src="`/${relatedPost.imagePath}`"
                    alt=""
                    loading="lazy"
                    class="card-image"
                />

                <h4 class="text-xl font-semibold">
                    {{ relatedPost.title }}
                </h4></router-link
            >
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    emits: ["updateSidebar"],
    props: ["slug"],

    data() {
        return {
            post: {},
            relatedPosts: [],
        };
    },
    mounted() {
        axios
            .get("/api/posts/" + this.slug)
            .then((response) => (this.post = response.data.data))
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("/api/related-posts/" + this.slug)
            .then((response) => (this.relatedPosts = response.data.data))
            .catch((error) => {
                console.log(error);
            });
    },
};
</script>

<style scoped>
.card-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
}
.single-blog-post p {
    font-size: 16px;
    font-weight: 300;
}

.single-blog-post .about-text {
    line-height: 1.5;
}

.recommended-cards {
    margin: 20px;
}
.recommended-card {
    width: 350px;
}

.recommended-card:hover {
    transform: translateY(-8px);
}

.recommended-card img {
    max-width: 100%;
}

.recommended-card h4 {
    font-size: 18px;
}

.recommended-card p {
    margin-top: 80px;
    margin-bottom: 15px;
}
</style>
