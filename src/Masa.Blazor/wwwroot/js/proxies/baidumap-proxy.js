async function e(e,t,o){var n=new BMapGL.Map(e);return t.enableScrollWheelZoom&&n.enableScrollWheelZoom(),n.centerAndZoom(t.center,t.zoom),t.dark&&n.setMapStyleV2({styleId:t.darkThemeId}),n.addEventListener("zoomend",(async function(e){await o.invokeMethodAsync("OnJsZoomEnd",n.getZoom())})),n.addEventListener("moveend",(async function(e){await o.invokeMethodAsync("OnJsMoveEnd",n.getCenter())})),n}async function t(e){return new BMapGL.Circle(e.center,e.radius,{strokeColor:e.strokeColor,strokeWeight:e.strokeWeight,strokeOpacity:e.strokeOpacity,strokeStyle:0==e.strokeStyle?"solid":"dashed",fillColor:e.fillColor,fillOpacity:e.fillOpacity})}async function o(e){return new BMapGL.Marker(e.point,{offset:e.offset,rotation:e.rotation,title:e.title})}async function n(e){return new BMapGL.Label(e.content,{offset:e.offset,position:e.position})}export{t as constructCircle,n as constructLabel,o as constructMarker,e as init};
//# sourceMappingURL=baidumap-proxy.js.map
