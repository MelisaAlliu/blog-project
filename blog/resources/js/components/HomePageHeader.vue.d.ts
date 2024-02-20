import { ComponentOptions } from 'vue';

declare module './HomePageHeader.vue' {
  interface Slide {
    id: number;
    imageSrc: string;
    author: string;
    title: string;
    topic: string;
    description: string;
  }

  interface Thumbnail {
    id: number;
    imageSrc: string;
    title: string;
    description?: string;
  }

  interface Data {
    slides: Slide[];
    thumbnails: Thumbnail[];
    timeRunning: number;
    timeAutoNext: number;
    currentIndex: number;
    runTimeOut: ReturnType<typeof setTimeout> | null;
    runNextAuto: ReturnType<typeof setTimeout> | null;
  }

  export default {
    data(): Data,
    methods: {
      nextSlide(): void;
      prevSlide(): void;
      showSlider(type: 'next' | 'prev'): void;
    }
  } as ComponentOptions;
}
