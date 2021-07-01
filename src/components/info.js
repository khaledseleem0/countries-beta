import React, { useContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../styles/themes";
import { ThemeMode } from "../App";
import {
  Container,
  Img,
  Content,
  Bg,
  Grid,
  Borders,
} from "./../styles/infoStyle";
import { useHistory } from "react-router-dom";
import { Light, Bold } from "../styles/mainStyle";

export default function Info() {
  const history = useHistory();
  const [theme] = useContext(ThemeMode);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState(lightTheme);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    try {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((Response) => {
          return Response.json();
        })
        .then((Response) => {
          let country = Response.filter((country) => {
            return (
              country.name ===
              history.location.pathname.replace("/countries/", "")
            );
          });
          setCountry(country[0]);
          setLoading(false);
        });
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  useEffect(() => {
    setColor(theme === "light" ? lightTheme : darkTheme);

  }, [theme])

  return loading ? (
    <>loading .. </>
  ) : (
    <Container className="container">

      <Img>
        <img src={country.flag} />
      </Img>
      <Content>
        <Grid text={color.text}>
          <Bold> {country.name} </Bold>

          <div>
            <div>
              <span>Native Name:</span>
              <Light theme={color.lightText}>{country.nativeName}</Light>
            </div>

            <div>
              <span>population </span>
              <Light theme={color.lightText}>{country.population}</Light>
            </div>

            <div>
              <span>Region:</span>
              <Light theme={color.lightText}>{country.region}</Light>
            </div>
            <div>
              <span>Capital:</span>
              <Light theme={color.lightText}>{country.capital}</Light>
            </div>

          </div>

          {/* tow */}
      
          <div>
          <div>
              <span>Sub-Region:</span>
              <Light theme={color.lightText}>{country.subregion}</Light>
            </div>
            <div>
              <span>Top Level Domain:</span>
              <Light theme={color.lightText}>{country.topLevelDomain}</Light>
            </div>

            <div>
              <span>currencies:</span>
              {country.currencies.map((cur) => {
                return (
                  <Light theme={color.lightText}>{cur.name + " , "}</Light>
                );
              })}
            </div>

            <div>
              <span>languages:</span>
              {country.languages.map((languages) => {
                return (
                  <Light theme={color.lightText}>
                    {languages.name + " , "}
                  </Light>
                );
              })}
            </div>
          </div>
          {/* three */}

          <div>
            <span>Border Contries:</span>
            <Borders>
              {country.borders.map((borders) => {
                return <Bg bg={color.navbar}>{borders}</Bg>;
              })}
            </Borders>
          </div>
        </Grid>
      </Content>
    </Container>
  );
}
