<template>
    <section class="single-blog-post">
        <h1 class="text-center mt-16 mb-8 text-2xl font-semibold capitalize">
            Benefits of paul's photography
        </h1>

        <p class="time-and-author text-center mb-4 grid grid-cols-2">
            <span class="justify-self-start mx-2">2 hours ago</span>
            <span class="justify-self-end mx-2">Written By meli</span>
        </p>

        <div class="single-blog-post-ContentImage" data-aos="fade-left">
            <img
                src="../../../public/images/image1.jpg"
                alt=""
                class="h-[50vh] object-cover w-full"
            />
        </div>

        <div class="about-text max-w-3xl mx-auto my-8 leading-6">
            <p>
                Vaccination is the most effective way to protect against
                infectious diseases. Vaccines strengthen your immune system by
                training it to recognise and fight against specific viruses.
                When you get vaccinated, you are protecting yourself and helping
                to protect the whole community.
                <br /><br />
                A COVID-19 vaccine might:
            </p>
            <ul class="list-disc list-inside">
                <li>
                    Prevent you from getting COVID-19 or from becoming seriously
                    ill or dying due to COVID-19
                </li>
                <li>Prevent you from spreading the COVID-19 virus to others</li>
                <li>
                    Add to the number of people in the community who are
                    protected from getting COVID-19 — making it harder for the
                    disease to spread and contributing to herd immunity
                </li>
                <li>
                    Prevent the COVID-19 virus from spreading and replicating,
                    which allows it to mutate and possibly become more resistant
                    to vaccines
                </li>
            </ul>
        </div>
    </section>
    <section class="recommended mt-8">
        <p class="text-center mb-4">Related</p>
        <div class="recommended-cards grid grid-cols-3 gap-4">
            <a href="#" class="recommended-card">
                <img
                    src="../../../public/images/image3.jpg"
                    alt=""
                    loading="lazy"
                    class="w-full"
                />
                <h4 class="text-xl font-semibold">
                    12 Health Benefits Of Pomegranate Fruit
                </h4>
            </a>
            <a href="#" class="recommended-card">
                <img src="" alt="" loading="lazy" class="w-full" />
                <h4 class="text-xl font-semibold">The Truth About Pushups</h4>
            </a>
            <a href="#" class="recommended-card">
                <img src="" alt="" loading="lazy" class="w-full" />
                <h4 class="text-xl font-semibold">Healthy Smoothies</h4>
            </a>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* Tailwind CSS doesn't have specific classes for some properties */
.single-blog-post p {
    font-size: 16px;
    font-weight: 300;
}

.single-blog-post .about-text {
    line-height: 1.5;
}

.recommended-card {
    width: 350px;
}

.recommended-card:hover {
    transform: translateY(-8px);
}

.recommended-card img {
    max-width: 100%;
}

.recommended-card h4 {
    font-size: 18px;
}

.recommended p {
    margin-top: 80px;
    margin-bottom: 15px;
}
</style>
