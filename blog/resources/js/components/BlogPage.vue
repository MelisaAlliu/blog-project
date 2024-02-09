<template>
    <div>
        <h2 class="header-title text-center text-3xl font-bold py-8">
            All Blog Posts
        </h2>
        <div class="searchbar flex justify-center mb-6">
            <form action="">
                <input
                    type="text"
                    placeholder="Search..."
                    name="search"
                    class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
                />
                <button
                    type="submit"
                    class="ml-2 px-4 py-2 text-white rounded-md"
                >
                    <i class="fas fa-search"></i>
                </button>
            </form>
        </div>
        <div class="categories flex justify-center mb-6">
            <ul class="flex">
                <li class="mr-4 bg-gray-800 rounded-lg">
                    <a href="" class="text-white px-6 py-2">Health</a>
                </li>
                <li class="mr-4 bg-gray-800 rounded-lg">
                    <a href="" class="text-white px-6 py-2">Entertainment</a>
                </li>
                <li class="mr-4 bg-gray-800 rounded-lg">
                    <a href="" class="text-white px-6 py-2">Sports</a>
                </li>
                <li class="bg-gray-800 rounded-lg">
                    <a href="" class="text-white px-6 py-2">Nature</a>
                </li>
            </ul>
        </div>
        <section class="cards-blog latest-blog grid grid-cols-3 gap-12">
            <div class="card-blog-content">
                <img src="../../../public/images/image1.jpg" alt="" />
                <p class="mt-4">
                    2 hours ago <span class="float-right">Written By meli</span>
                </p>
                <h4 class="font-bold text-xl">
                    <a href="single-blog.html"
                        >Benefits of getting COVID-19 vaccination</a
                    >
                </h4>
            </div>
            <!-- Other card-blog-content elements -->
        </section>
        <div class="pagination flex justify-center mt-8" id="pagination">
            <a href="" class="mr-2">&laquo;</a>
            <a href="" class="mr-2 active">1</a>
            <a href="" class="mr-2">2</a>
            <a href="" class="mr-2">3</a>
            <a href="" class="mr-2">4</a>
            <a href="" class="mr-2">5</a>
            <a href="">&raquo;</a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Additional properties */
.categories ul li {
    list-style: none;
    background-color: #494949;
    margin: 20px 5px;
    border-radius: 15px;
}

.categories ul {
    display: flex;
    justify-content: center;
}

.categories a {
    color: white;
    padding: 10px 20px;
    display: inline-block;
}

​.pagination {
    display: inline-block;
}

#pagination {
    margin: 3rem 3rem;
}

.pagination a {
    color: white;
    float: left;
    padding: 6px 16px;
    text-decoration: none;
}

.pagination a.active {
    background-color: #618da8;
    color: white;
}

.pagination a:hover {
    background-color: #ddd;
    color: black;
}

button {
    background-color: #618da8;
}
</style>
