// DashboardButton.vue.d.ts

import { ComponentOptions } from "vue";

declare module "./DashboardButton.vue" {
    interface Methods {
        closeOverlay: () => void;
    }

    export default {
        methods: {
            closeOverlay: () => {},
        },
    } as ComponentOptions;
}
