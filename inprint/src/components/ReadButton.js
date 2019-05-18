import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonTemplate = ({className, path, category}) => {

  const displayTextMap = {
    "magazine": "Read",
    "casestudy": "View",
    "video": "Watch"
  }

  return(
    <a className={className} target="_blank" href={`https://apps.esgplc.com/inprint/${path}/pdf.pdf`}>
      {displayTextMap[category]}
    </a>
  )

  // return(
  //   <Link className={className} to={`https://apps.esgplc.com/inprint/${path}/pdf.pdf`}>
  //     {displayTextMap[category]}
  //   </Link>
  // )
}

const ReadButton = styled(ButtonTemplate)`
  display: inline-block;
  text-decoration: none;
  color: #FFF;
  font-size: 18px;
  background: #5a0084;
  padding: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  transition: background 0.2s;
  &:hover {
    background: #a722dd;
  }
`

export default ReadButton