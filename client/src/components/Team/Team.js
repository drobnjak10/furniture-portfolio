import React from "react";
import "./team.scss";
import { GrFacebookOption } from "react-icons/gr";

const Team = () => {
  return (
    <div className="team">
      <h2 className="title">Meet Our Team</h2>
      <div className="line"></div>
        <div className="half"></div>
      <div className="container">
        <div className="card">
          <div className="img">
            <img src="/images/person.jpg" alt="" />
          </div>
          <div className="text">
            <h4 className="name">Milan Vucinic</h4>
            <span>creative leader</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              ut?
            </p>
            <div className="icons">
              <GrFacebookOption size={20} />
              <GrFacebookOption size={20} />
              <GrFacebookOption size={20} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src="/images/person.jpg" alt="" />
          </div>
          <div className="text">
            <h4 className="name">Milan Vucinic</h4>
            <span>creative leader</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              ut?
            </p>
            <div className="icons">
              <GrFacebookOption size={20} />
              <GrFacebookOption size={20} />
              <GrFacebookOption size={20} />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src="/images/person.jpg" alt="" />
          </div>
          <div className="text">
            <h4 className="name">Milan Vucinic</h4>
            <span>creative leader</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              ut?
            </p>
            <div className="icons">
              <GrFacebookOption size={20} />
              <GrFacebookOption size={20} />
              <GrFacebookOption size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
