import {
    HeaderContainer,
  } from "./styles.ts";
  import coffeeLogoImg from "../../assets/logo_coffee.svg";
  import { NavLink } from "react-router-dom";
  
  export function Header() {

  
    return (
      <HeaderContainer>
        <div className="container">
          <NavLink to="/">
            <img src={coffeeLogoImg} alt="" />
          </NavLink>
        </div>
      </HeaderContainer>
    );
  }