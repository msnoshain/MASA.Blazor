class e{instance;dotNetHelper;constructor(e,t){this.instance=new BMapGL.Map(e),t.enableScrollWheelZoom&&this.instance.enableScrollWheelZoom(),this.instance.setMaxZoom(t.maxZoom),this.instance.setMinZoom(t.minZoom),this.instance.centerAndZoom(t.center,t.zoom),this.instance.setMapType(t.mapTypeString),t.trafficOn&&this.instance.setTrafficOn(),t.dark&&this.instance.setMapStyleV2({styleId:t.darkThemeId})}setDotNetObjectReference(e,t){this.dotNetHelper=e,t.forEach((t=>{this.instance.addEventListener(t,(async function(n){"dragstart"==t||"dragging"==t||"dragend"==t||"dblclick"==t?await e.invokeMethodAsync("OnEvent",t,{latlng:n.point,pixel:n.pixel}):"click"==t||"rightclick"==t||"rightdblclick"==t||"mousemove"==t?await e.invokeMethodAsync("OnEvent",t,{latlng:n.latlng,pixel:n.pixel}):await e.invokeMethodAsync("OnEvent",t,null)}))}))}getOriginInstance=()=>this.instance;getCenter=()=>this.instance.getCenter();setZoom=e=>this.instance.setZoom(e);getZoom=()=>this.instance.getZoom();setMaxZoom=e=>this.instance.setMaxZoom(e);setMinZoom=e=>this.instance.setMinZoom(e);enableScrollWheelZoom=()=>this.instance.enableScrollWheelZoom();disableScrollWheelZoom=()=>this.instance.disableScrollWheelZoom();setMapType=e=>this.instance.setMapType(e);getMapType=()=>this.instance.getMapType();setTrafficOn=()=>this.instance.setTrafficOn();setTrafficOff=()=>this.instance.setTrafficOff();setMapStyleV2=e=>this.instance.setMapStyleV2(e);panTo=e=>this.instance.panTo(e);addOverlay=e=>this.instance.addOverlay(e);removeOverlay=e=>this.instance.removeOverlay(e);clearOverlays=()=>this.instance.clearOverlays();addCircle(e){var t=new BMapGL.Circle(e.center,e.radius,{strokeColor:e.strokeColor,strokeWeight:e.strokeWeight,strokeOpacity:e.strokeOpacity,strokeStyle:0==e.strokeStyle?"solid":"dashed",fillColor:e.fillColor,fillOpacity:e.fillOpacity});return this.instance.addOverlay(t),t}addMarker(e){var t=new BMapGL.Marker(e.point,{offset:e.offset,rotation:e.rotation,title:e.title});return this.instance.addOverlay(t),t}addLabel(e){var t=new BMapGL.Label(e.content,{offset:e.offset,position:e.position});return this.instance.addOverlay(t),t}addPolyline(e){if(null==e.points)return null;var t=new BMapGL.Polyline(e.points,{strokeColor:e.strokeColor,strokeWeight:e.strokeWeight,strokeOpacity:e.strokeOpacity,strokeStyle:0==e.strokeStyle?"solid":"dashed",geodesic:e.geodesic,clip:e.clip});return this.instance.addOverlay(t),t}toBMapGLPoint=e=>new BMapGL.Point(e.lng,e.lat);addPolygon(e){if(null==e.points)return null;var t=[];e.points.forEach((e=>{t.push(this.toBMapGLPoint(e))}));var n=new BMapGL.Polygon(t,{strokeColor:e.strokeColor,strokeWeight:e.strokeWeight,strokeOpacity:e.strokeOpacity,strokeStyle:0==e.strokeStyle?"solid":"dashed",fillColor:e.fillColor,fillOpacity:e.fillOpacity});return this.instance.addOverlay(n),n}contains(e){var t=this.instance.getOverlays();for(let n=0;n<t.length;n++)if(t[n]===e)return!0;return!1}}const t=(t,n)=>new e(t,n);export{t as init};
//# sourceMappingURL=baidumap-proxy.js.map
