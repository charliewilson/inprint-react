import React from 'react'
import styled from 'styled-components'

const LinkWrapper = ({className, children}) => (
  <a href="#" className={className}>
    {children}
  </a>
)

const StyledLink = styled(LinkWrapper)`
  color: red;
`

export default StyledLink