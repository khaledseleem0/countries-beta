import React, { useEffect, useContext, useState } from "react";
import { ThemeMode } from "./../App";
import {
  SearchHeader,
  Search,
  Select,
  Filter,
  Check,
  Options,
  Option,
  Grid,

} from "./../styles/mainStyle";
import Card from './card.js';
import { darkTheme, lightTheme } from "../styles/themes";


export default function Main() {
  const [theme] = useContext(ThemeMode);
  const [colors, setColors] = useState(lightTheme); 
   const [loading, setLoading] = useState(true);
   const [api, setApi] = useState([]);
     useEffect(() => {
               try{
                         fetch('https://restcountries.eu/rest/v2/all').then((Response)=>{
                               return   Response.json() 
                         }).then((Response)=>{
                              setApi(Response);
                              setLoading(false)
                    })
          }catch(e){
               console.log(e.message);
          }
     }, [])

  useEffect(() => {
    theme === "light" ? setColors(lightTheme) : setColors(darkTheme);
}, [theme]);
  const handelToggle = (e) => {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("dropped");
  };
  return (
    <div className="container">
      <SearchHeader text={colors.text}>
        <Search shadow={colors.shadow} bg={colors.navbar} placeholder={colors.placeholder} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              d="M 6 0 C 2.692213 0 6e-006 2.6922 0 6 C 6e-006 9.3078 2.692213 12 6 12 C 7.4744354 12 8.8251948 11.464037 9.8710938 10.578125 L 15.140625 15.847656 A 0.50005 0.50005 0 1 0 15.847656 15.140625 L 10.578125 9.8710938 C 11.464039 8.8251951 11.999997 7.4744412 12 6 C 11.999994 2.6922 9.307787 0 6 0 z M 6 1 C 8.767348 1 10.999995 3.2326 11 6 C 10.999995 8.7673 8.767348 11 6 11 C 3.232652 11 1.000005 8.7673 1 6 C 1.000005 3.2326 3.232652 1 6 1 z "
              enableBackground="accumulate"
              fontFamily="sans-serif"
              fontWeight="400"
              overflow="visible"
            />
          </svg>

          <input type="search" placeholder="search for a country " />
        </Search>

        <Select bg={colors.navbar} text={colors.text}>
          <Filter onClick={(e) => handelToggle(e)}>
            filter by region
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 2"
              viewBox="0 0 30 30"
            >
              <path d="M17 11H4A1 1 0 0 1 4 9H17A1 1 0 0 1 17 11zM26 11H22a1 1 0 0 1 0-2h4A1 1 0 0 1 26 11z" />
              <path d="M19.5 13.5A3.5 3.5 0 1 1 23 10 3.5 3.5 0 0 1 19.5 13.5zm0-5A1.5 1.5 0 1 0 21 10 1.5 1.5 0 0 0 19.5 8.5zM26 21H13a1 1 0 0 1 0-2H26A1 1 0 0 1 26 21zM8 21H4a1 1 0 0 1 0-2H8A1 1 0 0 1 8 21z" />
              <path d="M10.5,23.5A3.5,3.5,0,1,1,14,20,3.5,3.5,0,0,1,10.5,23.5Zm0-5A1.5,1.5,0,1,0,12,20,1.5,1.5,0,0,0,10.5,18.5Z" />
            </svg>
          </Filter>

          <Options className="dropdown">
            <Option>
              <Check type="checkbox" />
              <label>logl</label>{" "}
            </Option>
            <Option>
              <Check type="checkbox" />
              <label>logl</label>{" "}
            </Option>
            <Option>
              <Check type="checkbox" />
              <label>logl</label>{" "}
            </Option>

            <Option>
              <Check type="checkbox" />
              <label>logl</label>
            </Option>
          </Options>
        </Select>
      </SearchHeader>

      <Grid>
           {api.map(data=><Card data={data} theme={theme}/>)}
      </Grid>
    </div>
  );
}
