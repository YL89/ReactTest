import React from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'

export default class Map extends React.Component{


    componentDidMount(){
        this.map = L.map('map').setView([43.717899, -79.6582408], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiaGVybWFubHVrIiwiYSI6ImNrYzQyZGV4NTAyNngycm52bzdseGRsOHMifQ.Dp-vNloeXWRN0h9TLSCbVA'
        }).addTo(this.map);

        let userMarker = L.marker().bindPopup("Your location");

        this.map.locate({ setView: true, watch: false, maxZoom: 13 });

        this.map.on('locationfound', (e) => {
            userMarker.setLatLng(e.latlng).setIcon(L.icon({
                iconUrl: require('./images/user.svg'),
                iconSize: [50, 50]
            })).addTo(this.map);
        });

        userMarker.on(
            {
                mouseover: () => {
                    userMarker.openPopup()
                },
                mouseout: () => {
                    userMarker.closePopup()
                }
            }
        )
    }

    render(){
        return <div id='map'></div>
    }
}

