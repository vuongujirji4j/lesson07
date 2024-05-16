import React, { useEffect, useState } from 'react'

export default function TDTUseEffect() {
const [ count, setCount] =useState(0);

const tdtHandleClick = ()=>{
    setCount(prev => prev +1);
}

useEffect(()=>{
document.title = `truong dinh tuyen: You clicked ${count} time`;
console.log(`You clicked ${count} time`);
});

useEffect (() => {
console.log("chay lan dau- 1 lan");
},[]);

useEffect(() => {
    console.log(' useEffect count click : ', count);
},[count]);
  return (
    <div>
      <h2>Demo - useEffect: You clicked {count} times</h2>
      <button onClick={tdtHandleClick}>
        Click 
        </button>
    </div>
  )
}
