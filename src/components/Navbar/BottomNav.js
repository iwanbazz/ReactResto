import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import PersonIcon from '@material-ui/icons/Person'
import { useSelector } from 'react-redux'
import messages from './../../assets/Local/messages'

const useStyles = makeStyles({
  root: {
    '& .Mui-selected': {
      color: '#FF4500',
    },
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
  const lang = useSelector((state) => state.lang)
  const message = messages[lang]
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(_event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        value="home"
        label={message.bottom.menu}
        icon={<RestaurantIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/orders"
        value="orders"
        label={message.bottom.orders}
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/promotions"
        value="promotions"
        label={message.bottom.promotions}
        icon={<CardGiftcardIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/profile"
        value="profile"
        label={message.bottom.account}
        icon={<PersonIcon />}
      />
    </BottomNavigation>
  )
}
