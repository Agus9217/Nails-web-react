import React from 'react'

export const ButtonsColors = ({ children, color }) => {
  return (
    <button className={`button__hero ${color}`}>{ children }</button>
  )
}
