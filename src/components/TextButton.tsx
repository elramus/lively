import { IconName, IconPrefix } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import styled from '../utils/styledComponents'

const Button = styled('button')`
  font-family: 'pragati narrow', sans-serif;
  font-size: ${props => props.theme.ms3};
  color: ${props => props.theme.offWhite};
  background: none;
  margin: 1em 0;
  cursor: pointer;
  transition: color 150ms ease-out, transform 150ms ease-out, opacity 150ms ease-out;
  svg {
    margin-right: 0.5em;
  }
  &:hover, &:focus {
    outline: 0;
    color: ${props => props.theme.red};
  }
`

interface Props {
  text: string;
  icon?: [IconPrefix, IconName];
  onClick: React.MouseEventHandler;
}

const TextButton = ({ text, icon, ...rest }: Props) => (
  <Button type="button" {...rest} className="text-button">
    {icon && (
      <FontAwesomeIcon icon={icon} />
    )}
    {text}
  </Button>
)

export default TextButton
