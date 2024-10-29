<script lang="ts" setup>
const menuItems = [
  { name: 'Home', active: true },
  { name: 'Courses' },
  { name: 'Blog' },
];
</script>

<template>
  <div class="relative grid min-h-screen place-items-center overflow-hidden bg-[#190A6A] font-mulish">
    <div class="pointer-events-none absolute right-8 size-92 rounded-full bg-white -top-16" />
    <div class="pointer-events-none absolute left-8 size-92 rounded-full bg-[#FF8364] -bottom-16" />
    <div class="grid grid-cols-30 max-w-[1440px] py-32 -rotate-15">
      <div class="col-span-17 bg-white text-[#0F0F2B]">
        <div class="flex px-12.5 py-7.5 text-[#241381]">
          <div class="size-13 border border-6 border-[#241381] rounded-full text-center text-4xl font-black">
            T
          </div>
        </div>
        <div class="flex flex-col items-start px-30 py-36 text-lg">
          <div class="mb-5 text-6xl font-bold">
            Web development courses
          </div>
          <div class="mb-10 max-w-[440px]">
            Learn to code with an easy to understand, project based learning path
          </div>
          <a
            href="#"
            class="border border-transparent bg-[#442EBA] px-10 py-6 text-white transition-all duration-400 hover:(border border-[#442EBA] bg-transparent text-[#442EBA])"
          >
            Browse courses
          </a>
        </div>
      </div>
      <div class="grid col-span-13 grid-cols-3 grid-rows-7 bg-[#241381] text-[#B6A9FE]">
        <nav class="grid col-span-3">
          <ul class="flex items-center justify-end px-8">
            <li
              v-for="{ name, active } in menuItems"
              :key="name"
              class="px-4"
            >
              <a
                href="#"
                :class="{
                  'text-white': active,
                  'opacity-70 hover:text-white': !active,
                }"
              >
                {{ name }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="row-span-2 size-52 bg-[#FF8364]">
          <svg viewBox="0 0 208 208">
            <circle
              cy="208"
              r="146"
              fill="white"
            />
            <circle
              cy="208"
              r="80"
              fill="#FF8364"
            />
          </svg>
        </div>
        <div class="row-span-2 size-52 bg-[#3D27B6]">
          <svg viewBox="0 0 208 208">
            <path
              d="M208 104V208H104L208 104Z"
              fill="#74CAF6"
            />
            <path
              d="M156 52V156H52L156 52Z"
              fill="#74CAF6"
            />
            <path
              d="M104 0V104H0L104 0Z"
              fill="#74CAF6"
            />
          </svg>
        </div>
        <div class="row-span-2 size-52 bg-[#FF8364]">
          <svg
            viewBox="0 0 208 208"
            fill="none"
          >
            <circle
              cx="208"
              r="82"
              fill="white"
            />
            <circle
              cx="205"
              r="179"
              stroke="#FFD054"
              stroke-width="52"
            />
          </svg>
        </div>
        <div class="row-span-2 size-52 bg-[#3D27B6]">
          <svg
            viewBox="0 0 208 208"
            fill="none"
          >
            <circle
              cx="104"
              cy="104"
              r="42"
              stroke="#FFD054"
              stroke-width="18"
            />
          </svg>
        </div>
        <div class="row-span-2 size-52 bg-[#FFD054]">
          <svg viewBox="0 0 208 208">
            <circle
              cy="104"
              r="104"
              fill="white"
            />
            <rect
              x="104"
              width="104"
              height="208"
              fill="#FF8364"
            />
          </svg>
        </div>
        <div class="grid row-span-2 grid-cols-5 grid-rows-5 size-52 place-items-center bg-[#3D27B6] p-14">
          <div
            v-for="i in 25"
            :key="i"
            class="size-[6.4px] rounded-full bg-white"
          />
        </div>
        <div class="grid row-span-2 grid-cols-5 grid-rows-5 size-52 place-items-center bg-[#FF8364] p-12">
          <div
            v-for="i in 25"
            :key="i"
            class="size-2 rounded-full bg-white"
          />
        </div>
        <div class="row-span-2 size-52 bg-[#3D27B6]">
          <svg viewBox="0 0 208 208">
            <circle
              cy="208"
              r="208"
              fill="#74CAF6"
            />
            <circle
              cy="208"
              r="139"
              fill="#3D27B6"
            />
          </svg>
        </div>
        <div class="row-span-2 size-52 bg-[#FFD054]">
          <svg
            viewBox="0 0 208 208"
            fill="none"
          >
            <circle
              cx="104"
              cy="104"
              r="42"
              stroke="#FFFFFF"
              stroke-width="18"
            />
          </svg>
        </div>
      </div>
      <div class="col-span-full bg-[#241381] py-25 text-white">
        <div class="grid col-span-full grid-cols-2 mx-auto max-w-6xl">
          <div class="flex flex-col gap-y-7.5 pr-33">
            <div class="size-16 rounded-full bg-white" />
            <div class="text-6xl font-bold">
              Join the Conseq Media mailing list
            </div>
            <div class="max-w-[440px] text-lg">
              Sign up to the newsletter and be the first one to know about new courses or special offers.
            </div>
          </div>
          <div class="grid content-center gap-y-5">
            <div class="flex gap-x-5">
              <input
                type="email"
                placeholder="Enter your email"
                class="max-w-sm w-full px-7.5 py-6 text-lg text-[#0F0F2B]"
              >
              <button
                class="cursor-pointer border border-transparent bg-[#442EBA] px-10 py-6 text-white transition-all duration-400 hover:(border border-[#442EBA] bg-[#190A6A])"
              >
                Subscribe
              </button>
            </div>
            <div class="text-base text-[#B6A9FE] opacity-70">
              We won’t spam. Pinky promise!
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
