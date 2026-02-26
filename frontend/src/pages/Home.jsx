import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import b1 from "../assets/b1.png"
import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"
import OLA from "../assets/shri-ola.png";
import DL from "../assets/shri-dl.png";
import SL from "../assets/shri-sl.png";
import AURA from "../assets/shri-aura-plus.png";
import VESPA from "../assets/shri-vespa.png";
import front from "../assets/front.jpeg";
import sri from "../assets/sri.png";

function Home() {
    let [value, setValue] = useState("")
    const search = [
        { name: "SHRI DL", price: 55000, photo: DL },
        { name: "SHRI SL ", price: 45000, photo: SL },
        { name: "SHRI AURA PLUSE", price: 75000, photo: AURA },
        { name: "SHRI VESPA", price: 70000, photo: VESPA },
        { name: "SHRI OLA", price: 65000, photo: OLA },
        { name: "rrf", price: 80000, photo: b2 },
        { name: "fv", price: 65000, photo: b3 },
        { name: "rrfdf", price: 56000, photo: b1 },



    ]
    return (
        <div id="firstDiv">
            {/* header */}
            <div className="header">
                <div className="search">
                    <img src={sri} id="logo"/>
                    
                    <input type="text" id="box" placeholder="Search..." onChange={(e) => { setValue(e.target.value) }} />
                    <p id="icon">{<CiSearch/>}</p>

                    <div className="main_con">
                        <ul id="ul">
                            <li>More▼</li>
                        </ul>

                        <ul id="option">
                            <li className="li">TECH</li><hr />
                            <li className="li">GALLERY</li><hr />
                            <li className="li">MODELS</li><hr />
                            <li className="li">CONTACT</li><hr />
                            <li className="li">LOGIN</li><hr />
                            <li className="li">SIGNUP</li>

                        </ul>
                    </div>
                </div>
            </div>
            {/* main body */}
            <img src={front} id="front" />
            <div className="imageTitleDiv">
                <h1 id="imageTitle">SHORT THE LOOK</h1>
                <h1 id="imageTitle2">RULE THE STREETS!</h1>
                <p className="imagep">New fastest high-speed electric motorcycles designed to help you ride </p>
                <p className="imagepp">through tough streets smoothly</p>
                <p className="btn">CALL: 8960109593</p>

            </div>
            <h1 id="text">Smart Rides for Smart     People</h1>

            <div className="main_body">
                {
                    search.map((item) => {
                        let userValue = value.toLowerCase()
                        let data = item.name.toLowerCase()

                        if (value == "" || item.price == value || data.includes(userValue)) {
                            return (
                                <div className="item_contan" key={item.name}>
                                    <div className="imageDiv">
                                        <img src={item.photo} id="image" />
                                    </div><br />
                                    <p id="name">{item.name}</p><br /><br /><br />
                                    <p id="price">₹{item.price}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}console.log("Render Build Test3")

export default Home