import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    padding: 30px;
`

const EmptyEle = styled.div`
    flex-grow: 4;
`

const HeaderTitle = styled.h1 `
    color:black;
    flex-grow: 1;
    font-size: 40px;
    margin-left: 20px;
    &:hover{
        color:white;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const NavList = styled.ul`
    flex-grow: 1;
    text-align: center;
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const NavItem = styled.li`
    font-weight: 600;
    font-size: 25px;
    &:hover{
        border-bottom: 1px solid;
    }
`

const Utilcontainer = styled.div`
    flex-grow: 1;
`

const Header = () =>{
    return(
        <HeaderContainer>
            <StyledLink to="/">
                <HeaderTitle>MEME</HeaderTitle>
            </StyledLink>
            <EmptyEle/>
                    <NavList>
                        <NavItem><StyledLink  to="/feed">FEED</StyledLink></NavItem>
                        <NavItem><StyledLink  to="/surf">SURF</StyledLink></NavItem>
                        <NavItem><StyledLink  to="/credit">CREDIT</StyledLink></NavItem>
                    </NavList>
                    <Utilcontainer>
                    </Utilcontainer>
        </HeaderContainer>
    )
}

export default Header ;