<template>
    <div class="categories-list bg-white">
        <h1 class="text-black text-center p-20 text-4xl font-bold">
            Messages List
        </h1>
        <div
            class="item"
            v-for="(contact, index) in contacts"
            :key="contact.id"
        >
            <span>{{ index + 1 }}</span>
            <p class="text-black">
                <strong>User name:</strong> {{ contact.name }}
            </p>
            <p class="text-black">
                <strong>Contact email:</strong> {{ contact.email }}
            </p>
            <p class="text-black">
                <strong>Message:</strong> {{ contact.message }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { ContactFields } from "../interfaces/ContactFields";
import { Errors } from "../interfaces/Errors";

export default defineComponent({
    data() {
        return {
            contacts: [] as ContactFields[],
            success: false,
            errors: {} as Errors,
        };
    },
    mounted() {
        this.fetchMessages();
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
    },
});
</script>

<style scoped>
.categories-list {
    min-height: 100vh;
}

.categories-list .item {
    display: flex;
    align-items: center;
    max-width: 600px;
    margin: 0 auto !important;
}

.categories-list .item p,
.categories-list .item div,
.categories-list .item {
    margin: 15px 8px;
}

.index-categories {
    text-align: center;
}
</style>
