import "./Map.css";
import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import dotenv from 'dotenv';
// dotenv.config();


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// create custom icon
const customIcon = new Icon({
  iconUrl: require("./placeholder.png"),
  iconSize: [38, 38]
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

export default function UserMap() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data, error } = await supabase
        .from('UserData')
        .select('username, gmail, latitude, longitude, linkedin_url');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setUserData(data);
      }
    }

    fetchData();
  }, []);

  return (
    <MapContainer center={[9.939093, 78.121719]} zoom={3}>
      {/* OPEN STREET MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the fetched user data */}
        {userData.map((user) => (
          <Marker position={[user.latitude, user.longitude]} icon={customIcon}>
            <Popup>
              <div>
                <h3>{user.username}</h3>
               
                   <a href={user.linkedin_url} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
