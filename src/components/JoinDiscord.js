import React from 'react';

const JoinDiscord = () => {
  return (
    <>
      <section className='mt-10 sm:mt-auto py-6 sm:py-20 text-center'>
        <h2 className='text-primary uppercase text-lg font-semibold mb-6'>
          THE PARTY NEVER STOPS
        </h2>
        <h3 className='mx-auto flex flex-col sm:flex-row text-3xl sm:text-5xl font-bold mb-10 tracking-wide justify-center'>
          <span className='w-auto text-default'>Get Aped with Us!</span>
          <span className='w-auto text-default sm:text-white sm:ml-3'>
            Join our Discord
          </span>
        </h3>
        <div className='container flex flex-row justify-center flex-wrap gap-4 mx-auto'>
          <div className='inline-block btn-gradient p-0.5 btn-animate max-w-max '>
            <a
              target='_blank'
              className='uppercase text-default font-bold text-sm tracking-wider h-14 px-8 flex justify-center items-center btn-bg-gradient focus:outline-none'
              href='#'
            >
              <span>Let's Start</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinDiscord;
