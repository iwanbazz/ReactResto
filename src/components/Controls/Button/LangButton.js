import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'

export const LangBtn = ({ text, handleClick }) => {
  const WhiteTextButton = withStyles((theme) => ({
    root: {
      '& .MuiIconButton-label': {
        color: 'white',
        fontSize: 13,
      },
    },
  }))(IconButton)

  return (
    <WhiteTextButton fontSize="small" onClick={handleClick}>
      {text}
    </WhiteTextButton>
  )
}
