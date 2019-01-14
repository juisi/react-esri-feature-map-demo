// @flow

import React, { Component } from 'react'
import { Map, TileLayer, EsriFeatureLayer,LayersControl } from './src'
import HotspotComponent from './hotspot-marker'

type State = {
  lat: number,
  lng: number,
  zoom: number,
}
const { BaseLayer, Overlay } = LayersControl

export default class EsriFeatureLayerExample extends Component<{}, State> {
  state = {
    lat: 68.7512,
    lng: 25.6189,
    zoom: 6,
  }

  onClick = () => {
    console.log('esri-feature-layer example this',this)
  }

  render() {
    return (
      <Map
        center={[this.state.lat, this.state.lng]}
        zoom={this.state.zoom}
        onClick={this.onClick}>
        <HotspotComponent />
        <LayersControl position="topright">
          <LayersControl.BaseLayer name="Peruskartta" >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.kartat.kapsi.fi/peruskartta/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="OpenStreetMap" checked >
            <TileLayer
              url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="kaivospiirihakemukset" >
            <EsriFeatureLayer name="kaivospiirihakemukset"
              color="aqua"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/0?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="kaivospiirit" >
            <EsriFeatureLayer name="kaivospiirit"
              color="lightblue"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/1?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="kaivospiirit karenssissa" >
            <EsriFeatureLayer name="kaivospiirit_karenssissa"
              color="blue"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/2?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="kaivoslupahakemukset" color="darkcyan">
            <EsriFeatureLayer name="kaivoslupahakemukset"
              color="darkcyan"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/3?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="kaivosalueet voimassa" >
            <EsriFeatureLayer name="kaivosalueet_voimassa"
              color="darkmagenta"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/4?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="valtaushakemukset" >
            <EsriFeatureLayer name="valtaushakemukset"
              color="green"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/5?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="valtaukset" >
            <EsriFeatureLayer name="valtaukset"
              color="forestgreen"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/6?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="valtaukset karenssissa" >
            <EsriFeatureLayer name="valtaukset_karenssissa"
              color="darkgreen"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/7?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="malminetsintalupahakemukset" color="lightpink">
            <EsriFeatureLayer name="malminetsintalupahakemukset"
              color="lightpink"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/8?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="malminetsintaalueet" color="lightcoral" >
            <EsriFeatureLayer name="malminetsintaalueet"
            color="lightcoral"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/9?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="malminetsintaluvat karenssissa" >
            <EsriFeatureLayer name="malminetsintaluvat_karenssissa"
            color="chocolate"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/10?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="varausilmoitushakemukset" >
            <EsriFeatureLayer name="varausilmoitushakemukset"
            color="gold"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/11?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="varausilmoitukset karenssissa" >
            <EsriFeatureLayer name="varausilmoitukset_karenssissa"
            color="deeppink"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/12?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="varausilmoitukset" >
            <EsriFeatureLayer name="varausilmoitukset"
              color="firebrick"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/13?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="kullanhuuhdontaluvat" >
            <EsriFeatureLayer name="kullanhuuhdontaluvat"
              color="gold"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/14?f=pjson"
            />
          </LayersControl.Overlay>
          <LayersControl.Overlay name="kullanhuuhdontalupahakemukset" >
            <EsriFeatureLayer name="kullanhuuhdontalupahakemukset"
            color="darkgoldenrod"
              url="http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/15?f=pjson"
            />
          </LayersControl.Overlay>
        </LayersControl>
      </Map>

    )
  }
}
