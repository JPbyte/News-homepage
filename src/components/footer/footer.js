import React from "react";
import { Card, FooterDiv } from "./style";
import imgRetro from "../../images/image-retro-pcs.jpg"
import imgLaptop from "../../images/image-top-laptops.jpg"
import imgGaming from "../../images/image-gaming-growth.jpg"

export default function Footer() {
    return(
        <FooterDiv>
            <div className="container">
                <Card>
                    <div className="img-card">
                        <img src={imgRetro} alt="retro"/>
                    </div>
                    <div className="card-text">
                        <span>01</span>
                            <h3>Reviving Retro PCs</h3>
                                <p>What happens when old PCs are given modern
                                upgrades?</p>
                    </div>
                </Card>
                <Card>
                    <div className="img-card">
                        <img src={imgLaptop} alt="retro"/>
                    </div>
                    <div className="card-text">
                        <span>02</span>
                            <h3>Reviving Retro PCs</h3>
                                <p>What happens when old PCs are given modern
                                upgrades?</p>
                    </div>
                </Card>
                <Card>
                    <div className="img-card">
                        <img src={imgGaming} alt="retro"/>
                    </div>
                    <div className="card-text">
                        <span>03</span>
                            <h3>Reviving Retro PCs</h3>
                                <p>What happens when old PCs are given modern
                                upgrades?</p>
                    </div>
                </Card>
            </div>
        </FooterDiv>
    )
}