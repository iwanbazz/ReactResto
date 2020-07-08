import React from 'react'
import messages from './../../assets/Local/messages'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentLang } from '../../store/actions/Lang'
import { Link } from 'react-router-dom'
import { LangBtn } from '../Controls/Button/LangButton'
import { CartBtn } from '../Controls/Button/CartButton'

export default function Navbar() {
  const lang = useSelector((state) => state.lang)
  const dispatch = useDispatch()
  const message = messages[lang]
  const switchLanguage = (lang) => {
    dispatch(setCurrentLang(lang === 'zh' ? 'en' : 'zh'))
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <LangBtn
          handleClick={() => switchLanguage(lang)}
          text={message.langBtn}
        />
        <a className="navbar-brand" style={{ fontSize: 'medium' }}>
          {message.header}
        </a>
        <CartBtn />
      </nav>
    </>
  )
}
