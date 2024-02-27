<template>
    <section class="single-blog-post">
        <img
            class="about-logo"
            src="../../../../public/images/about-logo-2.png"
            alt=""
        />
        <h1 class="text-3xl font-bold mb-6 mt-6 text-center">
            Meet our writers
        </h1>

        <div class="about-writers">
            <AboutWritersPage />
        </div>

        <h1 class="text-3xl font-bold mb-6 mt-6 text-center">
            About Mindful Heartbeat
        </h1>
        <div class="video-content flex justify-center" data-aos="fade-left">
            <video class="max-w-[940px] h-auto" autoplay loop muted>
                <source
                    src="../../../../public/images/video1.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>

        <div class="about-info flex justify-center">
            <div>
                <p class="max-w-2xl text-lg mb-6 mt-6 text-white">
                    Welcome to Mindful Heartbeat, a digital sanctuary where
                    heart and mind converge to explore the depths of human
                    experience, foster personal growth, and cultivate profound
                    insights.

                    <br /><br />
                    At Mindful Heartbeat, we believe that true wisdom emerges
                    from the harmonious interplay of the heart and mind. Our
                    mission is to provide a nurturing space where individuals
                    can embark on a transformative journey of self-discovery,
                    finding balance, clarity, and meaning in their lives.

                    <br /><br />
                    Through our curated collection of articles, essays, and
                    reflections, we invite you to embark on an exploration of
                    the multifaceted dimensions of the human experience. From
                    introspective musings to thought-provoking analyses, our
                    content delves into diverse topics including:
                </p>
                <ul class="max-w-2xl text-lg mb-6 text-white">
                    <li class="font-light mb-4">
                        Emotional intelligence and self-awareness
                    </li>
                    <li class="font-light mb-4">
                        Mental health and well-being
                    </li>
                    <li class="font-light mb-4">
                        Personal development and growth mindset
                    </li>
                    <li class="font-light mb-4">
                        Mindfulness and meditation practices
                    </li>
                    <li class="font-light mb-4">
                        Relationships and communication
                    </li>
                    <li class="font-light mb-4">Creativity and inspiration</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import AboutWritersPage from "./helper-components/AboutWritersPage.vue";
export default {
    components: {
        AboutWritersPage,
    },
};
</script>

<style scoped>
h1 {
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>
