import React, { useEffect } from 'react'
import { Header } from '../router';
import { Hero } from '../components/hero/Hero';
import { About } from '../components/About/About';
// import { Hero } from '../router'

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0);
},[]);

// Handle Copy /////////////////////
const handleCopy = (event) => {
  const selected = window.getSelection().toString();
  event.clipboardData.setData("text/plain", "Sorry! text can't be copied.");
  event.preventDefault();
};
////////////////////////////////////

// HAndle Inspect //////////////////
const handleContextMenu = (event) => {
  event.preventDefault();
};

const handleKeyDown = (event) => {
  if (
    event.key === "F12" || // F12 key
    (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl+Shift+I
    (event.ctrlKey && event.shiftKey && event.key === "C") || // Ctrl+Shift+C
    (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl+Shift+J
    (event.ctrlKey && event.key === "U") // Ctrl+U
  ) {
    event.preventDefault();
    alert("Inspecting is disabled!");
  }
};
/////////////////////////////

  return (
    <div className='text-blue-400 relative' 
      onCopy={handleCopy} //No Copy
      onContextMenu={handleContextMenu} // No right click
      onKeyDown={handleKeyDown} // No right click
      tabIndex={0} // No right click
      style={{
        outline: "none", // No right click
    }}
    >
      <Header/>
      <Hero/>
      <About/>
    </div>
  )
}

