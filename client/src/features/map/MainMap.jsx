import React, { Component } from 'react'
import { Embed } from 'semantic-ui-react'
import EsriFeatureLayerExample from './esri-feature-layer-example'

class MainMap extends Component {
  render() {
    return (
    <div id ="MapContainer">
      <EsriFeatureLayerExample />
    </div>
    )
  }
}

export default MainMap
