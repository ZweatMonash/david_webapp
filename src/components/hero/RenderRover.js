import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

class RenderRover extends Component {
  componentDidMount() {
    var parent = document.getElementById(this.props.parentID);
    var width = parent.clientWidth;
    var height = 500;

    if (width < 768) {
      height = 300;
    }
    console.log(width, height);
    var mobile = false;
    if (width < 768) {
      mobile = true;
    }

    var scene = new THREE.Scene();
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 100, 50);
    scene.add(spotLight);

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    this.mount.appendChild(renderer.domElement);

    let loader = new GLTFLoader();
    var rover;
    loader.load("./3D/rover_ver2/rover_ver2.gltf", function (gltf) {
      scene.add(gltf.scene);
      rover = gltf.scene.children[0];
      rover.shininess = 0;
      // var spawnPose = new THREE.Vector3(0, -10, 0);
      // spawnPose.setFromMatrixPosition(rover);
      var bbox = new THREE.Box3().setFromObject(scene);
      var cent = bbox.getCenter(new THREE.Vector3());
      var size = bbox.getSize(new THREE.Vector3());

      //Rescale the object to normalized space
      var maxAxis = Math.max(size.x, size.y, size.z);
      scene.scale.multiplyScalar(6 / maxAxis);
      bbox.setFromObject(scene);
      bbox.getCenter(cent);
      bbox.getSize(size);
      //Reposition to 0,halfY,0
      scene.position.copy(cent);
      if (mobile) {
        scene.position.y = 5;
      }
    });

    var camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    if (width < 768) {
      camera.position.x = 0;
      camera.position.y = 20;
      camera.position.z = 30;
    } else {
      camera.position.x = 5;
      camera.position.y = 7;
      camera.position.z = 20;
    }
    camera.lookAt(scene.position);

    var animate = function () {
      requestAnimationFrame(animate);

      if (rover) {
        if (mobile) {
          rover.rotation.y -= 0.005;
        } else {
          rover.rotation.y -= 0.005;
        }
      }
      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default RenderRover;
