import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import OLA from "../assets/shri-ola.png";
import DL from "../assets/shri-dl.png";
import SL from "../assets/shri-sl.png";
import AURA from "../assets/shri-aura-plus.png";
import VESPA from "../assets/shri-vespa.png";
import front from "../assets/front.jpeg";
import sri from "../assets/sri.png";
import foot from "../assets/foot.png";
import grt from "../assets/gtr.png";
import v from "../assets/front-ve.png";
import m1 from "../assets/shri-ninja-mini.png";
import m2 from "../assets/shri-chetak.png";
import m3 from "../assets/shri-blaze.png";
import m4 from "../assets/shri-cruser.png";
import m5 from "../assets/shri-ninja-plus.png";
import m6 from "../assets/shri-spimri.png";
import m7 from "../assets/shri-velcop.png";

import { useNavigate } from "react-router";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaBatteryHalf } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineReportOff } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
function Details() {
    let [value, setValue] = useState("")
    let nav = useNavigate()
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
                    <img src={sri} id="logo" />
                    
                    <input type="text" id="box" placeholder="Search..." onChange={(e) => { setValue(e.target.value) }} />
                    <p id="icon">{<CiSearch />}</p>

                    <div className="main_con">
                        <ul id="ul">
                            <li>More▼</li>
                        </ul>

                        <ul id="option">
                            <li className="li">TECH</li><hr />
                            <li className="li" >GALLERY</li><hr />
                            <li className="li" onClick={() => { nav("/model") }}>MODELS</li><hr />
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
            <div className="company">
                <img src={sri} id="comp" />
                <div className="shri">
                <h1 id="shri">Shri VR E-Bike Electric Scooty</h1>

                </div>
            </div>
            {/* <h1 id="about">About</h1> */}

            <div className="about">
                <div id="textAbout">
                <img src={m7} id="textimage" />
                    Shri VR E-Bike Electric Scooty – Smart, Stylish & Sustainable Mobility
                    Shri VR E-Bike Electric Scooty is designed for the modern rider who wants performance, comfort, and eco-friendly transportation in one smart package. Built with advanced electric motor technology and a long-lasting lithium battery, this scooty delivers smooth acceleration, silent riding, and zero fuel cost – making it perfect for daily city commutes. Its sleek and stylish design, lightweight body, and comfortable seating ensure a premium riding experience for students, professionals, and families alike. With low maintenance, fast charging capability, and impressive mileage per charge, Shri VR E-Bike is not just a vehicle but a smart investment for the future. Choose Shri VR E-Bike and ride towards a cleaner, greener tomorrow.

                </div>
            </div>



            {/* <h1 id="about">Details</h1> */}

            <div className="about">
               <div id="textAbout">
                <img src={grt} id="textimage" />
                    Shri VR E-Bike Dealership Opportunities – Grow With the Future of Electric Mobility
                    At Shri VR E-Bike, we are building a powerful electric mobility network across India and inviting passionate entrepreneurs to join our journey. If you want to start a profitable and future-ready business, our structured dealership models are designed to match every investment level and location size.
                    🚀 Mini Dealership
                    Perfect for small towns and developing areas, the Mini Dealership model requires lower investment while offering high growth potential. It is ideal for first-time business owners who want to enter the fast-growing EV market. With strong brand support, attractive margins, marketing assistance, and technical training, you can confidently build your presence in your local market.
                    🌟 Tehsil Dealership
                    Our Tehsil Dealership model is designed for </div>
            </div>



            <div className="about">
               <div id="textAbout">
                <img src={v} id="textimage" />
                    expanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                    🏆 District Dealership
                    The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                    🇮🇳 All India Dealership Network
                    We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                    Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.
                </div>
            </div>

            {/*  */}

            <div className="about">
               <div id="textAbout">
                <img src={m1} id="textimage" />
                    expanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                    🏆 District Dealership
                    The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                    🇮🇳 All India Dealership Network
                    We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                    Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.
                </div>
            </div>


            <div className="about">
               <div id="textAbout">
                <img src={m2} id="textimage" />
                    expanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                    🏆 District Dealership
                    The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                    🇮🇳 All India Dealership Network
                    We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                    Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.
                </div>
            </div>


            <div className="about">
               <div id="textAbout">
                <img src={m3} id="textimage" />
                    expanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                    🏆 District Dealership
                    The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                    🇮🇳 All India Dealership Network
                    We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                    Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.
                </div>
            </div>


            <div className="about">
               <div id="textAbout">
                <img src={m4} id="textimage" />
                    expanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                    🏆 District Dealership
                    The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                    🇮🇳 All India Dealership Network
                    We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                    Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.
                </div>
            </div>


            <div className="about">
               <div id="textAbout">
                <img src={m5} id="textimage" />
                    expanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                    🏆 District Dealership
                    The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                    🇮🇳 All India Dealership Network
                    We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                    Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.
                </div>
            </div>


            <div className="about">
               <div id="textAbout">
                <img src={m6} id="textimage" />
                    expanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                    🏆 District Dealership
                    The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                    🇮🇳 All India Dealership Network
                    We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                    Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.
                </div>
            </div>


            <div className="about">
               <div id="textAbout">
                <img src={m7} id="textimage" />
                    expanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                    🏆 District Dealership
                    The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                    🇮🇳 All India Dealership Network
                    We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                    Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.
                </div>
            </div>


            <div className="about">
               <div id="textAbout">
                <img src={m7} id="textimage" />
                    expanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                    🏆 District Dealership
                    The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                    🇮🇳 All India Dealership Network
                    We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                    Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.
                </div>
            </div>

            <div className="fetch">
                <h1>{<FaBatteryHalf />}</h1>
                <h1>{<MdOutlineSecurity />}</h1>
                <h1>{<MdOutlineReportOff />}</h1>
                <h1>{<IoIosFlash />}</h1>
            </div>
            <div className="messDiv">
                <h1 className="message">NMC Graphene Battery</h1>
                <h1 className="message">Anti-Theft Remote Lock</h1>
                <h1 className="message">No RTO / NO License</h1>
                <h1 className="message">Fast Charging Support</h1>

            </div>

            <div className="footer">
                <h1 className="footerItem">CONTACT US</h1>
                <h1 className="footerItem">{<MdLocationOn />}<span>H.NO.73, Kanchanpur, Medical College Road, Gulhariya, Gorakhpur(U.P)-273013</span></h1>
                <h1 className="footerItem">{<IoIosCall />} <span>8960109593</span></h1>
            </div>


        </div>
    )
}

export default Details