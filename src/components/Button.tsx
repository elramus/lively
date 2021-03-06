import { FC } from 'react'

import { IconName, IconPrefix } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

interface Props {
	text: string
	icon?: [IconPrefix, IconName]
	style?: React.CSSProperties
}

const Container = styled('button')`
	padding: 1em;
	background-color: ${props => props.theme.red};
	border-radius: 4px;
	color: white;
	cursor: pointer;
	font-size: ${props => props.theme.ms(-1)};
	svg {
		margin-left: 0.5em;
	}
	&:hover {
		opacity: 0.85;
	}
`

const Button: FC<Props> = ({ text, icon, ...rest }) => (
	<Container type="button" {...rest}>
		{text}
		{icon && <FontAwesomeIcon icon={icon} />}
	</Container>
)

export default Button
