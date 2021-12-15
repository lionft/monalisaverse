import React from 'react';
import roadmapImage from '../images/roadmap.jpeg';

const Roadmap = () => {
  return (
    <>
      <section className='roadmap py-12 mt-12' id='roadmap'>
        <div className='roadmap__wrapper px-4 text-primary 2xl:px-72 mx-auto md:px-12'>
          <div
            className='roadmap__top flex flex-col pt-6'
            data-aos='fade-right'
            data-aos-duration='1200'
          >
            <h1 className='font-black font-heading text-4xl uppercase py-3 md:text-center lg:text-left 2xl:text-5xl'>
              Roadmap
            </h1>
            <p className='text-base leading-6 md:text-center md:text-lg md:leading-8 md:py-2 lg:text-left text-default 2xl:text-2xl'>
              Like any great self-respecting project, of course we set ourselves
              some goals and so at each step important updates will be released
              which will enhance more and more your Monalisa NFTs’ value.
              <br />
              <br />
              <strong>
                Let's see now step by step what it will mean to be the OWNER of
                a Monalisa NFT:
              </strong>
            </p>
          </div>
          <div className='main__roadmap'>
            {/* <h3 className='font-bold uppercase text-2xl text-btn pt-6'>
              roadmap
            </h3> */}
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='1500'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                15%
              </h1>
              <p className='text-default text-base 2xl:text-2xl'>
                Upon reaching 15% of Monalisa NFTs sold, our Monalisaverse
                merchandise will be released and you can request the printing of
                your Monalisa NFT on T-shirts, caps, sweatshirts, mugs and more.
                <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='1800'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                33%
              </h1>
              <p className='text-default text-base 2xl:text-2xl'>
                A plot of Land in the Metaverse for the purpose of organizing
                virtual art exhibitions will be purchased upon reaching the sale
                of 33% of Monalisa NFTs (sold out of the First Drop of 3333
                Monalisa NFTs, which will be released on December 18 th at 9pm
                CET, with a Pre-Mint sale only for the Whitelisted members on
                December 17 th at 9pm CET). <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='2100'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                45%
              </h1>
              <p className='text-default text-base 2xl:text-2xl'>
                Once we reach 45% of Monalisa NFTs sold, we will start the
                production of "canva" prints, so a faithful reproduction of the
                various Monalisa NFTs on canva. They can be purchased only if
                you are in possession of the same Monalisa NFT, instead if you
                are the owner of more than 10 Monalisa NFT, you’ll have the
                canva for free, if you wish. <br />
              </p>
            </div>
            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10'
              data-aos='fade-right'
              data-aos-duration='2400'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                66%
              </h1>
              <p className='text-default text-base 2xl:text-2xl'>
                Here the roadmap gets veryv interesting! With the sale of 66% ,
                so sold out of our First and Second drops, we will begin the
                creation of our dedicated Utility Token. This token will be used
                to buy any form of digital art created by us and not only. It
                can be obtained in different ways on the possession and sale of
                the Monalisa NFTs. <br />
              </p>
            </div>

            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10 '
              data-aos='fade-right'
              data-aos-duration='2700'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                75%
              </h1>
              <p className='text-default text-base 2xl:text-2xl'>
                We are at 3/4 of the total sale. We've decided to reward you
                nicely! A super giveaway of 10 ETH for the Monalisa NFT owners.
                A total of 10 prizes will be raffled off by dividing the loot
                equally. Winners will be randomly drawn, but the more Monalisa
                NFTs you own at the time of the giveaway, the greater your
                chances of winning the prize.
                <br />
              </p>
            </div>

            <div
              className='phases__container bg-secondary py-6 px-8 rounded-md mt-10 '
              data-aos='fade-right'
              data-aos-duration='2700'
            >
              <h1 className='text-btn font-bold font-body text-4xl 2xl:text-5xl uppercase leading-10 mb-2'>
                99%
              </h1>
              <div className='flex flex-wrap lg:flex-nowrap gap-8 items-center'>
                <p className='text-default text-base 2xl:text-2xl '>
                  Here we are at the end, but really it's only the beginning!{' '}
                  <br />
                  With the completion of the sale of the entire project, we will
                  start digital exhibits in the Metaverse and physical exhibits
                  in multiple museums around the world, where you can
                  participate by invitation only (or owning at least 1 Monalisa
                  NFT), where you will also be able to view, buy and auction the
                  rarest and most wonderful NFTs dedicated to art. The use of
                  the token, previously created and developed, will be also
                  encouraged, having great advantages and benefits.
                  <br />
                </p>
                <img
                  src={roadmapImage}
                  alt=''
                  className='max-w-full lg:w-1/5 rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
