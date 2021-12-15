import React from 'react';
import Collapsible from 'react-collapsible';

const Faq = () => {
  return (
    <>
      <section className='mt-10 sm:mt-8' id='faq'>
        <div className='max-w-7xl mx-auto px-4 sm:mt-24 sm:px-0 lg:mt-32 text-center'>
          <h2 className='text-primary sm:text-center text-xl sm:text-4xl tracking-wide leading-normal font-bold mb-6 sm:mb-10 uppercase'>
            Frequently Asked Questions
            <p className='pt-4 text-sm text-center'>
              PRICE : 0.04 ETH for Pre-Mint (Whitelisted users) - 0.05 ETH
              General Mint
            </p>
          </h2>
          <div className='px-4 pt-4 sm:pt-8'>
            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='Why Monalisaverse?'>
                  <span className='text-gray font-normal lowercase'>
                    because we are the first Italian (and international) NFT
                    project about a masterpiece such as the Mona Lisa; our
                    Roadmap explains our goals, and we have big plans for the
                    future
                  </span>
                </Collapsible>
              </div>
            </div>
            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='Why ETH network?'>
                  <span className='text-gray font-normal lowercase'>
                    it’s not the cheapest, surely, but it’s the safest and most
                    transparent for transactions.
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='Where will I see my NFTs?'>
                  <span className='text-gray font-normal lowercase'>
                    on your OpenSea connected with your wallet. You can also see
                    it on Metamask, in the NFTs section, ETH main network.
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
              <Collapsible trigger='When will I get my NFTs revealed?'>
                <span className='text-gray font-normal lowercase'>
                  the ones of the First drop (whitelisted and non whitelisted)
                  will ne all revealed on 25th Dec at 00:00AM CET (Midnight,
                  Italy time) 🎁
                </span>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
