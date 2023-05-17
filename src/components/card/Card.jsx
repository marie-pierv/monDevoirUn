import React from 'react';
import  './Card.css';
import Image from '../image/Image';
import CardTitle from '../card-title/Card-title';
import CardBody from '../card-body/CardBody';

const Card = () => {
  return (
    <article className='card'>
        <Image />
        <CardTitle />
        <CardBody />
    </article>
  );
};

export default Card;