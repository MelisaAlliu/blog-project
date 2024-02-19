<template>
    <div class="carousel" ref="slider">
        <div class="list">
            <div class="item" v-for="slide in slides" :key="slide.id">
                <img class="header-image" :src="slide.imageSrc" alt="Slide" />
                <div class="content">
                    <div class="author">{{ slide.author }}</div>
                    <div class="title">{{ slide.title }}</div>
                    <div class="topic">{{ slide.topic }}</div>
                    <div class="des">{{ slide.description }}</div>
                </div>
            </div>
        </div>

        <div class="thumbnail">
            <div
                class="item"
                v-for="thumbnail in thumbnails"
                :key="thumbnail.id"
            >
                <img :src="thumbnail.imageSrc" alt="Thumbnail" />
                <div class="content">
                    <div class="title">{{ thumbnail.title }}</div>
                    <div class="description">{{ thumbnail.description }}</div>
                </div>
            </div>
        </div>

        <div class="arrows">
            <button @click="prevSlide">&lt;</button>
            <button @click="nextSlide">&gt;</button>
        </div>

        <div class="time"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                {
                    id: 1,
                    imageSrc: "images/header-image-1.jpg",
                    author: "Mindful heartbeat",
                    title: "Mindful",
                    topic: "Heartbeat",
                    description:
                        "In the intricate dance of love, relationships serve as the canvas upon which we paint the colorful tapestry of our lives. They're the delicate balance of laughter and tears, of compromise and passion, of growth and acceptance. ",
                },
                {
                    id: 2,
                    imageSrc: "images/header-image-2.jpg",
                    author: "Mindful heartbeat",
                    title: "Mindful",
                    topic: "Heartbeat",
                    description:
                        "In the hustle and bustle of our daily lives, amidst the chaos and clamor, self-care stands as a beacon of solace, inviting us to pause, to breathe, and to nourish our souls. It's the gentle reminder to prioritize our well-being, to tend to the garden of our minds, bodies, and spirits with tenderness and compassion.",
                },
                {
                    id: 3,
                    imageSrc: "images/header-image-3.jpg",
                    author: "Mindful heartbeat",
                    title: "Mindful",
                    topic: "Heartbeat",
                    description:
                        "Personal development is the journey of becoming the best version of ourselves, a continual evolution guided by curiosity, courage, and a thirst for growth. It's about stepping out of our comfort zones, embracing challenges as opportunities for learning, and cultivating the skills and mindset needed to thrive in an ever-changing world. ",
                },
                {
                    id: 4,
                    imageSrc: "images/header-image-4.jpg",
                    author: "Mindful heartbeat",
                    title: "Mindful",
                    topic: "Heartbeat",
                    description:
                        "Financial freedom is the culmination of deliberate choices, disciplined habits, and empowered decision-making that liberates us from the constraints of financial worry and empowers us to live life on our own terms. It's about more than just accumulating wealth; it's about cultivating a mindset of abundance, stewardship, and purposeful planning. ",
                },
            ],
            thumbnails: [
                {
                    id: 1,
                    imageSrc: "images/header-image-1.jpg",
                    title: "Relationships",
                },
                {
                    id: 2,
                    imageSrc: "images/header-image-2.jpg",
                    title: "Freedom",
                },
                {
                    id: 3,
                    imageSrc: "images/header-image-3.jpg",
                    title: "Improvement",
                },
                {
                    id: 4,
                    imageSrc: "images/header-image-4.jpg",
                    title: "Career",
                },
            ],
            timeRunning: 3000,
            timeAutoNext: 10000,
            currentIndex: 0,
            runTimeOut: null,
            runNextAuto: null,
        };
    },
    methods: {
        nextSlide() {
            this.showSlider("next");
        },
        prevSlide() {
            this.showSlider("prev");
        },
        showSlider(type) {
            if (type === "next") {
                this.slides.push(this.slides.shift());
                this.thumbnails.push(this.thumbnails.shift());
                this.$nextTick(() => {
                    this.$refs.slider.classList.add("next");
                    clearTimeout(this.runTimeOut);
                    this.runTimeOut = setTimeout(() => {
                        this.$refs.slider.classList.remove("next");
                    }, this.timeRunning);
                });
            } else {
                this.slides.unshift(this.slides.pop());
                this.thumbnails.unshift(this.thumbnails.pop());
                this.$nextTick(() => {
                    this.$refs.slider.classList.add("prev");
                    clearTimeout(this.runTimeOut);
                    this.runTimeOut = setTimeout(() => {
                        this.$refs.slider.classList.remove("prev");
                    }, this.timeRunning);
                });
            }

            clearTimeout(this.runNextAuto);
            this.runNextAuto = setTimeout(() => {
                this.nextSlide();
            }, this.timeAutoNext);
        },
    },
};
</script>

<style scoped>
/* carousel */
.carousel {
    height: 100vh;
    margin-top: -50px;
    width: 100vw;
    overflow: hidden;
    position: relative;
}
.carousel .list .item {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0 0 0 0;
}
.header-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.carousel .list .item .content {
    position: absolute;
    top: 20%;
    width: 1140px;
    max-width: 80%;
    left: 50%;
    transform: translateX(-50%);
    padding-right: 30%;
    box-sizing: border-box;
    color: #fff;
    text-shadow: 0 5px 10px #0004;
}
.carousel .list .item .author {
    font-weight: bold;
    letter-spacing: 10px;
}
.carousel .list .item .title,
.carousel .list .item .topic {
    font-size: 5em;
    font-weight: bold;
    line-height: 1.3em;
}
.carousel .list .item .topic {
    color: #aa9b72;
}
.carousel .list .item .buttons {
    display: grid;
    grid-template-columns: repeat(2, 130px);
    grid-template-rows: 40px;
    gap: 5px;
    margin-top: 20px;
}
.carousel .list .item .buttons button {
    border: none;
    background-color: #aa9b72;
    letter-spacing: 3px;
    font-family: Poppins;
    font-weight: 500;
}
.carousel .list .item .buttons button:nth-child(2) {
    background-color: transparent;
    border: 1px solid #fff;
    color: #eee;
}
/* thumbail */
.thumbnail {
    position: absolute;
    bottom: 50px;
    left: 50%;
    width: max-content;
    z-index: 100;
    display: flex;
    gap: 20px;
}
.thumbnail .item {
    width: 150px;
    height: 220px;
    flex-shrink: 0;
    position: relative;
}
.thumbnail .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.thumbnail .item .content {
    color: #fff;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
}
.thumbnail .item .content .title {
    font-weight: 500;
}
.thumbnail .item .content .description {
    font-weight: 300;
}
/* arrows */
.arrows {
    position: absolute;
    top: 80%;
    right: 52%;
    z-index: 100;
    width: 300px;
    max-width: 30%;
    display: flex;
    gap: 10px;
    align-items: center;
}
.arrows button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #aa9b72;
    border: none;
    color: #fff;
    font-family: monospace;
    font-weight: bold;
    transition: 0.5s;
}
.arrows button:hover {
    background-color: #fff;
    color: #000;
}

/* animation */
.carousel .list .item:nth-child(1) {
    z-index: 1;
}

/* animation text in first item */

.carousel .list .item:nth-child(1) .content .author,
.carousel .list .item:nth-child(1) .content .title,
.carousel .list .item:nth-child(1) .content .topic,
.carousel .list .item:nth-child(1) .content .des,
.carousel .list .item:nth-child(1) .content .buttons {
    transform: translateY(50px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent 0.5s 1s linear 1 forwards;
}
@keyframes showContent {
    to {
        transform: translateY(0px);
        filter: blur(0px);
        opacity: 1;
    }
}
.carousel .list .item:nth-child(1) .content .title {
    animation-delay: 1.2s !important;
}
.carousel .list .item:nth-child(1) .content .topic {
    animation-delay: 1.4s !important;
}
.carousel .list .item:nth-child(1) .content .des {
    animation-delay: 1.6s !important;
}
.carousel .list .item:nth-child(1) .content .buttons {
    animation-delay: 1.8s !important;
}
/* create animation when next click */
.carousel.next .list .item:nth-child(1) img {
    width: 150px;
    height: 220px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    border-radius: 30px;
    animation: showImage 0.5s linear 1 forwards;
}
@keyframes showImage {
    to {
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
}

.carousel.next .thumbnail .item:nth-last-child(1) {
    overflow: hidden;
    animation: showThumbnail 0.5s linear 1 forwards;
}
.carousel.prev .list .item img {
    z-index: 100;
}
@keyframes showThumbnail {
    from {
        width: 0;
        opacity: 0;
    }
}
.carousel.next .thumbnail {
    animation: effectNext 0.5s linear 1 forwards;
}

@keyframes effectNext {
    from {
        transform: translateX(150px);
    }
}

/* running time */

.carousel .time {
    position: absolute;
    z-index: 1000;
    width: 0%;
    height: 3px;
    background-color: #f1683a;
    left: 0;
    top: 0;
}

.carousel.next .time,
.carousel.prev .time {
    animation: runningTime 3s linear 1 forwards;
}
@keyframes runningTime {
    from {
        width: 100%;
    }
    to {
        width: 0;
    }
}

/* prev click */

.carousel.prev .list .item:nth-child(2) {
    z-index: 2;
}

.carousel.prev .list .item:nth-child(2) img {
    animation: outFrame 0.5s linear 1 forwards;
    position: absolute;
    bottom: 0;
    left: 0;
}
@keyframes outFrame {
    to {
        width: 150px;
        height: 220px;
        bottom: 50px;
        left: 50%;
        border-radius: 20px;
    }
}

.carousel.prev .thumbnail .item:nth-child(1) {
    overflow: hidden;
    opacity: 0;
    animation: showThumbnail 0.5s linear 1 forwards;
}
.carousel.next .arrows button,
.carousel.prev .arrows button {
    pointer-events: none;
}
.carousel.prev .list .item:nth-child(2) .content .author,
.carousel.prev .list .item:nth-child(2) .content .title,
.carousel.prev .list .item:nth-child(2) .content .topic,
.carousel.prev .list .item:nth-child(2) .content .des,
.carousel.prev .list .item:nth-child(2) .content .buttons {
    animation: contentOut 1.5s linear 1 forwards !important;
}

@keyframes contentOut {
    to {
        transform: translateY(-150px);
        filter: blur(20px);
        opacity: 0;
    }
}
@media screen and (max-width: 678px) {
    .carousel .list .item .content {
        padding-right: 0;
    }
    .carousel .list .item .content .title {
        font-size: 30px;
    }
}
</style>
