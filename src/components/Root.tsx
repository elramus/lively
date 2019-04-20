import React from 'react'
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAngleDown,
  faEnvelope,
  faHandSpock,
  faWrench,
  faLongArrowLeft,
} from '@fortawesome/pro-regular-svg-icons'
import {
  faExternalLinkSquare,
} from '@fortawesome/pro-solid-svg-icons'
import {
  faAdobe,
  faGithub,
  faGulp,
  faJs,
  faLinkedinIn,
  faSketch,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import { ThemeProvider } from '../utils/styledComponents'
import { theme } from '../utils/theme'
import GlobalStyles from '../utils/globalStyles'
import store from '../store'
import App from './App'

library.add(
  faAdobe,
  faAngleDown,
  faEnvelope,
  faExternalLinkSquare,
  faGulp,
  faGithub,
  faHandSpock,
  faJs,
  faLinkedinIn,
  faLongArrowLeft,
  faSketch,
  faWrench,
  faWordpress,
)

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <App />
      </div>
    </ThemeProvider>
  </Provider>
)

export default Root
