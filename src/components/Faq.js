import React from 'react';
import Collapsible from 'react-collapsible';

const Faq = () => {
  return (
    <>
      <section className='mt-10 sm:mt-8' id='faq'>
        <div className='max-w-7xl mx-auto px-4 sm:mt-24 sm:px-0 lg:mt-32 text-center'>
          <h2 className='text-primary sm:text-center text-xl sm:text-4xl tracking-wide leading-normal font-bold mb-6 sm:mb-10 uppercase'>
            Frequently Asked Questions
          </h2>
          <div className='px-4 pt-4 sm:pt-8'>
            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='Where can I view my NFTs ?'>
                  <span className='text-gray font-normal lowercase'>
                    Once minted, simply connect to your OpenSea account to view
                    your NFTs.
                  </span>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
