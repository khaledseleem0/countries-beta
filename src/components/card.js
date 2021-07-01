import React from "react";
import { darkTheme, lightTheme } from "../styles/themes";
import {
  CardContainer,
  Bold,
  Text,
  Light,
  Content,
  Img,
} from "./../styles/mainStyle";
import {Link} from 'react-router-dom';
export default function Card(props) {
  const { theme, data } = props;
  return (
    <CardContainer theme={theme === "light" ? lightTheme : darkTheme}>
      <Img>
      <Link to={"countries/"+data.name}>
      <img src={data.flag} />
      </Link>
      </Img>
      <Content>
        <Bold> {data.name} </Bold>
        <span>Population:</span>
        <Light
          theme={theme === "light" ? lightTheme.lightText : darkTheme.lightText}
        >
          {data.population}
        </Light>

        <div>
          <span>Region:</span>
          <Light
            theme={
              theme === "light" ? lightTheme.lightText : darkTheme.lightText
            }
          >
            {data.region}
          </Light>
        </div>
        <div>
          <span>Capital:</span>
          <Light
            theme={
              theme === "light" ? lightTheme.lightText : darkTheme.lightText
            }
          >
            {data.capital}
          </Light>
        </div>
      </Content>
    </CardContainer>
  );
}
