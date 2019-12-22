var basicScene;
Physijs.scripts.worker = 'physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';
var texture = new THREE.TextureLoader().load('img/tijolo.jpg')
class BasicScene {
    // constructor
    constructor(args) {
    // Create a scene, a camera, a light and a WebGL renderer with Three.JS
    this.scene = new Physijs.Scene({gravity: new THREE.Vector3(0,-10,0)});
    
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10000);
    this.scene.add(this.camera);
    this.light = new THREE.PointLight();
    this.light.position.set(-256, 256, -256);
    this.scene.add(this.light);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    window.addEventListener('resize', function(){
    this.camera.aspect(window.innerWidth/ window.innerHeight)
     this.renderer.render(scene,camera)
    })
    this.user = new Character({
    color: 0xFF00FFFF
    });
    this.scene.add(this.user.mesh);
    // Create the "world" : a 3D representation of the
    
    this.world = new World({ map: texture, color: 0xFFFFFF }); //MUDA O CENARIO
    this.scene.add(this.world.mesh);
   
   document.getElementById(args.elementId).appendChild(this.renderer.domElement);
    this.setFocus(this.user.mesh);
    this.setControls()
    this.orbitControls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.orbitControls.enableKeys = false;
    }
   
    // Updating the camera to follow and look at a given Object3D / Mesh
    setFocus(object) {
    'use strict';
    this.camera.position.set(object.position.x, object.position.y + 3000,
   object.position.z - 500);
    this.camera.lookAt(object.position);
    }
    frame() {
        'use strict';
        this.orbitControls.update();
        // And draw !
    this.user.motion();
    this.camera.position.copy(this.user.mesh.position).add(new THREE.Vector3(50,800,-50))
    this.camera.lookAt(this.user.mesh.position)
        this.renderer.render(this.scene, this.camera);
        }

        // Event handlers
    setControls() {
    var user = this.user
    // State of the different controls
    var controls = {
    left: false,
   up: false,
    right: false,
   down: false,
   jump: false
    };
    // When the user presses a key
    document.onkeydown = function(e) {
    var prevent = true;
    // Update the state of the attached control to "true"
    switch (e.keyCode) {
    case 37:
    controls.left = true;
   break;
    case 38:
    controls.up = true;
   break;
    case 39:
    controls.right = true;
   break;
    case 40:
    controls.down = true;
   break;
   case 32:
        controls.jump = true;
   break;
    default:
    prevent = false;
    }
    // Avoid the browser to react unexpectedly
    if (prevent) {
    e.preventDefault();
    } else {
    return;
    }
    // Update the character's direction
    user.setDirection(controls);
    };

    // When the user releases a key
    document.onkeyup = function(e) {
    var prevent = true;
    // Update the state of the attached control to "false"
    switch (e.keyCode) {
    case 37:
    controls.left = false;
   break;
    case 38:
    controls.up = false;
    break;
    case 39:
    controls.right = false;
   break;
    case 40:
    controls.down = false;
   break;
   case 32:
        controls.jump = false;
   break;
    default:
    prevent = false;
    }
    // Avoid the browser to react unexpectedly
    if (prevent) {
    e.preventDefault();
    } else {
    return;
    }
    // Update the character's direction
    user.setDirection(controls);
    };
}

    };
    
    

    function animate() {
        requestAnimationFrame(animate);
        basicScene.scene.setGravity(new THREE.Vector3(0,-20,0))
        basicScene.scene.simulate();
        basicScene.frame();
        
       }

    var startAnimation = function(elementId) {
        basicScene = new BasicScene({elementId: elementId});
        window.addEventListener('resize', function(){
            basicScene.renderer.setSize(window.innerWidth, window.innerHeight);
            basicScene.camera.aspect = window.innerWidth / window.innerHeight;
            basicScene.camera.updateProjectionMatrix();
        });
        animate();
       }
       