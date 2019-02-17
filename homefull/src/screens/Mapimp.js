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
    this.markat=this.markat.bind(this);
    this.test=this.test.bind(this);
  }

  test(e){
    console.log("hi");
  }

  markat(p,q){
    console.log(p);
    return(
      <Marker title={'home location 2.'} name={'SOA'} position={{lat: p, lng: q}} onClick={this.test} ></Marker>
    )
  }

  
    render() {
      // console.log(this.props.lat);
      // console.log(this.props.lng);
      // var google=this.props.google;
      var llat=parseFloat(this.props.lat);
      var llng=parseFloat(this.props.lng);
      
      var pos = {
        lat: llat,
        lng: llng
      };
      var pos1 = {
        lat: 28.7471673,
        lng: -96.59599779999999
      };
      // console.log(pos);
      var bounds = new this.props.google.maps.LatLngBounds();
      bounds.extend(pos);
      bounds.extend(pos1);

      return (
        <div>
          <Map
          google={this.props.google}
          scrollwheel={false}
          style={mapStyles}
          initialCenter={{
          lat: llat,
          lng: llng
          }}
          bounds={bounds}
          >
            {this.markat(llat,-96.7665918)}
            <Marker title={'home location.'} name={'SOA'} position={{lat: 32.11266, lng: -96.7665918}} onClick={this.test}></Marker>
            <Marker title={'Current location.'} name={'SOMA'} position={{lat:parseFloat(this.props.lat),lng:parseFloat(this.props.lng)}} icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}}></Marker>
            
          </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB08XRdCu7b1Tmhk-QBoYqMiuWt8QalM_Q'
})(Mapimp)
