(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(89),{lightningChart:n,Themes:l,PalettedFill:i,LUT:o,regularColorSteps:r,PointShape:d}=s;fetch(`${new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname}examples/assets/0918/precalc-surface.json`).then((e=>e.json())).then((e=>{const{keyIntensity:t,startX:a,stepX:s,startZ:d,stepZ:u,valueRanges:c,surfaceResolution:h,surfaceDataY:m,surfaceDataIntensity:p,dataPoints:f}=e,g=n().Chart3D({theme:l[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("3D surface chart visualized from scatter data set");g.getDefaultAxisX().setTitle("KPI X"),g.getDefaultAxisY().setTitle("KPI Y"),g.getDefaultAxisZ().setTitle("KPI Z"),g.addPointSeries().setName("Raw samples").add(f).setPointStyle((e=>e.setSize(5)));const P=g.addSurfaceGridSeries({dataOrder:"columns",columns:h,rows:h,start:{x:a,z:d},step:{x:s,z:u}}).setName("Surface").invalidateHeightMap(m);t&&P.invalidateIntensityValues(p).setFillStyle(new i({lookUpProperty:"value",lut:new o({interpolate:!0,steps:r(c[t].min,c[t].max,g.getTheme().examples.badGoodColorPalette),units:"KPI 4"})})),g.addLegendBox().add(g)}))}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);