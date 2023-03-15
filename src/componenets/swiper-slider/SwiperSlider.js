import Swiper from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./SwiperSlider.css";
import { useEffect } from "react";

export default function SwiperSlider(props) {
  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      slidesPerView: "1",
      spaceBetween: 10,

      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: props.slidesPerViewLg,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: props.slidesPerViewXl,
          spaceBetween: 10,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);
  return (
    <>
      <div className="swiper">
        <div className="swiper-wrapper">
          {props.cards?.map((item, index) => {
            return (
              <div className="swiper-slide" key={index}>
                {item.card}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
