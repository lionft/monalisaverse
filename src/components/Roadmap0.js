import React from 'react';

const Roadmap = () => {
  return (
    <>
      <section
        className='mt-8 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-24 text-center'
        id='roadmap'
      >
        <h2 className='text-default sm:text-center text-2xl sm:text-4xl tracking-wide leading-normal font-bold mb-6 sm:mb-10 uppercase'>
          Launch Roadmap
        </h2>
        <div className='bcm text-gray text-sm sm:text-base sm:w-7/12 px-2 sm:px-6 mx-auto mb-10'>
          <p>
            As we value our community and its creativity, our roadmap will be
            updated according to your comments and ideas.
          </p>
        </div>
        <div className='flex flex-col space-y-5 sm:space-y-8'>
          <div className='grid grid-cols-12 gap-3 sm:gap-16 items-start sm:items-center justify-center'>
            <div className='flex col-span-2 py-4 sm:py-12 border border-default border-opacity-30 text-sm sm:text-4xl font-bold  text-primary items-center justify-center'>
              10 <span className='text-xs sm:text-base'>%</span>
            </div>
            <div className='text-left col-span-10 space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base uppercase font-semibold text-default'>
                Grand Opening
              </p>
              <p className='text-xs sm:text-base text-gray'>
                Congratulations, you are on the guest list. Give your name to
                the bouncer and jump the line. Join the community on Discord.
                Get Aped up with us.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-3 sm:gap-16 items-start sm:items-center justify-center'>
            <div className='flex col-span-2 py-4 sm:py-12 border border-default border-opacity-30 text-sm sm:text-4xl font-bold  text-primary items-center justify-center'>
              20 <span className='text-xs sm:text-base'>%</span>
            </div>
            <div className='text-left col-span-10 space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base uppercase font-semibold text-default'>
                ROUND OF SHOTS
              </p>
              <p className='text-xs sm:text-base text-gray'>
                A $30,000 fund is available to finance the community’s
                creations, designs, and development. Also, 1% of the OpenSea
                fees are dedicated to this special fund, ensuring the
                Billionaire’s club longevity through common projects.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-3 sm:gap-16 items-start sm:items-center justify-center'>
            <div className='flex col-span-2 py-4 sm:py-12 border border-default border-opacity-30 text-sm sm:text-4xl font-bold  text-primary items-center justify-center'>
              40 <span className='text-xs sm:text-base'>%</span>
            </div>
            <div className='text-left col-span-10 space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base uppercase font-semibold text-default'>
                DON’T STOP THE MUSIC
              </p>
              <p className='text-xs sm:text-base text-gray'>
                Access to an Exclusive investments and business club (meetings,
                conferences, social events)… That’s not all, the lucky owners of
                our SPECIAL EDITION pieces will get monthly rewards and gifts as
                $500/month.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-3 sm:gap-16 items-start sm:items-center justify-center'>
            <div className='flex col-span-2 py-4 sm:py-12 border border-default border-opacity-30 text-sm sm:text-4xl font-bold  text-primary items-center justify-center'>
              60 <span className='text-xs sm:text-base'>%</span>
            </div>
            <div className='text-left col-span-10 space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base uppercase font-semibold text-default'>
                CHAMPAGNE SHOWER
              </p>
              <p className='text-xs sm:text-base text-gray'>
                In the Billionaire club, we are dedicated to giving back. For
                that reason, $30,000 will be given to a reputable charity picked
                by the community during a vote on Discord. Started from the
                bottom, we don’t forget where we come from.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-12 gap-3 sm:gap-16 items-start sm:items-center justify-center'>
            <div className='flex col-span-2 py-4 sm:py-12 border border-default border-opacity-30 text-sm sm:text-4xl font-bold  text-primary items-center justify-center'>
              80 <span className='text-xs sm:text-base'>%</span>
            </div>
            <div className='text-left col-span-10 space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base uppercase font-semibold text-default'>
                MAKE IT RAIN
              </p>
              <p className='text-xs sm:text-base text-gray'>
                Daily raffles for an entire month with a chance to win $1000 per
                day. Monthly surprises for Party APE Holders : unlock exclusive
                merch release from the Billionaire Club’s Clockroam for holders.
                We will also create collectible figures and launch
                collaborations with artists. You will have to stay in touch for
                monthly Airdrops with future benefits.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-3 sm:gap-16 items-start sm:items-center justify-center'>
            <div className='flex col-span-2 py-4 sm:py-12 border border-default border-opacity-30 text-sm sm:text-4xl font-bold  text-primary items-center justify-center'>
              100 <span className='text-xs sm:text-base'>%</span>
            </div>
            <div className='text-left col-span-10 space-y-1 sm:space-y-3'>
              <p className='text-xs sm:text-base uppercase font-semibold text-default'>
                AFTER PARTY
              </p>
              <p className='text-xs sm:text-base text-gray'>
                100% The Party Ape liquidity pool is initiated. It’s time to
                initiate the next steps. Holders spotting the chapter two clues
                will have access to early rewards giving them a major heads up.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
