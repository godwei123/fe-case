<template>
  <div class="w-full px-10 py-16">
    <svg
      height="0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="change">
          <feColorMatrix
            values="3 -1 -1 0 0
                -1 3 -1 0 0
                -1 -1 3 0 0
                0 0 0 1 0"
          />
        </filter>
      </defs>
    </svg>
    <div class="text-center mb-10">
      <button
        class="w-1/2 m-auto rounded-lg py-2.5 text-base font-medium leading-5 text-white shadow bg-blue-700"
      >
        filter
      </button>
    </div>
    <template
      v-for="(item,index) in selectedArr"
      :key="item"
    >
      <div class="flex gap-4 pl-10">
        <Listbox
          v-model="item.selected"
          as="div"
          class="flex gap-x-2 items-center"
        >
          <PlusIcon
            v-if="index===0"
            class="w-6 h-6 text-white rounded-full bg-blue-600 cursor-pointer"
            @click="addFilter"
          />
          <MinusCircleIcon
            v-if="index!==0"
            class="w-6 h-6 text-white rounded-full bg-blue-600 cursor-pointer"
            @click="MinusFilter(index)"
          />
          <div
            class="relative mt-1 w-60"
          >
            <ListboxButton
              class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <span class="flex items-center">
                <span class="block truncate">{{ item.selected?.name }}</span>
              </span>
              <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-for="person in filterLists"
                  :key="person.id"
                  v-slot="{ active, selected }"
                  as="template"
                  :value="person"
                >
                  <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                    <div class="flex items-center">
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{
                        person.name
                      }}</span>
                    </div>

                    <span
                      v-if="selected"
                      :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']"
                    >
                      <CheckIcon
                        class="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>

          <div class="relative mt-1 rounded-md shadow-sm inline-block">
            <input
              v-model="item.selected.filterValue"
              type="text"
              class="block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </Listbox>
      </div>
    </template>

    <div class="flex justify-center p-10 gap-x-16 h-96">
      <div class="w-1/2 rounded-xl shadow bg-image bg-cover" />
      <div
        class="w-1/2 rounded-xl shadow bg-image bg-cover"
        :style="styles"
      />
    </div>
    <div class="code mt-5 text-center text-xl">
      {{ styles }}
    </div>


    <!--    backdrop-filter -->
    <div class="text-center mb-10 mt-32">
      <button
        class="w-1/2 m-auto rounded-lg py-2.5 text-base font-medium leading-5 text-white shadow bg-blue-700"
      >
        backdrop-filter
      </button>
    </div>

    <template
      v-for="(item,index) in selectedArr2"
      :key="item"
    >
      <div class="flex gap-4 pl-10">
        <Listbox
          v-model="item.selected"
          as="div"
          class="flex gap-x-2 items-center"
        >
          <PlusIcon
            v-if="index===0"
            class="w-6 h-6 text-white rounded-full bg-blue-600 cursor-pointer"
            @click="addFilter2"
          />
          <MinusCircleIcon
            v-if="index!==0"
            class="w-6 h-6 text-white rounded-full bg-blue-600 cursor-pointer"
            @click="MinusFilter2(index)"
          />
          <div
            class="relative mt-1 w-60"
          >
            <ListboxButton
              class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <span class="flex items-center">
                <span class="block truncate">{{ item.selected?.name }}</span>
              </span>
              <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  class="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-for="person in backdropFilterLists"
                  :key="person.id"
                  v-slot="{ active, selected }"
                  as="template"
                  :value="person"
                >
                  <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                    <div class="flex items-center">
                      <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{
                        person.name
                      }}</span>
                    </div>
                    <span
                      v-if="selected"
                      :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']"
                    >
                      <CheckIcon
                        class="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>

          <div class="relative mt-1 rounded-md shadow-sm inline-block">
            <input
              v-model="item.selected.backdropFilterValue"
              type="text"
              class="block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </Listbox>
      </div>
    </template>

    <div class="flex justify-center p-10 gap-x-16 h-96">
      <div class="w-1/2 rounded-xl shadow bg-image bg-cover flex justify-center items-center">
        <p
          class="backdrop-text px-10 py-6 rounded-xl font-medium"
        >
          backdrop-filter
        </p>
      </div>
      <div class="w-1/2 rounded-xl shadow bg-image bg-cover flex justify-center items-center">
        <p
          class="backdrop-text px-10 py-6 rounded-xl font-medium"
          :style="styles2"
        >
          {{ styles2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import {filterLists, backdropFilterLists} from "./config";
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon, PlusIcon, MinusCircleIcon} from '@heroicons/vue/20/solid'


const selectedArr = ref([
  {
    selected: filterLists[0],
  }
])

const selectedArr2 = ref([
  {
    selected: backdropFilterLists[0],
  }
])

const styles = computed(() => {
  let filterString = 'filter:'
  selectedArr.value.forEach(item => {
    if (item.selected.filterValue !== '') {
      filterString += ` ${item.selected.name}(${item.selected.filterValue})`
    }
  })
  return filterString
})

const styles2 = computed(() => {
  let filterString = 'backdrop-filter:'
  selectedArr2.value.forEach(item => {
    if (item.selected.backdropFilterValue !== '') {
      filterString += ` ${item.selected.name}(${item.selected.backdropFilterValue})`
    }
  })
  console.log(filterString)
  return filterString
})

const addFilter = () => {
  selectedArr.value.push({
    selected: filterLists[0],
  })
}

const MinusFilter = (index: number) => {
  selectedArr.value.splice(index, 1)
}
const addFilter2 = () => {
  selectedArr2.value.push({
    selected: filterLists[0],
  })
}
const MinusFilter2 = (index: number) => {
  selectedArr2.value.splice(index, 1)
}
</script>

<style scoped>

.bg-image {
  background-image: url("../../assets/images/167238a8128h2.png");
}

.backdrop-text {
  font-size: 20px;
  color: white;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, .4);
}
</style>
