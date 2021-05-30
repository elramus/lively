import { FC } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
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
	faPalette,
	faWrench,
} from '@fortawesome/pro-regular-svg-icons'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import store from '../store'
import GlobalStyles from '../utils/globalStyles'
import { theme } from '../utils/theme'
import App from './App'

library.add(
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
	faPalette,
	faReact,
	faSketch,
	faWrench,
	faWordpress
)

const Root: FC = () => (
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
