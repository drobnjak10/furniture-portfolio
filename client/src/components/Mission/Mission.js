import React, { useRef } from "react";
import "./mission.scss";
import Typed from "react-typed";
import { useIsInViewport } from "../../hooks/useInViewport";

const Mission = () => {
  const ref = useRef(null);
  const isInViewport = useIsInViewport(ref);

  return (
    <div className={`mission ${isInViewport && "active"}`} ref={ref}>
      <div className="left">
        <img src="/images/img-min.jpg" alt="" />
      </div>
      <div className="right">
        <div className="content">
          <h3>Our Mission</h3>
          <h1>
            <Typed
              strings={["Furnitures", "Designs", "Art"]}
              typeSpeed={120}
              backSpeed={50}
              loop
              backDelay={3000}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nesciunt dignissimos distinctio voluptate, similique porro excepturi
            sequi voluptas! Aspernatur, nostrum! Accusamus amet dignissimos,
            beatae inventore officiis repellendus rem incidunt id numquam? Natus
            temporibus excepturi beatae quo quibusdam harum. Iusto quibusdam
            magnam fuga veritatis eos ad sapiente sint iste vitae reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
