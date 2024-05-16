import React, { createContext, useContext, useState} from 'react';
import TDTUseContext1 from './TDTUseContext1';
export const ThemeContext = createContext();

export default function TDTUseContext() {
    
  const [theme, setTheme] = useState('red');

  const tdtHandleChange = ()=>{
setTheme(theme==='red'?'blue':'red');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <div className='alert'>
        <h2>Demo useContext</h2>
        <TDTUseContext1 />
        <button onClick={tdtHandleChange}>Change bgColor</button>
      </div>
    </ThemeContext.Provider>
  )
}