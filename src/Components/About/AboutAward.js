// AboutAward.js

import React from 'react';
import HeadingComp from '../Others/HeadingComp';
import './AboutAwards.css';

const AboutAward = () => {
  return (
    <>
      <div className="container-fluid padding mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500">
        <HeadingComp head={'About the Award'} />
        <ul className='d-flex flex-column' id='awardbenefits'>
          <table className='table'>
          </table>
          <p className='para-text'>
            The Department of Industrial Engineering at Anna University is proud to announce the establishment
            of the Industry Excellence Award for the year 2024 to the best manufacturing practices. This
            prestigious award recognizes outstanding achievements in the realm of manufacturing processes,
            emphasizing continuous improvement initiatives that enhance productivity, quality, sustainability,
            and overall operational excellence.
          </p>
        </ul>
      </div>
    </>
  );
};

export default AboutAward;
