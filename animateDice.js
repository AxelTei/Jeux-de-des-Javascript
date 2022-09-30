import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';

// Création de la scène, de la caméra et du renderer
let canvasElement = document.getElementById('canvasElement');
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(70, canvasElement.width / canvasElement.height, 0.1, 1000);
camera.position.z = 4;
let renderer = new THREE.WebGLRenderer(
    {
        canvas: canvasElement
    }
);

// Création du mât
let poleGeometry = new THREE.BoxGeometry(3, 3, 3);
let poleMaterial = new THREE.MeshStandardMaterial({
    color: 'red',
    roughness: 0.3
});
let pole = new THREE.Mesh(poleGeometry, poleMaterial);
scene.add(pole);


// Lumière
let light = new THREE.PointLight(0xFFFFFF, 1, 50);
light.position.set(3, 2, 3);
scene.add(light);

// Rendu de la scène
renderer.setClearColor('white'); // Bleu ciel au bord de la plage
renderer.render(scene, camera);