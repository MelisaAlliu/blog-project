<template>
    <button class="add-post-btn bg-black" type="submit">
        <i class="fa-solid fa-right-to-bracket"></i> Submit
    </button>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.add-post-btn {
    color: white;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s ease;
    width: 200px;
    border-radius: 5px;
}

.add-post-btn:hover {
    transform: translateY(-4px);
}
</style>
