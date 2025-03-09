<!--
<template>
  <div id="mapbox" class="box"></div>
</template>

<script>
import TileLayer from "ol/layer/Tile";
import {Feature, Map, View} from "ol";
import {XYZ} from "ol/source";
import {fromLonLat} from "ol/proj";
import {Point} from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Circle, Fill, Stroke, Style, Text} from "ol/style";

export default {
  name: 'map',
  data() {
    return {
      openMap: null,
    }
  },
  mounted() {
    this.initMap();
    this.setMarker();
    this.singleclick();
  },
  methods: {
    singleclick() {
      this.openMap.on("singleclick", (e) => {
        // 判断是否点击在点上
        let feature = this.openMap.forEachFeatureAtPixel(
            e.pixel,
            (feature) => feature
        );
        console.log(feature);
      });
    },
    setMarker() {
      let _style = new Style({
        image: new Circle({
          radius: 10,
          stroke: new Stroke({
            color: "#fff",
          }),
          fill: new Fill({
            color: "#3399CC",
          }),
        }),
        text: new Text({
          placement: 'point',
          text: '点标记',
          offsetY: -15,
          padding: [2,2,2,2],
          fill: new Fill({color: 'black'}),
          backgroundFill: new Fill({color: 'white'}),
        })
      });
      let _feature = new Feature({
        geometry: new Point(fromLonLat([121.350755, 31.180574])),
      });
      _feature.setStyle(_style);
      let _marker = new VectorLayer({
        source: new VectorSource({
          features: [_feature],
        }),
      });
      this.openMap.addLayer(_marker);
    },
    initMap() {
      this.openMap = new Map({
        target: 'mapbox',
        layers: [
          new TileLayer({
            source: new XYZ({
              crossOrigin: "anonymous",
              url: "https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
            }),
          }),
        ],
        view: new View({
          center: fromLonLat([121.350755, 31.180574]),
          zoom: 10,
          constrainOnlyCenter: true
        }),
        controls: [],
      });
    },
  },
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 800px;
}
</style>
-->
