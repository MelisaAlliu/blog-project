<template>
    <div class="wrapper">
        <header
            class="header relative flex justify-center items-center h-screen"
        >
            <img
                src="../../../public/images/background-image.jpg"
                class="background absolute inset-0 w-full h-full object-cover"
            />
            <img
                src="../../../public/images/foreground-image.png"
                class="foreground absolute inset-0 w-full h-full object-cover"
            />
            <div class="header-text text-center z-10">
                <h1 class="text-4xl font-bold mb-4">Mindful Heartbeat</h1>
                <h4 class="text-lg">Home of balance and inspiration...</h4>
            </div>
            <div class="overlay absolute inset-0 bg-black opacity-50"></div>
        </header>

        <section>
            <CaruselApp />
        </section>

        <h2 class="header-title text-center text-3xl text-white font-bold py-8">
            Latest Blog Posts
        </h2>

        <section class="cards-blog latest-blog grid grid-cols-3 gap-12">
            <div class="card-blog-content">
                <img src="../../../public/images/image1.jpg " alt="" />
                <p class="mt-4 mb-2 text-sm">
                    2 hours ago
                    <span class="float-right">Written By meli</span>
                </p>
                <h4 class="font-bold text-xl">
                    <router-link
                        :to="{
                            name: 'SinglePage',
                            params: {
                                slug: 'Setting-SMART-Goals-A-Blueprint-for-Success',
                            },
                        }"
                        >Setting SMART Goals: A Blueprint for
                        Success</router-link
                    >
                </h4>
            </div>
            <div class="card-blog-content">
                <img src="../../../public/images/image1.jpg " alt="" />
                <p class="mt-4 mb-2 text-sm">
                    2 hours ago
                    <span class="float-right">Written By meli</span>
                </p>
                <h4 class="font-bold text-xl">
                    <router-link
                        :to="{
                            name: 'SinglePage',
                            params: {
                                slug: 'Setting-SMART-Goals-A-Blueprint-for-Success',
                            },
                        }"
                        >Setting SMART Goals: A Blueprint for
                        Success</router-link
                    >
                </h4>
            </div>

            <div class="card-blog-content">
                <img src="../../../public/images/image1.jpg " alt="" />
                <p class="mt-4 mb-2 text-sm">
                    2 hours ago
                    <span class="float-right">Written By meli</span>
                </p>
                <h4 class="font-bold text-xl">
                    <router-link
                        :to="{
                            name: 'SinglePage',
                            params: {
                                slug: 'Setting-SMART-Goals-A-Blueprint-for-Success',
                            },
                        }"
                        >Setting SMART Goals: A Blueprint for
                        Success</router-link
                    >
                </h4>
            </div>

            <div class="card-blog-content">
                <img src="../../../public/images/image1.jpg " alt="" />
                <p class="mt-4 mb-2 text-sm">
                    2 hours ago
                    <span class="float-right">Written By meli</span>
                </p>
                <h4 class="font-bold text-xl">
                    <router-link
                        :to="{
                            name: 'SinglePage',
                            params: {
                                slug: 'Setting-SMART-Goals-A-Blueprint-for-Success',
                            },
                        }"
                        >Setting SMART Goals: A Blueprint for
                        Success</router-link
                    >
                </h4>
            </div>
        </section>
    </div>
</template>

<script>
import CaruselApp from "./library/CaruselApp.vue";
export default {
    components: {
        CaruselApp,
    },
};
</script>

<style scoped>
.text-sm {
    font-size: 16px;
}

.wrapper {
    height: 100vh;
    /* width: 100vw; */
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 10px;
}

header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transform-style: preserve-3d;
    z-index: -1;
}

.background {
    transform: translateZ(-10px) scale(2);
}

.foreground {
    transform: translateZ(-5px) scale(1.5);
}

.background,
.foreground {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
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
