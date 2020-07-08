import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded'

export const CartBtn = ({ handleClick }) => {
  return (
    <IconButton
      style={{ color: 'white' }}
      fontSize="small"
      onClick={handleClick}
    >
      <RestaurantMenuRoundedIcon />
    </IconButton>
  )
}
