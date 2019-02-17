import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '500px'
};

export class Mapimp extends Component {
  constructor(){
    super();
  }


  
    render() {

      return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB08XRdCu7b1Tmhk-QBoYqMiuWt8QalM_Q'
})(Mapimp)
