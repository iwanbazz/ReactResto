import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import PersonIcon from '@material-ui/icons/Person'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    boxShadow: '0 -1px 1px 0 rgba(0,0,0,.1)',
    backgroundColor: 'white',
    fontSize: '.53rem',
    fontWeight: 500,
    textDecoration: 'none',
  },
})

export default function BottomNav() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        fontSize="small"
        label="Menu"
        icon={<RestaurantIcon />}
      />
      <BottomNavigationAction label="Orders" icon={<ShoppingBasketIcon />} />
      <BottomNavigationAction label="Promotions" icon={<CardGiftcardIcon />} />
      <BottomNavigationAction label="Account" icon={<PersonIcon />} />
    </BottomNavigation>
  )
}
