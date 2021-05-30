import { FC } from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Nav from './Nav'

const Container = styled('div')`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2em 0;
	margin: 0 auto;
	@media (max-width: ${props => props.theme.sm}) {
		flex-direction: column;
	}
	.left {
		color: white;
		opacity: 0;
		animation: show 500ms forwards;
		animation-delay: 200ms;
		@media (max-width: ${props => props.theme.sm}) {
			flex-direction: column;
			align-items: center;
			text-align: center;
			margin-bottom: 2em;
		}
	}
	h1 {
		letter-spacing: 1px;
		margin: 0 0 0.15em 0;
	}
`

const Header: FC = () => (
	<Container>
		<Link to="/" className="left">
			<h1>D. Luke Ramus</h1>
			<h4>UI Developer &amp; Designer</h4>
		</Link>
		<Nav />
	</Container>
)

export default Header
