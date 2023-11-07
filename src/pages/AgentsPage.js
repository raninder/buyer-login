import React from "react";
import "../css/agentstyle.css";
import Navbar from './Navbar';
import Footer from './Footer';

export const AgentsPage = () => {
  return (
    
    <div className="agents">
      <Navbar />
      <div className="content">
        <div className="div">
       
        <div className="overlap">
          {/* <div className="group">
            <footer className="footer">
              <div className="overlap-group">
                <img className="rectangle" alt="Rectangle" src="rectangle-3264.png" />
                <img className="city" alt="City" src="city7-5.png" />
                <img className="city" alt="City" src="city7-7.png" />
                <img className="city" alt="City" src="city7-9.png" />
                <img className="city" alt="City" src="city7-11.png" />
                <div className="frame">
                  <img className="our-markets" alt="Our markets" src="our-markets.png" />
                  <img className="resources" alt="Resources" src="resources.png" />
                  <img className="connect" alt="Connect" src="connect.png" />
                </div>
                <img className="logo-white" alt="Logo white" src="logo-white-3.png" />
                <img className="img" alt="City" src="city7-6.png" />
                <img className="img" alt="City" src="city7-8.png" />
                <img className="img" alt="City" src="city7-10.png" />
                <img className="img" alt="City" src="city7-12.png" />
                <div className="toronto-ottawa">
                  Toronto
                  <br />
                  Ottawa
                  <br />
                  Vancouver
                  <br />
                  Victoria
                  <br />
                  Kelowna
                  <br />
                  Peterborough
                  <br />
                  Etobicoke
                  <br />
                  Winnipeg
                </div>
                <img className="frame-2" alt="Frame" src="frame-143.svg" />
                <p className="media-inquiries">
                  Media inquiries
                  <br />
                  Search homes
                  <br />
                  Blog
                  <br />
                  Careers
                  <br />
                  About us
                  <br />
                  FAQ <br />
                  Agents
                </p>
                <div className="text-wrapper">Facebook</div>
                <div className="text-wrapper-2">Instagram</div>
                <div className="text-wrapper-3">Tiktok</div>
                <div className="text-wrapper-4">Twitter</div>
              </div>
            </footer>
          </div> */}
          <div className="frame-3">
            <div className="div-split-bg" />
            <div className="heading-motivated">Let’s do this.</div>
            <div className="text-wrapper-5">Earn Commissions</div>
            <p className="p">
              When your client finds their new home, you represent Buyer Folio as the buyer’s agent and earn your full
              commission.
            </p>
            <p className="get-started-for-free">
              Get started for free or schedule a demo if you&#39;d like to connect on the phone to talk about ways we
              can help renters together.
            </p>
            <div className="overlap-group-wrapper">
              <button className="div-wrapper">
                <div className="text-wrapper-6">Let’s Talk</div>
              </button>
            </div>
          </div>
        </div>
        <div className="header-image">
          <div className="group-2">
            <button className="overlap-group-2">
              <div className="text-wrapper-7">Let’s Talk</div>
            </button>
          </div>
        </div>
        <div className="frame-4">
          <div className="div-w-layout-grid">
            <div className="div-card">
              <div className="heading">100 million</div>
              <p className="text-wrapper-8">Renters in the United States</p>
            </div>
            <div className="div-card-2">
              <div className="heading-2">2.5 million</div>
              <div className="text-wrapper-9">First-time homebuyers every year</div>
            </div>
          </div>
          <p className="heading-motivated-2">
            We partner with mortgage lenders and real estate agents to provide unique offers to renters
          </p>
        </div>
        <div className="frame-5">
          <p className="heading-motivated-3">Why partner with Buyer Folio?</p>
          <div className="group-wrapper">
            <div className="group-3">
              <div className="div-card-3">
               <div className="img-2-1" ></div>
                <div className="heading-3">Relationships</div>
                <div className="div-2">
                  <p className="build-meaningful">
                    Build meaningful relationships with potential
                    <br />
                    homebuyers who are currently renting.
                  </p>
                </div>
              </div>
              <div className="div-card-4">
                <div className="img-2-2" ></div>
                <div className="heading-brand">Brand awareness</div>
                <div className="div-2">
                  <p className="keep-your-name-and">
                    Keep your name and logo top of mind to
                    <br />
                    renters.
                  </p>
                </div>
              </div>
              <div className="div-card-5">
                <div className="img-3" ></div>
                <div className="heading-consumer">Consumer-focused</div>
                <div className="div-2">
                  <p className="consumer">
                    Consumer expectations are higher than
                    <br />
                    ever- we&#39;ll help you stand out.
                  </p>
                </div>
              </div>
              <div className="div-card-6">
                <div className="img-3" ></div>
                <div className="heading-consumer">Consumer-focused</div>
                <div className="div-2">
                  <p className="consumer">
                    Consumer expectations are higher than
                    <br />
                    ever- we&#39;ll help you stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       <div className="overlap-wrapper">
          <div className="overlap-2">
            <Navbar />
          </div>
        </div> 
        {/* <img className="group-6" alt="Group" src="group-34372.png" /> */}
        
        </div>
      </div>
   
      <Footer />
    </div>
  );
};

export default AgentsPage;
