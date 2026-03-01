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
import m1 from "../assets/shri-ninja-mini.png";
import m2 from "../assets/shri-chetak.png";
import m3 from "../assets/shri-blaze.png";
import m4 from "../assets/shri-cruser.png";
import m5 from "../assets/shri-ninja-plus.png";
import m6 from "../assets/shri-spimri.png";
import m7 from "../assets/shri-velcop.png";
import pp from "../assets/pp.png"

import { useNavigate } from "react-router";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaBatteryHalf } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineReportOff } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import SimpleSlider from "./Slide";
import AutoSlider from "./Slide";
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
                            <li className="li" onClick={() => { nav("/login") }}>LOGIN</li><hr />
                            <li className="li" onClick={() => { nav("/signup") }}>SIGNUP</li><hr />
                            <li className="li">INSTAGRAM</li><hr />
                            <li className="li">FACEBOOK</li><hr />
                            <li className="li">TWITTER</li> 
                            {/* <li className="li" style={{color:"red"}}>LOGOUT</li> */}


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

            <div className="india">
            <h1>बदलता <span id="i">भा</span><span  id="n">र</span><span  id="d">त </span>, बढ़ता <span id="i">भा</span><span  id="n">र</span><span  id="d">त </span>  नए <span id="i">भा</span><span  id="n">र</span><span  id="d">त </span> ,  की नई पहचान</h1>
            </div>

            <div className="company">
                <img src={sri} id="comp"/>
                <div className="shri">
                    <h1 id="shri">SHRI VR E-Bike Electric Scooty</h1>
                </div>

            </div>
            <marquee id="stop">
                <span id="manu">SHRI VR E-Bike</span>  Electric Scooty – Smart, Stylish & Sustainable Mobility <span id="manu">SHRI VR E-Bike</span>  Electric Scooty is designed for the modern rider who wants performance, comfort, and eco-friendly transportation in one smart package
            </marquee>
            <pre><p id="evPrice">EV Scooty Starting at  <span id="zoomPrice"> ₹26,000/- </span>  Only</p></pre>
            <img src={pp} id="key" />
            <hr id="road"/>
            <h1 id="about"><marquee><span id="manu"><span id="bus">LEADING</span> <span id="manu">ELECTRIC BIKE</span>  <span id="bus"> MANUFACTURERS</span> </span></marquee><br />
                Shri VR E-Bike Electric Scooty – Smart, Stylish & Sustainable Mobility
                Shri VR E-Bike Electric Scooty is designed for the modern rider who wants performance, comfort, and eco-friendly transportation in one smart package. Built with advanced electric motor technology and a long-lasting lithium battery, this scooty delivers smooth acceleration, silent riding, and zero fuel cost – making it perfect for daily city commutes. Its sleek and stylish design, lightweight body, and comfortable seating ensure a premium riding experience for students, professionals, and families alike. With low maintenance, fast charging capability, and impressive mileage per charge, Shri VR E-Bike is not just a vehicle but a smart investment for the future. Choose Shri VR E-Bike and ride towards a cleaner, greener tomorrow.

            </h1>



            <h1 id="about">
                <img src={foot} id="foot" />

                <marquee><span id="manu"><span id="bus">SHRI VR E-BIKE</span> <span id="manu">DEALERSHIP</span>  <span id="bus">OPPORTUNITIES</span> </span></marquee><br />
                Grow With the Future of Electric Mobility
                At Shri VR E-Bike, we are building a powerful electric mobility network across India and inviting passionate entrepreneurs to join our journey. If you want to start a profitable and future-ready business, our structured dealership models are designed to match every investment level and location size.
                Mini Dealership
                Perfect for small towns and developing areas,<br /> <marquee behavior="alternate"><span id="bus">THE MINI</span>  <span id="manu">DEALERSHIP</span> <span id="bus">MODEL</span></marquee> <br />requires lower investment while offering high growth potential. It is ideal for first-time business owners who want to enter the fast-growing EV market. With strong brand support, attractive margins, marketing assistance, and technical training, you can confidently build your presence in your local market.
                <br /> <marquee behavior="alternate"><span id="bus">TEHSIL</span>  <span id="manu">DEALERSHIP</span></marquee> <br />
                Our Tehsil Dealership model is designed forexpanding semi-urban markets. This format offers wider sales coverage, stronger brand visibility, and higher earning opportunities. With complete sales, service, and promotional support from Shri VR E-Bike, you can establish yourself as the leading electric scooty provider in your region.
                <br /> <marquee behavior="alternate"> <span id="bus">DISTRICT</span>   <span id="manu">DEALERSHIP</span></marquee> <br />
                The District Dealership is a premium opportunity for ambitious entrepreneurs ready to dominate an entire district market. This model comes with expanded territory rights, higher stock capacity, and strong branding support. It is perfect for investors aiming to build a large-scale EV business with long-term profitability.
                🇮🇳 All India Dealership Network
                We are expanding rapidly across India and welcoming partners who want to grow with a national-level electric mobility brand. With innovative products, growing demand, and a commitment to quality and sustainability, Shri VR E-Bike offers a secure and scalable business opportunity in one of the fastest-growing industries.
                Join Shri VR E-Bike today and become a part of India’s electric revolution. Together, let’s drive profit, progress, and a greener tomorrow.

            </h1>


            <h1 id="about"><span id="manu"><span id="bus">Driving Instructions</span> <span id="manu"> </span>  <span id="bus"> </span> </span><br />
                You should know how to ride a bicycle before riding an electric bike; you should be very familiar with balancing and controlling a bike.

                Caution: Read all safety warnings and all instructions before your ride.

                Obey stop signs, check carefully when turning, and ride defensively.

                Always carry the charger to charge the bike in case battery power runs out.

                Helmet use is required for your safety.
            </h1>

            <h1 id="about"><span id="manu"><span id="bus">Charging E-bike </span> <span id="manu"> </span>  <span id="bus"> </span> </span><br />
                E-bike charging is simple. You get a charger with your E-bike.

                Charge your E-bike 30 minutes after a ride.

                After charging your E-bike, take it on a ride after 30 minutes.
            </h1>


            <h1 id="about"><span id="manu"><span id="bus">Battery Care </span> <span id="manu"> </span>  <span id="bus"> </span> </span><br />
                Follow the instructions to maintain your batteries; if not followed, the battery may soon lose its power.

                Charge your battery immediately after riding the bike.

                Do not allow the battery to run out completely and lie in storage without a charge.

                Charge the battery regularly to make sure its power supply does not run down.
            </h1>




            <h1 id="go"><span id="bus">GO ELECTRIC ,</span> <span id="manu">GO ECO-FRIENDLY</span> </h1>



            <AutoSlider />



            {/*  */}



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
                <div className="media">
                    <h1 className="socialf">{<FaFacebook />}</h1>
                    <h1 className="sociali">{<FaSquareInstagram />}</h1>
                    <h1 className="socialt">{<FaTwitter />}</h1>
                </div>



            </div>


        </div>
    )
}

export default Details