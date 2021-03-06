import React from 'react';
import './notFound.css';
import image from '../../about/images/rose-green.png';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="not-found">
      <section className="section1">
        <div className="content">
          <img src={image} alt="rose" />
          <div className="content__title">Not Found Page</div>
          <div className="content__link">
            <Link to="/">Go to Home Page</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
