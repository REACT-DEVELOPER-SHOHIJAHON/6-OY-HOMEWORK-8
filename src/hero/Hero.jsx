import Hero_1 from '../assets/Hero_1.png';
import Hero_2 from '../assets/Hero_2.png';
import staticPng from '../assets/static.png';
import { Button } from 'antd';
import "../hero/Hero.css";

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero__container">
                <div className="hero__wrapper">
                    <div className='hero__cards'>
                        <div className='hero__card'>
                            <img className='hero__image' src={Hero_1} alt="Hero 1" />
                            <div className='hero__content'>
                                <h2 className='hero__title'>
                                    The Best Platform for Car Rental
                                </h2>
                                <p className='hero__description'>
                                    Ease of doing a car rental safely and reliably. Of course at a low price.
                                </p>
                                <Button type="primary" className='hero__button'>
                                    Rental Car
                                </Button>
                            </div>
                        </div>
                        <div className='hero__card'>
                            <img className='hero__image' src={Hero_2} alt="Hero 2" />
                            <div className='hero__content'>
                                <h2 className='hero__title'>
                                    Easy way to rent a car at a low price
                                </h2>
                                <p className='hero__description'>
                                    Providing cheap car rental services and safe and comfortable facilities.
                                </p>
                                <Button type="primary" className='hero__button'>
                                    Rental Car
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='hero__action'>
                        <img className='hero__static' src={staticPng} alt="Static" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
