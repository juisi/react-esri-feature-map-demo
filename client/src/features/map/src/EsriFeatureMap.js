import { withLeaflet } from './context'
import React, { Component,Fragment } from 'react'
import {  } from 'leaflet'
import { featureLayer } from 'esri-leaflet'
import { Map, TileLayer } from 'leaflet'
//import { Map as LeafletMap, TileLayer } from 'leaflet'
//var __html = require('EsriFeatureMap.html');
console.log('tilelayer',TileLayer)

//var template = { __html: __html };
//var template = { __html: '<div class="jee"></div>' };

//tänne funktioita jotka ajetaan kerran? mountattaessa

 export default class EsriFeatureMap extends React.Component{

  componentDidMount(){

  }

  render(){
    const gtkLayerNames = [
      "kaivospiirihakemukset",
      "kaivospiirit",
      "kaivospiirit_karenssissa",
      "kaivoslupahakemukset",
      "kaivosalueet_voimassa",
      "valtaushakemukset",
      "valtaukset",
      "valtaukset_karenssissa",
      "malminetsintalupahakemukset",
      "malminetsintaluvat_karenssissa",
      "varausilmoitushakemukset",
      "varausilmoitukset_karenssissa",
      "varausilmoitukset",
      "kullanhuuhdontaluvat",
      "kullanhuuhdontalupahakemukset",
      "malminetsintaalueet",
    ]
    var gDisplayLayersInfo = []
    var gtkOverlays = {}

    // MAP
    var leafletMap = new Map('mapDiv', { center : [68.7512 , 25.6189], zoom : 7})//.setView();//.createmap()
    //console.log('map',map)

    var ArcGisMap = new TileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer');
    console.log('ArcGisMap',ArcGisMap)
    var OpenStreetMap = new TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    var Esri_WorldImagery = new TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
       attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    var Esri_WorldPhysical = new TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
       attribution: 'Tiles &copy; Esri &mdash; Source: US National Park Service',
       maxZoom: 8
    });

    var baseLayers = {
    //"Mapbox": mapbox,
    "OpenStreetMap": OpenStreetMap,
    "ArcGIS" : ArcGisMap,
    'World imagery' :Esri_WorldImagery,
    'World physical': Esri_WorldPhysical
    }
    var layer
        // Loop N amount of GTK resourceIds from 0-15

        for(let resourceId=0; resourceId<1;resourceId++){
          let color = "#ff00ff"//getLayerColor('GTK',resourceId,Colors)
          let layerName =""
        try{
          fetch("http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/"+resourceId+"/?f=pjson")
          //fetch("https://maps.nccs.nasa.gov/server/rest/services/gliht/201703_PuertoRico_test/MapServer/16")
          .then((response) => response.text())
          .then((responseText) => {
            //layerJSON = JSON.parse(responseText)
              //joko ei tulla tänne uudelleen tai leaflet hajoaa ennen tätä
              //console.log(JSON.stringify(layerJSON.name))
              //layerName = layerJSON.name

          })
          .catch((error) => {
              console.error(error);
          });
        }
        catch(e){
            console.log(e)
          }
          //var promise = $.getJSON("http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/"+resourceId+"/?f=pjson");
          //console.log(promise)
          try{
           let layer = new featureLayer({
             //url: "https://maps.nccs.nasa.gov/server/rest/services/gliht/201703_PuertoRico_test/MapServer/16",
              url: "http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/"+resourceId+"/?f=pjson",
              //name: "http://gtkdata.gtk.fi/arcgis/rest/services/Tukes/TukesWMS/MapServer/"+resourceId+"/?f=pjson",
              style: function () {
                return { color: color, weight: 1 };
              },
              //addFeature : addFeature,
              //cacheLayers : false,
              //override the default function
              //onEachFeature: overlayOnEachFeature,

              //Registers an event handler on the instance.
              //Call this method to hook an event with a listener
              //Does the same later by bindin layer.on('load', iterateFeatures,);
              //onLoad:iterateFeatures,
            });

            console.log('featureLayer',layer)
          }catch(e){console.log(e)}
            /*
            layer.metadata(function(error, metadata){
              //metadata about a map WMS layer loads after API request. could update DOM straight
              //let currentLayer.name = metadata.name
            });*//*
            function iterateFeatures () {
              layer.eachFeature(function(feature) {
                console.log(getFeatureType(feature));

              });
            }
            function addFeature(feature,layer) {
              console.log('addFeature'+feature)
            }*/
            //custom function
            /*
            function overlayOnEachFeature(feature, layer){
              layer.on({
                  //load: iterateFeatures, // should this work here?
                  // when a overlay is on display
                  add: function (e) {
                      // get information from the current layer
                      var layerInfo = getLayerInfo(feature.properties);
                      // add the information to a global variable
                      gDisplayLayersInfo.push('<br>' + layerInfo);
                      //console.log(gDisplayLayersInfo)
                      //document.getElementById("customMapBox")
                      //console.log(document.getElementById("customMapBox"))
                  },
                  remove: function (e) {

                    console.log("removing"+feature.properties)
                      var layerInfo = getLayerInfo(feature.properties);
                      var listElement = '<br>' + layerInfo;
                      for (var l in gDisplayLayersInfo){
                          // if the information is in the global variable, delete the information
                          if (listElement === gDisplayLayersInfo[l]){
                              //disable (comment out)removing of item does not prevent browser GeoJSON error on reselection
                              gDisplayLayersInfo.splice(l,1);
                          };
                      };
                  }
              });
            }*/
            //launch on selecting a checkbox element.does not relauch after reselction
            /*layer.bindPopup(function(e){
              var popupTemplate = ""
              console.log(e)
              for(let key in e.feature.properties){
                if (e.feature.properties.hasOwnProperty(key)) {
                  if(key.indexOf(".")===-1){
                    popupTemplate+=key+" {"+key+"} <br />"
                  }
                  else{
                    //the json object keys need to be renamed as well.. if the problem with template is about "." in json structure
                    key = key.replace(".","_")
                  }
                  console.log(key + " -> " + e.feature.properties[key]);
                }
              }
              let properties = e.feature.properties
              return L.Util.template(popupTemplate, properties)
            });*/

            //"<span style='color:"+color+";'>"+gtkOverlays[resourceId]+"</span>" = layer
            //eli objektin jonka resource id:tä sisältää (layer) objectin
            //This notation could be refactored to use object structure syntax
            gtkOverlays[gtkLayerNames[resourceId]] = layer

          }//ENDOF FOR
          //L.esri.basemapLayer("Gray").addTo(map);
          //var render = leafletMap.control.layers(baseLayers,gtkOverlays)//.addTo(map);


    return(
      <React.Fragment>

      <render />

      </React.Fragment>
    )
  }
}
