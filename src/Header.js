import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
function Header({onClick, darkMode}) {
  return (
    <div className={ `header ${darkMode ? 'darkMode' : ''}` }>
    <div className="header_container">
      <h2 className='logo'>Where in the world?</h2>
    <div className="switch_mode" onClick ={onClick}>
      <DarkModeOutlinedIcon/>
    <h3>Dark Mode</h3>
    </div>
    
    </div>
    
  </div>
  )
}

export default Header
