import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import App from './pages/App'

function ThemeApp() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FF4500',
      },
      secondary: {
        main: '#ac4556',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

export default ThemeApp
