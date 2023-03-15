import bgProfilePic from "../assets/images/our-team/bgProfilePic.png";
import BradPieImage from "../assets/images/our-team/brad-pie.png";
import leeLeeImage from "../assets/images/our-team/lee-lee.png";
import shanKhan from "../assets/images/our-team/shan-khan.png";
import shanLopez from "../assets/images/our-team/shan-lopez.png";
import OurTeamCard from "../componenets/our-team-card/OurTeamCard";

const ourTeamCardData = [
  {
    card: (
      <OurTeamCard
        name="Brad pie"
        designation="CEO and Co founder"
        imgURL={BradPieImage}
      />
    ),
  },
  {
    card: (
      <OurTeamCard
        bgURL={bgProfilePic}
        name="Lee Lee"
        designation="CTO and Co founder"
        imgURL={leeLeeImage}
      />
    ),
  },
  {
    card: (
      <OurTeamCard
        name="Shan khan"
        designation="Head of Development"
        imgURL={shanKhan}
      />
    ),
  },
  {
    card: (
      <OurTeamCard
        name="Shan Lopez"
        designation="Head of marketing"
        imgURL={shanLopez}
      />
    ),
  },
  {
    card: (
      <OurTeamCard
        name="Lily"
        designation="Community manager"
        imgURL={shanKhan}
      />
    ),
  },
];

export default ourTeamCardData;
