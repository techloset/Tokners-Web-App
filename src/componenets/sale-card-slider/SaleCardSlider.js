import phaseIcon1 from "../../assets/images/phaseIcon1.png";
import phaseIcon2 from "../../assets/images/phaseIcon2.png";
import phaseIcon3 from "../../assets/images/phaseIcon3.png";
import Swiper from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./SaleCardSlider.css";
import PreSaleCard from "../pre-sale-card/PreSaleCard";
import { useEffect } from "react";

export default function SaleCardSlider() {
  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      slidesPerView: "1",
      spaceBetween:10,
      
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
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
          <div className="swiper-slide">
            <PreSaleCard
              imgURL={phaseIcon1}
              heading="Phase One"
              date="0/04/2021 - 16-04-2021"
              signNumber="01"
            />
          </div>
          <div className="swiper-slide">
            <PreSaleCard
              imgURL={phaseIcon2}
              heading="Phase Two"
              date="0/04/2021 - 16-04-2021"
              signNumber="02"
            />
          </div>
          <div className="swiper-slide">
            <PreSaleCard
              imgURL={phaseIcon3}
              heading="Phase Three"
              date="0/04/2021 - 16-04-2021"
              signNumber="03"
            />
          </div>
        </div>
      </div>
    </>
  );
}
