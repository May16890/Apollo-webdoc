var scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000),
    renderer = new THREE.WebGLRenderer({alpha: true}),
    sol, tierra, luna;

function renderScene() {
    tierra.animate();
    sol.animate();
    // luna.animate();
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
}

function main() {
    renderer.setClearColor(0x000000, 0.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    
    MOUSE.initialize("#canvas");

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 20;
    camera.lookAt(scene.position);

    // var luzCamara = new Luz(0x555555, camera.position.x, camera.position.y, camera.position.z, true, "ambient");
    var luzCamara = new Luz(0xffffff, camera.position.x, camera.position.y, camera.position.z, true, "ambient");
    luzCamara.model(scene);
    
    sol = new Astro(6 / 2, "res/tierra.jpg", 0, 0, 0.002, false, true);
    sol.model();
    
    tierra = new Astro(1.27 / 2, "res/luna.jpg", 6, 0.001, 0.005, false, true);
    tierra.model();
    
    scene.add(sol.get());
    sol.addSatelite(tierra.get());

    if (document.querySelector('.right')) {
        var doSomethingId;

        function doSomething ( ) {
            scene.rotation.y += 0.01;
        }

        var mine = document.querySelector(".right");
        mine.addEventListener("mouseover", function () {
            doSomething();
            doSomethingId = setInterval(doSomething, 12);
            document.querySelector(".right").style.opacity = '.2';
        });
        
        mine.addEventListener("mouseout", function () {
            clearInterval(doSomethingId);
            document.querySelector(".right").style.opacity = '.1';
        });
    }

    if (document.querySelector('.left')) {
        var doSomethingId;

        function doSomething ( ) {
            scene.rotation.y -= 0.01;
        }

        var mine = document.querySelector(".left");
        mine.addEventListener("mouseover", function () {
            doSomething();
            doSomethingId = setInterval(doSomething, 8);
            document.querySelector(".left").style.opacity = '.2';
        });
        
        mine.addEventListener("mouseout", function () {
            clearInterval(doSomethingId);
            document.querySelector(".left").style.opacity = '.1';
        });
    }
    $("#canvas").append(renderer.domElement);

    renderScene();
}

main();