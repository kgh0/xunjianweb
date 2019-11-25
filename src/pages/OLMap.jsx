import 'ol/ol.css';
import React from "react"
import Map from "ol/Map"
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import {OSM, TileArcGISRest} from 'ol/source';
class OLMap extends React.Component {


    componentDidMount(){
        var url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer';

        var layers = [
            new TileLayer({
                source: new OSM()
            }),
            new TileLayer({
                extent: [-13884991, 2870341, -7455066, 6338219],
                source: new TileArcGISRest({
                    url: url
                })
            })
        ];
        new Map({
            layers: layers,
            target: 'olmap',
            view: new View({
                center: [-10997148, 4569099],
                zoom: 4
            })
        });
    }

    render() {
        return (<div id="olmap" style={{height:'100vh'}}></div>);
    }
}


export default OLMap;