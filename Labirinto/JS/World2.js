class World {
    
    // constructor
    constructor(args) {
    // Set the different geometries composing the room
    let obstacles = [
    new THREE.CubeGeometry(2000, 200, 64), //parede prin  ,0
    new THREE.CubeGeometry(2000, 200, 64), //parede prin  ,1
    new THREE.CubeGeometry(2000, 200, 64), // parede prin  2
    new THREE.CubeGeometry(2000, 200, 64), //parede prin   3
    new THREE.CubeGeometry(250, 200, 64),  //4
    new THREE.CubeGeometry(250, 200, 64), // 5
    new THREE.CubeGeometry(250, 200, 64), // 6  peq bx esq 1º
    new THREE.CubeGeometry(250, 200, 64), // 7 
    new THREE.CubeGeometry(950, 200, 64), // 8
    new THREE.CubeGeometry(950, 200, 64), // 9
    new THREE.CubeGeometry(400, 200, 64), // 10 ****
    new THREE.CubeGeometry(300, 200, 64), // 11
    new THREE.CubeGeometry(650, 200, 64), // 12
    new THREE.CubeGeometry(150, 200, 64), // 13
    new THREE.CubeGeometry(300, 200, 64), // 14
    new THREE.CubeGeometry(600, 200, 64), // 15 ***** falta completa escaa
    new THREE.CubeGeometry(600, 200, 64), // 16
    new THREE.CubeGeometry(210, 200, 64), // 17
    new THREE.CubeGeometry(450, 200, 64), // 18  diminuir a escala
    new THREE.CubeGeometry(170, 200, 64), // 19
    new THREE.CubeGeometry(250, 200, 64), // 20
    new THREE.CubeGeometry(170, 200, 64), // 21
    new THREE.CubeGeometry(380, 200, 64), // 22
    new THREE.CubeGeometry(300, 200, 10), // 23
    new THREE.CubeGeometry(380, 200, 64), // 24
    new THREE.CubeGeometry(380, 200, 64), // 25
    new THREE.CubeGeometry(650, 200, 64), // 26
    new THREE.CubeGeometry(900, 200, 64), // 27
    new THREE.CubeGeometry(250, 200, 64),  //28
    new THREE.CubeGeometry(300, 200, 64), //29
    new THREE.CubeGeometry(100, 200, 64),  //30
    new THREE.CubeGeometry(500, 200, 64), //31
    new THREE.CubeGeometry(800, 200, 64), //32
    new THREE.CubeGeometry(200, 200, 64), //33
    new THREE.CubeGeometry(300, 200, 64), //34
    new THREE.CubeGeometry(100, 200, 100), //35
    new THREE.CubeGeometry(300, 200, 64), //36
    new THREE.CubeGeometry(300, 200, 64), //37
    new THREE.CubeGeometry(400, 200, 64), //38
    new THREE.CubeGeometry(60, 200, 60), //39
    new THREE.CubeGeometry(150, 200, 64), //40
    new THREE.CubeGeometry(150, 200, 64), //41
    new THREE.CubeGeometry(300, 200, 64), //42
    new THREE.CubeGeometry(800, 200, 64), //43
    new THREE.CubeGeometry(150, 200, 64), //44
    new THREE.CubeGeometry(500, 200, 64), //45
    new THREE.CubeGeometry(250, 200, 64), //46
    new THREE.CubeGeometry(100, 200, 100), //47





    ];
    // Set and add the ground
    let material = new THREE.MeshLambertMaterial(args);
    let ground = new THREE.PlaneGeometry(2000, 2000);
    this.ground = new THREE.Mesh(ground, material);
    this.ground.rotation.x = -Math.PI / 2;
    // Set the "world" modelisation object
    this.mesh = new THREE.Object3D();
    this.mesh.add(this.ground);
    // Set and add the obstacles
    this.obstacles = [];
    for (let i = 0; i < obstacles.length; i += 1) {
    this.obstacles[i] = new Physijs.BoxMesh(obstacles[i], material);
    this.mesh.add(this.obstacles[i]);
    }
    this.obstacles[0].position.set(0, 100, 1000);
    this.obstacles[1].position.set(0, 100, -1000);
    this.obstacles[2].position.set(1000, 100, 0);
    this.obstacles[2].rotation.y = Math.PI / 2;
    this.obstacles[3].position.set(-1000, 100, 0); 
    this.obstacles[3].rotation.y = Math.PI / 2;  // PAREDES PRINCIPAIS
    this.obstacles[4].position.set(900, 100, 600);
    this.obstacles[5].position.set(700, 100, 800);
    this.obstacles[6].position.set(900, 100, -600);
    this.obstacles[7].position.set(700, 100, -800);
    this.obstacles[8].position.set(800, 100, 0); // HOR 2ª wall esq
    this.obstacles[8].rotation.y = Math.PI / 2;
    this.obstacles[9].position.set(300, 100, -450);
    this.obstacles[10].position.set(605, 100, -630); // bx lad esq ****
    this.obstacles[10].rotation.y = Math.PI / 2;
    this.obstacles[11].position.set(605, 100, 630); // cim 2º lad esq
    this.obstacles[11].rotation.y = Math.PI / 2;
    this.obstacles[12].position.set(600, 100, 20); // HOR 3ª wall esq mn 
    this.obstacles[12].rotation.y = Math.PI / 2;
    this.obstacles[13].position.set(500, 100, 510);
    this.obstacles[14].position.set(410, 100, 820); // HOR 3ª wall esq mn 
    this.obstacles[14].rotation.y = Math.PI / 2;
    this.obstacles[15].position.set(400, 100, 250);
    this.obstacles[15].rotation.y = Math.PI / 2;
    this.obstacles[16].position.set(270, 100, -275);
    this.obstacles[17].position.set(327, 100, -80);
    this.obstacles[18].position.set(190, 100, 112); // diminuir a escala
    this.obstacles[18].rotation.y = Math.PI / 2;
    this.obstacles[19].position.set(300, 100, 707);
    this.obstacles[20].position.set(190, 100, 610); 
    this.obstacles[20].rotation.y = Math.PI / 2;
    this.obstacles[21].position.set(100, 100, 518); // copiar pra baixo
    this.obstacles[22].position.set(-15, 100, 680); 
    this.obstacles[22].rotation.y = Math.PI / 2;
    this.obstacles[23].position.set(100, 100, 870); 
    this.obstacles[24].position.set(-20, 100, 305); 
    this.obstacles[25].position.set(-200, 100, 680); 
    this.obstacles[25].rotation.y = Math.PI / 2;
    this.obstacles[26].position.set(-520, 100, 840); 
    this.obstacles[27].position.set(-815, 100, 365); 
    this.obstacles[27].rotation.y = Math.PI / 2;
 // baixo direita
    this.obstacles[28].position.set(-900, 100, -600);
    this.obstacles[29].position.set(-850, 100, -800);
    this.obstacles[30].position.set(-810, 100, -520);
    this.obstacles[30].rotation.y = Math.PI / 2;
    this.obstacles[31].position.set(-590, 100, -450);
    this.obstacles[32].position.set(-200, 100, -430); 
    this.obstacles[32].rotation.y = Math.PI / 2;
    this.obstacles[33].position.set(-670, 100, -735);
    this.obstacles[33].rotation.y = Math.PI / 2;
    this.obstacles[34].position.set(-490, 100, -665);
    this.obstacles[35].position.set(-490, 100, -830); // box peq
    this.obstacles[36].position.set(-30, 100, -800);
    this.obstacles[37].position.set(100, 100, -630);
    this.obstacles[38].position.set(270, 100, -800);
    this.obstacles[38].rotation.y = Math.PI / 2;
    this.obstacles[39].position.set(430, 100, -760); // box peq
//baixo finish
    this.obstacles[40].position.set(-900, 100, -275);
    this.obstacles[41].position.set(-720, 100, -55);
    this.obstacles[42].position.set(-620, 100, -175);
    this.obstacles[42].rotation.y = Math.PI / 2;
    this.obstacles[43].position.set(-420, 100, 75);
    this.obstacles[43].rotation.y = Math.PI / 2;
    this.obstacles[44].position.set(-520, 100, 150);
    this.obstacles[45].position.set(-620, 100, 365);
    this.obstacles[45].rotation.y = Math.PI / 2;
    this.obstacles[46].position.set(-525, 100, 645);
    this.obstacles[47].position.set(-30, 100, 120);




















    }
    getObstacles() {
        return this.obstacles;
        }
   };