import phaseIcon1 from "../assets/images/phaseIcon1.png";
import phaseIcon2 from "../assets/images/phaseIcon2.png";
import phaseIcon3 from "../assets/images/phaseIcon3.png";
import PreSaleCard from "../componenets/pre-sale-card/PreSaleCard";

const saleCardData = [
  {
    card: (
      <PreSaleCard
        imgURL={phaseIcon1}
        heading="Phase One"
        date="0/04/2021 - 16-04-2021"
        signNumber="01"
      />
    ),
  },
  {
    card: (
      <PreSaleCard
        imgURL={phaseIcon2}
        heading="Phase Two"
        date="0/04/2021 - 16-04-2021"
        signNumber="02"
      />
    ),
  },
  {
    card: (
      <PreSaleCard
        imgURL={phaseIcon3}
        heading="Phase Three"
        date="0/04/2021 - 16-04-2021"
        signNumber="03"
      />
    ),
  },
];

export default saleCardData;
