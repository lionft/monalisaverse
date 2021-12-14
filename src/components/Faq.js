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

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='HOW CAN I USE MY NFT ?'>
                  <span className='text-gray font-normal lowercase'>
                    You will be able to use your NFT as an avatar in the
                    metaverse and our future video game.
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='WHAT IS THE METAVERSE ?'>
                  <span className='text-gray font-normal lowercase'>
                    The Metaverse refers to a shared virtual experience where
                    land, avatars and names can be bought and sold, often using
                    cryptocurrency. The future phases in the Billionaire club's
                    roadmap will allow you to join this Metaverse using the
                    assets you own.
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='WHAT ARE THE GOLDEN GUESTS ?'>
                  <span className='text-gray font-normal lowercase'>
                    The Golden Guests are the rarest NFTs of the Party Ape
                    Billionaire Club. Holding one of them (by lucky mint or
                    through secondary market) opens the doors to many advantages
                    and rewards. They will also be considered as VIP members of
                    the community.
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='WHY DO WE NEED ROYALTIES ?'>
                  <span className='text-gray font-normal lowercase'>
                    The amount of royalties was fixed at 10% to finance the
                    Billionaire Club's projects. We have the ambition to
                    organize multiple events around the world in order to
                    strengthen the community and build a network of
                    entrepreneurs and investors with the same mindset and common
                    interests. The funds collected will benefit the holders.
                    This percentage can decrease over time.
                  </span>
                </Collapsible>
              </div>
            </div>

            <div className='text-left border-b-2 border-default border-opacity-30'>
              <div className='py-4 sm:py-6 flex justify-between w-full text-sm sm:text-lg font-bold text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                <Collapsible trigger='WHY DID YOU CHOOSE APES ?'>
                  <span className='text-gray font-normal lowercase'>
                    When we created the Billionaire Club, the team was looking
                    for a realistic way to embody human features. After many
                    discussions, we ended up agreeing on the fact that there was
                    no better and smarter creature than the one pointed by
                    Darwin's theory as being the human ancestor : the ape.
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
