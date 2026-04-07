import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import sri from "../assets/sri.png";
import { GrClose } from "react-icons/gr";

import ary04 from "../assets/ary04.jpeg"
import ary8 from "../assets/ary8.jpeg"

const socket = io("https://your-backend-api.com"); // Apne backend ka URL dein

function Map() {
    const [markers, setMarkers] = useState({}); // Sabhi users ki locations track karne ke liye
    let [show, setShow] = useState(false)
    let [shows, setShows] = useState(false)
    useEffect(() => {
        // Backend se doosre users ki location receive karna
        socket.on("receive-location", (data) => {
            const { userId, latitude, longitude } = data;
            setMarkers((prev) => ({
                ...prev,
                [userId]: { latitude, longitude }
            }));
        });

        return () => socket.off("receive-location");
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShows(true)
        }, 10000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="mapDiv">
            <div className="company">
                <img src={sri} id="com" />
                <div className="shri">
                    <h1 id="sri">SHRI VR E-Bike Electric Scooty</h1>
                </div>

            </div>

            <div className="aryADDDiv">
                {show && <GrClose id="cut" onClick={() => { setShow(false) }} />}
                {
                    show && <img src={ary04} className="aryAD" alt="project-3" />
                }
            </div>

            <div className="aryADDDiv">
                {shows && <GrClose id="cut" onClick={() => { setShows(false) }} />}
                {
                    shows && <img src={ary8} className="aryAD" alt="project-3" />
                }
            </div>
            <div className="map">
            <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "500px", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {Object.entries(markers).map(([id, pos]) => (
                    <Marker key={id} position={[pos.latitude, pos.longitude]}>
                        <Popup>E-Bike ID: {id}</Popup>
                    </Marker>
                ))}
            </MapContainer>
            </div>
        </div>
    );
}

export default Map