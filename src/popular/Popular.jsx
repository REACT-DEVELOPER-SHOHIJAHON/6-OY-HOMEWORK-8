import React from 'react';
import favorite from '../assets/favorite.svg';
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import car4 from '../assets/car4.png';
import car5 from '../assets/car5.png';
import gasolines from '../assets/gasoline.svg';
import types from '../assets/type.svg';
import capacityc from '../assets/capacity.svg';
import "../popular/Popular.css";
import { Button } from 'antd';

const Popular = () => {
    const cars = [
        { name: 'Koenigsegg', type: 'Sport', image: car1, gasoline: '90L', transmission: 'Manual', capacity: '2', price: '$96.00' },
        { name: 'Nissan GT - R', type: 'Sport', image: car2, gasoline: '80L', transmission: 'Manual', capacity: '2', price: '$99.00' },
        { name: 'Rolls - Royce', type: 'Sport', image: car3, gasoline: '70L', transmission: 'Manual', capacity: '4', price: '$120.00' },
        { name: 'Nissan GT - R', type: 'Sport', image: car4, gasoline: '80L', transmission: 'Manual', capacity: '2', price: '$99.00' },
        { name: 'Porsche 911', type: 'Sport', image: car5, gasoline: '85L', transmission: 'Automatic', capacity: '2', price: '$110.00' },
        { name: 'Ferrari 488', type: 'Sport', image: car1, gasoline: '75L', transmission: 'Automatic', capacity: '2', price: '$130.00' },
        { name: 'Lamborghini Huracan', type: 'Sport', image: car2, gasoline: '95L', transmission: 'Automatic', capacity: '2', price: '$150.00' },
        { name: 'Aston Martin DB11', type: 'Sport', image: car3, gasoline: '80L', transmission: 'Automatic', capacity: '2', price: '$140.00' }
    ];

    return (
        <section className='popular'>
            <div className="popular__container">
                <div className="popular__wrapper">
                    <div className='popular__header'>
                        <p className='popular__title'>Popular Car</p>
                        <p className='popular__view-all'>View All</p>
                    </div>
                    <div className='popular__cars'>
                        {cars.map((car, index) => (
                            <div key={index} className='popular__car-item'>
                                <div className='popular__car-header'>
                                    <div className='popular__car-info'>
                                        <p className='popular__car-name'>{car.name}</p>
                                        <p className='popular__car-type'>{car.type}</p>
                                    </div>
                                    <img src={favorite} className='popular__car-favorite' alt='Favorite' />
                                </div>
                                <div className='popular__car-image-wrapper'>
                                    <img className='popular__car-image' src={car.image} alt={car.name} />
                                </div>
                                <div className='popular__car-details'>
                                    <p className='popular__car-gasoline'>
                                        <img src={gasolines} alt='Gasoline' />
                                        {car.gasoline}
                                    </p>
                                    <p className='popular__car-transmission'>
                                        <img src={types} alt='Transmission' />
                                        {car.transmission}
                                    </p>
                                    <p className='popular__car-capacity'>
                                        <img src={capacityc} alt='Capacity' />
                                        {car.capacity}
                                    </p>
                                </div>
                                <div className='popular__car-footer'>
                                    <strong className='popular__car-price'>
                                        {car.price}/ <span className='popular__car-price-day'>day</span>
                                    </strong>
                                    <Button className='popular__car-button' type="primary">
                                        Rent Now
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Popular;
