<template>
    <h2>Quotes to get you inspired</h2>
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide
            ><img
                src="../../../../public/images/carusel-image-1.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                src="../../../../public/images/carusel-image-2.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                src="../../../../public/images/carusel-image-3.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                src="../../../../public/images/carusel-image-4.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                src="../../../../public/images/carusel-image-5.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                src="../../../../public/images/carusel-image-6.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                src="../../../../public/images/carusel-image-7.jpg" /></swiper-slide
        ><swiper-slide
            ><img
                src="../../../../public/images/carusel-image-8.jpg" /></swiper-slide
        ><swiper-slide
            ><img src="../../../../public/images/carusel-image-9.jpg"
        /></swiper-slide>
        <swiper-slide
            ><img src="../../../../public/images/carusel-image-10.jpg"
        /></swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCoverflow, Pagination],
        };
    },
};
</script>

<style scoped>
h2 {
    text-align: center;
    margin-top: 50px;
    font-size: 2rem;
    font-weight: 300;
    padding: 50px 0 30px 0;
    text-align: center;
}

#app {
    height: 100%;
}
html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 304px;
    height: 304px;
    border: 2px solid #618da8;
}

.swiper-slide img {
    display: block;
    width: 300px;
    height: 300px;
}
</style>
