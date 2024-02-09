<template>
    <div id="create-categories">
        <div id="contact-us">
            <h1>Edit Category!</h1>
            <!-- success message -->
            <div class="success-msg">
                <i class="fa fa-check"></i>
                Updated successfully
            </div>
            <div class="contact-form">
                <form>
                    <label for="name"><span>Name</span></label>
                    <input type="text" id="name" />

                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div class="create-categories">
                <router-link :to="{ name: 'CategoriesList' }"
                    >Categories List <span>&#8594;</span></router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#create-categories {
    background-color: #f3f4f6;
    height: 90vh;
    padding: 50px;
}
</style>
