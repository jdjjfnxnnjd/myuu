<template>
  <div>
    <div id="map" style="width: 100%; height: 500px;"></div>
    <div @click="draw">画</div>
  </div>
</template>

<script>
import 'ol/ol.css';
import {Fill, Icon, Stroke, Style, Text} from "ol/style";
import "ol/ol.css";
import Overlay from "ol/Overlay";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import Vector from "ol/layer/Vector";
import SourceVector from "ol/source/Vector";
import VectorImage from "ol/layer/VectorImage";
import ClusterVector from "ol/source/Cluster";
import CircleGeom from "ol/geom/Circle";
import XYZ from "ol/source/XYZ";
import {fromLonLat, transform, transformExtent} from "ol/proj";
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import Polygon from "ol/geom/Polygon";
import LineString from "ol/geom/LineString";
import {defaults, Select} from "ol/interaction";
import Map from 'ol/Map.js';
export default {
  name: 'map',
  data() {
    return {
      vectorLayer: null,
    }
  },
  mounted() {
    const vectorSource = new SourceVector({
      features: []
    });

    // 创建矢量图层
    this.vectorLayer = new Vector({
      source: vectorSource
    });
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            crossOrigin: "anonymous",
            url: "https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([114.04, 22.55]), // 地图中心点
        zoom: 5,
        minZoom: 1,
        maxZoom: 18,
      })
    });
    map.addLayer(this.vectorLayer);
  },
  methods: {

    drawPoint(lon, lat) {
      // 将经纬度转换为地图投影坐标
      const pointCoords = fromLonLat([lon, lat]);
      // 创建点要素
      const pointFeature = new Feature({
        geometry: new Point(pointCoords)
      });
      // 设置点的样式

      // 将点要素添加到矢量数据源中
      this.vectorLayer.getSource().addFeature(pointFeature);
    },
    // 根据经纬度画线
    drawLine(coords) {
      // 将经纬度数组转换为地图投影坐标数组
      const lineCoords = coords.map(coord =>fromLonLat(coord));
      // 创建线要素
      const lineFeature = new Feature({
        geometry: new LineString(lineCoords)
      });
      // 设置线的样式
      lineFeature.setStyle(new Style({
        stroke: new Stroke({
          color: 'blue',
          width: 2
        })
      }));
      // 将线要素添加到矢量数据源中
      this.vectorLayer.getSource().addFeature(lineFeature);
    },
    draw() {
      this.drawPoint(117.17, 31.9);
      // 示例：画线
      this.drawLine([
        [117.1, 31.5],
        [117.2, 31.6],
        [117.3, 31.5]
      ]);
    }
  }
}
</script>

<style scoped lang="scss">

</style>
