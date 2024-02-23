<template>
    <router-link
        @click="closeOverlay"
        :to="{ name: 'Dashboard' }"
        class="flex items-center text-gray hover:text-black"
    >
        <span class="material-symbols-outlined">dashboard</span>Go to dashboard
    </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
button {
    display: flex;
    left: 0;
    top: 0;
    margin-left: 20px;
    background-color: rgb(45, 45, 96);
}
</style>
