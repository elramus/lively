import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAdobe,
  faGithub,
  faGulp,
  faJs,
  faLinkedin,
  faReact,
  faSketch,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import {
  faAngleDown,
  faCode,
  faEnvelope,
  faExternalLinkSquare,
  faHandSpock,
  faLongArrowLeft,
  faWrench,
} from '@fortawesome/pro-regular-svg-icons'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../store'
import GlobalStyles from '../utils/globalStyles'
import { ThemeProvider } from '../utils/styledComponents'
import { theme } from '../utils/theme'
import App from './App'

library.add(
  faAdobe,
  faAngleDown,
  faCode,
  faEnvelope,
  faExternalLinkSquare,
  faGulp,
  faGithub,
  faHandSpock,
  faJs,
  faLinkedin,
  faLongArrowLeft,
  faReact,
  faSketch,
  faWrench,
  faWordpress,
)

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <App />
        </>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
)

export default Root
