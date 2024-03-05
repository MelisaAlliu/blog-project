<template>
    <div class="contact-list bg-white">
        <DashboardButton />
        <h1 class="text-black text-center p-20 text-4xl font-bold">
            Messages List
        </h1>
        <div class="cart-message">
            <div class="item" v-for="contact in contacts" :key="contact.id">
                <p><strong>User name:</strong> {{ contact.name }}</p>
                <p><strong>Contact email:</strong> {{ contact.email }}</p>
                <strong>Message:</strong>
                <p>{{ getMessage(contact) }}</p>
                <button
                    v-if="shouldDisplayButton(contact)"
                    @click="toggleMessage(contact)"
                >
                    <i class="fa-solid fa-book-open-reader"></i>
                    {{ contact.showFullMessage ? "Read less" : "Read more" }}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { ContactFields } from "../interfaces/ContactFields";
import { Errors } from "../interfaces/Errors";
import DashboardButton from "../main-components/helper-components/DashboardButton.vue";

export default defineComponent({
    components: { DashboardButton },
    data() {
        return {
            contacts: {} as ContactFields,
            success: false,
            errors: {} as Errors,
        };
    },
    mounted() {
        this.fetchMessages();
    },
    computed: {
        truncatedMessage() {
            return (message: string) => {
                return (
                    message.slice(0, 50) + (message.length > 50 ? "..." : "")
                );
            };
        },
    },
    methods: {
        async fetchMessages() {
            try {
                const response = await axios.get("/api/contact-info");
                this.contacts = response.data;
            } catch (error: any) {
                this.errors = error.response.data.errors;
            }
        },
        getMessage(contact: ContactFields): string {
            return contact.showFullMessage
                ? contact.message
                : this.truncatedMessage(contact.message);
        },
        shouldDisplayButton(contact: ContactFields): boolean {
            return contact.message.length > 50;
        },
        toggleMessage(contact: ContactFields) {
            contact.showFullMessage = !contact.showFullMessage;
        },
    },
});
</script>

<style scoped>
.contact-list {
    min-height: 100vh;
}
.cart-message {
    margin: 0 20px;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr;
}
.contact-list .item {
    color: black;
    padding: 20px;
    flex: 0 0 calc(33.33% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #000;
    max-width: 400px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #f3f3f3 30%, #aa9b72);
}

.contact-list .item p,
.contact-list .item div,
.contact-list .item {
    margin: 15px 8px;
}

.index-contact {
    text-align: center;
}

button {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #aa9b72;
}

@media (max-width: 1320px) {
    .cart-message {
        display: grid;
        grid-template-columns: 0.5fr 0.5fr;
    }
}

@media (max-width: 600px) {
    .cart-message {
        display: grid;
        grid-template-columns: 2fr;
        justify-content: center;
    }
}
</style>
