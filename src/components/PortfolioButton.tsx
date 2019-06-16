import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from '../utils/styledComponents'

const Container = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75em 1em;
  background: none;
  border-radius: 7px;
  transition: background-color 150ms ease-out;
  svg {
    margin-right: 0.75em;
  }
  &:hover {
    background: rgba(255,255,255, .15);
  }
`

interface Props {
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PortfolioButton = ({ clickHandler }: Props) => (
  <Container type="button" className="portfolio-button" onClick={clickHandler}>
    <FontAwesomeIcon icon={['far', 'long-arrow-left']} />
    <h5>Back To Portfolio</h5>
  </Container>
)

export default PortfolioButton
