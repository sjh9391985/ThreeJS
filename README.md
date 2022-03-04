# ThreeJS 공식문서를 기반한 연습코드 입니다.

https://threejs.org/docs/index.html#manual/ko/introduction/Creating-a-scene


### 설치
- three.js의 경우 npm을 포함한 빌드 툴에서 설치가 가능합니다.
- three npm 모듈을 설치하려면, 프로젝트 폴더의 터미널을 열고 명령어 입력하면 됩니다. 
- `npm install --save three`

### 코드 불러오기

<code>
 option 1 : three.js 코어 라이브러이 import 하기 <br/><br/>
import * as THREE from 'three'; <br/>
const scene = new THREE.Scene();<br/><br/>

 option 2 : 필요한 라이브러리 부분만 import 하기 <br/><br/>
import { Scene } from 'three'; <br/>
const scene = new Scene();
</code>