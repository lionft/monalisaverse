import React, { useState } from 'react';
import Logo from '../images/logo.png';
const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className='bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between'>
            <div className='flex'>
              <div className='flex-shrink-0 flex items-center'>
                <a href='/' className='w-28 sm:w-48 h-auto justify-center'>
                  <img src={Logo} alt='logo' />
                </a>
              </div>
              <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
                <a href='#about' target='_self'>
                  <div className='text-default hover:text-primary px-3 py-2 font-medium'>
                    About
                  </div>
                </a>
                <a href='#feature' target='_self'>
                  <div className='text-default hover:text-primary px-3 py-2 font-medium'>
                    Features
                  </div>
                </a>
                <a href='#roadmap' target='_self'>
                  <div className='text-default hover:text-primary px-3 py-2 font-medium'>
                    Roadmap
                  </div>
                </a>
                <a href='#drops' target='_self'>
                  <div className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-default'>
                    Drops
                  </div>
                </a>
                <a href='#team' target='_self'>
                  <div className='text-default hover:text-primary px-3 py-2 font-medium'>
                    Team
                  </div>
                </a>
                <a href='#faq' target='_self'>
                  <div className='text-default hover:text-primary px-3 py-2 font-medium'>
                    Faq
                  </div>
                </a>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center'>
                <ul className='flex justify-center items-center space-x-4'>
                  <li className='bg-white p-1.5 rounded-full hover:ring-2 hover:ring-primary'>
                    <a href='#'>
                      <svg
                        className='text-black w-4 h-4'
                        viewBox='0 0 18 17'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6.1296 6.47114L4.13391 5.55174C4.09828 5.51638 4.027 5.55174 3.99137 5.62247L1.92441 10.8913C1.88877 10.962 1.96005 11.0328 2.03132 11.0328H6.09396C6.16524 11.0328 6.20087 10.9974 6.20087 10.9267V6.54186C6.20087 6.5065 6.16524 6.47114 6.1296 6.47114ZM17.9255 11.8107C17.8542 11.74 17.7473 11.74 17.6404 11.7754L17.391 11.8814C16.1793 12.4826 14.8251 12.7655 13.4709 12.7655C13.3996 12.7655 13.3639 12.8008 13.3639 12.8362C13.2214 13.4727 12.6868 13.9324 12.0097 13.9324H9.23004V11.6339H9.26567C9.44386 11.6693 9.58641 11.6693 9.76459 11.7046C10.9406 11.8814 11.5108 12.4119 11.7603 12.6594L11.7959 12.6947C11.8315 12.7301 11.9028 12.7301 11.9385 12.6947C11.9741 12.6594 12.0097 12.624 12.081 12.5887C12.5087 12.3058 13.5065 11.7046 13.5065 8.5221C13.5065 5.26885 11.0119 3.07644 10.7268 2.935L9.26567 2.82891H9.23004V1.90952C9.51513 1.73271 9.72896 1.41446 9.72896 1.02548C9.72896 0.459699 9.30131 0 8.73111 0C8.16092 0 7.73327 0.459699 7.73327 1.02548C7.73327 1.3791 7.91146 1.69735 8.23219 1.87416V2.65211L6.1296 2.43994C6.02269 2.43994 5.95141 2.54602 6.02269 2.61674C6.37906 3.18253 7.34126 4.9506 7.41254 7.6027C7.48381 10.078 7.0918 11.2449 6.91362 11.6693C6.87798 11.7046 6.87798 11.74 6.91362 11.7754C6.94925 11.8107 6.98489 11.8107 7.02053 11.8107C7.26999 11.7754 7.69763 11.7046 8.23219 11.6693V13.9678H5.91577C5.16739 13.9678 4.52592 13.3313 4.52592 12.5887V12.0229C4.52592 11.9522 4.49029 11.9168 4.41901 11.9168H0.106911C0.0712741 11.9168 0 11.9522 0 12.0229C0 12.129 0 12.235 0 12.3411C0 13.9324 0.463284 15.3822 1.2473 16.6552C1.38985 16.8674 1.63931 16.9735 1.85313 16.8674L2.31642 16.6552C2.67279 16.4784 3.10044 16.4784 3.49245 16.6552L3.99137 16.8674C4.34774 17.0442 4.77538 17.0442 5.16739 16.8674L5.66632 16.6552C6.05832 16.4784 6.45033 16.4784 6.84234 16.6552L7.34126 16.8674C7.73327 17.0442 8.12528 17.0442 8.51729 16.8674L9.01621 16.6552C9.40822 16.4784 9.80023 16.4784 10.1922 16.6552L10.6912 16.8674C11.0832 17.0442 11.4752 17.0442 11.8672 16.8674L12.3661 16.6552C12.7581 16.4784 13.1501 16.4784 13.5421 16.6552L14.0411 16.8674C14.3618 17.0088 14.7182 16.832 14.8964 16.5138C15.1814 16.0541 15.4309 15.5237 15.6091 15.0286C16.0011 13.8617 16.7138 12.7655 17.8186 12.235C17.9255 12.1997 17.9612 12.0936 17.9612 11.9875C18.0324 11.9522 17.9968 11.8461 17.9255 11.8107Z'
                          fill='currentColor'
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className='bg-white p-1.5 rounded-full hover:ring-2 hover:ring-primary'>
                    <a href='#'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 448 512'
                        className='text-black w-4 h-4'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'></path>
                      </svg>
                    </a>
                  </li>
                  <li className='bg-white p-1.5 rounded-full hover:ring-2 hover:ring-primary'>
                    <a href='#'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 448 512'
                        className='text-black w-4 h-4'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
                      </svg>
                    </a>
                  </li>
                  <li className='bg-white p-1.5 rounded-full hover:ring-2 hover:ring-primary'>
                    <a href='#'>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 512 512'
                        className='text-black w-4 h-4'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
                      </svg>
                    </a>
                  </li>
                  <li className='p-1.5'>
                    <div className='inline-block btn-gradient p-0.5 btn-animate max-w-max'>
                      <a
                        target='_blank'
                        className='uppercase text-default font-bold text-sm tracking-wider h-14 px-8 flex items-center btn-bg-gradient'
                        href='#'
                      >
                        <span>Join our Discord</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='flex items-center md:hidden'>
                <button
                  className='inline-flex items-center justify-center p-2 rounded-md text-default hover:text-white focus:outline-none focus:ring-0'
                  id='headlessui-disclosure-button-1'
                  type='button'
                  aria-expanded='true'
                  aria-controls='headlessui-disclosure-panel-2'
                  onClick={(e) => {
                    setShowNav(!showNav);
                  }}
                >
                  <span className='sr-only'>Open main menu</span>

                  {!showNav && (
                    <svg
                      className='block h-6 w-6'
                      aria-hidden='true'
                      viewBox='0 0 17 6'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <line y1='0.5' x2={17} y2='0.5' stroke='currentColor' />
                      <line y1='5.5' x2={17} y2='5.5' stroke='currentColor' />
                    </svg>
                  )}

                  {showNav && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='block h-6 w-6'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${showNav ? 'block' : 'hidden'} md:hidden`}
          id='headlessui-disclosure-panel-2'
        >
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <a href='#about' target='_self'>
              <div className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-default'>
                About
              </div>
            </a>
            <a href='#features' target='_self'>
              <div className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-default'>
                Features
              </div>
            </a>
            <a href='#roadmap' target='_self'>
              <div className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-default'>
                Roadmap
              </div>
            </a>
            <a href='#drops' target='_self'>
              <div className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-default'>
                Drops
              </div>
            </a>
            <a href='#team' target='_self'>
              <div className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-default'>
                Team
              </div>
            </a>
            <a href='#faq' target='_self'>
              <div className='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white text-default'>
                Faq
              </div>
            </a>
          </div>
          <div className='pt-4 pb-3 border-t border-gray-700'>
            <ul className='flex justify-center space-x-4'>
              <li className='bg-white p-1.5 rounded-full'>
                <a target='_blank' href='#.'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 448 512'
                    className='text-black w-4 h-4'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                  </svg>
                </a>
              </li>
              <li className='bg-white p-1.5 rounded-full'>
                <a target='_blank' href='#.'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 512 512'
                    className='text-black w-4 h-4'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z' />
                  </svg>
                </a>
              </li>
              <li className='bg-white p-1.5 rounded-full'>
                <a target='_blank' href='#.'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth={0}
                    viewBox='0 0 640 512'
                    className='text-black w-4 h-4'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z' />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
