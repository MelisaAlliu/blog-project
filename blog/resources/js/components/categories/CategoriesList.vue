<template>
    <div class="categories-list bg-white">
        <h1 class="text-black text-center p-20 text-4xl font-bold">
            Categories List
        </h1>
        <div class="success-msg" v-if="success">
            <i class="fa fa-check"></i>
            Deleted successfully
        </div>

        <div class="success-msg" v-if="editSuccess">
            <i class="fa fa-check"></i>
            Edited successfully
        </div>
        <div
            class="item"
            v-for="(category, index) in categories"
            :key="category.id"
        >
            <span>{{ index + 1 }}</span>
            <p>{{ category.name }}</p>
            <div>
                <span class="material-symbols-outlined"> edit </span>
                <router-link
                    class="edit-link"
                    :to="{
                        name: 'EditCategories',
                        params: { id: category.id },
                    }"
                    >Edit</router-link
                >
            </div>

            <span class="material-symbols-outlined"> delete </span>
            <input
                type="button"
                value="Delete"
                @click="destroy(category.id)"
                class="delete-btn"
            />
        </div>
        <div class="index-categories">
            <router-link :to="{ name: 'CreateCategories' }"
                >Create Categories<span>&#8594;</span></router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    props: ["editSuccess"],
    data() {
        return {
            categories: [],
            success: false,
        };
    },

    methods: {
        destroy(id) {
            axios
                .delete("/api/categories/" + id)
                .then(() => {
                    this.success = true;
                    setInterval(() => {
                        this.success = false;
                    }, 2500);
                    this.fetchCategories();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        fetchCategories() {
            axios
                .get("/api/categories")
                .then((response) => (this.categories = response.data))
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.fetchCategories();
    },
};
</script>

<style scoped>
.categories-list {
    min-height: 100vh;
}

.categories-list .item {
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    max-width: 600px;
    margin: 0 auto !important;
}

/* .categories-list .item p {
    font-size: 16px;
} */

.categories-list .item p,
.categories-list .item div,
.categories-list .item {
    margin: 15px 8px;
}

.index-categories {
    text-align: center;
}
</style>
