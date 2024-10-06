"use client";

import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from "swiper/modules";

export default function Hero() {
    const [isMobile, setIsMobile] = useState(false);

    const IMAGES = [
        {
            mobile: "/hero-slider/Banner-Guasha-mobile.webp",
            desktop: "/hero-slider/Banner-Guasha-pc.webp",
        },
        {
            mobile: "/hero-slider/Banner-Celular-Sombras-Atenea.webp",
            desktop: "/hero-slider/Banner-PC-Sombras-Atenea.webp",
        },
        {
            mobile: "/hero-slider/Banner-wonder-Mobile.webp",
            desktop: "/hero-slider/Banner-wonder-pc.webp",
        },
        {
            mobile: "/hero-slider/Banner-productoctubre-mobile.webp",
            desktop: "/hero-slider/Banner-productoctubre-pc.webp",
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 540);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Swiper
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                1366: {
                    slidesPerView: 1.1,
                },
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            spaceBetween={22}
            pagination={
                {
                    clickable: true,
                }
            }
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper h-64 sm:h-[20rem] xl:h-[30rem] mb-section-bottom"
        >
            {
                IMAGES.map((img, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <Image
                            className="w-full h-full object-cover"
                            src={isMobile ? img.mobile : img.desktop}
                            alt={`Imagen del producto ${index}`}
                            fill
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
        ;
}
