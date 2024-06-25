import React from 'react'

interface IUpIcon {
  className?: string
}

const UpIcon = ({className} : IUpIcon) => {
  return (
    <svg className={className} height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M480-525 316-361q-11 11-25.5 11T265-361q-11-11-11-25.5t11-25.5l190-190q11-11 25-11t25 11l190 190q11 11 11 25t-11 25q-11 11-25.5 11T644-362L480-525Z"/></svg>
  )
}

export default UpIcon