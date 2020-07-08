import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import messages from './../../assets/Local/messages'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentLang } from '../../store/actions/Lang'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { LangBtn } from '../Controls/Button/LangButton'
import { CartBtn } from '../Controls/Button/CartButton'

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const lang = useSelector((state) => state.lang)
  const dispatch = useDispatch()
  const message = messages[lang]
  const switchLanguage = (lang) => {
    dispatch(setCurrentLang(lang === 'zh' ? 'en' : 'zh'))
  }

  return (
    <AppBar position="sticky" className="navbar-dark bg-dark">
      <Toolbar variant="dense" className={classes.header}>
        <LangBtn
          alignSelf="flex-start"
          handleClick={() => switchLanguage(lang)}
          text={message.langBtn}
        />
        <Typography variant="h6" className={classes.title}>
          {message.header}
        </Typography>
        <CartBtn alignSelf="flex-end" />
      </Toolbar>
    </AppBar>
  )
}
