import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';
import {Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
   background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
   /* opacity: 0.5; */
   /* background-color: #1c776b; */
   height: 80px;
   margin-top: -80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.4rem;
   position: sticky;
   top:0;
   z-index: 1000;

   @media screen and (max-width:960px) {
         transition: 0.8s all ease ;
   }
`;

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 50px;
   z-index: 1;
   width: 100%;
   max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  justify-self:flex-start ;
  cursor: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration:none;
`;
export const MobileIcon = styled.div`
  display: none;
   
   @media screen and (max-width:768px) {
    display: block;
    position: absolute;
    top: 0%;
    right: 0;
    transform: translate(-100%,60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
   }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-top: 22px; */
  margin-top: 0;
  margin-bottom: 0em;


  @media screen and (max-width:768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
   height: 80px;
   margin-top: 0;
   margin-bottom: 0em;
   /* &:active{
    color: aquamarine;
   } */
`;

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
    /* color: #20809f; */
    transform: scale(1.2);
    /* border-bottom: 3px solid #20809f; */
  }
`;

export const NavBtn = styled.nav`
   display: flex;
   align-items: center;

   @media screen and (max-width:768px) {
         display: none;
   }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color:#010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition:all 0.2s ease-in-out;
  text-decoration: none;

  &：hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;