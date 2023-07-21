import { proxy } from 'valtio';

// default values
const state = proxy({
  intro: true, // are we on the home page or not?
  color: '#EFBD48',
  isLogoTexture: true, // are we displaying logo on the shirt?
  isFullTexture: false,
  logoDecal: './threejs.png', // initial logo decal
  fullDecal: './threejs.png', // full shirt decal
});

export default state;
