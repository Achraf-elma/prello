import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {

    caption: 'Manage your projects with ease',
    header: 'Create, add and manage your teams'
  },
  {
    caption: 'To keep you updated on your cards',
    header: 'Download our mobile app'
  },
  {
    caption: 'And with the best services',
    header: 'It\'s all free'
  }
  
];

const CarouselofFeatures = () => <UncontrolledCarousel ride={1000} items={items} />;

export default CarouselofFeatures;
