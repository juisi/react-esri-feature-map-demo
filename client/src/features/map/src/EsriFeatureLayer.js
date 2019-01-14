// @flow

import { isEqual } from 'lodash'
import { withLeaflet } from './context'
import { EVENTS_RE } from './MapEvented'
import { Layer } from 'leaflet'

//import { geoJson } from 'leaflet'
import type { EsriFeatureLayerProps } from './types'
import type { GridLayerProps } from './types'
import { BasemapLayer } from 'esri-leaflet'
import { featureLayer } from 'esri-leaflet'
//import { FeatureLayerService } from  'esri-leaflet'
//import { FeatureManager } from  'esri-leaflet'
//import GeoJSON from './GeoJSON'
import MapLayer from './MapLayer'
//import * as fs from 'fs';

type LeafletElement = featureLayer
type Props = { url: string, color: string } & EsriFeatureLayerProps

class EsriFeatureLayer extends MapLayer<LeafletElement, Props> {

  createLeafletElement(props: Props): LeafletElement {
    console.log('createLeafletElement')
    const { url, color, ...params } = props
    console.log('params from options:')
    console.log(this.getOptions(params))
    console.log('endof params from options')
    console.log("url"+JSON.stringify(url))

    let featureLayerParams = {
      "url" : url,
      style: function () {
        return { color: color, weight: 1 };
      },
    }
    return new featureLayer(featureLayerParams)

  }

  updateLeafletElement(fromProps: Props, toProps: Props) {
    super.updateLeafletElement(fromProps, toProps)
    const { url: prevUrl, opacity: _po, zIndex: _pz, ...prevParams } = fromProps
    const { url, opacity: _o, zIndex: _z, ...params } = toProps

    if (url !== prevUrl) {
      this.leafletElement.setUrl(url)
    }
    if (!isEqual(params, prevParams)) {
      this.leafletElement.setParams(params)
    }
  }

  getOptions(params: Object): Object {
    const superOptions = super.getOptions(params)
    return Object.keys(superOptions).reduce((options, key) => {
      if (!EVENTS_RE.test(key)) {
        options[key] = superOptions[key]
      }
      return options
    }, {})
  }
}

export default withLeaflet(EsriFeatureLayer)
