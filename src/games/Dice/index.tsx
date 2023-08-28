import React from 'react'
import image from './image.png'

export default {
  name: 'Dice',
  short_name: 'dice',
  description: '',
  creator: '399KgE5gpzFvBB8arZLxA2bes3n4FY7rTMmzifHohPzx',
  image,
  theme_color: '#ad6bff',
  app: React.lazy(() => import('./App')),
}
