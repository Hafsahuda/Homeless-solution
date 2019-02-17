import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
var map;
const mapStyles = {
  width: '75%',
  height: '500px'
};

export class Mapimp extends Component {
  constructor(){
    super();
    
  
  }



  
    render() {
      console.log(this.props.lat);
      console.log(this.props.lng);
      // var google=this.props.google;
      var llat=parseFloat(this.props.lat);
      var llng=parseFloat(this.props.lng);
      var pos = {
        lat: llat,
        lng: llng
      };
      var pos1 = {
        lat: 31.7471673,
        lng: -92.59599779999999
      };
      console.log(pos);
      var bounds = new this.props.google.maps.LatLngBounds();
      bounds.extend(pos);
      bounds.extend(pos1);

      return (
        <div>
          <Map
          google={this.props.google}
          zoom={10}
          scrollwheel={false}
          style={mapStyles}
          initialCenter={{
          lat: llat,
          lng: llng
          }}
          bounds={bounds}
          >
            <Marker title={'Current location.'} name={'SOMA'} position={pos} icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}}></Marker>
            <Marker title={'home location.'} name={'SOA'} position={{lat: 29.7471673, lng: -95.59599779999999}}></Marker>
          </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB08XRdCu7b1Tmhk-QBoYqMiuWt8QalM_Q'
})(Mapimp)
