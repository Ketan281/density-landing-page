import React from 'react';
import logo from "../images/Frame.svg";
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  padding: 1.5em;
  justify-content: center;
  align-items: center;
  gap: 24.1875em;
  align-self: stretch;
  background-color: rgba(42, 93, 50, 0.2);
//   width: 100%;
  opacity: 1;
`;

const InnerMain = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3.5em;
`;

const ListItem = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 2.125em;
  color: white;
  list-style-type: none;

  li {
    color: #FCFCFC;
    font-family: 'Neurial Grotesk', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const Button = styled.button`
color: #000;
font-family: Neurial Grotesk;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: uppercase;
display: flex;
height: 6.789250353606789vh;
padding: 1em 2em;
justify-content: center;
align-items: center;
gap: 0.625em;
border-radius: 8px;
background: linear-gradient(86deg, #D4F938 23.09%, #32D875 108.69%);
box-shadow: 0px 0px 16px 0px rgba(168, 239, 156, 0.80);
backdrop-filter: blur(5px);
`
const Navbar = () => {
  return (
    <div>
        <nav>
      <Main>
        <img src={logo} alt="Logo" />
        <InnerMain>
          <ListItem>
            <li>Career</li>
            <li>Blogs</li>
            <li>LeaderBoard</li>
          </ListItem>
          <Button>
            Trade Now
          </Button>
        </InnerMain>
      </Main>
      </nav>
    </div>
  );
};

export default Navbar;
