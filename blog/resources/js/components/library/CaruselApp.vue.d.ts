
import { ComponentOptions } from 'vue';
import { SwiperOptions } from 'swiper';

declare module './CaruselApp.vue' {
  interface Data {
    modules: any[]; // Adjust the type according to the actual types used
  }

  export default {
    components: {
      // Define component imports if needed
    },
    setup(): { modules: any[] }, // Adjust the return type of setup function
  } as ComponentOptions;
}