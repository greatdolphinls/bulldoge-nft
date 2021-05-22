
import { memo } from 'react'

import HomeHeader from './HomeHeader'

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeHeader />
    </div>
  )
}

export default memo(Home)