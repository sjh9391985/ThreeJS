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
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

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

// 선그리기
// 1. LineBasicMaterial 이나 LineDashedMaterial 을 사용하면 됩니다.
const material = new THREE.TextGeoMetry( text, parameters )

// 2. 꼭지점에 대한 기하학을 정의해야 합니다.
const points = [];
points.push( new THREE.Vector3( -10, 0, 0 ));
points.push( new THREE.Vector3( 0, 10, 0 ));
points.push( new THREE.Vector3( 10, 0, 0 ));


const geometry = new THREE.BufferGeometry().setFromPoints( points );

// 3. 선은 연속된 꼭짓점 쌍 사이에 그려지고 첫 번째와 마지막 꼭짓점에는 그려지지 않습니다.
const line = new THREE.Line( geometry, material );

// 4. scene에 추가하고 render를 하는 것입니다.
scene.add( line );
renderer.render( scene, camera );