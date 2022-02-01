import React from "react";
import { Link } from "react-router-dom";
// import bg from '../../src/images/bg_services.png';
import ArrowDownCircle from '../../src/images/arrow-down-circle.svg';
import Vertel_Icon_SdWan from "../../src/images/Vertel_Icon_SdWan.svg";
import Vertel_Icon_PushToTalk from "../../src/images/Vertel_Icon_PushToTalk.svg";
import Vertel_Icon_Mobility from "../../src/images/Vertel_Icon_Mobility.svg";
import Vertel_Icon_Cloud from "../../src/images/Vertel_Icon_Cloud.svg";
import HomeBanner from "./HomeBanner";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <main>
        <div className="container">
          <div className="home__about__section">
            <h1>About Vertel</h1>
            <p>
              Vertel is an Australian wholly-owned mission-, business-, and
              life-critical information communications and technology company.
              We take the best of what is available in the broader
              telecommunications, ICT and cloud services market and integrate
              this with our own network infrastructure to deliver the
              highest-performing services in the marketplace.
            </p>
            <Link to="/about" className="btn-global">
              More About
            </Link>
            <div>
              <img fill="red" src={ArrowDownCircle} alt="Arrow for go to bottom section" loading="lazy"></img>
            </div>
          </div>
        </div>
        <section className="bg_services net_full_width" id="section1">
          <div className="container">
            <div className="row ser_top">
              <div className="l4 m4 s12 text_center">
                <Link to="/services/networks/sd-wan">
                  <div className="service_panel net_full_width">
                    <div className="home-service-icon">
                      <img src={Vertel_Icon_SdWan} alt="icon" />
                    </div>
                    <span>SD-WAN</span>
                    <p className="proxima">
                      Dramatically improve the responsiveness, dynamism, and
                      performance of the WAN with a network overlay.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="l4 m4 s12 text_center">
                <Link to="/services/network">
                  <div className="service_panel net_full_width">
                    <div className="home-service-icon">
                      <img src={Vertel_Icon_PushToTalk} alt="icon" />
                    </div>
                    <span>Networks</span>
                    <p className="proxima">
                      We deliver carrier ethernet and internet services across
                      the country to governments, enterprises, and service
                      providers.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="l4 m4 s12 text_center">
                <Link to="/services/mobile">
                  <div className="service_panel net_full_width">
                    <div className="home-service-icon">
                      <img src={Vertel_Icon_Mobility} alt="icon" />
                    </div>
                    <span>Mobility</span>
                    <p className="proxima">
                      Keep your remote and isolated workers safe and in touch
                      with near-instant communications with modern, integrated
                      mobile communication services.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="l4 m4 s12 text_center">
                <Link to="/services/networks/cloud">
                  <div className="service_panel net_full_width">
                    <div className="home-service-icon">
                      <img src={Vertel_Icon_Cloud} alt="icon" />
                    </div>
                    <span>Cloud</span>
                    <p className="proxima">
                      Access best-in-className cloud services providers with an
                      integrated network service that delivers cloud
                      availability, performance, management and security.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="l4 m4 s12 text_center">
                <Link to="/services/site-facilities">
                  <div className="service_panel net_full_width">
                    <div className="home-service-icon">
                      <img src={Vertel_Icon_Cloud} alt="icon" />
                    </div>
                    <span>Site facilities</span>
                    <p className="proxima">
                      Access wireless communication sites across Australia that
                      serve mobile carriers, fixed wireless and services
                      providers, large enterprises and government departments.
                    </p>
                  </div>
                </Link>
              </div>
              <div className="l4 m4 s12 text_center">
                <Link to="/services/professional-services">
                  <div className="service_panel net_full_width">
                    <div className="home-service-icon">
                      <img src={Vertel_Icon_Cloud} alt="icon" />
                    </div>
                    <span>Professional services</span>
                    <p className="proxima">
                      Professional services from consulting and design of major
                      infrastructure projects to ongoing maintenance and support
                      of networks, services and site facilities.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <Link
              to="#Section2"
              className="text_center net_full_width arrow_whiteTop hidden-s hidden-sm"
            >
              {/* <img src="/images/arrow-down-circle-1.svg" alt="Arrow for go to bottom section" loading="lazy"> */}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
