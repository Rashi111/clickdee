import React from "react";
import {
  CustomizeCampaign,
  QualityAssurance,
  SupportTeam,
  Track,
} from "../svgImage/Icon";

function Index() {
  return (
    <div className="main-container">
      <div>
        <div>
          <div>
            <div className="hading-color">
              <h2>
                Why the industry
                <br /> chooses Clickdee?
              </h2>
            </div>
            <p className="text-paragraph">
              The Clickdee team is made up of nimble and creative marketers with
              a mission to help brands connect with highly qualified customers.
              We map out the specific needs of each one of our clients so they
              can effortlessly receive qualified calls to their business. Trust
              and honesty is the name of our game, and we ensure that our
              affiliate publishers have been pre-vetted and proven to generate
              warm leads. Our business is helping you to promote yours, and we
              are here to help you reach your sales goals.
            </p>
          </div>
        </div>
      </div>

      <div className="chooseItem main-div">
        <div className="Imge_icn">
          <img src="Assets/Targeting.png" height={70} width={70} />
        </div>
        <h3 className="icon-text">
          Choose Your
          <br /> Local Targeting
        </h3>
        <div className="something-inside-but-hidden">
          <p>
            Our targeted and tracked calls <br /> are tailored to your business{" "}
            <br /> needs, audience, and geolocation.
          </p>
        </div>
      </div>
      <div className="chooseItem main-div">
        <div className="Imge_icn">
          <Track />
        </div>
        <h3 className="icon-text">
          Track Your
          <br /> Conversion
        </h3>
        <div className="something-inside-but-hidden">
          <p>
            We use the most progressive <br />
            tracking and analytics technology to <br />
            ensure that every call can be tracked and evaluated
          </p>
        </div>
      </div>
      <div className="chooseItem main-div">
        <div className="Imge_icn">
          <CustomizeCampaign />
        </div>
        <h3 className="icon-text">
          Customized
          <br /> Campaigns
        </h3>
        <div className="something-inside-but-hidden">
          <p>
            Audiences, budgets, and goals:
            <br /> you decide the criteria for your digital ad campaign, <br />{" "}
            and we’ll do the rest.
          </p>
        </div>
      </div>
      <div className="chooseItem main-div">
        <div className="Imge_icn">
          <SupportTeam />
        </div>
        <h3 className="icon-text">
          Get Dedicated <br /> Support Team
        </h3>
        <div className="something-inside-but-hidden">
          <p>
            We constantly monitor quality control!
            <br /> Our affiliate network of publishers are digital ad experts
            that have been vetted.
          </p>
        </div>
      </div>
      <div className="chooseItem main-div">
        <div className="Imge_icn">
          <QualityAssurance />
        </div>

        <h3 className="icon-text">
          Quality
          <br /> Assurance
        </h3>
        <div className="something-inside-but-hidden">
          <p>
            We constantly monitor quality <br />
            control! Our affiliate network of publishers are digital ad <br />{" "}
            experts that have been vetted.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
