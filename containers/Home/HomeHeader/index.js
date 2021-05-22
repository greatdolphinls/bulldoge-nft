
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography
} from '@material-ui/core'
import clsx from 'clsx'

import ContainedButton from 'components/UI/Buttons/ContainedButton'
import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import {
  BULLDOGE_FACE_ICON_PATH,
  HOME_HEADER_BONE_BACKGROUND_PATH
} from 'utils/constants/image-paths'
import LINKS from 'utils/constants/links'
import { useCommonStyles } from 'styles/use-styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(15, 0),
    backgroundImage: `url(${HOME_HEADER_BONE_BACKGROUND_PATH})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    }
  },
  title: {
    fontSize: 96,
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: 64,
    },
  },
  description: {
    fontSize: 20,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      textAlign: 'center',
    },
  },
  buttonContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  nftButton: {
    fontSize: 24,
    marginRight: theme.spacing(5),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.text.secondary,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2.5),
    }
  },
  buyButton: {
    fontSize: 24,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    maxWidth: 500,
    objectFit: 'contain',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2.5),
    }
  }
}));

const HomeHeader = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <section className={classes.root}>
      <Grid container className={clsx(classes.container, commonClasses.containerWidth)} >
        <Grid item sm={12} md={6}>
          <Typography
            variant='h5'
            color='textSecondary'
          >
            Welcome
          </Typography>
          <Typography
            variant='h1'
            color='textSecondary'
            className={classes.title}
          >
            BullDoge
          </Typography>
          <Typography
            variant='h5'
            color='textSecondary'
            className={classes.description}
          >
            The BullDoge Protocol is a community driven, fair launched
            DeFi Token with an NFT Farm. Three simple functions occur
            during each trade: Reflection, LP Acquisition, and Burn.
          </Typography>

          <div className={classes.buttonContainer}>
            <ContainedButton
              href={LINKS.NFT_FARM.HREF}
              className={classes.nftButton}
            >
              NFT Farm
            </ContainedButton>
            <OutlinedButton className={classes.buyButton}>
              Buy Now
            </OutlinedButton>
          </div>
        </Grid>
        <Grid item sm={12} md={6} className={classes.imageContainer} >
          <img
            alt='bulldoge face'
            src={BULLDOGE_FACE_ICON_PATH}
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default memo(HomeHeader);