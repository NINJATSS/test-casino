import React from 'react'
import image from './image.png'

export default {
  name: 'HiLo',
  short_name: 'hilo',
  description: '',
  creator: '399KgE5gpzFvBB8arZLxA2bes3n4FY7rTMmzifHohPzx',
  image,
  app: React.lazy(() => import('./App')),
}
