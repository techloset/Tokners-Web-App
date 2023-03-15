import React from "react";
import SwiperSlider from "../../componenets/swiper-slider/SwiperSlider";
import ourTeamCardData from "../../constant/ourTeamCardData";
export default function OurTeam() {
  return (
    <>
      <div className="container">
        <h1 className="mb-4">Our Team</h1>
        <div className="row">
          <div className="col">
            <SwiperSlider cards={ourTeamCardData} slidesPerViewLg={3} slidesPerViewXl={4} />
          </div>
        </div>
      </div>
    </>
  );
}
