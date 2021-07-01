import styled from "styled-components";
export const Body = styled.div`
     background: ${props=>props.body};
     width:100vw;
     min-height:100vh;
`;

// main page or home 

export const SearchHeader = styled.div`
padding:40px 0;
display:flex;
 justify-content:space-between;
  align-items:center;
 color:${(props)=>props.text};
 fill:${(props)=>props.text};
`;
export const Search = styled.div`
padding:5px 20px ;
border-radius: 7px;
background:${(props)=>props.bg};
box-shadow:${(props)=>props.shadow};
color:${(props=>props.placeholder)};
fill:${(props=>props.placeholder)};
width:fit-content;
outline:0;
display:flex;
align-items:center;
     svg{
          fill:inherit;
          margin-right:5px;
     }

input{
     padding:10px;
     border: none;
     outline: 0;
     background:transparent;
     color:inherits;
     ::placeholder{
          color: ${(props=>props.placeholder)};
     }

}
`;
export const Select = styled.div`
 position: relative;
background:${props=>props.bg};
color:${props=>props.text};
font-size:12px;
cursor: pointer;
`;

export const Filter = styled.div`
     padding:10px;
     display:flex;
     justify-content:space-between;
     align-items:center;
     padding: 10px;
     background:${props=>props.bg};
     
color: inherit;
fill:inherit;
     svg{
          width:18px;
          margin-left:5px;
          fill:inherit;
     }
`;

export const Options = styled.div`
position:absolute;
top: 110%;
background:inherit;
width:100%;
transition: transform 0.5s , clip .1s , opacity 0.6s;
transform:scale(0.7) translateY(-32%);
opacity: 0;
 clip-path: circle(0% at 100% 0%);
`;

export const Option = styled.div`
     position: relative;
     text-transform:capitalize;
`;

export const Check = styled.input`
     position:absolute;
     width:100%;
     height:100%;
     z-index:123;
     opacity:0;
     cursor: pointer;
    &  + label{
     padding: 10px ;
     display:block;
     }
     &:checked   + label, &:hover  + label{
       
    opacity: .7;
    background: rgb(172 172 243 / 54%);

     }
`;

// card 

export const Grid = styled.div`
grid-template-columns:210px 210px 210px 210px;
display:grid;
grid-gap:19px;
justify-content: center;

@media (min-width: 661px) and (max-width: 1024px) and (orientation: landscape) {
     grid-template-columns:210px 210px 210px;
 
  
}


@media (min-width: 420px) and (max-width: 660px) {
     grid-template-columns:210px 210px;
     grid-gap:10px 5% ;
  
}


@media(min-width: 211px) and (max-width: 420px) {

 display: block;
  
}


 /*
@media (max-width: 1260px) {
     grid-template-columns:210px 210px 210px;
     grid-gap:10px 5% ;

} */
`;


export const CardContainer  = styled.div`
     background:${props=>props.theme.navbar};
     color:${props=>props.theme.text};
     box-shadow:${props=>props.theme.shadow};
`;
export const Img   = styled.div`
     /* width: 100%; */
     img{
          width: 100%;
     }
     
`;

export const Content   = styled.div`
padding:10px;
font-size: 13px;
     
`;
export const Bold = styled.p`
     font-weight:900;
     padding:5px 0 ;
     grid-area:title;

`;
export const Light = styled.span`
          color:${props=>props.theme};
          margin-left: 5px;
`;
