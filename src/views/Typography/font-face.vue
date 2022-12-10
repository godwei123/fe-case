<template>
  <WSelect
    :lists="blendModeLists"
    @change="change"
  />
  <WSlider />
</template>

<script setup lang="ts">
import WSelect from "../../components/ProSelect/index.vue"
import WSlider from "../../components/WSlider/index.vue"
import {blendModeLists} from "../ShapesGraphics/config";

const change = (val:any) => {
  console.log(val)
}
</script>
