<template>
    <!-- header -->
    <header class="header">
        <div class="header-text">
            <h1>MA Blog</h1>
            <h4>Home of verified news and inspiration...</h4>
        </div>
        <div class="overlay"></div>
    </header>

    <h2 class="header-title">Latest Blog Posts</h2>
    <section class="cards-blog latest-blog">
        <div class="card-blog-content">
            <img src="../../../public/images/image1.jpg " alt="" />
            <p>
                2 hours ago
                <span style="float: right">Written By meli</span>
            </p>
            <h4 style="font-weight: bolder">
                <router-link
                    :to="{
                        name: 'SinglePage',
                        params: {
                            slug: 'Setting-SMART-Goals-A-Blueprint-for-Success',
                        },
                    }"
                >
                    Setting SMART Goals: A Blueprint for Success
                </router-link>
            </h4>
        </div>

        <div class="card-blog-content">
            <img src="../../../public/images/image2.jpg" alt="" />
            <p>
                23 hours ago
                <span style="float: right">Written By meli</span>
            </p>
            <h4 style="font-weight: bolder">
                <a href="single-blog.html">Top 10 Music Stories Never Told</a>
            </h4>
        </div>

        <div class="card-blog-content">
            <img src="../../../public/images/image3.jpg" alt="" />
            <p>
                2 days ago
                <span style="float: right">Written By meli</span>
            </p>
            <h4 style="font-weight: bolder">
                <a href="single-blog.html"
                    >WRC Safari Rally Back To Kenya After 19 Years</a
                >
            </h4>
        </div>

        <div class="card-blog-content">
            <img src="../../../public/images/image4.jpg " alt="" />
            <p>
                3 days ago
                <span style="float: right">Written By meli</span>
            </p>
            <h4 style="font-weight: bolder">
                <a href="single-blog.html">Premier League 2021/2022 Fixtures</a>
            </h4>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped></style>
