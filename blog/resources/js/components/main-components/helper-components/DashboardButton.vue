<template>
    <router-link @click="closeOverlay" :to="{ name: 'Dashboard' }"
        ><i class="dashboard-button fa-solid fa-gauge"></i>
    </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.dashboard-button {
    position: absolute;
    padding: 30px;
    font-size: 40px;
    color: #aa9b72;
}
.dashboard-button:hover {
    color: black;
}
</style>
