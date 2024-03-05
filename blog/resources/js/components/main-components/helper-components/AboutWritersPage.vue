<template>
    <div class="writers-wrapper">
        <div class="writers">
            <img class="logo" src="/public/images/writer-logo-1.PNG" alt="" />
            <img
                class="front-image"
                src="/public/images/writer-back-image-1.png"
                alt=""
            />
            <img
                class="bg-image"
                src="/public/images/writer-front-image-1.jpg"
                alt=""
            />
        </div>

        <div class="writers">
            <img class="logo" src="/public/images/writer-logo-2.PNG" alt="" />
            <img
                class="front-image"
                src="/public/images/writer-back-image-2.png"
                alt=""
            />
            <img
                class="bg-image"
                src="/public/images/writer-front-image-2.jpg"
                alt=""
            />
        </div>

        <div class="writers">
            <img class="logo" src="/public/images/writer-logo-3.png" alt="" />
            <img
                class="front-image"
                src="/public/images/writer-back-image-3.png"
                alt=""
            />
            <img
                class="bg-image"
                src="/public/images/writer-front-image-3.jpg"
                alt=""
            />
        </div>

        <div class="writers">
            <img class="logo" src="/public/images/writer-logo-4.png" alt="" />
            <img
                class="front-image"
                src="/public/images/writer-back-image-4.png"
                alt=""
            />
            <img
                class="bg-image"
                src="/public/images/writer-front-image-4.jpg"
                alt=""
            />
        </div>
    </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
body {
    display: grid;
    place-content: center;
    min-height: 100vh;
    perspective: 1000px;
}

.writers-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
}
img {
    max-width: 100%;
    border-radius: 20px;
}

.logo,
.front-image {
    position: absolute;
    width: 100%;
}

.logo {
    z-index: 1000;
    filter: invert(1);
    width: 65%;
    margin-inline: auto;
    inset: auto 0 2rem;
    transform: translateY(0rem) translateZ(20px);
    transition: var(--timing);
}

.writers {
    width: 300px;
    aspect-ratio: 9 / 16;
    position: relative;
    transform-style: preserve-3d;
    transition: rotate var(--timing) ease;
}

.writers:hover {
    rotate: x var(--rotation);
}

.writers::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 100;
    background-image: radial-gradient(circle, transparent 50px, black);
    opacity: 0;
    transition: opacity var(--timing);
}

.writers:hover::before {
    opacity: 1;
}

.writers::after {
    content: "";
    position: absolute;
    inset: 80% 0.5rem 0.5rem;
    translate: 0;
    transform: translateZ(-100px);
    background: black;
    filter: blur(1rem);
    z-index: 1;
    transition: rotate var(--timing), translate var(--timing);
}

.writers:hover::after {
    rotate: x calc(var(--rotation) * -1);
    translate: 0 60px;
}

.bg-image {
    position: absolute;
    z-index: 10;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.writers:hover .logo {
    transform: translateY(-2rem) translateZ(20px);
    rotate: x calc(var(--rotation) * -1);
}

.front-image {
    scale: 1.125;
    transform-origin: bottom;
    opacity: 0;
    z-index: 1000;
    transition: var(--timing);
    width: 250px;
    margin-left: 30px;
    margin-top: 100px;
}

.writers:hover .front-image {
    opacity: 1;
    transform: translateY(-2rem) translateZ(-10px);
    rotate: x calc(var(--rotation) * -1);
}
</style>
