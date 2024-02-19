<template>
    <section id="contact-us">
        <h1>Get in Touch!</h1>

        <!-- contact info -->
        <div class="container">
            <div class="contact-info">
                <div class="specific-info">
                    <i class="fas fa-home"></i>
                    <div>
                        <p class="title">4th floor, Hi Center</p>
                        <p class="subtitle">Something here</p>
                    </div>
                </div>
                <div class="specific-info">
                    <i class="fas fa-phone-alt"></i>
                    <div>
                        <a href="">+254 720 XXX XXX </a>
                        <br />
                        <a href="">+254 721 XXX XXX</a>

                        <p class="subtitle">Mon to Fri 9am-6pm</p>
                    </div>
                </div>
                <div class="specific-info">
                    <i class="fas fa-envelope-open-text"></i>
                    <div>
                        <a href="mailto:info@alphayo.co.ke">
                            <p class="title">info@MindfulHeartbeat.com</p>
                        </a>
                        <p class="subtitle">Send us your message anytime!</p>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="contact-form">
                <form action="" method="">
                    <label for="name"><span>Name</span></label>
                    <input type="text" id="name" name="name" value="" />

                    <label for="email"><span>Email</span></label>
                    <input type="text" id="email" name="email" value="" />

                    <label for="subject"><span>Subject</span></label>
                    <input type="text" id="Subject" name="subject" value="" />

                    <label for="message"><span>Message</span></label>
                    <textarea id="message" name="message"></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </section>
</template>

<script></script>

<style scoped>
#contact-us h1 {
    text-align: center;
    margin: 80px 0 40px 0;
    font-size: 30px;
    font-weight: 400;
}

#contact-us .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#contact-us .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 300;
}

#contact-us .specific-info {
    display: flex;
    margin-bottom: 50px;
}

#contact-us .specific-info a {
    display: inline-block;
}

#contact-us .specific-info a:nth-of-type(1) {
    margin-bottom: 10px;
}

#contact-us .specific-info .title {
    margin-bottom: 5px;
}

#contact-us .specific-info .subtitle {
    margin-top: 10px;
}

#contact-us .specific-info i {
    margin-right: 20px;
    color: rgba(255, 255, 0, 0.9);
}

#contact-us .subtitle {
    color: #9b9b9b;
}

/* Contact Form */

#contact-us input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 20px;
    font-size: 16px;
}

.contact-form span {
    font-weight: 300;
    font-size: 16;
}

textarea {
    height: 200px;
}

#contact-us input[type="submit"] {
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
}

#contact-us input[type="submit"]:hover {
    transform: translateY(-4px);
}
</style>
