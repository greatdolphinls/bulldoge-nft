
import { memo } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import ButtonLink from 'components/UI/Buttons/ButtonLink'
import TOP_BAR_MENU from 'utils/constants/top-bar-menu'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'unset',
    marginLeft: theme.spacing(2),
    color: theme.palette.text.primary
  },
  selected: {
    color: theme.palette.primary.main
  }
}));

const NavBarMenu = () => {
  const classes = useStyles();
  const router = useRouter()

  return (
    <div className={classes.root}>
      {TOP_BAR_MENU.map((item, index) => (
        <Button
          key={index}
          href={item.HREF}
          component={ButtonLink}
          className={clsx(classes.item, { [classes.selected]: item.HREF === router.pathname })}
        >
          {item.TITLE}
        </Button>
      ))}
    </div>
  );
};

export default memo(NavBarMenu);