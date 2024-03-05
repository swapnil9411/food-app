import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {

    const [btnNameReact,setBtnNameReact]= useState("login")
    console.log("header render")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                console.log("first")
                btnNameReact==="login"? setBtnNameReact("logout"):setBtnNameReact("login");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;