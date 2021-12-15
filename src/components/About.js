import React, { useState } from 'react';
import about1 from '../images/slider/1.png';
import about2 from '../images/slider/2.png';
import about3 from '../images/slider/3.png';
import about4 from '../images/slider/4.png';
import about5 from '../images/about.gif';
const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div
        className='about mt-10 mx-auto max-w-7xl px-4 sm:px-0 sm:mt-24'
        id='about'
      >
        <div className='grid sm:grid-cols-12 items-center'>
          <div
            className='row-start-1 sm:row-start-auto sm:pl-16 sm:text-left lg:col-span-6 p-0 lg:p-0'
            data-aos='fade-right'
            data-aos-duration='1000'
          >
            {/* <p className='label-title'>
              About
              <span className='hidden sm:block label-line'></span>
            </p> */}
            <h2 className='text-3xl sm:text-4xl tracking-wide font-bold mb-4 space-y-1 sm:space-y-2'>
              <p className='text-default'>Welcome to</p>
              <p className='text-primary'>Monalisaverse</p>
            </h2>
            <div className='text-sm sm:text-lg text-gray font-normal mt-10'>
              <div className='bcm leading-relaxed'>
                <p>
                  Whether you're an art enthusiast or not, this collection of
                  NFTs will turn the digital art world upside down, giving you
                  that extra, unique and inimitable touch that only Leonardo's
                  Monalisa can provide!
                  <br />
                  <br />
                  <br />
                  Monalisaverse is a collection of 10,000 unique, randomly
                  generated portraits of the Monalisa that operate on the
                  Ethereum blockchain as ERC-721 NFTs.
                  <br />
                  Our NFTs are created with 200+ accessories and traits, divided
                  into 6 categories, all handcrafted by our artist.
                </p>
              </div>
            </div>
          </div>
          <div
            className='sm:col-start-auto sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'
            data-aos='fade-left'
            data-aos-duration='1000'
          >
            <div className='flex-shrink-0 w-full'>
              <div className='grid gap-2 sm:gap-5 grid-cols-2'>
                <div className='grid__image'>
                  <img src={about1} alt='' />
                </div>
                <div className='grid__image'>
                  <img src={about2} alt='' />
                </div>
                <div className='grid__image'>
                  <img src={about3} alt='' />
                </div>
                <div className='grid__image'>
                  <img src={about4} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id='whyus'
          className='mt-10 mx-auto max-w-7xl px-4 sm:px-0 sm:mt-24 lg:mt-32'
        >
          <div className='grid sm:grid-cols-12 items-center'>
            <div className='mt-5 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
              <div className='flex-shrink-0 w-full'>
                <div className='grid gap-2 sm:gap-4'>
                  <div>
                    <img
                      src={about5}
                      alt=''
                      data-aos='fade-right'
                      data-aos-duration='600'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='sm:pl-16 sm:text-left lg:col-span-6'>
              {/* <p className='label-title'>
                Features
                <span className='hidden sm:block label-line'></span>
              </p> */}
              <h2 className='text-3xl sm:text-4xl tracking-wide font-bold mb-4 space-y-1 sm:space-y-2'>
                <p className='text-default'>An Exclusive</p>
                <p className='text-primary'>Monaliza</p>
              </h2>
              <div
                className='text-sm sm:text-lg text-gray font-normal mt-10'
                data-aos='fade-up'
                data-aos-duration='600'
              >
                <div className='bcm leading-relaxed'>
                  <p>
                    Monalisaverse was born from the desire to bring classic art
                    into the digital age. These will not be simple drawings but
                    a true reproduction of the most famous paintings of the past
                    centuries. <br />
                    Everything will be released into 3 drops, each containing
                    3.333 Monalisa NFTs, leaving for last the original Monalisa
                    NFT that will be sold at auction with a price starting from
                    5ETH.
                    <br />
                    In the Roadmap it’ll be specified what we release and create
                    step by step during the development and growth of our
                    project. <br />
                  </p>
                  {showMore && (
                    <p>
                      The goal is to give to Monalisa NFT holders exclusive and
                      unique benefits concerning the art world, but not only.
                      You will be able to participate in physical and digital
                      events by invitation, receive custom merchandise and
                      constantly earn our Utility Token. <br />
                      And that's not all... we've also prepared the purchase of
                      a Tesla Model S to anyone who finds the ‘Driver' Monalisa
                      NFT, a very unique Monalisa that will be released in the
                      third drop. <br />
                      In the first and second drops you have the opportunity to
                      find the 'Golden Ticket' Monalisa NFTs that will allow you
                      to win several free Monalisa NFT minted by us for you in
                      the next drops, thus increasing the possibility of finding
                      more Rare Monalisa NFTs, the Ultra-rare ones, the
                      Legendary ones and the unique Driver one! <br />
                      We will continue with the development and creation of a
                      new collection of NFTs. The project will be focused on a
                      different painting masterpiece and we will focus more on
                      the use of our Utility Token and the Land in the
                      Metaverse, which will be purchased to give space for the
                      creation of digital events where you can admire or buy new
                      and exclusive NFTs, and much more.
                    </p>
                  )}

                  <button
                    onClick={(e) => setShowMore(!showMore)}
                    className='text-primary'
                  >
                    {showMore ? 'Read less' : 'Read more'}
                  </button>
                </div>
                <div className='flex flex-row flex-wrap gap-2 sm:gap-4 mt-5 sm:mt-10'>
                  <button className='flex space-x-6 items-center justify-between sm:border-b sm:border-opacity-60 sm:border-default py-2'>
                    <a
                      href='https://discord.gg/B94Tc69PV6'
                      target='_blank'
                      className='text-default'
                    >
                      Join Us
                    </a>{' '}
                    <svg
                      className='text-primary w-4'
                      viewBox='0 0 20 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M0 7.4979V6.4979C0 6.22176 0.223858 5.9979 0.5 5.9979H16.67L12.22 1.5579C12.1253 1.46402 12.0721 1.33622 12.0721 1.2029C12.0721 1.06958 12.1253 0.941782 12.22 0.847899L12.93 0.147899C13.0239 0.0532428 13.1517 0 13.285 0C13.4183 0 13.5461 0.0532428 13.64 0.147899L19.78 6.2779C19.9207 6.41842 19.9998 6.60905 20 6.8079V7.1879C19.9977 7.38631 19.9189 7.57618 19.78 7.7179L13.64 13.8479C13.5461 13.9426 13.4183 13.9958 13.285 13.9958C13.1517 13.9958 13.0239 13.9426 12.93 13.8479L12.22 13.1379C12.1259 13.0457 12.0729 12.9196 12.0729 12.7879C12.0729 12.6562 12.1259 12.5301 12.22 12.4379L16.67 7.9979H0.5C0.223858 7.9979 0 7.77404 0 7.4979Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
