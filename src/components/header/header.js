
import React, {useState} from "react";

//Import logo, styled and icons//

import Logo from "../../images/logo.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { DivHeader, Navbar } from "./style";

function Header() {

    //state for menu_Hamburguer
    const [showMenu, setMenu] = useState(false);

    return(
        <DivHeader>
            <img src={Logo} alt="logo" />
            <div className="Menu" >
                <FiMenu size="2.7rem" onClick={() => setMenu(!showMenu)} cursor={"pointer"}/>
            </div>
            <Navbar open={showMenu}>
                <div className="close">
                    <FiX size="2.7rem" onClick={() => setMenu(!showMenu)} cursor={"pointer"}/>
                </div>
                <div className="close_text">
                    <a href="#">Home</a>
                    <a href="#">New</a>
                    <a href="#">Popular</a>
                    <a href="#">Trending</a>
                    <a href="#">Categories</a>
                </div>
            </Navbar>
        </DivHeader>
    )
}

export default Header