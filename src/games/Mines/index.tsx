import React from 'react'

import image from './image.png'

export default {
  name: 'Mines',
  short_name: 'mines',
  description: '',
  creator: '399KgE5gpzFvBB8arZLxA2bes3n4FY7rTMmzifHohPzx',
  theme_color: '#ff6a6a',
  image,
  app: React.lazy(() => import('./App')),
}
