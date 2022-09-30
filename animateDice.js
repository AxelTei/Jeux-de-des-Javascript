import * as THREE from 'https://unpkg.com/three@0.144.0/build/three.module.js';

let canvasElement = document.querySelector('#canvasElement');

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, canvasElement.innerWidth / canvasElement.innerHeight, 0.1, 1000);
camera.position.x = 3;

let renderer = new THREE.WebGLRenderer(
    {
        canvas: canvasElement
    }
);

