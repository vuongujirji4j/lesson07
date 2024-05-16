import React, { useContext } from 'react'
import { ThemeContext } from './TDTUseContext'

export default function TDTUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme + ' m-3'}>
      <h2>TDTUseContext2</h2>
      <p>
        <b>2210900134</b>
        <b>truong dinh tuyen</b>
        <i>k22cn3</i>
      </p>
    </div>
  )
}
