import styled from 'styled-components';

export const NavBar = styled.header`
padding:10px 20px;
display: flex;
justify-content: space-between;
background: ${props=>props.theme};
color:${props=>props.color};
box-shadow:${props=>props.shadow};
`;
export const Switcher = styled.div`
width:40px;
height:20px;
background: hsl(209, 23%, 22%);
border-radius: 40px;
display: flex;
align-items:center;
padding:5px;
transition: 0.5s;
cursor: pointer;
`;
export const Logo = styled.div`
font-weight:900;
font-size: 20px;
::first-letter{
     text-transform: capitalize;
     font-size: 120%;
     transform: rotateY(100deg);
}
`;
export const Dot = styled.div`
width:15px;
height:15px;
background:#f9f9f9;
border-radius:100%;
transition: 0.5s;

`;