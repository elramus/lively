import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconPrefix, IconName } from '@fortawesome/pro-light-svg-icons'
import styled from '../utils/styledComponents'

interface Props {
  text: string;
  icon?: [IconPrefix, IconName];
  style?: React.CSSProperties;
}

const Container = styled('button')`
  padding: 1em;
  background-color: ${props => props.theme.red};
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: ${props => props.theme.ms5};
  svg {
    margin-left: 0.5em;
  }
  &:hover {
    opacity: 0.85;
  }
`

const Button = ({ text, icon, ...rest }: Props) => (
  <Container type="button" {...rest}>
    {text}
    {icon && (
      <FontAwesomeIcon icon={icon} />
    )}
  </Container>
)

export default Button
