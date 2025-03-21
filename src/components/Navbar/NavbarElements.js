import { FaBars } from "react-icons/fa";
import { DiGithubBadge as GitLogo } from "react-icons/di";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: black;
    height: 85px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width:100%;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
  position: absolute;
    top:0;
    left:0;
    box-sizing:border-box;
`;

export const NavLogo = styled(Link)`
position: absolute;
  left: 5%;
  transform: translateX(-50%);
cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;

`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1.5rem;
height: 100%;
font-size: 1.5rem;
cursor: pointer;
&:hover {
  color: blue;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 0 3rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width:100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Git = styled(GitLogo)`

`;

export const Linkedin = styled(IoLogoLinkedin)`
`;

export const Email = styled(MdEmail)`
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
      transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;