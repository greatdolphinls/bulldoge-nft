
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import HomeHeader from './HomeHeader'
import HomeCommunity from './HomeCommunity'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HomeHeader />
      <HomeCommunity />
    </div>
  )
}

export default memo(Home)