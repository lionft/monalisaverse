import React from 'react';
import Slider from 'react-slick';
import sliderImage1 from '../images/slider/1.png';
import sliderImage2 from '../images/slider/2.png';
import sliderImage3 from '../images/slider/3.png';
import sliderImage4 from '../images/slider/4.png';
import sliderImage5 from '../images/slider/5.png';
import sliderImage6 from '../images/slider/6.png';
import sliderImage7 from '../images/slider/7.png';
import sliderImage8 from '../images/slider/8.png';
import sliderImage9 from '../images/slider/9.png';
import sliderImage10 from '../images/slider/10.png';
import sliderImage11 from '../images/slider/11.png';

const GoldenGuest = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className='w-full mt-8 sm:mt-14 mx-auto bg-gray-section px-4 py-8 sm:pt-20 sm:pb-12'>
        <div className='sm:mx-auto pb-10 sm:pb-20 text-white max-w-7xl flex flex-col sm:flex-row sm:justify-center lg:space-x-56'>
          <h2 className=' text-center sm:text-left flex-shrink-0 text-xl sm:text-4xl tracking-wide leading-normal font-bold uppercase text-primary'>
            Golden Guests
          </h2>
          <div className='flex flex-col items-center sm:items-start text-sm mt-4 sm:mt-auto sm:text-lg text-gray'>
            <div className='bcm text-center sm:text-left mb-5 leading-relaxed'>
              <p>
                <strong>Categories</strong> <br />
                Backgrounds 20+, Skins 18+, Outfit 60+, Outfit 60+, Eyes 20+,
                Face accessories 70+
              </p>
            </div>
            <div className='inline-block btn-gradient p-0.5 btn-animate max-w-max'>
              <a
                href='#'
                target='_blank'
                className='text-default uppercase font-bold text-xs sm:text-sm tracking-wider h-14 px-8 flex items-center justify-center max-w-max btn-bg-gradient'
              >
                <span>Join Us</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            <div className='mx-2'>
              <img src={sliderImage1} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={sliderImage2} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={sliderImage3} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={sliderImage4} alt='' className='max-w-full' />
            </div>
            <div className='mx-2'>
              <img src={sliderImage5} alt='' className='max-w-full' />
            </div>
            <div className='mx-2'>
              <img src={sliderImage6} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={sliderImage7} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={sliderImage8} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={sliderImage9} alt='' className='max-w-full' />
            </div>
            <div className='mx-2'>
              <img src={sliderImage10} alt='' className='max-w-full' />
            </div>

            <div className='mx-2'>
              <img src={sliderImage11} alt='' className='max-w-full' />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default GoldenGuest;
