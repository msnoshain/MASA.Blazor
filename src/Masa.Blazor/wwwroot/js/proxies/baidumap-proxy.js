async function e(e,o,t){var n=new BMapGL.Map(e);return o.enableScrollWheelZoom&&n.enableScrollWheelZoom(),n.centerAndZoom(o.center,o.zoom),o.dark&&n.setMapStyleV2({styleId:o.darkThemeId}),n.addEventListener("zoomend",(async function(e){await t.invokeMethodAsync("OnJsZoomEnd",n.getZoom())})),n.addEventListener("moveend",(async function(e){await t.invokeMethodAsync("OnJsMoveEnd",n.getCenter())})),n}async function o(e){return new BMapGL.Circle(e.center,e.radius,{strokeColor:e.strokeColor,strokeWeight:e.strokeWeight,strokeOpacity:e.strokeOpacity,strokeStyle:0==e.strokeStyle?"solid":"dashed",fillColor:e.fillColor,fillOpacity:e.fillOpacity})}async function t(e){return new BMapGL.Marker(e.point,{offset:e.offset,rotation:e.rotation,title:e.title})}async function n(e){return new BMapGL.Label(e.content,{offset:e.offset,position:e.position})}async function r(e){return new BMapGL.Polyline(e.points,{strokeColor:e.strokeColor,strokeWeight:e.strokeWeight,strokeOpacity:e.strokeOpacity,strokeStyle:0==e.strokeStyle?"solid":"dashed",geodesic:e.geodesic,clip:e.clip})}export{o as constructCircle,n as constructLabel,t as constructMarker,r as constructPolyline,e as init};
//# sourceMappingURL=baidumap-proxy.js.map
