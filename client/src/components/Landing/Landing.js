import React from "react";
import "./landing.scss";

const Landing = () => {
  return (
    <div className={`landing `}>
      <div className={`overlay`}>
        <div className="content">
          <p>ALEXANDER MURRAY & CO</p>
          <h2>Scotch Whisky Merchants & Exporters</h2>
          <p>
            Accompany us on our endless search to unearth Scotland's finest
            whiskies, many hidden away in the most beautiful parts of Scotland,
            and discover only the very best - whiskies which meet the Alexander
            Murray philosophy and standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
