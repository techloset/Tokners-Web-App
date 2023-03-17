import React from "react";
import spinerImg from "../../assets/images/toknersPage/spiner.png";
import successIcon from "../../assets/images/toknersPage/successIcon.png";
import infoIcon from "../../assets/images/toknersPage/infoIcon.png";
import warningIcon from "../../assets/images/toknersPage/warningIcon.png";
import dangerIcon from "../../assets/images/toknersPage/dangerIcon.png";
import ToeknCard from "../../componenets/token-card/ToeknCard";
import TokensDistribution from "../../componenets/tokens-distribution/TokensDistribution";
import "./Tokens.css";
import PerposalCard from "../../componenets/perposal-card/PerposalCard";

export default function Tokens() {
  return (
    <>
      {/* Token Distribution Section */}
      <div className="container" id="toknDistributionSection">
        <div className="row">
          <div className="col-12 col-md-6 mt-4">
            <h3>
              Tknrs Tokenomics and <br /> Token Distribution
            </h3>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-12 col-lg-6 m-auto d-flex justify-content-start justify-content-lg-center ">
            <div className="row">
              <div className="col-12 d-flex align-items-end flex-column">
                <div>
                  <p>Tknrs Token Distribution Schedule Total Supply:</p>
                  <h1 id="responsiveSive">10,000,000,000</h1>
                </div>
                <div>
                  <p>Tknrs Tokens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3 d-flex justify-content-end justify-content-lg-center align-items-center">
            <TokensDistribution
              header="Premined Tokens"
              tokens="3,000,000,000"
              footer="Tknrs Tokens"
              color="#2278D4"
            />
          </div>
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <img src={spinerImg} className="w-100 P-2" alt="" />
          </div>
          <div className="col-12 col-lg-3 d-flex justify-content-start justify-content-lg-center align-items-center">
            <TokensDistribution
              header="Daily Token Distribution"
              tokens="7,000,000,000"
              footer="Tknrs Tokens"
              color="#E20613"
            />
          </div>
        </div>
      </div>
      {/* Token Card Section */}
      <div className="container" id="toeknCardSection">
        <div className="row mt-5 pt-5 d-flex justify-content-center">
          <ToeknCard
            iconURL={successIcon}
            color="text-success"
            year="1"
            dayArrange="Day 1 - Day 90"
            perDayTkn="10M Tokens/Day"
            totalTkn="(900M Tokens)"
          />
          <ToeknCard
            iconURL={warningIcon}
            color="text-warning"
            year="1"
            dayArrange="Day 90 - Day 365"
            perDayTkn="5M Tokens/Day"
            totalTkn="(1375M Tokens)"
          />
          <ToeknCard
            iconURL={infoIcon}
            color="text-info"
            year="2"
            dayArrange=""
            perDayTkn="4M Tokens/Day"
            totalTkn="(1460M Tokens)"
          />
          <ToeknCard
            iconURL={dangerIcon}
            color="text-danger"
            year="3"
            dayArrange=""
            perDayTkn="3M Tokens/Day"
            totalTkn="(1095M Tokens)"
          />
          <ToeknCard
            iconURL={successIcon}
            color="text-success"
            year="4"
            dayArrange=""
            perDayTkn="2M Tokens/Day"
            totalTkn="(730M Tokens)"
          />
          <ToeknCard
            iconURL={warningIcon}
            color="text-warning"
            year="5"
            dayArrange=""
            perDayTkn="1M Tokens/Day"
            totalTkn="(365M Tokens)"
          />
          <ToeknCard
            iconURL={infoIcon}
            color="text-info"
            year="6"
            dayArrange=""
            perDayTkn="10 Tokens/Day"
            totalTkn="(365M Tokens)"
          />
          <ToeknCard
            iconURL={dangerIcon}
            color="text-danger"
            year="7"
            dayArrange=""
            perDayTkn="1M Tokens/Day"
            totalTkn="(365M Tokens)"
          />
          <ToeknCard
            iconURL={successIcon}
            color="text-success"
            year="8"
            dayArrange=""
            perDayTkn="1M Tokens/Day"
            totalTkn="(365M Tokens)"
          />
        </div>
      </div>
      {/* perposal section */}
      <div id="perposalSection">
        <div className="container">
          <div className="row d-flex flex-column align-items-center align-items-lg-end">
            <div className="col">
              <div className="row d-flex justify-content-lg-end">
                <div className="col mt-xl-5 pt-xl-5 col-xl-8">
                  <PerposalCard
                    title="Proposal regarding Total Supply, ICO and Pricing Total Supply (after
            periodical increase of supply):"
                    tkn="10,000,000,000"
                    color="text-success"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row d-flex justify-content-lg-start">
                <div className="col col-xl-8 mb-lg-5">
                  <PerposalCard
                    title="Supply at Genesis:"
                    tkn="3,000,000,000"
                    note="from the Genesis supply, 2,500,000,000 will be reserved for the ICO while 500,000,000 will be allocated for team members, founders and to onboard celebrities and influencers."
                    color="text-warning"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
