import React, { Component } from 'react'
import MapGL, { GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl } from 'react-map-gl';
import "./map.css";
import axios from 'axios';
import { Feature, Layer } from 'react-mapbox-gl'
import ControlPanel from './control-panel';
import CityPin from './city-pin';
import CityInfo from './city-info';



const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

export class Map extends Component {
  TOKEN = "pk.eyJ1IjoiYXJzaGF2aW4xOTk0IiwiYSI6ImNrMmo5dGN5bDBxdWUzbm8wcWgwOGtvNXEifQ.Uul444D_FpErb1IlEpD58Q";


  state = {
    viewport: {
      width: "100%",
      height: "100vh",
      latitude: 34.81361751643519,
      longitude: 10.01199495312494,
      zoom: 6,
    },
    userLocation: {},
    markers: [],
    centers: [],
    showPopup: true,
    popupInfo: null,
    nameCity: null,


  };

  componentDidMount() {
    this.initialiseCenters();
  }

  // init centers
  async initialiseCenters() {
    var c = []
    await axios.get('https://blooddonation-ws.herokuapp.com/api/centers')
      .then(response => {
        response.data.data.map((object, i) => {

          var cen = null

          cen = object;
          cen.lat = 36.847710;
          cen.long = 10.313120;


          console.log(cen)

          c.push(cen);
        })

        this.setState({ centers: c });

      })
      .catch(error => console.log(error))
  }




  _renderCityMarker = (city, index, name) => {
    console.log("name : " + name)
    return (
      <Marker key={`marker-${index}`} longitude={city[1]} latitude={city[0]}>
        <CityPin size={20} onClick={() => {
          this.setState({ popupInfo: city });
          this.setState({ nameCity: name })
        }} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;
    const { nameCity } = this.state;


    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo[1]}
          latitude={popupInfo[0]}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} name={nameCity} />
        </Popup>
      )
    );
  }



  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let setUserLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
      let newViewport = {
        height: "100vh",
        width: "100vw",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 8
      };
      this.setState({
        viewport: newViewport,
        userLocation: setUserLocation
      });
    });
  };





  render() {

    return (

      <div>
        <div>
        </div>

        <ReactMapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/outdoors-v11"
          onViewportChange={viewport => this.setState({ viewport })}
          {...this.setUserLocation()}
          mapboxApiAccessToken="pk.eyJ1IjoiYXJzaGF2aW4xOTk0IiwiYSI6ImNrMmo5dGN5bDBxdWUzbm8wcWgwOGtvNXEifQ.Uul444D_FpErb1IlEpD58Q"
        >


          {Object.keys(this.state.userLocation).length !== 0 ? (
            <div>

              {this.state.centers.map((object, i) =>
                this._renderCityMarker([object.lat, object.long], i, object))}

              {this._renderPopup()}


              <Marker
                id='marker1'
                className="marker"
                latitude={this.state.userLocation.lat}
                longitude={this.state.userLocation.long}
              >

              </Marker>

              <div className="fullscreen" style={fullscreenControlStyle}>
                <FullscreenControl />
              </div>
              <div className="nav" style={navStyle}>
                <NavigationControl />
              </div>

            </div>
          ) : (
              <div>Loading your location</div>
            )}
        </ReactMapGL>
      </div>
    )
  }

}

export default Map;

