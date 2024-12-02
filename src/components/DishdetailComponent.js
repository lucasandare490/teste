import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = ({ dish }) => {
  const renderDish = (dish) => {
    if (dish) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
    return <div></div>;
  };

  const renderComments = (comments) => {
    if (comments) {
      return (
        <div>
          <h4>Comentários</h4>
          <ul className="list-unstyled">
            {comments.map((comment) => (
              <li key={comment.id} className="mb-3">
                <p>"{comment.comment}"</p>
                <p>
                  <strong>-- {comment.author}</strong>,{" "}
                  {new Date(comment.date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <div></div>;
  };

  if (!dish) {
    return (
      <div className="container">
        <p className="text-muted">Selecione um prato para ver os detalhes.</p>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>
      <div className="col-12 col-md-5 m-1">{renderComments(dish.comments)}</div>
    </div>
  );
};

export default DishDetail;
