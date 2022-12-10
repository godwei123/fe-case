<template>
  <div class="drawer drawer-end">
    <input
      id="my-drawer-4"
      type="checkbox"
      class="drawer-toggle"
    >
    <div class="drawer-content  px-10 py-16">
      <div class="flex-container-attribute flex gap-x-10 gap-y-3 flex-wrap mb-4">
        <pro-select
          width="150px"
          class="gap-x-2"
          label="flex-direction"
          :lists="flexDirection"
          @change="handleContainerChange('flex-direction',$event)"
        />
        <pro-select
          width="150px"
          class="gap-x-2"
          label="flex-wrap"
          :lists="flexWrap"
          @change="handleContainerChange('flex-wrap',$event)"
        />
        <pro-select
          width="150px"
          class="gap-x-2"
          label="justify-content"
          :lists="justifyContent"
          @change="handleContainerChange('justify-content',$event)"
        />
        <pro-select
          width="150px"
          class="gap-x-2"
          label="align-items"
          :lists="alignItems"
          @change="handleContainerChange('align-items',$event)"
        />
        <pro-select
          width="150px"
          class="gap-x-2"
          label="align-content"
          :lists="alignContent"
          @change="handleContainerChange('align-content',$event)"
        />
        <div class="gap-x-2 flex items-center mt-1 rounded-md">
          <div
            class="font-semibold text-gray-700"
            style="width: 150px;"
          >
            容器高度
          </div>
          <div class="w-60">
            <input
              v-model="inputValue.height"
              type="text"
              placeholder="auto/<number>px"
              class="flex-1 inline-block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </div>
        <div class="gap-x-2 flex items-center mt-1 rounded-md">
          <div
            class="font-semibold text-gray-700"
            style="width: 150px;"
          >
            容器宽度
          </div>
          <div class="w-60">
            <input
              v-model="inputValue.width"
              type="text"
              autocomplete="false"
              placeholder="auto/<number>px"
              class="flex-1 inline-block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </div>
        <div class="gap-x-2 flex items-center mt-1 rounded-md">
          <div
            class="font-semibold text-gray-700"
            style="width: 150px;"
          >
            子元素个数
          </div>
          <div class="w-60">
            <input
              v-model.number="nums"
              type="text"
              autocomplete="false"
              placeholder="auto/<number>px"
              class="flex-1 inline-block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </div>
      </div>
      <div class="box">
        <div
          class="flex-container"
          :style="{...flexContainerStyles,width:inputValue.width,height:inputValue.height}"
        >
          <div
            v-for="(item,index) in items"
            :key="index"
            class="flex-item"
            @click="handleFlexItems"
          >
            <label for="my-drawer-4">
              <span>
                {{ index }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-4"
        class="drawer-overlay"
      />
      <div class="menu p-4 w-5/12 bg-base-100 text-base-content">
        <div class="w-full gap-x-2 flex items-center position mt-1 rounded-md">
          <div
            class="font-semibold text-gray-700"
            style="width: 130px;"
          >
            order
          </div>
          <div class="w-60">
            <input
              v-model="inputValue.order"
              type="text"
              class="flex-1 inline-block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </div>
        <div class="w-full gap-x-2 flex items-center position mt-1 rounded-md">
          <div
            class="font-semibold text-gray-700"
            style="width: 130px;"
          >
            flex-grow
          </div>
          <div class="w-60">
            <input
              v-model="inputValue.flexGrow"
              type="text"
              class="flex-1 inline-block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </div>
        <div class="w-full gap-x-2 flex items-center position mt-1 rounded-md">
          <div
            class="font-semibold text-gray-700"
            style="width: 130px;"
          >
            flex-shrink
          </div>
          <div class="w-60">
            <input
              v-model="inputValue.flexShrink"
              type="text"
              class="flex-1 inline-block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </div>
        <div class="w-full gap-x-2 flex items-center position mt-1 rounded-md">
          <div
            class="font-semibold text-gray-700"
            style="width: 130px;"
          >
            flex-basis
          </div>
          <div class="w-60">
            <input
              v-model="inputValue.flexBasis"
              type="text"
              class="flex-1 inline-block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </div>
        <pro-select
          label="align-self"
          width="130px"
          class="gap-x-2"
          :lists="alignItems"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {CSSProperties, ref} from "vue";
import ProSelect from "../../components/ProSelect/index.vue"
import {flexDirection, flexWrap, justifyContent, alignContent, alignItems} from './config'

const nums = ref<number>(20)
const flexContainerStyles = ref<CSSProperties>({
  display:"flex"
})

const inputValue =ref({
  height:'auto',
  width:'auto',
  order:0,
  flexGrow:0,
  flexShrink:1,
  flexBasis:'auto',
  alignSelf:''
})

const items = ref([
  {
    order:0,
    flexGrow:0,
    flexShrink:1,
    flexBasis:'auto',
    alignSelf:''
  }
])
const handleFlexItems = ()=>{
  // 修改 inputValue init value

  // 关闭的事件

}

const handleContainerChange = (type: any, data: any)=>{
  flexContainerStyles.value = {
    ...flexContainerStyles.value,
    [type]:data.name
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.box{
  display: flex;

}

.flex-container{
  background: #e2e8f4;
  overflow: scroll;
}
.flex-item{
  border-radius: 0.25rem;
  display: inline-flex;
  position: relative;
  justify-content: center;
  margin: 0.25rem;
  font-size: 1.5em;
  overflow: hidden;
  background: #057aff;
}
.flex-item span{
  display: inline-block;
  padding: 1rem 1.5rem;
  align-self: center;
}
</style>
