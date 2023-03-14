import React, { useState } from "react";
import Button, { FillButton } from "../../componenets/button/Button";
import QestionCard from "../../componenets/qestionCard/QestionCard";
import topImage from "../../assets/images/topImage.png";
import "./home.css";
import Card from "../../componenets/Card/Card";
import creatorIcon from "../../assets/images/creatorIcon.png";
import diffrentImage from "../../assets/images/diffrentImage.png";
import holderIcon from "../../assets/images/holderIcon.png";
import q1Icon from "../../assets/images/Q1.png";
import q2Icon from "../../assets/images/Q2.png";
import q3Icon from "../../assets/images/Q3.png";
import q4Icon from "../../assets/images/Q4.png";
import yellowErrow from "../../assets/images/yellow-errow.png";
import greenErrow from "../../assets/images/green-errow.png";
import favIcon from "../../assets/images/favIcon.png";
import mockupImage from "../../assets/images/mockupImage.png";
import { Link } from "react-router-dom";
import SaleCardSlider from "../../componenets/sale-card-slider/SaleCardSlider";
import BuyProcedureCard from "../../componenets/buy-procedure-card/BuyProcedureCard";
import Footer from "../../componenets/footer/Footer";
export default function Home() {
  const [readMore, setReadMore] = useState(true);
  return (
    <>
      {/* TOP SECTION  */}
      <div className="container" id="topSection">
        <div className="row">
          <div className="col-12 col-lg-5 mt-lg-5 pt-5">
            <p id="toknerTxt">At Tokners we are</p>
            <h1>
              Reimagining social media through the power of the blockchain.
            </h1>
            <p id="description">
              We are creating social media 3.0 with influencers, celebrities and
              creators being able to launch their own digital currency by simply
              creating a profile with media content posted as Non fungible
              Tokens that can be owned and traded on the Tknrs network
            </p>
            <div>
              <FillButton name="Learn More" />
            </div>
          </div>
          <div className="col-12 col-lg-7"></div>
        </div>
      </div>
      <div className="row m-auto d-lg-none">
        <div className="col px-0">
          <img src={topImage} className="w-100" alt="" />
        </div>
      </div>
      {/* CARD SECTION */}
      <div className="container-lg my-4 mb-lg-5 pb-lg-5" id="cardSection">
        <div className="row mb-lg-5 ">
          <div className="col-12 col-lg-6">
            <Card
              color="#22A75D"
              descHeight="mb-lg-5 pb-lg-3 card-text"
              imgURL={creatorIcon}
              title="Creator"
              desc="Creators can gain independence through a decentralised digital currency system that is
              dependent on growing and engaging with the community and also their star power. They own
              10-15% of the total value of the tokens minted."
            />
          </div>
          <div className="col-12 col-lg-6" id="secondCard">
            <Card
              color="#2278D4"
              imgURL={holderIcon}
              title="Holder"
              desc="Holding social tokens allows the individual to gain access to benefits including unreleased
              content, private communities, direct access to celebrity, early- access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers. "
            />
          </div>
        </div>
      </div>
      {/* Vision Section */}
      <div id="visonSection">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={diffrentImage} alt="" className="w-100" />
          </div>
          <div
            className="col-12 col-lg-6 overflow-hidden text-dark d-flex flex-column justify-content-center 
              align-items-center p-5"
            id="visionText"
          >
            <div className="row pt-3">
              <div className="col-12 px-lg-5 mx-lg-5">
                <h1 className="mb-3">What makes us different?</h1>
                <p className="mb-3 note">
                  We would only launch tokens with the express permission of the
                  creators.
                </p>
                <p className="mb-3 sizes">
                  There are several thousand celebrities and creators on
                  twitter, tiktok, Instagram and YouTube with followings in the
                  millions who we would be actively engaging before we go viral.
                </p>
                <p className="mb-3 sizes">
                  We would get them on our platform and they would see the
                  opportunity to create a fan driven digital economy where their
                  digital content can be traded as NFTs and their most loyal
                  fans can have the monetary value of their creator's currency
                  increase significantly as they promote their digital currency
                  across their channels while our native token holders benefit
                  from the Weentar popularity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* qestion Section */}
      <div id="qestionSection" className="bg-light text-dark">
        <div
          className="row overflow-hidden "
          id="bgRadius"
          style={{
            backgroundColor: "#0F1320",
          }}
        >
          <div className="col-12">
            <div className="container">
              <div className="row" id="cards">
                <QestionCard
                  imgURL={q1Icon}
                  textColor="#22A75D"
                  numberOfItem={2}
                  item0="Team set-up"
                  item1="Launch of informational website"
                />
                <QestionCard
                  imgURL={q2Icon}
                  textColor="#2278D4"
                  numberOfItem={5}
                  item0="Presale and exchange listings"
                  item1="Blockchain development and launch"
                  item2="Launch of our MVP"
                  item3="Influencer agency partnerships"
                  item4="Marketing and promotion"
                />
                <QestionCard
                  imgURL={q3Icon}
                  textColor="#FFD100"
                  numberOfItem={3}
                  item0="Celebrity, Creator and Influencer partnerships"
                  item1="Expansion of creator communities on our platform"
                  item2="More Marketing and promotion"
                />
                <QestionCard
                  imgURL={q4Icon}
                  textColor="#E20613"
                  numberOfItem={4}
                  item0="Mainstream partnerships"
                  item1="500 active creator communities"
                  item2="2Million active community members"
                  item3="More Marketing and promotion"
                />
              </div>
              <div className="row" style={{ margin: "100px 0px 0px  0px" }}>
                <div className="col-12 col-lg-6 p-2 order-lg-2">
                  <img src={mockupImage} alt="mockup-Img" className="w-100" />
                </div>
                <div className="col-12 col-lg-6 text-light">
                  <div className="d-flex align-items-center">
                    <img src={favIcon} alt="Icon" />
                    <p id="NewsTitle">Tokner is coming</p>
                  </div>
                  <div style={{ fontSize: "12px", textAlign: "justify" }}>
                    <p>
                      Cryptocurrency adoption is at less than 1% of the global
                      world population with some countries and entities actively
                      fighting against its mass adoption and the smartest
                      developers and nerds holding the fort.
                    </p>
                    <p className="opacity">
                      Bitcoin was the first, and it has since grown to thousands
                      of tokens launched all aiming to fix one problem or the
                      other with some quite simply FOMOing the moment. Our goal
                      is to bring mass adoption to the cryptocurrency space by
                      dumbing it down. How far down? So down that even a
                      celebrity can explain it in simple words to their
                      followers and have them download an app, buy into the
                      social currency of their favourite person and watch their
                      investment as is with other crypto currency project.
                    </p>
                    <span className={readMore ? "d-none d-xl-block" : "d-block"}>
                      <p className="opacity">
                        We are trying to do to this space what investment apps
                        did for the "nonexistent retail investors". We are
                        gamefying digital currency, bringing in popular faces
                        instead of hard to understand projects to make it the
                        norm and inadvertently being the "gateway drug" for a
                        lot of people to finally give this space a real look.
                      </p>
                      <p>
                        A new digital economy is coming. People would be just as
                        powerful as countries and creators would be paid beyond
                        the peanuts that conventional social media platforms can
                        offer.
                      </p>
                      <p className="opacity">
                        There would be new markets and advertisers with little
                        to offer would not find home there. Like Kanye said,
                      </p>
                      <div className="d-flex align-items-start ">
                        <p className="text-warning">“</p>
                        <p className="mx-3 fst-italic">
                          "Personalities would become the new currency, and
                          services would be built on top of them".
                        </p>
                      </div>
                      <p className="opacity">
                        Well, Kanye didn't exactly say that, but it sounds like
                        something we hope he would say.
                      </p>
                      <p className="opacity">
                        Currency is digital, it has been that way for a while
                        now, but this time there would be no dead presidents on
                        the money, there would people like you on the money, and
                        you would own it because it would make the most sense in
                        the world.
                      </p>
                    </span>
                  </div>
                  <div className="d-none d-xl-block">
                    <Button name="Read More" />
                  </div>
                  <div
                    className="d-block d-xl-none"
                    onClick={() => setReadMore(readMore === false ? true : false)}
                  >
                    <Link className="text-success link-dashed-underline">
                      {readMore ? "Read More" : "hide"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* presale Section */}
      <div id="presaleSection">
        <div className="container" id="preSaleCard">
          <div className="row">
            <div className="col-12">
              <h1 className="fontStyle mb-4">Presale Details</h1>
              <SaleCardSlider />
            </div>
          </div>
        </div>
      </div>
      <div id="bgShadow">
        {/* buy Procedur Section */}
        <div id="buyProcedurSection">
          <div className="container">
            <h1 className="my-5 text-center">How to Buy</h1>
            <div className="row text-center">
              <div className="col-12 d-flex align-items-center col-lg-4 position-relative">
                <BuyProcedureCard
                  number="01"
                  desc='First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.'
                />
                <span id="position1" className="circle">
                  <img src={yellowErrow} alt="" />
                </span>
              </div>
              <div
                className="col-12 d-flex align-items-center col-lg-4 position-relative"
                id="top-position"
              >
                <BuyProcedureCard
                  number="02"
                  desc="Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet"
                />
                <span id="position2" className="circle">
                  <img src={greenErrow} alt="" />
                </span>
              </div>
              <div className="col-12 col-lg-4">
                <BuyProcedureCard
                  number="03"
                  desc="Then after you will received your $WNTR to your address within 24hours. "
                />
              </div>
            </div>
          </div>
        </div>
        {/* footer Section */}
        <Footer />
      </div>
    </>
  );
}
