<template>
    <section class="contact-us">
        <h1><i class="fa-solid fa-address-book"></i>Get in Touch!</h1>
        <p class="text-center my-5 text-white">
            We're thrilled to connect with you! Whether you have questions,
            feedback, or simply want to say hello, we're all ears.
        </p>
        <div class="success-msg text-green-600" v-if="success">
            <i class="fa fa-check"></i>
            Message sent successfully!
        </div>

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
                        <a href="#">+254 720 XXX XXX </a>
                        <br />
                        <a href="#">+254 721 XXX XXX</a>

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

            <div class="contact-form">
                <form @submit.prevent="submitForm">
                    <label for="name"><span>Name</span></label>
                    <input type="text" id="name" v-model="fields.name" />
                    <span v-if="errors.name" class="error">{{
                        errors.name[0]
                    }}</span>
                    <br />
                    <label for="email"><span>Email</span></label>
                    <input type="text" id="email" v-model="fields.email" />
                    <span v-if="errors.email" class="error">{{
                        errors.email[0]
                    }}</span>
                    <br />
                    <label for="message"><span>Message</span></label>
                    <textarea id="message" v-model="fields.message"></textarea>
                    <span v-if="errors.email" class="error">{{
                        errors.message[0]
                    }}</span>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { Errors } from "../interfaces/Errors";
import { ContactFields } from "../interfaces/ContactFields";

export default defineComponent({
    data() {
        return {
            fields: {} as ContactFields,
            errors: {} as Errors,
            success: false,
        };
    },
    methods: {
        submitForm() {
            axios
                .post("/api/contact", this.fields)
                .then(() => {
                    console.log("Message sent");
                    this.fields = {
                        id: 0,
                        name: "",
                        email: "",
                        message: "",
                    };
                    this.success = true;
                    setTimeout(() => {
                        this.success = false;
                    }, 2500);
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log(error);
                });
        },
    },
});
</script>

<style scoped>
.contact-us {
    background-image: url("../../../../public/images/about-background-image.jpg");
    background-size: cover;
    padding-bottom: 100px;
    padding-right: 50px;
}
.contact-us h1 {
    text-align: center;
    padding: 80px 0 20px 0;
    font-size: 30px;
    font-weight: 400;
    color: white;
}

.contact-us .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.contact-us .contact-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 300;
    padding-right: 30px;
}

.contact-us .specific-info {
    display: flex;
    padding-bottom: 50px;
    padding-left: 100px;
}

.contact-us .specific-info a {
    display: inline-block;
}

.contact-us .specific-info a:nth-of-type(1) {
    margin-bottom: 10px;
}

.contact-us .specific-info .title {
    margin-bottom: 5px;
}

.contact-us .specific-info .subtitle {
    margin-top: 10px;
}

.contact-us .specific-info i {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    color: white;
    background-color: #aa9b72;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.contact-us .subtitle {
    color: #9b9b9b;
}

/* Contact Form */

.contact-us input,
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

.contact-form {
    background-color: #45444c;
    padding: 20px;
    color: white;
    border-radius: 10px;
}
.contact-form span {
    font-weight: 300;
    font-size: 16;
}

textarea {
    height: 200px;
}

.contact-us input[type="submit"] {
    background-color: #aa9b72;
    width: 100px;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
}

.contact-us input[type="submit"]:hover {
    transform: translateY(-4px);
}
</style>
