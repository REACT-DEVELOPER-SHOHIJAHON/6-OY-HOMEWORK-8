import React from 'react';
import { Button } from 'antd';
import favorite from '../assets/favorite.svg';
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import car4 from '../assets/car4.png';
import car5 from '../assets/car5.png';
import gasolines from '../assets/gasoline.svg';
import types from '../assets/type.svg';
import capacityc from '../assets/capacity.svg';
import "../recom/Rec.css";

const carData = [
  { name: 'Koenigsegg', image: car2, gas: '90L', type: 'Manual', capacity: '2', price: '$99.00', id: 1 },
  { name: 'Nissan GT - R', image: car1, gas: '80L', type: 'Manual', capacity: '2', price: '$99.00', id: 2 },
  { name: 'Rolls - Royce', image: car5, gas: '70L', type: 'Manual', capacity: '4', price: '$96.00', id: 3 },
  { name: 'Nissan GT - R', image: car4, gas: '80L', type: 'Manual', capacity: '2', price: '$99.00', id: 4 },
  { name: 'Koenigsegg', image: car4, gas: '90L', type: 'Manual', capacity: '2', price: '$99.00', id: 5 },
  { name: 'Nissan GT - R', image: car2, gas: '80L', type: 'Manual', capacity: '2', price: '$99.00', id: 6 },
  { name: 'Rolls - Royce', image: car1, gas: '70L', type: 'Manual', capacity: '4', price: '$96.00', id: 7 },
  { name: 'Nissan GT - R', image: car3, gas: '80L', type: 'Manual', capacity: '2', price: '$99.00', id: 8 },
];

const Rec = () => {
  return (
    <section className='popular'>
      <div className="popular__container">
        <div className="popular__wrapper">
          <div className='popular__header'>
            <p className='popular__title'>Recommendation Car</p>
            <p className='popular__view-all'>View All</p>
          </div>
          <div className='popular__cars'>
            {carData.map(car => (
              <div key={car.id} className='popular__car-item'>
                <div className='popular__car-header'>
                  <div className='popular__car-info'>
                    <p className='popular__car-name'>{car.name}</p>
                    <p className='popular__car-type'>{car.type}</p>
                  </div>
                  <img src={favorite} alt="Favorite" className='popular__car-favorite' />
                </div>
                <div className='popular__car-image-wrapper'>
                  <img src={car.image} alt={car.name} className='popular__car-image' />
                </div>
                <div className='popular__car-details'>
                  <p className='popular__car-gasoline'>
                    <img src={gasolines} alt="Gasoline" />
                    {car.gas}
                  </p>
                  <p className='popular__car-transmission'>
                    <img src={types} alt="Type" />
                    {car.type}
                  </p>
                  <p className='popular__car-capacity'>
                    <img src={capacityc} alt="Capacity" />
                    {car.capacity}
                  </p>
                </div>
                <div className='popular__car-footer'>
                  <div className='popular__car-price'>
                    {car.price} <span className='popular__car-price-day'>/day</span>
                  </div>
                  <Button className='popular__car-button' type="primary">Rent Now</Button>
                </div>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center py-16 relative'>
            <button className='popular__show-more-button'>Show more cars</button>
            <p className='popular__total-cars'>120 Cars</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rec;
