<script setup>
import {
  GltfModel,
  FbxModel,
  Camera,
  DirectionalLight,
  LambertMaterial,
  PointLight,
  Renderer,
  Scene,
} from "troisjs";
function Error(e) {
  console.log(e);
}

const renderer = ref(null);
const model = ref(null);
onMounted(() => {
   // renderer.onBeforeRender(() => {
   //   model.mesh.rotation.x += 0.01;
   // });
 });

</script>

<template>
  <client-only>
    <Renderer ref="renderer" resize="true" orbit-ctrl antialias alpha>
      <Camera :position="{ z: 1000 }" />
      <Scene>
        <DirectionalLight color="#ffffff" :position="{ x:1000 }" />
        <DirectionalLight color="#ffffff" :position="{ x:-1000 }" />
        <!-- <GltfModel src="/src/assets/jelly.glb" @error="Error" /> -->
        <FbxModel ref="model" src="/assets/jelly.fbx" @error="Error" />
      </Scene>
    </Renderer>
  </client-only>
</template>

