import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';

// Création de la scène, de la caméra et du renderer
let reqAnim = true;
const rollButton = document.querySelector('#rollDiceButton');
const holdButton = document.querySelector('#holdButton');
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
    setTimeout(() => {
        reqAnim = true;
    }, 1000)
    diceMesh.rotation.y += 1.5 * Math.PI / 180;
    diceMesh.rotation.x += 1.5 * Math.PI / 180;

    // Rendu de la scène
    renderer.setClearColor('white');
    renderer.render(scene, camera);
    if (reqAnim === true) {
        requestAnimationFrame(animate);
    }
    // requestAnimationFrame(animate);
}



const stopAnimate = () => 
{
    diceMesh.rotation.set(0, 0, 0)
    reqAnim = false;
}


rollButton.addEventListener('click', animate)
holdButton.addEventListener('click', stopAnimate)

// Rendu de la scène
//renderer.setClearColor('white');
//renderer.render(scene, camera);