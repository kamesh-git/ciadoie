import React from "react";

const TitleHeadComp = ({ col, head }) => {
  return (
    <div>
      <h5
        className="text-center"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="300"
        id="imgTitle"
      >
        {head}
      </h5>
    </div>
  );
};

export default TitleHeadComp;
