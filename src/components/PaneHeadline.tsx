import React from 'react'

interface Props {
  text: string;
}

const PaneHeadline = ({ text }: Props) => (
  <h3
    style={{
      margin: '0 0 5em 2em',
    }}
  >
    {text}
  </h3>
)

export default PaneHeadline
