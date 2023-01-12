import TileMap from './TileMap.js';

const tileSize = 32;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const tileMap = new TileMap(10, 10, 64);

function gameLoop() {
  tileMap

}

setInterval(gameLoop, 1000 / 75);