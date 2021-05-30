import { FC } from 'react'

import { IconName, IconPrefix } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

interface StyleProps {
	width: string
	noBg: boolean
}

const Button = styled('button')<StyleProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${props => props.width};
	padding: 1.25em 2em;
	margin-bottom: 2em;
	border-radius: 7px;
	text-transform: uppercase;
	background: ${props => (props.noBg ? 'none' : 'rgba(255,255,255, 0.15)')};
	color: white;
	font-size: ${props => props.theme.ms(-1)};
	font-family: ${props => props.theme.headingFont};
	transition: background 75ms ease-out, color 75ms ease-out;
	svg {
		position: relative;
		top: -2px;
		font-size: ${props => props.theme.ms(0)};
	}
	&:hover {
		background: rgba(${props => (props.noBg ? '255, 255, 255, 0.15' : '255,255,255, 0.35')});
	}
`

interface Props {
	text: string
	onClick: () => void
	leadingIcon?: [IconPrefix, IconName]
	trailingIcon?: [IconPrefix, IconName]
	width?: string
	noBg?: boolean
}

const TextButton: FC<Props> = ({
	text,
	onClick,
	leadingIcon,
	trailingIcon,
	width = 'auto',
	noBg = false,
}) => (
	<Button type="button" onClick={onClick} width={width} noBg={noBg}>
		{leadingIcon && <FontAwesomeIcon icon={leadingIcon} style={{ marginRight: '0.5em' }} />}
		<span>{text}</span>
		{trailingIcon && <FontAwesomeIcon icon={trailingIcon} style={{ marginLeft: '0.5em' }} />}
	</Button>
)

export default TextButton
