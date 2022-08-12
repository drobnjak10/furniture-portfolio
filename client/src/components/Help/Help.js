import React from "react";
import "./help.scss";
import { BiPencil } from "react-icons/bi";

const Help = () => {
  return (
    <div className="help">
      <div className="container">
        <div className="left">
          <div className="words">
            <span>Team.</span>
            <span>Customer.</span>
            <span>Community.</span>
          </div>
          <h2 className="title">How we can help to you?</h2>
        </div>
        <div className="right">
          <div className="row">
            <h3>
              <BiPencil size={30} color="#fff" />
              Write to our customer service!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              ullam mollitia eum dicta omnis quibusdam in voluptatum illum
              officiis recusandae!
            </p>
          </div>
          <div className="row">
            <h3>
              <BiPencil size={30} color="#fff" />
              Write to our customer service!
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              ullam mollitia eum dicta omnis quibusdam in voluptatum illum
              officiis recusandae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
