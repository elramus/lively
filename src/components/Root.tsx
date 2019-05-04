import { library } from '@fortawesome/fontawesome-svg-core'
import {
 faAdobe, faGithub, faGulp, faJs, faLinkedin, faSketch, faWordpress 
} from '@fortawesome/free-brands-svg-icons'
import {
  faAngleDown,
  faEnvelope,
  faExternalLinkSquare,
  faHandSpock,
  faLongArrowLeft,
  faWrench,
} from '@fortawesome/pro-regular-svg-icons'
import React from 'react'
import { Provider } from 'react-redux'

import store from '../store'
import GlobalStyles from '../utils/globalStyles'
import { ThemeProvider } from '../utils/styledComponents'
import { theme } from '../utils/theme'
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
  faLinkedin,
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
