export interface HeroMapOverlayGeoJsonHeatConfig {
  type: "geojson-heat";
  url: string;
  valueProperty: string;
  min: number;
  max: number;
}

export interface HeroMapOverlayImageRasterConfig {
  type: "image-raster";
  url: string;
  coordinates: [[number, number], [number, number], [number, number], [number, number]];
  opacity?: number;
}

export interface HeroMapCameraConfig {
  center: [number, number];
  zoom: number;
  pitch: number;
  bearing: number;
  minZoom: number;
  maxZoom: number;
  maxPitch: number;
}

export interface HeroMapStyleConfig {
  maptilerStyleId: string;
  terrainExaggeration: number;
}

export interface HeroMapSceneConfig {
  id: string;
  title: string;
  camera: HeroMapCameraConfig;
  bounds: [number, number, number, number];
  style: HeroMapStyleConfig;
  boundaryUrl: string;
  maskUrl?: string;
  overlay: HeroMapOverlayGeoJsonHeatConfig | HeroMapOverlayImageRasterConfig;
}

export interface HeroMapSceneEntry {
  id: string;
  sceneUrl: string;
  previewImageUrl: string;
}

export const heroDemoScene: HeroMapSceneEntry = {
  id: "las-grullas",
  sceneUrl: "/maps/las-grullas/scene.json",
  previewImageUrl: "/maps/las-grullas/preview.svg"
};
