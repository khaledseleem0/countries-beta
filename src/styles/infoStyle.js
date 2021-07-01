import styled from "styled-components";

export const Container = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
padding-top: 50px;
@media (max-width:600px){
     flex-flow:column;

}
`;
export const Img = styled.div`
          width:30%;
          @media (max-width:600px){
               width:100%;
}
          img{
               width:100%
          }
`;   

export const Content = styled.div`
     width: 60%;
     padding-left:30px;
     font-size: 13px;
     line-height: 24px;

`;


export const Borders = styled.div`
     display:inline-flex;

`;

export const Grid = styled.div`
     color:${props=>props.text}
     ;
     

    grid-template-areas:' title title '
      '  half half2 '
     ' footer footer';
     display: grid;
     grid-column-gap: 30px;

     @media (max-width:800px){
          grid-template-areas:' title title '
      '  half half '
      '  half2 half2 '
     ' footer footer';
     justify-content:flex-end;
     grid-gap: 20px 0px;
          padding-top:20px;
    
     }
    & > div:nth-of-type(1){
  
               grid-area:half;

            }
            & > div:nth-of-type(2){

               grid-area:half2;

            }
            & > div:nth-of-type(3){
               grid-area:footer;
            }
`;

export const Bg = styled.div`
    padding: 2px 15px;
    font-size: 13px;
    background: ${props=>props.bg};
    margin: 0px 10px;
`;