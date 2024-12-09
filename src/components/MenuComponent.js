import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

const Menu = ({ dishes }) => {
  console.log(dishes); // Verifique os pratos no console para depuração

  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const menu = dishes.map((dish) => (
    <div className="col-12 col-md-5 m-1" key={dish.id}>
      <Card onClick={() => onDishSelect(dish)} className="dish-card">
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{menu}</div>
      {selectedDish && <DishDetail dish={selectedDish} />}
    </div>
  );
};

export default Menu;
