import type { Product } from '../types'

export const initialProducts: Product[] = [
  {
    id: 'maxfly-100',
    image: 'https://cdn.pixabay.com/photo/2015/02/09/13/40/shoe-629643_640.jpg',
    name: 'Nike Air Zoom Maxfly 100',
    category: 'Sprint',
    description:
      'A lightweight sprint spike engineered for explosive starts and maximum energy return.',
    specs: 'Carbon plate, Zoom Air pods, Ultra-light mesh upper',
    rating: 4.8,
    price: 220,
    quantity: 6,
  },
  {
    id: 'maxfly-200',
    image: 'https://cdn.pixabay.com/photo/2014/06/18/18/41/running-shoe-371624_640.jpg',
    name: 'Nike Air Zoom Maxfly 200',
    category: 'Middle Distance',
    description:
      'Balanced cushioning and responsiveness for 200–400m events with stable heel support.',
    specs: 'Responsive foam, breathable knit upper',
    rating: 4.6,
    price: 240,
    quantity: 3,
  },
  {
    id: 'maxfly-hurdle',
    image: 'https://cdn.pixabay.com/photo/2019/09/28/12/31/sports-shoes-4510638_640.jpg',
    name: 'Nike Air Zoom Maxfly Hurdle',
    category: 'Hurdles',
    description:
      'Optimized spike plate and toe stiffness for hurdle clearance and sprint acceleration.',
    specs: 'Hurdle-specific plate, reinforced toe',
    rating: 4.7,
    price: 230,
    quantity: 2,
  },
]
