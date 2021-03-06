import React, { useState, useEffect } from 'react';
import './home.css';
import image from './images/rose-green.png';
import image2 from './images/typography-image-1-83x72.png';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { productActions, orderUserActions } from '../../../redux/actions';
import { Loading } from '../utils/loading/Loading';
import { toast } from 'react-toastify';

export const Home = () => {
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  let { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.products);
  let { newProducts } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(productActions.getAllProducts(1, '', '-sold', 100));
  }, [dispatch]);

  useEffect(() => {
    dispatch(productActions.getNewProduct());
  }, [dispatch]);

  products = products.filter((product, index) => index < 8);
  newProducts = newProducts.filter((product, index) => index < 8);
  const settings = {
    // dots: true,

    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          rtl: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          rtl: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  if (loading) return <Loading />;

  return (
    <motion.div
      initial={{ translateX: '100vw', transition: { duration: 1 } }}
      animate={{ translateX: '0', transition: { duration: 1 } }}
      exit={{ translateX: '100vw', transition: { duration: 1 } }}
    >
      <div className="home-page">
        <section className="section1">
          <div className="content">
            <div className="text-content">
              <img src={image} alt="rose-green" />
              <div className="title">Natural Products.</div>
              <div className="body">
                We are collected all our knowledge to deliver you the best
                organic , cosmetology brands in the world
              </div>
            </div>
            <div className="button-content">
              <div className="button-to-products">
                <Link to="/products">View products</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section1-1">
          <div className="title">
            <img src={image2} alt="logo2" />
            <div>Why choose me?</div>
          </div>

          <Slider {...settings}>
            <div className="content__card">
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 496 496"
                width="60px"
                height="60px"
                style={{ enableBackground: 'new 0 0 496 496' }}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M402.524,432l-18.52-55.568c-6.472-19.4-22.984-33.72-43.112-37.384l-53.464-9.728v-4.144
			c9.304-5.4,17.4-12.624,23.848-21.176h16.152c13.232,0,24-10.768,24-24v-96c0-57.344-46.656-104-104-104s-104,46.656-104,104v56
			c0,15.424,10.968,28.328,25.512,31.336c4.488,22.992,18.856,42.448,38.488,53.84v4.144l-53.472,9.728
			c-20.12,3.664-36.64,17.984-43.104,37.384l-3.2,9.608l-27.248-27.248c-3.12-3.12-3.12-8.2,0-11.32l31.6-31.592l-59.312-59.312
			L16.98,292.28c-10.576,10.576-16.4,24.64-16.4,39.6s5.824,29.016,16.4,39.592l108.12,108.12C135.676,490.168,149.74,496,164.7,496
			c14.96,0,29.016-5.832,39.344-16.168l38.968-35.704L230.86,432H402.524z M335.428,280c0,4.416-3.592,8-8,8H320.7
			c2.32-5.288,4.08-10.864,5.216-16.664c3.424-0.712,6.576-2.072,9.512-3.784V280z M327.428,253.776v-27.552
			c4.76,2.776,8,7.88,8,13.776S332.188,251,327.428,253.776z M167.428,253.776c-4.76-2.776-8-7.88-8-13.776s3.24-11,8-13.776
			V253.776z M167.428,200v9.136c-2.848,0.744-5.52,1.864-8,3.312V184c0-48.52,39.48-88,88-88s88,39.48,88,88v28.448
			c-2.48-1.448-5.152-2.576-8-3.312V200h-8c-23.656,0-45.896-9.216-62.632-25.944l-9.368-9.368l-9.368,9.368
			C221.324,190.784,199.084,200,175.428,200H167.428z M183.428,256v-40.304c24.024-1.808,46.424-11.72,64-28.432
			c17.576,16.712,39.976,26.632,64,28.432V256c0,11.664-3.184,22.576-8.656,32h-55.344v16h42.192c-11.28,9.928-26.024,16-42.192,16
			C212.14,320,183.428,291.288,183.428,256z M271.428,332.312v0.376l-24,24l-24-24v-0.376c7.584,2.384,15.64,3.688,24,3.688
			S263.844,334.696,271.428,332.312z M126.02,381.488c4.616-13.856,16.416-24.088,30.792-26.712l55.92-10.16l34.696,34.696
			l34.688-34.688l55.912,10.16c14.376,2.624,26.176,12.848,30.792,26.712L380.332,416H214.86l-31.16-31.16l-34.624,31.32
			c-3.016,3.032-8.288,3.032-11.312,0l-17.472-17.472L126.02,381.488z M52.684,279.192l36.688,36.688l-8.688,8.688L43.996,287.88
			L52.684,279.192z M192.964,468.296c-7.552,7.536-17.6,11.704-28.28,11.704c-10.68,0-20.728-4.168-28.288-11.72L28.276,360.168
			c-7.552-7.552-11.712-17.6-11.712-28.28c0-10.688,4.16-20.736,11.712-28.288l4.4-4.4l36.688,36.688l-0.288,0.288
			c-9.352,9.36-9.352,24.584,0,33.944l57.368,57.368c4.536,4.528,10.56,7.032,16.976,7.032s12.44-2.496,16.68-6.752l0.6-0.536
			l36.856,36.856L192.964,468.296z M209.364,453.256l-36.776-36.776l10.568-9.552l36.712,36.712L209.364,453.256z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M471.428,0h-112c-13.232,0-24,10.768-24,24v64c0,13.232,10.768,24,24,24h21.368l-8.272,48.248l77.2-48.248h21.704
			c13.232,0,24-10.768,24-24V24C495.428,10.768,484.66,0,471.428,0z M479.428,88c0,4.408-3.592,8-8,8h-26.296l-50.808,31.752
			L399.772,96h-40.344c-4.408,0-8-3.592-8-8V24c0-4.408,3.592-8,8-8h112c4.408,0,8,3.592,8,8V88z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="367.428" y={32} width={96} height={16} />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="367.428" y={64} width={64} height={16} />
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="447.428" y={64} width={16} height={16} />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M247.428,24C142.9,24,52.86,96.304,29.452,197.16l-15.16-25.272l-13.72,8.232l28.12,46.856l46.856-28.12l-8.232-13.72
			l-21.68,13.008C68.308,105.88,151.276,40,247.428,40c21.016,0,41.752,3.12,61.632,9.28L313.796,34
			C292.38,27.36,270.052,24,247.428,24z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M491.54,177.136l-46.856-28.12l-28.112,46.864l13.72,8.232l14-23.336c7.368,21.56,11.136,44.112,11.136,67.224
			c0,47.576-16.48,94.088-46.392,130.96l12.424,10.08c32.224-39.712,49.968-89.808,49.968-141.04
			c0-24.472-3.944-48.368-11.632-71.248l23.512,14.104L491.54,177.136z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <div className="content__text">
                <div className="content__text_title">Shipping & return</div>
                <div className="content__text_body">
                  If your products are not perfects, return them if within 30
                  days.
                </div>
              </div>
            </div>
            <div className="content__card">
              <svg
                viewBox="0 -1 490 490"
                width="60px"
                height="60px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m354 178.003906c0-3.867187-3.132812-7-7-7h-204c-3.867188 0-7 3.132813-7 7v133c0 3.863282 3.132812 7 7 7h204c3.867188 0 7-3.136718 7-7zm-113.730469 100.328125c2.691407 2.511719 6.871094 2.511719 9.558594 0l27.777344-26.09375 52.300781 50.765625h-169.320312l52.984374-49.753906zm47.550781-35.53125 52.179688-48.757812v99.535156zm-42.769531 21.101563-84.441406-78.898438h168.867187zm-41.800781-20.09375-53.25 50.125v-99.878906zm0 0"></path>
                <path d="m483.449219 202.234375-46.800781-4.515625c-4.890626-19.957031-12.953126-38.996094-23.875-56.398438l29.699218-35.847656c2.292969-2.777344 2.109375-6.839844-.425781-9.394531l-48.609375-49.097656c-2.550781-2.582031-6.652344-2.785157-9.445312-.464844l-35.90625 29.769531c-17.472657-10.804687-36.519532-18.828125-56.453126-23.78125l-4.515624-46.375c-.367188-3.550781-3.402344-6.2187498-6.96875-6.12499975h-69.699219c-3.566407-.09375005-6.601563 2.57421875-6.964844 6.12499975l-4.515625 46.472656c-19.976562 4.820313-39.050781 12.820313-56.492188 23.691407l-35.859374-29.753907c-2.777344-2.308593-6.851563-2.125-9.414063.421876l-49.199219 49.09375c-2.554687 2.554687-2.75 6.636718-.441406 9.417968l29.75 35.882813c-10.796875 17.449219-18.835938 36.460937-23.824219 56.363281l-46.9375 4.515625c-3.632812.328125-6.449219 3.320313-6.550781 6.96875v69.597656c.101562 3.648438 2.917969 6.640625 6.550781 6.96875l46.800781 4.515625c4.890626 19.957032 12.953126 38.996094 23.875 56.398438l-29.699218 35.851562c-2.304688 2.785156-2.105469 6.871094.457031 9.421875l49.207031 49.097657c2.558594 2.550781 6.636719 2.738281 9.417969.433593l35.90625-29.769531c17.472656 10.804688 36.515625 18.828125 56.453125 23.785156l4.511719 46.375c.367187 3.546875 3.402343 6.214844 6.96875 6.125h69.699219c3.566406.089844 6.601562-2.578125 6.96875-6.125l4.511718-46.476562c19.980469-4.820313 39.054688-12.820313 56.496094-23.691406l35.855469 29.757812c2.777343 2.308594 6.855469 2.125 9.414062-.421875l49.199219-49.09375c2.558594-2.554687 2.75-6.636719.445312-9.417969l-29.753906-35.882812c10.800782-17.449219 18.835938-36.464844 23.828125-56.367188l46.34375-4.515625c3.628907-.332031 6.441407-3.324219 6.542969-6.96875v-69.597656c-.101562-3.648437-2.917969-6.640625-6.550781-6.96875zm-7.449219 70.21875-45.007812 4.382813c-3.039063.289062-5.554688 2.476562-6.261719 5.449218-4.886719 21.753906-13.65625 42.453125-25.890625 61.097656-1.679688 2.5625-1.5 5.921876.449218 8.289063l28.910157 34.882813-40.179688 40.09375-34.898437-28.933594c-2.375-1.96875-5.757813-2.152344-8.332032-.449219-18.582031 12.308594-39.3125 21.027344-61.109374 25.691406-2.953126.550781-5.195313 2.980469-5.5 5.96875l-4.378907 45.078125h-56.992187l-4.386719-45.078125c-.300781-3.015625-2.535156-5.480469-5.507813-6.070312-21.777343-4.792969-42.507812-13.496094-61.175781-25.691407-2.570312-1.644531-5.910156-1.429687-8.25.523438l-34.902343 28.949219-40.171876-40.085938 28.925782-34.882812c1.972656-2.378907 2.148437-5.769531.4375-8.34375-12.332032-18.546875-21.078125-39.242188-25.789063-61.011719-.746093-3-3.308593-5.199219-6.390625-5.476562l-45.597656-4.390626v-56.886718l45.601562-4.390625c3.039063-.285157 5.5625-2.472657 6.269532-5.445313 4.886718-21.757812 13.65625-42.457031 25.890625-61.101562 1.679687-2.5625 1.5-5.921875-.449219-8.289063l-28.914062-34.882812 40.179687-40.09375 34.902344 28.9375c2.375 1.96875 5.757812 2.148437 8.332031.445312 18.582031-12.308593 39.3125-21.023437 61.109375-25.691406 2.953125-.550781 5.191406-2.980469 5.5-5.96875l4.382813-45.074219h56.996093l4.386719 45.074219c.300781 3.015625 2.535156 5.480469 5.507812 6.070313 21.777344 4.792968 42.507813 13.496093 61.175782 25.691406 2.570312 1.644531 5.910156 1.429687 8.25-.523438l34.867187-28.921875 39.628907 40.03125-28.953126 34.910157c-1.96875 2.378906-2.148437 5.769531-.4375 8.34375 12.332032 18.546874 21.078126 39.242187 25.785157 61.011718.746093 3 3.308593 5.199219 6.390625 5.480469l45.597656 4.386719zm0 0"></path>
                <path d="m245.050781 89.402344c-85.367187 0-154.820312 69.351562-154.820312 154.601562 0 85.246094 69.453125 154.597656 154.820312 154.597656 85.367188 0 154.816407-69.351562 154.816407-154.597656s-69.449219-154.601562-154.816407-154.601562zm0 295.199218c-77.648437 0-140.820312-63.070312-140.820312-140.597656 0-77.53125 63.167969-140.601562 140.820312-140.601562 77.648438 0 140.816407 63.074218 140.816407 140.601562 0 77.523438-63.167969 140.597656-140.816407 140.597656zm0 0"></path>
              </svg>
              <div className="content__text">
                <div className="content__text_title">Safe payment</div>
                <div className="content__text_body">
                  Pay with the world's most popular and secure payment methods.
                </div>
              </div>
            </div>
            <div className="content__card">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                width="60px"
                height="60px"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M476.158,286.938l-13.259-53.035c3.625-0.77,6.345-3.986,6.345-7.839v-8.551c0-18.566-15.105-33.67-33.67-33.67h-60.392
        			v-17.637c0-9.136-7.432-16.568-16.568-16.568H246.32l68.24-27.296c4.111-1.644,6.11-6.31,4.466-10.421
        			c-1.644-4.11-6.307-6.111-10.421-4.466l-55.874,22.349c17.026-10.924,33.871-22.947,40.284-31.355
        			c12.485-16.369,9.323-39.843-7.046-52.328c-16.369-12.486-39.843-9.323-52.328,7.046c-9.122,11.962-21.158,45.573-28.948,69.258
        			c-7.79-23.683-19.826-57.296-28.948-69.258c-12.484-16.369-35.959-19.53-52.328-7.046c-16.369,12.484-19.53,35.958-7.046,52.328
        			c6.413,8.409,23.257,20.431,40.284,31.355l-55.874-22.349c-4.113-1.647-8.777,0.355-10.421,4.466
        			c-1.645,4.111,0.355,8.777,4.466,10.421l68.24,27.296H50.772c-9.136,0-16.568,7.432-16.568,16.568v145.37
        			c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-145.37c0-0.295,0.239-0.534,0.534-0.534h307.841
        			c0.295,0,0.534,0.239,0.534,0.534v145.372c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-9.088h94.566
        			c0.009,0,0.016,0.002,0.025,0.002s0.017-0.001,0.026-0.001c11.636,0.009,21.516,7.647,24.908,18.171h-24.928
        			c-4.427,0-8.017,3.589-8.017,8.017v17.102c0,13.851,11.268,25.119,25.119,25.119h9.086v35.273h-20.962
        			c-6.886-19.882-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205h-3.86V345.78c0-4.427-3.589-8.017-8.017-8.017
        			c-4.427,0-8.017,3.589-8.017,8.017v60.392H192.817c-6.886-19.882-25.787-34.205-47.982-34.205s-41.097,14.322-47.982,34.205
        			H50.772c-0.295,0-0.534-0.239-0.534-0.534v-17.637h34.739c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H8.017
        			c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h26.188v17.637c0,9.136,7.432,16.568,16.568,16.568h43.304
        			c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.995,22.777,50.772,50.772,50.772s50.772-22.777,50.772-50.772
        			c0-0.18-0.012-0.356-0.014-0.534h180.67c-0.002,0.178-0.014,0.355-0.014,0.534c0,27.995,22.777,50.772,50.772,50.772
        			c27.995,0,50.772-22.777,50.772-50.772c0-0.18-0.012-0.356-0.014-0.534h26.203c4.427,0,8.017-3.589,8.017-8.017v-85.511
        			C512,307.564,496.423,290.022,476.158,286.938z M172.9,121.059c-31.623-19.651-41.003-28.692-43.78-32.334
        			c-7.123-9.339-5.319-22.732,4.021-29.855c3.85-2.936,8.388-4.355,12.893-4.355c6.422,0,12.776,2.886,16.963,8.376
        			c7.755,10.168,19.9,44.391,27.918,69.052C185.504,128.757,179.284,125.028,172.9,121.059z M218.473,131.942
        			c8.018-24.66,20.163-58.882,27.917-69.052c7.123-9.339,20.516-11.142,29.855-4.02c9.34,7.123,11.143,20.516,4.021,29.855
        			c-2.777,3.641-12.157,12.683-43.778,32.333C230.105,125.026,223.885,128.756,218.473,131.942z M375.182,199.875h60.392
        			c9.725,0,17.637,7.912,17.637,17.637v0.534h-78.029V199.875z M375.182,286.456V234.08h71.235l13.094,52.376H375.182z
        			 M144.835,457.479c-19.155,0-34.739-15.584-34.739-34.739s15.584-34.739,34.739-34.739c19.155,0,34.739,15.584,34.739,34.739
        			S163.99,457.479,144.835,457.479z M427.023,457.479c-19.155,0-34.739-15.584-34.739-34.739s15.584-34.739,34.739-34.739
        			c19.155,0,34.739,15.584,34.739,34.739S446.178,457.479,427.023,457.479z M495.967,354.865h-9.086
        			c-5.01,0-9.086-4.076-9.086-9.086v-9.086h18.171V354.865z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M144.835,406.172c-9.136,0-16.568,7.432-16.568,16.568s7.432,16.568,16.568,16.568c9.136,0,16.568-7.432,16.568-16.568
        			S153.971,406.172,144.835,406.172z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M427.023,406.172c-9.136,0-16.568,7.432-16.568,16.568s7.432,16.568,16.568,16.568c9.136,0,16.568-7.432,16.568-16.568
        			S436.159,406.172,427.023,406.172z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M332.96,371.967H213.244c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H332.96
        			c4.427,0,8.017-3.589,8.017-8.017S337.388,371.967,332.96,371.967z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M127.733,337.763H25.119c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h102.614
        			c4.427,0,8.017-3.589,8.017-8.017S132.16,337.763,127.733,337.763z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M127.733,218.046H93.528c-4.427,0-8.017,3.589-8.017,8.017v68.409c0,4.427,3.589,8.017,8.017,8.017
        			s8.017-3.589,8.017-8.017v-26.188h17.637c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-17.637V234.08h26.188
        			c4.427,0,8.017-3.589,8.017-8.017C135.749,221.636,132.16,218.046,127.733,218.046z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M190.822,272.043c8.023-5.255,13.337-14.317,13.337-24.602c0-16.209-13.186-29.395-29.395-29.395h-21.378
        			c-4.427,0-8.017,3.589-8.017,8.017v68.409c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017v-17.637h13.346l14.722,22.083
        			c1.545,2.317,4.086,3.571,6.677,3.571c1.529,0,3.073-0.436,4.439-1.348c3.685-2.455,4.68-7.433,2.223-11.116L190.822,272.043z
        			 M174.764,260.802h-13.361V234.08h13.361c7.368,0,13.361,5.993,13.361,13.361C188.125,254.809,182.132,260.802,174.764,260.802z"
                    ></path>
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M256,286.456h-26.188v-18.198c0.177,0.012,0.354,0.027,0.534,0.027h17.102c4.427,0,8.017-3.589,8.017-8.017
        			s-3.589-8.017-8.017-8.017h-17.102c-0.181,0-0.357,0.015-0.534,0.027V234.08H256c4.427,0,8.017-3.589,8.017-8.017
        			c0-4.427-3.589-8.017-8.017-8.017h-34.205c-4.427,0-8.017,3.589-8.017,8.017v68.409c0,4.427,3.589,8.017,8.017,8.017H256
        			c4.427,0,8.017-3.589,8.017-8.017S260.427,286.456,256,286.456z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M315.858,286.456H289.67v-18.171h9.086c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017h-9.086V234.08h26.188
        			c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017h-34.205c-4.427,0-8.017,3.589-8.017,8.017v68.409
        			c0,4.427,3.589,8.017,8.017,8.017h34.205c4.427,0,8.017-3.589,8.017-8.017S320.285,286.456,315.858,286.456z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <div className="content__text">
                <div className="content__text_title">Show with confidence</div>
                <div className="content__text_body">
                  Our Buyer Protection covers your purchase from click to
                  delivery.
                </div>
              </div>
            </div>
          </Slider>
        </section>

        <section className="section2">
          <div className="title">
            <img src={image2} alt="logo2" />
            <div>Visit Our Store</div>
          </div>
          <div className=" content ">
            <Slider {...settings} dots={true} autoplay={false} speed={500}>
              <div className="content__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0549/7140/0399/files/collection1.1.jpg?v=1614935773"
                  alt="product"
                />
                <div className="text-content">
                  <div className="content_subtitle"> 20% Discount</div>
                  <div className="content_title"> Coverage</div>
                  <NavLink to="/products" className="content_navLink">
                    {' '}
                    Shop Now
                  </NavLink>
                </div>
              </div>
              <div className="content__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0549/7140/0399/files/collection1.2.jpg?v=1614935881"
                  alt="product"
                />
                <div className="text-content">
                  <div className="content_subtitle"> 20% Save</div>
                  <div className="content_title"> Concealer Cream</div>
                  <NavLink to="/products" className="content_navLink">
                    {' '}
                    Shop Now
                  </NavLink>
                </div>
              </div>
              <div className="content__card">
                <img
                  src="https://cdn.shopify.com/s/files/1/0549/7140/0399/files/collection1.3.jpg?v=1614935991"
                  alt="product"
                />
                <div className="text-content">
                  <div className="content_subtitle"> Most Popular</div>
                  <div className="content_title"> Eyeshadow</div>
                  <NavLink to="/products" className="content_navLink">
                    {' '}
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <section className="section3">
          <div className="title">
            <img src={image2} alt="logo2" />
            <div className="text">Our Best Seller</div>
          </div>
          <div className=" content ">
            <div className="subtitle">Best Seller Product This Month!</div>
            <div className="products">
              {products.map((product, index) => {
                return (
                  <div key={index} className="card">
                    <img src={product.images[0].url} alt=" " />
                    {product.new ? <span className="new">new</span> : ''}
                    {product.sale ? (
                      <span className="sale">-{product.sale}%</span>
                    ) : (
                      ''
                    )}

                    <div
                      onClick={() => {
                        const price_on_purchase_date =
                          (product.price * (100 - product.sale)) / 100;
                        const quantity = 1;
                        if (!isAuthenticated) {
                          window.alert('You need sign in to create a order!!');
                        } else {
                          dispatch(
                            orderUserActions.createOrderUser(
                              product,
                              quantity,
                              price_on_purchase_date
                            )
                          );
                          toast.success('Added product to cart successfully', {
                            position: toast.POSITION.BOTTOM_RIGHT,
                          });
                        }
                      }}
                      className="cart-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 400 400"
                        height={20}
                        width={20}
                        id="svg2"
                        version="1.1"
                        xmlnsdc="http://purl.org/dc/elements/1.1/"
                        xmlnscc="http://creativecommons.org/ns#"
                        xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                        xmlnssvg="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                      >
                        <metadata id="metadata8">
                          <rdf>
                            <work rdfabout="true">
                              <format>image/svg+xml</format>
                              <type rdfresource="http://purl.org/dc/dcmitype/StillImage" />
                            </work>
                          </rdf>
                        </metadata>
                        <defs id="defs6" />
                        <g
                          transform="matrix(1.3333333,0,0,-1.3333333,0,400)"
                          id="g10"
                        >
                          <g transform="scale(0.1)" id="g12">
                            <path
                              id="path14"
                              style={{
                                fill: '#231f20',
                                fillOpacity: 1,
                                fillRule: 'nonzero',
                                stroke: 'none',
                              }}
                              d="M 2565.21,2412.71 H 450.992 V 0 H 2565.21 V 2412.71 Z M 2366.79,2214.29 V 198.43 H 649.418 V 2214.29 H 2366.79"
                            />
                            <path
                              id="path16"
                              style={{
                                fill: '#231f20',
                                fillOpacity: 1,
                                fillRule: 'nonzero',
                                stroke: 'none',
                              }}
                              d="m 1508.11,2990 h -0.01 c -361.22,0 -654.037,-292.82 -654.037,-654.04 V 2216.92 H 2162.14 v 119.04 c 0,361.22 -292.82,654.04 -654.03,654.04 z m 0,-198.43 c 224.16,0 411.02,-162.7 448.69,-376.23 h -897.39 c 37.66,213.53 224.53,376.23 448.7,376.23"
                            />
                            <path
                              id="path18"
                              style={{
                                fill: '#231f20',
                                fillOpacity: 1,
                                fillRule: 'nonzero',
                                stroke: 'none',
                              }}
                              d="m 1946.24,1868.17 h -876.27 v 169.54 h 876.27 v -169.54"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <Link
                      to={`/product/${product._id}`}
                      className="card__title"
                    >
                      {product.title}
                    </Link>
                    <div className="card__price">
                      <span className="final">
                        $
                        {product.sale > 0
                          ? (
                              (product.price * (100 - product.sale)) /
                              100
                            ).toFixed(2)
                          : product.price.toFixed(2)}
                      </span>
                      <span>
                        <strike>
                          {product.sale > 0
                            ? `$ ${product.price.toFixed(2)} `
                            : ''}
                        </strike>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section4">
          <div className="title">
            <img src={image2} alt="logo2" />
            <div className="text">Our new Products</div>
          </div>
          <div className=" content ">
            <div className="subtitle">New Arrivals This month!</div>
            <div className="products">
              {newProducts.map((product, index) => {
                return (
                  <div key={index} className="card">
                    <img src={product.images[0].url} alt=" " />
                    {product.new ? <span className="new">new</span> : ''}
                    {product.sale ? (
                      <span className="sale">-{product.sale}%</span>
                    ) : (
                      ''
                    )}

                    <div
                      onClick={() => {
                        const price_on_purchase_date =
                          (product.price * (100 - product.sale)) / 100;
                        const quantity = 1;
                        if (!isAuthenticated) {
                          window.alert('You need sign in to create a order!!');
                        } else {
                          dispatch(
                            orderUserActions.createOrderUser(
                              product,
                              quantity,
                              price_on_purchase_date
                            )
                          );
                          toast.success('Added product to cart successfully', {
                            position: toast.POSITION.BOTTOM_RIGHT,
                          });
                        }
                      }}
                      className="cart-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 400 400"
                        height={20}
                        width={20}
                        id="svg2"
                        version="1.1"
                        xmlnsdc="http://purl.org/dc/elements/1.1/"
                        xmlnscc="http://creativecommons.org/ns#"
                        xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                        xmlnssvg="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                      >
                        <metadata id="metadata8">
                          <rdf>
                            <work rdfabout="true">
                              <format>image/svg+xml</format>
                              <type rdfresource="http://purl.org/dc/dcmitype/StillImage" />
                            </work>
                          </rdf>
                        </metadata>
                        <defs id="defs6" />
                        <g
                          transform="matrix(1.3333333,0,0,-1.3333333,0,400)"
                          id="g10"
                        >
                          <g transform="scale(0.1)" id="g12">
                            <path
                              id="path14"
                              style={{
                                fill: '#231f20',
                                fillOpacity: 1,
                                fillRule: 'nonzero',
                                stroke: 'none',
                              }}
                              d="M 2565.21,2412.71 H 450.992 V 0 H 2565.21 V 2412.71 Z M 2366.79,2214.29 V 198.43 H 649.418 V 2214.29 H 2366.79"
                            />
                            <path
                              id="path16"
                              style={{
                                fill: '#231f20',
                                fillOpacity: 1,
                                fillRule: 'nonzero',
                                stroke: 'none',
                              }}
                              d="m 1508.11,2990 h -0.01 c -361.22,0 -654.037,-292.82 -654.037,-654.04 V 2216.92 H 2162.14 v 119.04 c 0,361.22 -292.82,654.04 -654.03,654.04 z m 0,-198.43 c 224.16,0 411.02,-162.7 448.69,-376.23 h -897.39 c 37.66,213.53 224.53,376.23 448.7,376.23"
                            />
                            <path
                              id="path18"
                              style={{
                                fill: '#231f20',
                                fillOpacity: 1,
                                fillRule: 'nonzero',
                                stroke: 'none',
                              }}
                              d="m 1946.24,1868.17 h -876.27 v 169.54 h 876.27 v -169.54"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <Link
                      to={`/product/${product._id}`}
                      className="card__title"
                    >
                      {product.title}
                    </Link>
                    <div className="card__price">
                      <span className="final">
                        $
                        {product.sale > 0
                          ? (
                              (product.price * (100 - product.sale)) /
                              100
                            ).toFixed(2)
                          : product.price.toFixed(2)}
                      </span>
                      <span>
                        <strike>
                          {product.sale > 0
                            ? `$ ${product.price.toFixed(2)} `
                            : ''}
                        </strike>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
