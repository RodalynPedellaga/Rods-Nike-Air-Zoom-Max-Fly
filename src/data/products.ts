import type { Product } from '../types'

export const initialProducts: Product[] = [
  {
    id: 'maxfly-100',
    image: 'https://www.misterrunning.com/images/2022-media-6/nike-air-alphafly-next-flyknit-scarpe-running-donna-mint-foam-dv9425-300_A.jpg',
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
    image: 'https://i.ebayimg.com/images/g/9w4AAOSwb45mPSdm/s-l400.jpg',
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
  {
    id: 'garmin-forerunner-970',
    image: 'https://ph.garmin.com/m/ph/g/products/forerunner-745-black-cf-lg.jpg',
    name: 'Garmin Forerunner 970',
    category: 'Running Smartwatch',
    description:
      'Premium GPS running and triathlon smartwatch with an AMOLED display, built-in LED flashlight and enhanced navigation plus advanced training and recovery features.',
    specs: 'AMOLED display, GPS, LED flashlight, advanced training metrics',
    rating: 4.6,
    price: 816.25,
    quantity: 5,
  },
]
