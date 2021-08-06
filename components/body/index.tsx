import React from 'react'
import { Div as DivP } from './styles'

export default function Div({ children, color }) {
  return <DivP color={color}>{children}</DivP>
}
