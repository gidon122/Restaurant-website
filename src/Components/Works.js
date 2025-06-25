import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const works = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Choose from our delicious meals and pick your favorites.",
    },
    {
      image: ChooseMeals,
      title: "Choose Meals",
      text: "Select the meals you want to enjoy this week.",
    },
    {
      image: DeliveryMeals,
      title: "Delivery Meals",
      text: "Get your meals delivered right to your doorstep.",
    },
  ];
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How it works</h1>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem, 
                expedita facilis ex fugiat laboriosam laborum eaque unde ducimus ratione
                earum dolore molestias. Necessitatibus, dolores perspiciatis?
            </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default works;