import React from 'react'
import IconButton from '@material-ui/core/IconButton'

export const LangBtn = ({ text, handleClick }) => {
  return (
    <IconButton
      fontSize="small"
      style={{ color: 'white', fontSize: 13 }}
      onClick={handleClick}
    >
      {text}
    </IconButton>
  )
}
