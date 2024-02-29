<template>
    <button>
        <router-link
            @click="closeOverlay"
            :to="{ name: 'Dashboard' }"
            class="flex items-center text-white"
        >
            Go to dashboard
        </router-link>
    </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
    margin-top: 40px;
    padding: 10px;
    border-radius: 5px;
    margin-left: 40px;
    background-color: #aa9b72;
}
button:hover {
    background-color: black;
    color: white;
}
</style>
