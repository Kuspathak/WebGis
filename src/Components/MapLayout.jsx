import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapLayout = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="border border-1 rounded shadow p-4 mb-5">
            <div style={{ width: '100%', height: '500px' }}>
              <MapContainer
                center={[28.394, 84.12]}
                zoom={6}
                style={{ width: '100%', height: '500px' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
              </MapContainer>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="container-fluid text-center mt-5">
            <h1 className='text-uppercase'>"Spatial data,Connecting dots, shaping worlds."</h1>
           <div className='mt-5'>
           <p>
              In mapping, each coordinate tells a unique story, forming a vibrant narrative within the symphony of spatial relationships. Cartography transforms data into meaningful landscapes, revealing the intricate dance of connections that shape our world. Maps are windows offering glimpses into the tapestry of our geographic reality.
            </p>
           </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLayout;
