import { SwiperOptions } from "swiper/types";

export const sliderSettings: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
    },
};
