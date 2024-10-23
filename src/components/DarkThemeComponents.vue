<script lang="ts" setup>
import { ref } from 'vue';
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'

import { use } from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent, MarkPointComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';

use([GridComponent, MarkPointComponent, LineChart, SVGRenderer]);
const option = ref({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#2E3847'
      }
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: '#B0BBCE',
      fontSize: 16,
    },
    data: [0,1,2,3,4,5,6,7],
  },
  yAxis: {
    type: 'value',
    interval: 10,
    max: 40,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#2E3847'
      }
    },
    splitLine: {
      lineStyle: {
        type: [6, 12],
        dashOffset: 0,
        color: '#2E3847'
      }
    },
    axisLabel: {
      color: '#B0BBCE',
      fontSize: 16,
    }
  },
  grid: {
    left: '3%',
    top: '40px',
    right: '7%',
    bottom: '20px',
    containLabel: true,
  },
  series: [
    {
      data: [0, 10, 5, 33.4, 25.5, 20.5, 19.8, 28.3],
      type: 'line',
      smooth: true,
      silent: true,
      symbol: 'none',
      areaStyle: {
        color: '#151B25',
      },
      lineStyle: {
        width: 4,
        color: '#955BF6',
      },
      markPoint: {
        symbol: 'rect',
        symbolSize: [60, 30],
        symbolOffset: [0, '-60%'],
        itemStyle: {
          color:'#19202C',
        },
        label: {
          color: '#B0BBCE',
          fontSize: 14,
        },
        data: [{ type: 'max' }]
      },
    }
  ]
})

const navItems = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Services' },
  { name: 'Contact' },
  { name: 'Sign Up', button: true }
];
const optionsItems = ['Sound', 'Effects', 'Animations', 'Preferences'];
const openOptions = ref(false);
const slider1 = [70];
const slider2 = [20, 60];
</script>

<template>
  <div class="grid min-h-screen place-items-center bg-[#242C38]">
    <div class="grid grid-cols-10 w-4xl gap-12 text-base text-[#B0BBCE]">
      <div class="col-span-10 rounded-[10px] bg-[#1E2531] px-5 py-4">
        <nav class="flex items-center justify-end gap-x-8">
          <a
            v-for="{ name, button } of navItems"
            :key="name"
            href="#"
            :class="{
              'text-white py-2 px-8 rounded bg-gradient-to-r from-[#498BFB] to-[#955BF6] hover:(from-[#955BF6] to-[#955BF6])': button,
              'hover:text-white': !button
            }"
          >
            {{ name }}
          </a>
        </nav>
      </div>
      <div class="col-span-6 rounded-[10px] bg-[#1E2531]">
        <VChart :option />
      </div>
      <div class="grid col-span-4 gap-30 rounded-[10px]">
        <div class="relative max-w-[120px] flex flex-col gap-y-4">
          <button
            class="flex items-center rounded from-[#498BFB] to-[#955BF6] bg-gradient-to-r px-5 py-2 text-white hover:(from-[#955BF6] to-[#955BF6])"
            @click="openOptions = !openOptions"
          >
            Options <div class="i-ph-caret-right-bold ml-1 mt-1 size-4" />
          </button>
          <div
            v-if="openOptions"
            class="absolute top-0 grid overflow-hidden rounded-md bg-[#1E2531] shadow-lg -right-[140px]"
          >
            <div
              v-for="item of optionsItems"
              :key="item"
              class="cursor-pointer px-6 py-2 text-sm hover:bg-[#151B25]"
            >
              {{ item }}
            </div>
          </div>
          <button class="rounded px-5 py-2 ring-2 ring-[#181F2B]">
            Edit
          </button>
        </div>
        <div class="grid gap-10">
          <div class="grid gap-y-1">
            <SliderRoot
              :default-value="slider1"
              class="relative h-5 w-full flex touch-none select-none items-center"
            >
              <SliderTrack class="relative h-2.5 grow rounded-full bg-[#1E2531]">
                <SliderRange class="absolute h-full rounded-full from-[#498BFB] to-[#955BF6] bg-gradient-to-r" />
              </SliderTrack>
              <SliderThumb class="block size-4 rounded-full bg-[#181F2B] ring-2 ring-[#945BF5] focus:(outline-none ring-4) hover:ring-3" />
            </SliderRoot>
            <div class="flex justify-between">
              <span>min</span>
              <span>max</span>
            </div>
          </div>
          <div class="grid gap-y-1">
            <SliderRoot
              :default-value="slider2"
              :min-steps-between-thumbs="10"
              class="relative h-5 w-full flex touch-none select-none items-center"
            >
              <SliderTrack class="relative h-2.5 grow rounded-full bg-[#1E2531]">
                <SliderRange class="absolute h-full rounded-full from-[#498BFB] to-[#955BF6] bg-gradient-to-r" />
              </SliderTrack>
              <SliderThumb class="block size-4 rounded-full bg-[#181F2B] ring-2 ring-[#945BF5] focus:(outline-none ring-4) hover:ring-3" />
              <SliderThumb class="block size-4 rounded-full bg-[#181F2B] ring-2 ring-[#945BF5] focus:(outline-none ring-4) hover:ring-3" />
            </SliderRoot>
            <div class="flex justify-between">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
