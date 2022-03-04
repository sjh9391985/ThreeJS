// three js 표현하는 3가지 사항

// 1. scene
const scene = new THREE.Scene();

// 2. camera 
/*
    three js 에는 다양한 카메라가 존재합니다.
    현재 코드에서는 PerspectiveCamera를 사용합니다.
    속성의 순서
    2-1. field of view(시야각) : 해당 시점의 화면이 보여지는 정도를 나타냅니다. (값을 크게 입력할수록 화면에 보여지는 시야가 넓어집니다. 값이 작을수록 화면에 보여지는게 크게 나타납니다.)
    2-2. aspect ratio(종횡비): 요소의 너비와 높이에 맞추어 표시합니다.
    2-3. near : near, far은 앱 성능 향상을 위해 사용할 수 있습니다.
    2-4. far 절단면: far 값 보다 멀리 있는 요소나 near 값보다 가까이 있는 오브젝트는 렌더링 되지 않는다는 뜻입니다.
*/
const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// 3. renderer
/*
    현재는 WebGLRenderer을 사용합니다.
    three js는 다른 몇가지 renderer를 사용하는데 오래된 브라우저 또는 모종의 사유로 WebGL을 지원하지 않을 경우 사용하는 것입니다.
    renderer 인스턴스 생성과 동시에 렌더링 할 곳의 크기를 설정해야합니다.(높이와 너비를 설정하는 것.)
    성능 개선이 중요한 경우, setSize()를 사용해서 구현이 가능합니다.
    * 낮은 해상도로 구현할 경우 setSize의 updateStyle()의 세번째 인자를 false로 불러오면 됩니다.

*/
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document
    .body
    .appendChild(renderer.domElement);


// 큐브 만들기
/*
    - 큐브를 만들기 위해서는 BoxGeometry가 필요합니다.(큐브에 필요한 꼭짓점과 면이 포함되어 있습니다)
    - 큐브 색상: MeshBasicMaterial을 사용합니다.(여러가지 방법이 있습니다.)
    - Mesh: 기하학을 받아 재질을 적용하고 우리가 화면 안에 삽입하고 자유롭게 움직일 수 있게 해줍니다.
    -> 기본설정: scene.add()를 불러오면 추가된 것들이 (0,0,0) 속성을 가집니다. 이런 경우 카메라와 큐브가 동일한 위치에 겹치게 됩니다. 
    camera.position.z 위치 설정
*/
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: "red"});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();