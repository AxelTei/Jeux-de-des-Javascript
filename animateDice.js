import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';

// Création de la scène, de la caméra et du renderer
const rollButton = document.querySelector('#rollDiceButton');
let canvasElement = document.getElementById('canvasElement');
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(70, canvasElement.width / canvasElement.height, 0.1, 1000);
camera.position.z = 4;
let renderer = new THREE.WebGLRenderer(
    {
        canvas: canvasElement
    }
);

// Création du dé
let diceBox = new THREE.BoxGeometry(3, 3, 3);
let material = new THREE.MeshStandardMaterial({
    color: 'red',
    roughness: 0.3
});
let diceMesh = new THREE.Mesh(diceBox, material);
scene.add(diceMesh);


// Lumière
let light = new THREE.PointLight(0xFFFFFF, 1, 50);
light.position.set(3, 2, 3);
scene.add(light);

const animate = function()
{
    diceMesh.rotation.y += 1.5 * Math.PI / 180;
    diceMesh.rotation.x += 1.5 * Math.PI / 180;
    // Rendu de la scène
    renderer.setClearColor('white');
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

rollButton.addEventListener('click', animate)

// Rendu de la scène
//renderer.setClearColor('white');
//renderer.render(scene, camera);