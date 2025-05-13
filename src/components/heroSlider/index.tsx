import { slides } from "@flavor/traduzPlus/swiper/constants";
import "@styles/swiper/index.css";
import "@styles/swiper/pagination/index.css";
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movie } from "./movie";
import { SlideCaption } from "./slideCaption";

const HeroSlider: React.FC = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            simulateTouch={false}
            className="hero-swiper"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="swiper-slide-bg"
                        style={{ backgroundImage: `url(${slide.background})` }}
                    >
                        {slide.video && (
                            <Movie autPlay loop muted video={slide.video} />
                        )}
                        <SlideCaption {...slide} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default HeroSlider;
