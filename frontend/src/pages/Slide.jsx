import React from 'react';
import SL from "../assets/shri-sl.png";
import AURA from "../assets/shri-aura-plus.png";
import VESPA from "../assets/shri-vespa.png";
import sri from "../assets/sri.png";
import { FaMotorcycle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import b3 from "../assets/b3.png"
import { MdNavigateNext } from "react-icons/md";
import k from "../assets/k.png"
import k2 from "../assets/k2.png"
import k3 from "../assets/k3.png"
import k4 from "../assets/k4.png"
import k5 from "../assets/k5.png"
import k6 from "../assets/k6.png"
import k7 from "../assets/k7.png"
import k8 from "../assets/k8.png"
import k9 from "../assets/k9.png"

function AutoSlider() {
    return (
        <div className="slideDiv">
            <div className="sliderChild">
                <img src={k} className='slide' id='slide3' />
                <img src={k2} className='slide' id='slide4' />
                <img src={k3} className='slide' id='slide4' />
                <img src={k4} className='slide' id='slide4' />
                <img src={k5} className='slide' id='slide4' />
                <img src={k6} className='slide' id='slide4' />
                <img src={k7} className='slide' id='slide4' />
                <img src={k8} className='slide' id='slide4' />
                <img src={k9} className='slide' id='slide5' />

            </div>
            <div className="a">
                <a href="#slide3">-  Prev</a>
                <a href="#slide5">Next - </a>
            </div>



            <div className="radiusDiv">
                <h1 id='book'>Book a test Ride</h1>
                <p id='test'>Experience the pleasure of advanced technology. Book your test drive for E bike now.</p>
                <h1 id='book'>Become a Dealer</h1>
                <p id='test'>If you want the dealership we are here to help you. Get in touch with us now.</p>
                <img src={b3} id="sideImage" />
            </div>
            <h1 id='fq'>FAQ's</h1>
            <details id="detail">
                Shri VR E-Bike Electric Scooty – Smart, Stylish & Sustainable Mobility
                Shri VR E-Bike Electric Scooty is designed for the modern rider who wants performance, comfort, and eco-friendly transportation in one smart package. Built with advanced electric motor technology and a long-lasting lithium battery, this scooty delivers smooth acceleration, silent riding, and zero fuel cost – making it perfect for daily city commutes. Its sleek and stylish design, lightweight body, and comfortable seating ensure a premium riding experience for students, professionals, and families alike. With low maintenance, fast charging capability, and impressive mileage per charge, Shri VR E-Bike is not just a vehicle but a smart investment for the future. Choose Shri VR E-Bike and ride towards a cleaner, greener tomorrow.

                <summary >From Where Can I Buy The Best Electric Bike?</summary>
            </details>

            <details id="detail">
                <ul>
                    <li>
                        Electric Motor Bike

                    </li>
                    <li>
                        Electronic Bike

                    </li>
                    <li>
                        Battery Bike

                    </li>
                    <li>
                        Battery Motorcycle

                    </li>
                    <li>
                        Electric 2 Wheeler Vehicle

                    </li>
                    <li>
                        High-Speed Electric Bike

                    </li>

                    <li>
                        Lithium Battery Electric Bike

                    </li>
                    <li>
                        Electric Mountain Bike

                    </li>
                    <li>
                        Long Range Electric Bike

                    </li>
                    <li>
                        Electric Vehicle

                    </li>
                    <li>
                        Electric Scooter

                    </li>
                    <li>
                        Battery Operated Scooter

                    </li>
                    <li>
                        Battery Scooty

                    </li>
                    <li>
                        Lithium Electric Scooter

                    </li>
                    <li>
                        Ninja

                    </li>

                    <li>
                        Ninja 2

                    </li>
                    <li>
                        Classic

                    </li>

                    <li>
                        Classic pro

                    </li>

                    <li>
                        Spimri

                    </li>

                    <li>
                        GTR

                    </li>

                    <li>
                        Neo

                    </li>
                    <li>
                        Hurricane

                    </li>
                    <li>
                        E - Veleco

                    </li>

                    <li>
                        Rapido

                    </li>

                </ul>
                <summary >What Are The Various Products You Have?</summary>
            </details>

            <details id="detail">
                Our Electric Bike takes around 3-4 hours to charge up, and after complete charge, they give you an experience of a hassle-free and smooth ride. Charge the Electric Bike for a few hours and go on a long ride.
                <summary >How Much Time Electric Bike Battery Takes?</summary>
            </details>

            <details id="detail">
                Our company having both high speed and low speed models with us, high speed model required driving liscens.
                <summary >Do I Need a Driving License for Electric Bike?</summary>
            </details>

            <details id="detail">
                The maximum speed level of the Electric Bike is between 90-120 km/h. If you drive it within this speed limit, it is safe. We prefer you to ride the Electric Bike within the speed limit so that it would not be risky for you as well as for your Electric Bike.
                <summary >Maximum Speed Level Of The Electric Bike?</summary>
            </details>

            <details id="detail">
                You should charge your Electric Bike before 30%. But some believe it is necessary to charge daily or after every ride, but it is not so. Keep it in mind that when you go for a ride, your Electric Bike charging should be above 30%. If you are going for a long drive, charge your Electric Bike full first to avoid any inconvenience in your ride.
                <summary >When Should I Charge The Electric Bike?</summary>
            </details>

            <div className="lastDetail">

                <h1 id='moto'>{FaTwitter}</h1>
                <h1 id='moto'>{FaTwitter}</h1>
                <h1 id='moto'>{FaTwitter}</h1>
                <h1 id='moto'>{FaTwitter}</h1>
                <h1 id='moto'>{FaTwitter}</h1>
                <h1 id='moto'>{FaTwitter}</h1>
                <h1 id='moto'>{FaTwitter}</h1>
                <h1 id='moto'>{FaTwitter}</h1>
                <h1 id='moto'>{FaTwitter}</h1>
                <h1 id='moto'>{FaTwitter}</h1>

            </div>

        </div>
    )
}
export default AutoSlider;