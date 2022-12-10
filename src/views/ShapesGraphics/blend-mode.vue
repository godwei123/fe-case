<template>
  <div class="w-full px-10 py-16">
    <div class="text-center mb-10">
      <button
        class="w-1/2 m-auto rounded-lg py-2.5 text-base font-medium leading-5 text-white shadow bg-blue-700"
      >
        mix-blend-mode
      </button>
    </div>
    <div class="flex flex-col gap-4 pl-10 items-center">
      <div class="w-1/2 flex flex-col items-center">
        <div class="w-full flex items-center justify-between position mt-1 rounded-md">
          <div class="font-medium text-gray-700">
            背景颜色:
          </div>
          <div class="w-64">
            <input
              v-model="bgValue"
              type="text"
              class="flex-1 inline-block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
          </div>
        </div>
        <Listbox
          v-model="selected"
          as="div"
          class="flex w-full justify-between items-center gap-x-2"
        >
          <ListboxLabel class="block text-m font-medium text-gray-700">
            mix-blend-mode:
          </ListboxLabel>
          <div class="relative mt-1 w-64">
            <ListboxButton
              class="relative w-full cursor-default rounded-md border border-gray-300
            bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500
            focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              <span class="flex items-center">
                <span class="ml-3 block truncate">{{ selected.name }}</span>
              </span>
              <span
                class="pointer-events-none absolute inset-y-0
            right-0 ml-3 flex items-center pr-2"
              >
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
                class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md
              bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5
              focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-for="item in blendModeLists"
                  :key="item.id"
                  v-slot="{ active, selected }"
                  as="template"
                  :value="item"
                >
                  <li
                    :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900',
                             'relative cursor-default select-none py-2 pl-3 pr-9']"
                  >
                    <div class="flex items-center">
                      <span
                        :class="[selected ? 'font-semibold' : 'font-normal',
                                 'ml-3 block truncate']"
                      >{{
                        item.name
                      }}</span>
                    </div>

                    <span
                      v-if="selected"
                      :class="[active ? 'text-white' : 'text-indigo-600',
                               'absolute inset-y-0 right-0 flex items-center pr-4']"
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
        </Listbox>

        <div
          class="mt-10 p-10"
          :style="{background:bgValue}"
        >
          <img
            src="../../assets/images/167238a8128h2.png"
            :style="{'mix-blend-mode':selected.value}"
            alt="167238a8128h2"
          >
        </div>
      </div>
      <div class="w-1/2">
        <div class=" text-lg text-justify">
          {{ selected.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'
import {blendModeLists} from "./config";

const selected = ref(blendModeLists[0])
const bgValue = ref("rgb(254 249 195)")
</script>
