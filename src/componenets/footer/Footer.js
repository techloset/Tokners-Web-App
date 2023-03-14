import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import fb from "../../assets/images/social-icon/fb.png";
import github from "../../assets/images/social-icon/github.png";
import instagram from "../../assets/images/social-icon/instagram.png";
import medium from "../../assets/images/social-icon/medium.png";
import reddit from "../../assets/images/social-icon/reddit.png";
import twitter from "../../assets/images/social-icon/twitter.png";
import designerLogo from "../../assets/images/designer-logo.png";

export default function Footer() {
  return (
    <>
      <div id="footerSection">
        <div className="container py-5">
          <div className="row">
            <div className="col d-none my-5 d-lg-block">
              <Link to="#">OUR TEAM</Link>
              <Link to="#">TOKENS</Link>
              <Link to="#">CONNECT WALLET</Link>
              <Link to="#">LIGHT PAPER </Link>
            </div>
          </div>
          {/* footer secton */}
          <div className="row">
            <div className="col-12 col-lg-3 my-4 text-center text-lg-start">
              <img className="mt-2" src={logo} alt="" />
            </div>
            <div className="col-12 my-4 col-lg-6" id="socialIcon">
              <img src={twitter} alt="" />
              <img src={fb} alt="" />
              <img src={instagram} alt="" />
              <img src={medium} alt="" />
              <img src={github} alt="" />
              <img src={reddit} alt="" />
            </div>
            <div className="col-12 my-4 col-lg-3 text-center text-lg-end">
              <span>© 2021 Tokners. All rights reserved.</span>
              <div className="opacity-50">
                <img src={designerLogo} alt="" />
                <span className="text-decoration-underline mx-2">
                  Design by Oleg Kulik
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
