import React from 'react'
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";


interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { year, make, model} = car;

  return (
    <div className="car-card group"> 
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model} 
        </h2>
      </div>

      <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
          />
        </div>



  </div>
  )
}

export default CarCard