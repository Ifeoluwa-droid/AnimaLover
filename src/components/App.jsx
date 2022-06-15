import React from 'react';
import Header from './Header';
import Article from './Article';
import ArticleHeading from './ArticleHeading';
import Heading from './Heading';
import Button from './Button';
import Image, { ImageWithChild } from './Image';
import ArticleHighlight from './ArticleHighlight';
import Video from './Video';
import Footer from './Footer';

function App() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <div id="main__section-1">
                        <h1 className="fs-4 fw-5">Wildlife Reserve</h1>
                        <h2 className='fs-3 fw-4'><span className='text-color-accent'>Keep Saving</span> All Animals</h2>
                        <p className='mtb-1-5 w-3-5'>Protect animals from poaching. Protect the future of animal diversity as living things on earth.</p>
                    </div>

                    <div className='d-flex-row' id="main__section-2">
                        <Video 
                            className="main__section-2-video"
                            width='62%'
                            src='videos/elephant-video.mp4'
                        />
                        <div>
                            <Article
                                articleStyle={{padding: '14rem 3.5rem 3.5rem 3.5rem'}}
                                articleClassName='special'
                                serial='01'
                                label='Wild Life Video'
                                title="Elephant Wild life"
                                titleClassName='fs-1-5 fw-5'
                                content="Herd of elephants are starting to be seen again after migrating."
                                contentClassName='fw-3 fs-0-8 mtb-3 w-7'
                                displayArrows={true}
                                slide={true}
                                hasButtons={false}
                            />
                        </div>
                    </div>

                    <div>
                        <div className='main__section-2-article-and-child d-flex-row mt-5'>
                            <ImageWithChild
                                className="img-with-child"
                                src="./images/vulture.jpeg" 
                                alt="vulture-img"
                                imgClassName='w-10 h-mp flip'
                                headingClassName='fs-2'
                                style={{height: '600px'}}
                                childText='Trade in endangered species is becoming increasingly common. Birds are the most common animals found in illegal markets.'
                                childClassName='w-6 p-4 child-in-img'
                                childStyle={{background: '#333', opacity: '.8', transform: 'scale(0.8)', bottom: '-7%', left: '-6%'}}
                                childTextClassName='mtb-3 lh-2'
                            />
                            <Article 
                                articleClassName='p-5 w-5'
                                serial="02"
                                label="Wild Life Trade"
                                title="Birds that are rarely seen in the 21st century"
                                titleClassName='fs-3 fw-5 mtb-2 main__section-2-article-title'
                                content="This is due to illegal hunting and the rampant sale of rare animals. Some of these birds are already very difficult for us to meet again."
                                contentClassName="fw-3 fs-0-8 lh-2 w-6 mtb-2"
                                hasButtons={true}
                                btnContainerClassName='mt-3'
                                leftButtonClassName='bg-color-accent ptb-1 plr-1-5'
                                leftButtonText="Discover More"
                                rightButtonClassName='bg-color-dark ptb-1 plr-1-5'
                                rightButtonText="Discover More"
                            />
                        </div>
                        <div className='main__section-2-article-and-child d-flex-row'>
                            <Article 
                                articleClassName='p-5 w-5'
                                serial="03"
                                label="Wildlife Trade Hotline"
                                title="Contact us if you find a wildlife trade"
                                titleClassName='fs-3 fw-5 mtb-2 main__section-2-article-title'
                                content="We try to solve all cases related to the trade in endangered animals. Rare wildlife trade cases are slowly starting to emerge."
                                contentClassName="fw-3 fs-0-8 lh-2 w-6 mtb-2"
                                hasButtons={true}
                                btnContainerClassName='mt-3'
                                leftButtonClassName='bg-color-accent ptb-1 plr-1-5'
                                leftButtonText="See More"
                                rightButtonClassName='bg-color-dark ptb-1 plr-1-5'
                                rightButtonText="Report case"
                            />
                            <ImageWithChild
                                className="img-with-child"
                                src="./images/male-deer-1.jpg" 
                                alt="vulture-img"
                                imgClassName='w-10 h-mp flip'
                                headingClassName='fs-2'
                                style={{height: '600px'}}
                                childText='Trade in endangered species is becoming increasingly common. Birds are the most common animals found in illegal markets.'
                                childClassName='d-flex-row align-center child-in-img gap-2'
                                childStyle={{background: '#333', opacity: '.8', transform: 'scale(0.8)', bottom: '-3.8%', left: '-11.5%', padding: '1rem 3rem'}}
                                childTextClassName='mtb-3 lh-2'
                                childTextStyle={{marginBottom: '.6rem 0'}}
                            />
                        </div>
                    </div>
                </section>


                <section className='ptb-5 plr-5 d-flex-col gap-5'>
                    <div className='d-flex-row main__section-3-article'>
                        <div>
                            <ArticleHeading 
                                serial='04'
                                label='Article and News'
                            />
                            <Heading 
                                text='We Provide all information about Wild Life'
                                className='fs-4 fw-5 w-7 main__section-3-heading'
                            />
                        </div>
                        <div className='d-flex-col justify-end'>
                            <p className="lh-2 w-7 mb-3 fw-3">The Borneo lowland rain forests is an ecoregion, within the tropical and subtropical moist broadleaf forests biome, of the large.</p>
                            <Button 
                                text='See More'
                                className='bg-color-accent text-color-white ptb-1 plr-2'
                            />
                        </div>
                    </div>

                    <div className='d-grid gap-2' style={{height:'fit-content'}}>
                        <ArticleHighlight 
                            style={{gridRow: '1', gridColumn: '1'}}
                            className='bg-color-accent text-color-white p-3 h-fc'
                            label='NEWS | July 6, 2022'
                            title='2022 - The Impact of the Pandemic on Wild Animals'
                            titleClassName='mb-2 fv-2 fw-4'
                            buttonText='See More'
                            buttonClassName='fs-0-8 fw-3'
                        />
                        <Image 
                            style={{gridRow: '1 / 3', gridColumn: '2'}}
                            className='w-10 main__section-3-img'
                            src="./images/elephant-image.jpg"
                            alt="elephant-img"
                        />
                        <Image 
                            style={{gridRow: '1', gridColumn: '3'}}
                            className='w-10 main__section-3-img'
                            src="./images/leopard.jpeg" 
                            alt="leopard-img"
                        />
                        <Image 
                            style={{gridRow: '2', gridColumn: '1', transform: 'translateY(-30%)'}}
                            className='w-10 main__section-3-img'
                            src='./images/male-deer2.jpeg'
                            alt='deer-img'
                        />
                        <Image 
                            style={{gridRow: '3', gridColumn: '2', transform: 'translateY(-80%)'}}
                            className='w-10 main__section-3-img'
                            src='./images/meerkat.jpg'
                        />
                         <ArticleHighlight 
                            style={{gridRow: '2', gridColumn: '3'}}
                            className='bg-color-accent text-color-white p-3 h-fc'
                            label='NEWS | May 24, 2022'
                            title='The emergence of new animals during a pandemic'
                            titleClassName='mb-2 fv-2 fw-4'
                            buttonText='See More'
                            buttonClassName='fs-0-8 fw-3'
                        />
                        <ArticleHighlight 
                            style={{gridRow: '3', gridColumn: '1', transform: 'translateY(-50%)'}}
                            className='bg-color-dark text-color-white p-3 h-fc main__section-3-article-3'
                            label='- ARTICLE'
                            title='The male deer which is now becoming extinct due to poaching'
                            titleClassName='mb-2 fv-2 fw-4'
                            buttonText='See More'
                            buttonClassName='fs-0-8 fw-3'
                        />
                        <Image 
                        style={{gridRow: '3', gridColumn: '3', transform: 'translateY(-70%)'}}
                        className='w-10 h-10 main__section-3-img'
                            src='./images/monkey.jpeg'
                        />
                    </div>
                </section>

                <Footer />
            </main>
        </div>   
    );
}

export default App;


