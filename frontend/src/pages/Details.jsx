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
import pics from "../assets/pics.jpeg"
import pics3 from "../assets/pics3.jpeg"
import pics4 from "../assets/pics4.jpeg"
import pics5 from "../assets/pics5.jpeg"
import pics6 from "../assets/pics6.jpeg"
import pics7 from "../assets/pics7.jpeg"
import pics8 from "../assets/pics8.jpeg"
import pics9 from "../assets/pics9.jpeg"
import pics99 from "../assets/pics99.jpeg"
import roombike from "../assets/roombike.jpeg"
import roombike3 from "../assets/roombike3.jpeg"
import roombike4 from "../assets/roombike4.jpeg"
import roombike5 from "../assets/roombike5.jpeg"
import roombike6 from "../assets/roombike6.jpeg"
import roombike7 from "../assets/roombike7.jpeg"
import roombike8 from "../assets/roombike8.jpeg"
import roombike9 from "../assets/roombike9.jpeg"
import roombike99 from "../assets/roombike99.jpeg"
import roombike999 from "../assets/roombike999.jpeg"
import meeting from "../assets/meeting.jpeg"
import p0 from "../assets/p0.jpeg"
import p1 from "../assets/p1.jpeg"
import p2 from "../assets/p2.jpeg"
import p3 from "../assets/p3.jpeg"
import p4 from "../assets/p4.jpeg"
import p5 from "../assets/p5.jpeg"
import p6 from "../assets/p6.jpeg"
import p7 from "../assets/p7.jpeg"
import p8 from "../assets/p8.jpeg"
import p9 from "../assets/p9.jpeg"
import pp0 from "../assets/pp0.jpeg"
import pp3 from "../assets/pp3.jpeg"
import pp4 from "../assets/pp4.jpeg"
import pp5 from "../assets/pp5.jpeg"
import pp6 from "../assets/pp6.jpeg"
import pp7 from "../assets/pp7.jpeg"
import pp8 from "../assets/pp8.jpeg"
import pp9 from "../assets/pp9.jpeg"
import ppp0 from "../assets/ppp0.jpeg"
import ppp3 from "../assets/ppp3.jpeg"
import ppp4 from "../assets/ppp4.jpeg"
import ppp5 from "../assets/ppp5.jpeg"
import ppp6 from "../assets/ppp6.jpeg"
import ppp7 from "../assets/ppp7.jpeg"
import ppp9 from "../assets/ppp9.jpeg"
import pppp0 from "../assets/pppp0.jpeg"
import pppp3 from "../assets/pppp3.jpeg"
import pppp4 from "../assets/pppp4.jpeg"
import pppp5 from "../assets/pppp5.jpeg"
import pppp6 from "../assets/pppp6.jpeg"
import pppp7 from "../assets/pppp7.jpeg"
import pppp8 from "../assets/pppp8.jpeg"
import pppp9 from "../assets/pppp9.jpeg"
import kl0 from "../assets/kl0.jpeg"
import kl3 from "../assets/kl3.jpeg"
import kl4 from "../assets/kl4.jpeg"
import kl5 from "../assets/kl5.jpeg"
import k6 from "../assets/k6.jpeg"
import kl7 from "../assets/kl7.jpeg"
import kl8 from "../assets/kl8.jpeg"
import kl9 from "../assets/kl9.jpeg"

import kkl3 from "../assets/kkl3.jpeg"
import kkl4 from "../assets/kkl4.jpeg"
import kkl5 from "../assets/kkl5.jpeg"
import kkl6 from "../assets/kkl6.jpeg"
import kkl7 from "../assets/kkl7.jpeg"
import kkl8 from "../assets/kkl8.jpeg"
import kkl9 from "../assets/kkl9.jpeg"

import kkkl3 from "../assets/kkkl3.jpeg"
import kkkl4 from "../assets/kkkl4.jpeg"
import kkkl5 from "../assets/kkkl5.jpeg"
import kkkl6 from "../assets/kkkl6.jpeg"
import kkkl7 from "../assets/kkkl7.jpeg"
import kkkl8 from "../assets/kkkl8.jpeg"
import kkkl9 from "../assets/kkkl9.jpeg"
import kkkl99 from "../assets/kkkl9.jpeg"
import kkkl999 from "../assets/kkkl9.jpeg"
import kkkl9999 from "../assets/kkkl9.jpeg"

import sd3 from "../assets/sd3.jpeg"
import sd4 from "../assets/sd4.mp4"
import sd5 from "../assets/sd5.jpeg"
import sd6 from "../assets/sd6.jpeg"
import sd7 from "../assets/sd7.jpeg"
import sd8 from "../assets/sd8.jpeg"


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
                            <li className="li" onClick={() => { nav("/video") }}>GALLERY</li><hr />
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
                <h1>बदलता <span id="i">भा</span><span id="n">र</span><span id="d">त </span>, बढ़ता <span id="i">भा</span><span id="n">र</span><span id="d">त </span>  नए <span id="i">भा</span><span id="n">र</span><span id="d">त </span> ,  की नई पहचान</h1>
            </div>

            <div className="company">
                <img src={sri} id="comp" />
                <div className="shri">
                    <h1 id="shri">SHRI VR E-Bike Electric Scooty</h1>
                </div>

            </div>
            <marquee id="stop">
                <span id="manu">SHRI VR E-Bike</span>  Electric Scooty – Smart, Stylish & Sustainable Mobility <span id="manu">SHRI VR E-Bike</span>  Electric Scooty is designed for the modern rider who wants performance, comfort, and eco-friendly transportation in one smart package
            </marquee>
            <pre><p id="evPrice">EV Scooty Starting at  <span id="zoomPrice"> ₹26,000/- </span>  Only</p></pre>
            <img src={pp} id="key" />
            <hr id="road" />
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

            <div className="picsDiv">
                <h1 id="pics">Our Office and Meeting Room</h1>
                <img src={meeting} className="pics" />



            </div><br />

            <div className="picsDiv">
                <h1 id="pics">Our Presence: Excellence in Manufacturing, Showroom & Dealership Network</h1>
                <img src={pics} className="pics" />
                <img src={pics4} className="pics" />
                <img src={pics6} className="pics" />
                <img src={pics7} className="pics" />
                <img src={pics8} className="pics" />
                <img src={pics9} className="pics" />
                <img src={pics5} className="pics" />
                <img src={pics99} className="pics" />


            </div>

            <div className="picsDiv" id="holiDiv">
                <h1 id="pics"><span id="holi">H</span><span id="holio">o</span><span id="holil">l</span><span id="holii">i</span>  Special</h1>
                <img src={sd3} className="pics" />
                <img src={sd5} className="pics" />
                <img src={sd6} className="pics" />
                <img src={sd7} className="pics" />
                <img src={sd8} className="pics" />
                <video src={sd4} controls className="pics"></video>


            </div>

            <div className="picsDiv">
                <h1 id="pics">Our Showcase</h1>
                <img src={roombike9} className="pics" />
                <img src={roombike8} className="pics" />
                <img src={roombike4} className="pics" />
                <img src={roombike5} className="pics" />
                <img src={roombike6} className="pics" />
                <img src={roombike7} className="pics" />
                <img src={roombike} className="pics" />
                <img src={roombike3} className="pics" />
                <img src={roombike99} className="pics" />
                <img src={roombike999} className="pics" />
                <img src={p0} className="pics" alt="p0" />
                <img src={p1} className="pics" alt="p1" />
                <img src={p2} className="pics" alt="p2" />
                <img src={p3} className="pics" alt="p3" />
                <img src={p4} className="pics" alt="p4" />
                <img src={p5} className="pics" alt="p5" />
                <img src={p6} className="pics" alt="p6" />
                <img src={p7} className="pics" alt="p7" />
                <img src={p8} className="pics" alt="p8" />
                <img src={p9} className="pics" alt="p9" />
                <img src={pp0} className="pics" alt="pp0" />
                <img src={pp3} className="pics" alt="pp3" />
                <img src={pp4} className="pics" alt="pp4" />
                <img src={pp5} className="pics" alt="pp5" />
                <img src={pp6} className="pics" alt="pp6" />
                <img src={pp7} className="pics" alt="pp7" />
                <img src={pp8} className="pics" alt="pp8" />
                <img src={pp9} className="pics" alt="pp9" />
                <img src={ppp0} className="pics" alt="ppp0" />
                <img src={ppp3} className="pics" alt="ppp3" />
                <img src={ppp4} className="pics" alt="ppp4" />
                <img src={ppp5} className="pics" alt="ppp5" />
                <img src={ppp6} className="pics" alt="ppp6" />
                <img src={ppp7} className="pics" alt="ppp7" />
                <img src={ppp9} className="pics" alt="ppp9" />
                <img src={pppp0} className="pics" alt="pppp0" />
                <img src={pppp3} className="pics" alt="pppp3" />
                <img src={pppp4} className="pics" alt="pppp4" />
                <img src={pppp5} className="pics" alt="pppp5" />
                <img src={pppp6} className="pics" alt="pppp6" />
                <img src={pppp7} className="pics" alt="pppp7" />
                <img src={pppp8} className="pics" alt="pppp8" />
                <img src={pppp9} className="pics" alt="pppp9" />

                <img src={kl0} className="pics" alt="kl0" />

                <img src={kl3} className="pics" alt="kl3" />
                <img src={kl4} className="pics" alt="kl4" />
                <img src={kl5} className="pics" alt="kl5" />
                <img src={k6} className="pics" alt="kl6" />
                <img src={kl7} className="pics" alt="kl7" />
                <img src={kl8} className="pics" alt="kl8" />
                <img src={kl9} className="pics" alt="kl9" />


                <img src={kkl3} className="pics" alt="kkl3" />
                <img src={kkl4} className="pics" alt="kkl4" />
                <img src={kkl5} className="pics" alt="kkl5" />
                <img src={kkl6} className="pics" alt="kkl6" />
                <img src={kkl7} className="pics" alt="kkl7" />
                <img src={kkl8} className="pics" alt="kkl8" />
                <img src={kkl9} className="pics" alt="kkl9" />



                <img src={kkkl3} className="pics" alt="kkkl3" />
                <img src={kkkl4} className="pics" alt="kkkl4" />
                <img src={kkkl5} className="pics" alt="kkkl5" />
                <img src={kkkl6} className="pics" alt="kkkl6" />
                <img src={kkkl7} className="pics" alt="kkkl7" />
                <img src={kkkl8} className="pics" alt="kkkl8" />
                <img src={kkkl9} className="pics" alt="kkkl9" />
                <img src={kkkl99} className="pics" alt="kkkl9" />
                <img src={kkkl999} className="pics" alt="kkkl9" />
                <img src={kkkl9999} className="pics" alt="kkkl9" />


            </div>








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