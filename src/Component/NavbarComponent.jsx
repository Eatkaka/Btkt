import React from "react";
import styled from "styled-components";
const Header = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10%;
  border-radius: 0.25rem;
`;
const MenuItem = styled.div`
  font-size: 1.5 rem;
  cursor: pointer;
  margin-left: 25px;
  color: #7d7c7e;
  &:hover {
    color: black;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const LogoItem = styled.div`
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #5cb85c;
  cursor: pointer;
  margin-left: 25px;
`;
const Wrapper = styled.div`
position:relative;
`;

const Banner = styled.div`
  background-color: #5cb85c;
  align-item:center;
  height: 150px;
  border: 1px solid #5cb85c;
  justify-content: center;
  text-align:center;
  color:white;
`;
const TextBannerBig=styled.h1`
  font-size:2.5rem;
`
const TextBannerSmall = styled.span`
font-size:1.4rem;
font-weight:300;
`
export default function NavbarComponent() {
  return (
    <Wrapper>
      <Header>
        <Left>
          <LogoItem>conduit</LogoItem>
        </Left>
        <Right>
          <MenuItem>Home</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>Sign up</MenuItem>
        </Right>
      </Header>
      <Banner>
        <TextBannerBig>conduit</TextBannerBig>
        <TextBannerSmall>A place to Share your knowledge</TextBannerSmall>
      </Banner>
    </Wrapper>
  );
}