import React from "react";
import Web3M from "../../images/image-web-3-mobile.jpg"
import { Central, ContainerGrid, DivImg, Title } from "./style";


export default function Container() {
    return (
        <Central>
            <ContainerGrid>
                <DivImg>
                    <img src={Web3M} alt="web3-image" />
                </DivImg>
                <div className="title">
                    <Title>The Bright Future of Web 3.0?</Title>
                </div>
                <div className="article">
                    <p>We dive into the next evolution of the web that claims to put
                    the power of the platforms back into the hands of the people. But
                    is it really fulfilling its promise?</p>
                        <button>READ MORE</button>
                </div>
                <div className="new">
                    <h2>New</h2>
                        <div className="new-text">
                            <h3>Hydrogen VS Eletric Cars</h3>
                                <p>Will hydrogen-fueled cars ever catch up to EVs</p>
                        </div>
                        <hr/>
                        <div className="new-text">
                            <h3>The Downsides of AI artistry</h3>
                                <p>What are the possible adverse effects of on-demand AI image generation</p>
                        </div>
                        <hr/>
                        <div className="new-text">
                            <h3>Is VC Funding Drying Up</h3>
                                <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                        </div>
            </div>
        </ContainerGrid>
        </Central>
    )
}