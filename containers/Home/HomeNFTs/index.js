
import { memo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import OutlinedButton from 'components/UI/Buttons/OutlinedButton'
import { useCommonStyles } from 'styles/use-styles'
import SOCIALS from 'utils/constants/social'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    padding: theme.spacing(12, 0),
  },
  container: {
    width: '100%',
    margin: 0,
  },
  nftItem: {
    width: '100%',
    height: 300,
    objectFit: 'cover'
  },
  socialContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  socialButton: {
    fontSize: 24,
    minWidth: 200,
    margin: theme.spacing(2)
  }
}));

const HomeNFTs = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  return (
    <section className={classes.root}>
      <div className={commonClasses.containerWidth}>
        <Grid container className={classes.container} spacing={4}>
          {NFTs.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <img
                alt='nft item'
                src={item}
                className={classes.nftItem}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.socialContainer}>
          <OutlinedButton
            href={SOCIALS.TELEGRAM.HREF}
            className={classes.socialButton}
            target='_blank'
            rel='noreferrer'
          >
            TELEGRAM
          </OutlinedButton>
          <OutlinedButton
            href={SOCIALS.TWITTER.HREF}
            className={classes.socialButton}
            target='_blank'
            rel='noreferrer'
          >
            TWITTER
          </OutlinedButton>
          <OutlinedButton
            href={SOCIALS.REDDIT.HREF}
            className={classes.socialButton}
            target='_blank'
            rel='noreferrer'
          >
            REDDIT
          </OutlinedButton>
        </div>
      </div>
    </section>
  );
};

export default memo(HomeNFTs);

const NFTs = [
  'https://images.unsplash.com/photo-1517723223973-e41138b7cad6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVsbCUyMGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1576777267179-444aa266be5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVsbCUyMGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1569796922509-d2846284929e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnVsbCUyMGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1596080000902-c6d1062e4564?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVsbCUyMGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1559098517-fb7f50ca8bf3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1bGwlMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1584824388176-fee79746a11b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGJ1bGwlMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1617441086697-b2f4f97655ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGJ1bGwlMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1598132561069-c3d67dacb1a7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGJ1bGwlMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
]