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
import aa from "../assets/aa.jpeg";
import sri from "../assets/sri.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router";

function Home() {
    let [value, setValue] = useState("")
    let dispatch = useDispatch()
    let nav = useNavigate()
    const logoutAPI = async (e) => {
        e.preventDefault()
        try {
            let data = await axios.get("https://shri-vr-backend.onrender.com/logout", { withCredentials: true })
            dispatch(setUserData(data.data))
            nav('/login')
        } catch (error) {
            console.log(error)
        }
    }
    const search = [
        { name: "SHRI DL", price: 55000, photo: DL, desc: "Power aur mileage ka perfect balance. City rides ke liye sabse bharosemand model.", key: "High durability and better range." },
        { name: "SHRI SL ", price: 45000, photo: SL, desc: "India's most affordable ride. No License, No Registration required.", key: "Sporty look and quick acceleration." },
        { name: "SHRI AURA PLUSE", price: 75000, photo: AURA, desc: "Premium look aur advanced features. Digital console aur fast charging ke saath.", key: "Most stylish and high-tech model." },
        { name: "SHRI VESPA", price: 70000, photo: VESPA, desc: "Classic retro design modern technology ke saath. Comfort aur style ka mel.", key: "Iconic vintage design." },
        { name: "SHRI OLA", price: 65000, photo: OLA, desc: "Futuristic design aur behtareen pickup. Nayi generation ki smart choice.", key: "Sporty look and quick acceleration." },
        { name: "SHRI BEAST", price: 80000, photo: b2, desc: "Sabse powerful aur heavy-duty model. Unchi chadhaan aur mushkil raasto ke liye bani beast", key: "High torque motor aur extra load capacity." },
        { name: "SHRI CHETAK", price: 60000, photo: b1, desc: "Majbooti aur bharose ka naam. Indian family ke liye ek dam bhetar aur durable choice", key: "Solid build quality aur comfortable riding seat" },
        { name: "SHRI BEAST.", price: 80000, photo: b3, desc: "Sabse powerful aur heavy-duty model. Unchi chadhaan aur mushkil raasto ke liye bani beast", key: "High torque motor aur extra load capacity." },


    ]
    return (
        <div id="firstDiv">
            {/* header */}
            <div className="header">
                <div className="search">
                    <img src={sri} id="logo" />

                    <input type="text" id="box" placeholder="Search..." onChange={(e) => { setValue(e.target.value) }} />
                    <p id="icon">{<CiSearch />}</p>

                    <div className="main_con">
                        <ul id="ul">
                            <li>More▼</li>
                        </ul>

                        <ul id="option">
                            <li className="li">TECH</li><hr />
                            <li className="li" onClick={() => { nav("/") }}>HOME</li><hr />
                            <li className="li">MODELS</li><hr />
                            <li className="li">CONTACT</li><hr />
                            <li className="li">LOGIN</li><hr />
                            <li className="li">SIGNUP</li> <hr />
                            <li className="li" style={{ color: "red" }} onClick={logoutAPI}>LOGOUT</li>


                        </ul>
                    </div>
                </div>
            </div>
            {/* main body */}
            <img src={aa} id="front" />
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
                                    <div className="lastPoint">
                                        <p id="name"><span id="nameM">Model :- </span> {item.name}<br /><span id="nameM">Starting at just :- </span><span id="price"> ₹{item.price}</span> </p>
                                        <p id="desc"><span id="des">Description :</span><br />{item.desc}</p>
                                        <p id="keyS"><span id="des">Key Point :</span><br />{item.key} <br /> <span id="emi">EMI Available</span></p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Home








