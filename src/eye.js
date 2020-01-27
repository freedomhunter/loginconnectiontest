import React from 'react';
import CopyShader from 'three/examples/js/shaders/CopyShader';


export default class Eye extends React.Component{
    constructor(props){
        super(props);
        // this.eyeInit = this.eyeInit.bind(this);
    }

    componentDidMount(){
        // this.eyeInit()

        var bodyEl = document.getElementsByTagName('body')[0];
        var script = document.createElement('script');
        script.setAttribute('id', 'particles-script');
        console.log('script value',script)
        script.src = './particle.js';
        bodyEl.appendChild(script);
    }

    // eyeInit() {
    //     var THREE = window.THREE;
    //     var sceneBG = new THREE.Scene(),
    //         innerEyeScene = new THREE.Scene(),
    //         outerEyeScene = new THREE.Scene();
    //     var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3000);
    //     camera.position.z = 78;
    //     camera.target = new THREE.Vector3(0, 0, 0);
    //     var outerEyeRenderer = new THREE.WebGLRenderer({
    //         alpha: true
    //     });
    //     outerEyeRenderer.setClearColor(0x000000, 0.0);
    //     outerEyeRenderer.autoClear = false;
    //     outerEyeRenderer.setSize(window.innerWidth, window.innerHeight);
    //     var innerEyeRenderer = new THREE.WebGLRenderer({
    //         alpha: true
    //     });
    //     innerEyeRenderer.setClearColor(0x000000, 0.0);
    //     innerEyeRenderer.autoClear = false;
    //     innerEyeRenderer.setSize(window.innerWidth, window.innerHeight);
    //     document.getElementById('outer-eye').appendChild(outerEyeRenderer.domElement);
    //     document.getElementById('inner-eye').appendChild(innerEyeRenderer.domElement);
    //     var clock = new THREE.Clock();
    //     var ambi = new THREE.AmbientLight(0xffffff);
    //     innerEyeScene.add(ambi);
    //     outerEyeScene.add(ambi);
    //     var onMouseMove,onResize,onDeviceOrientation;
    //     window.addEventListener('mousemove', onMouseMove, false);
    //     window.addEventListener('resize', onResize, false);
    //     window.addEventListener('deviceorientation', onDeviceOrientation, false);

    //     var mouseX,mouseY,mouseX1;
    //     var mouseY1;
    
    //     onMouseMove = (e) => {
    //         mouseX = (e.clientX - window.innerWidth / 2) * 0.001;
    //         mouseY = (e.clientY - window.innerHeight / 2) * 0.001;
    //         mouseX1 = (e.clientX - window.innerWidth / 2) * 0.0005;
    //         mouseY1 = (e.clientY - window.innerHeight / 2) * 0.0005;
    //     }
    
    //     onResize = () => {
    //         var width = window.innerWidth;
    //         var height = window.innerHeight;
    //         camera.aspect = width / height;
    //         camera.updateProjectionMatrix();
    //         outerEyeRenderer.setSize(width, height);
    //         innerEyeRenderer.setSize(width, height);
    //     }

    //     onDeviceOrientation = (e) => {
    //         if ($('html').hasClass('tablet') && $('html').hasClass('landscape')) {
    //             var x = (e.beta || 0) / 90,
    //                 y = (e.gamma || 0) / 90;
    //             mouseY = y * 0.2;
    //             mouseY1 = y * 0.2;
    //             mouseX = x * 0.2;
    //             mouseX1 = x * 0.2;
    //             console.log(e.beta)
    //         } else {
    //             var y = (e.beta || 0) / 90,
    //                 x = (e.gamma || 0) / 90;
    //             mouseY = y * 0.2;
    //             mouseY1 = y * 0.2;
    //             mouseX = x * 0.2;
    //             mouseX1 = x * 0.2;
    //         }
    //     };
    //     var textureEnvRefl_A = new THREE.ImageUtils.loadTexture('/img/refl.jpg'),
    //         textureEnvDiff_A = new THREE.ImageUtils.loadTexture('/img/diff1.jpg'),
    //         textureEyeColor_A = new THREE.ImageUtils.loadTexture('/img/eye-pattern.jpg'),
    //         textureEyeNormal_A = new THREE.ImageUtils.loadTexture('/img/eye-normals.png'),
    //         textureEyeNormal_A1 = new THREE.ImageUtils.loadTexture('/img/eye-normals1.png'),
    //         textureEyeColor_A1 = new THREE.ImageUtils.loadTfexture('/img/eye-pattern1.jpg'),
    //         textureEyeRefract_C = new THREE.ImageUtils.loadTexture('/img/refract.png');
    //     textureEyeColor_A.wrapS = textureEyeNormal_A.wrapS = textureEyeColor_A1.wrapS = textureEyeNormal_A1.wrapS = THREE.RepeatWrapping;
    //     textureEyeColor_A.minFilter = textureEyeColor_A.magFilter = textureEyeNormal_A.minFilter = textureEyeNormal_A.magFilter = textureEyeColor_A1.minFilter = textureEyeColor_A1.magFilter = textureEyeNormal_A1.minFilter = textureEyeNormal_A1.magFilter = THREE.LinearFilter;
    //     var innerEyeUniforms = {
    //         texEyeCol: {
    //             type: "t",
    //             value: textureEyeColor_A
    //         },
    //         texEyeNrm: {
    //             type: "t",
    //             value: textureEyeNormal_A
    //         },
    //         texEnvRfl: {
    //             type: "t",
    //             value: textureEnvRefl_A
    //         },
    //         texEnvDif: {
    //             type: "t",
    //             value: textureEnvDiff_A
    //         },
    //         texEnvRfr: {
    //             type: "t",
    //             value: textureEyeRefract_C
    //         },
    //         pupil_size: {
    //             type: "f",
    //             value: 0.2
    //         },
    //         iris_tex_start: {
    //             type: "f",
    //             value: 0.02
    //         },
    //         iris_tex_end: {
    //             type: "f",
    //             value: 0.13
    //         },
    //         iris_border: {
    //             type: "f",
    //             value: 0.0
    //         },
    //         iris_size: {
    //             type: "f",
    //             value: 0.64
    //         },
    //         iris_edge_fade: {
    //             type: "f",
    //             value: 0.2
    //         },
    //         iris_inset_depth: {
    //             type: "f",
    //             value: 0.0
    //         },
    //         sclera_tex_scale: {
    //             type: "f",
    //             value: 2
    //         },
    //         sclera_tex_offset: {
    //             type: "f",
    //             value: -10
    //         },
    //         ior: {
    //             type: "f",
    //             value: 2
    //         },
    //         refract_edge_softness: {
    //             type: "f",
    //             value: 0.1
    //         },
    //         iris_texture_curvature: {
    //             type: "f",
    //             value: -1
    //         },
    //         arg_iris_shading_curvature: {
    //             type: "f",
    //             value: -1.0
    //         },
    //         tex_U_offset: {
    //             type: "f",
    //             value: 0.0
    //         },
    //         cornea_bump_amount: {
    //             type: "f",
    //             value: 0.0
    //         },
    //         cornea_bump_radius_mult: {
    //             type: "f",
    //             value: 0.9
    //         },
    //         iris_normal_offset: {
    //             type: "f",
    //             value: 0.001
    //         },
    //         cornea_density: {
    //             type: "f",
    //             value: 0.001
    //         },
    //         bump_texture: {
    //             type: "f",
    //             value: 2.0
    //         },
    //         catshape: {
    //             type: "i",
    //             value: false
    //         },
    //         cybshape: {
    //             type: "f",
    //             value: false
    //         },
    //         col_texture: {
    //             type: "i",
    //             value: true
    //         },
    //         outer: {
    //             type: "i",
    //             value: false
    //         },
    //         alpha_intensity: {
    //             type: "f",
    //             value: 0.4
    //         },
    //     };
    //     var outerEyeUniforms = {
    //         texEyeCol: {
    //             type: "t",
    //             value: textureEyeColor_A1
    //         },
    //         texEyeNrm: {
    //             type: "t",
    //             value: textureEyeNormal_A1
    //         },
    //         texEnvRfl: {
    //             type: "t",
    //             value: textureEnvRefl_A
    //         },
    //         texEnvDif: {
    //             type: "t",
    //             value: textureEnvDiff_A
    //         },
    //         texEnvRfr: {
    //             type: "t",
    //             value: textureEyeRefract_C
    //         },
    //         pupil_size: {
    //             type: "f",
    //             value: 0.2
    //         },
    //         iris_tex_start: {
    //             type: "f",
    //             value: 0.02
    //         },
    //         iris_tex_end: {
    //             type: "f",
    //             value: 0.13
    //         },
    //         iris_border: {
    //             type: "f",
    //             value: 0.001
    //         },
    //         iris_size: {
    //             type: "f",
    //             value: 0.64
    //         },
    //         iris_edge_fade: {
    //             type: "f",
    //             value: 0.2
    //         },
    //         iris_inset_depth: {
    //             type: "f",
    //             value: 0.0
    //         },
    //         sclera_tex_scale: {
    //             type: "f",
    //             value: 0
    //         },
    //         sclera_tex_offset: {
    //             type: "f",
    //             value: 0.04
    //         },
    //         ior: {
    //             type: "f",
    //             value: 2
    //         },
    //         refract_edge_softness: {
    //             type: "f",
    //             value: 0.1
    //         },
    //         iris_texture_curvature: {
    //             type: "f",
    //             value: -1
    //         },
    //         arg_iris_shading_curvature: {
    //             type: "f",
    //             value: -1.0
    //         },
    //         tex_U_offset: {
    //             type: "f",
    //             value: 0.0
    //         },
    //         cornea_bump_amount: {
    //             type: "f",
    //             value: 0.0
    //         },
    //         cornea_bump_radius_mult: {
    //             type: "f",
    //             value: 0.9
    //         },
    //         iris_normal_offset: {
    //             type: "f",
    //             value: 0.001
    //         },
    //         cornea_density: {
    //             type: "f",
    //             value: 0.001
    //         },
    //         bump_texture: {
    //             type: "f",
    //             value: 0.3
    //         },
    //         catshape: {
    //             type: "i",
    //             value: false
    //         },
    //         cybshape: {
    //             type: "f",
    //             value: false
    //         },
    //         col_texture: {
    //             type: "i",
    //             value: true
    //         },
    //         outer: {
    //             type: "i",
    //             value: true
    //         },
    //         alpha_intensity: {
    //             type: "f",
    //             value: 0.0
    //         },
    //     };
    //     var objectLoader = new THREE.OBJLoader(),
    //         halfSpheresObj = null,
    //         sphereGeomety = new THREE.SphereGeometry(32, 64, 64);
    //     objectLoader.load(themeUrl + '/obj/eye.obj', (object) => {
    //         halfSpheresObj = object.children[0].geometry;
    //     },(xhr) => { },(error) => { });
    //     var outerEyeMaterial = new THREE.ShaderMaterial({
    //         uniforms: outerEyeUniforms,
    //         vertexShader: document.getElementById('eyeVertexShader').textContent,
    //         fragmentShader: document.getElementById('eyeFragmentShader').textContent,
    //         transparent: true,
    //         side: THREE.doubleSide
    //     }),
    //         outerEye = new THREE.Mesh(sphereGeomety, outerEyeMaterial);
    //     outerEye.scale.set(0.6, 0.6, 0.6)
    //     outerEyeScene.add(outerEye);
    //     var innerEyeMaterial = new THREE.ShaderMaterial({
    //         uniforms: innerEyeUniforms,
    //         vertexShader: document.getElementById('eyeVertexShader').textContent,
    //         fragmentShader: document.getElementById('eyeFragmentShader').textContent,
    //         transparent: true,
    //         side: THREE.doubleSide
    //     }),
    //         innerEye = new THREE.Mesh(sphereGeomety, innerEyeMaterial);
    //     innerEye.scale.set(0.6, 0.6, 0.6)
    //     innerEyeScene.add(innerEye);
    //     var blackMaskGeometry = new THREE.SphereGeometry(46, 64, 64),
    //         blackMaskMaterial = new THREE.ShaderMaterial({
    //             vertexShader: document.getElementById('blackMaskVertexShader').textContent,
    //             fragmentShader: document.getElementById('blackMaskFragmentShader').textContent,
    //             side: THREE.BackSide,
    //             blending: THREE.AdditiveBlending,
    //             transparent: true,
    //             depthTest: false
    //         }),
    //         blackMask = new THREE.Mesh(blackMaskGeometry, blackMaskMaterial)
    //     blackMask.scale.set(0.6, 0.6, 0.6)
    //     outerEyeScene.add(blackMask);
    //     var hBlur = new THREE.ShaderPass(THREE.HorizontalBlurShader),
    //         vBlur = new THREE.ShaderPass(THREE.VerticalBlurShader);
    //     hBlur.uniforms.h.value = 2.75 / window.innerHeight;
    //     vBlur.uniforms.v.value = 2.75 / window.innerWidth;
    //     var bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.0, 0.0, 1.0);
    //     var bgRenderPass = new THREE.RenderPass(sceneBG, camera),
    //         innerEyeRenderPass = new THREE.RenderPass(innerEyeScene, camera),
    //         outerEyerenderPass = new THREE.RenderPass(outerEyeScene, camera);
    //     innerEyeRenderPass.clear = false;
    //     outerEyerenderPass.clear = false;
    //     var effectCopy = new THREE.ShaderPass(CopyShader);
    //     effectCopy.renderToScreen = true;
    //     var rtParameters = {
    //         minFilter: THREE.LinearFilter,
    //         magFilter: THREE.LinearFilter,
    //         format: THREE.RGBAFormat,
    //         stencilBuffer: true
    //     },
    //         outerEyeComposer = new THREE.EffectComposer(outerEyeRenderer, new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, rtParameters));
    //     innerEyeComposer = new THREE.EffectComposer(innerEyeRenderer, new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, rtParameters));
    //     outerEyeComposer.renderTarget1.stencilBuffer = true;
    //     outerEyeComposer.renderTarget2.stencilBuffer = true;
    //     innerEyeComposer.renderTarget1.stencilBuffer = true;
    //     innerEyeComposer.renderTarget2.stencilBuffer = true;
    //     outerEyeComposer.addPass(bgRenderPass);
    //     outerEyeComposer.addPass(outerEyerenderPass);
    //     outerEyeComposer.addPass(hBlur);
    //     outerEyeComposer.addPass(vBlur);
    //     outerEyeComposer.addPass(effectCopy);
    //     innerEyeComposer.addPass(bgRenderPass);
    //     innerEyeComposer.addPass(innerEyeRenderPass);
    //     innerEyeComposer.addPass(bloomPass);
    //     innerEyeComposer.addPass(effectCopy);
    //     render();
    //     var bloomTimer = 0;
    
    //     showHideObj = (obj, state) => {
    //         obj.traverse((child) => {
    //             if (child instanceof THREE.Mesh) {
    //                 child.visible = state;
    //             }
    //         });
    //     }
    
    //      render = (a) => {
    //         if (eyeVisible) {
    //             bloomTimer += 0.1;
    //             if (bloomTimer >= 15) {
    //                 if (bloomTimer < 20) {
    //                     bloomPass.strength += 0.05;
    //                     bloomPass.threshold -= 0.05;
    //                     innerEyeUniforms.cornea_bump_amount.value += 0.0035;
    //                 } else {
    //                     bloomPass.strength -= 0.05;
    //                     bloomPass.threshold += 0.05;
    //                     innerEyeUniforms.cornea_bump_amount.value -= 0.0035;
    //                 }
    //                 var flash = 19;
    //                 if (bloomTimer > flash) {
    //                     if (bloomTimer < flash + 0.3) {
    //                         showHideObj(innerEye, false);
    //                         showHideObj(outerEye, false);
    //                     } else if (bloomTimer < flash + 0.6) {
    //                         showHideObj(innerEye, true);
    //                         showHideObj(outerEye, true);
    //                         if (innerEye != null && halfSpheresObj != null)
    //                             innerEye.geometry = halfSpheresObj;
    //                     } else if (bloomTimer < flash + 0.9) {
    //                         showHideObj(innerEye, false);
    //                         showHideObj(outerEye, false);
    //                         if (innerEye != null && halfSpheresObj != null)
    //                             innerEye.geometry = halfSpheresObj;
    //                     } else {
    //                         if (innerEye != null && halfSpheresObj != null)
    //                             innerEye.geometry = halfSpheresObj;
    //                         showHideObj(innerEye, true);
    //                         showHideObj(outerEye, true);
    //                     }
    //                     if (bloomTimer < flash + 0.15) {
    //                         outerEye.scale.set(0.0, 0.0, 0.0);
    //                     }
    //                     if (bloomTimer > 23 && bloomTimer < 23.5) {
    //                         showHideObj(innerEye, false);
    //                         showHideObj(outerEye, false);
    //                         outerEye.scale.set(0.6, 0.6, 0.6);
    //                     } else if (bloomTimer > 23.5) {
    //                         showHideObj(innerEye, true);
    //                         showHideObj(outerEye, true);
    //                         if (innerEye != null)
    //                             innerEye.geometry = sphereGeomety;
    //                         outerEye.scale.set(0.6, 0.6, 0.6);
    //                     }
    //                 }
    //                 if (bloomTimer > 25) {
    //                     bloomTimer = 0;
    //                     bloomPass.strength = 0;
    //                     bloomPass.threshold = 1;
    //                     innerEyeUniforms.cornea_bump_amount.value = 0.0;
    //                 }
    //             } else {
    //                 if (innerEye != null)
    //                     innerEye.geometry = sphereGeomety;
    //             }
    //             var time = Date.now() * 0.005;
    //             innerEyeUniforms.pupil_size.value = 0.1 * Math.sin(0.35 * time) + 0.3;
    //             outerEyeUniforms.iris_size.value = 0.005 * Math.cos(0.5 * time) + 0.74;
    //             var delta = clock.getDelta();
    //             if (innerEye != null) {
    //                 innerEye.lookAt(camera.position);
    //                 innerEye.rotateOnAxis(new THREE.Vector3(1, 0, 0), mouseY);
    //                 innerEye.rotateOnAxis(new THREE.Vector3(0, 1, 0), mouseX);
    //             }
    //             if (outerEye != null) {
    //                 outerEye.lookAt(camera.position);
    //                 outerEye.rotateOnAxis(new THREE.Vector3(1, 0, 0), mouseY);
    //                 outerEye.rotateOnAxis(new THREE.Vector3(0, 1, 0), mouseX);
    //             }
    //             outerEyeRenderer.clear();
    //             innerEyeRenderer.clear();
    //             outerEyeComposer.render(delta);
    //             innerEyeComposer.render(delta);
    //         }
    //         reqAnim = requestAnimationFrame(render);
    //     }
    // }

    render(){
        return(
            <div className="App">
                <button onClick={this.eyeInit}>click meeeeeeeeee</button>
            <section className="section intro active" data-color-scheme="dark" data-bg-color="#000000"
              data-progress-color="#ffffff">
              <div className="media-holder">
                  <div id="outer-eye"></div>
                  <div id="inner-eye"></div>
              </div>
              <article>
                  <div className="intro-content initial">
                      <h3>we create_</h3>
                      <p className="clearfix"><span className="first">beautiful</span><span className="last">art</span></p>
                  </div>
              </article>
              <span className="mouse initial"><span></span></span>
          </section>
        </div>
        )
    }
}
