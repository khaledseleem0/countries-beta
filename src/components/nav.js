import React, { useContext, useState } from 'react'
import {NavBar , Switcher , Logo , Dot} from './../styles/navStyle' 
import { lightTheme , darkTheme } from '../styles/themes';
import { ThemeMode } from '../App';
export default function Nav() {
     const [theme , setTheme]  = useContext(ThemeMode);
     const [colors , setColors] = useState(lightTheme);
     console.log(theme)
     const HandelSwitch  = (e)=>{
          let dot = document.querySelector('.dot');
          let   switcher = document.querySelector('.switcher');
        theme  === 'light' ? setTheme('dark'):setTheme('light'); 
        theme  === 'light' ? setColors(darkTheme):setColors(lightTheme);
          if(dot !== null && switcher !== null ){
               dot.classList.toggle('switched')
               switcher.classList.toggle("switched-parent")
          }
     }
     return (
          <>
               <NavBar theme={colors.navbar} color={colors.text} shadow={colors.shadow}> 
                         <Logo>
                              Where is the world ?  
                         </Logo>
                         <Switcher className="switcher" onClick={()=>HandelSwitch()}>
                              <Dot className="dot"></Dot>
                         </Switcher>

               </NavBar>
          </>
     )
}
