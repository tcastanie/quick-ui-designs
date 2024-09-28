<script setup lang="ts">
import { format } from "date-fns"
import { enGB } from 'date-fns/locale'

const menu = [
  { title: 'General', icon: 'i-ph-square-logo' },
  { title: 'Password', icon: 'i-ph-lock' },
  { title: 'Invitations', icon: 'i-ph-envelope-simple' },
  { title: 'Billings', icon: 'i-ph-credit-card', active: true },
  { title: 'Apps', icon: 'i-ph-dots-nine' },
]

const billingItems = [
  { date: '2021-10-21', type: 'Pro Annual' },
  { date: '2021-08-21', type: 'Pro Portfolio' },
  { date: '2021-07-21', type: 'Sponsored Post' },
  { date: '2021-06-21', type: 'Sponsored Post' },
]

const formatDate = (date: string) => format(new Date(date), 'MMM. d, yyyy', { locale: enGB })
</script>

<template>
  <div class="grid min-h-screen place-items-center bg-[#E8E8FD]">
    <div class="relative flex text-sm text-[#1A194D] font-medium font-poppins">
      <div class="pointer-events-none absolute inset-0 w-64 rounded-[46px] bg-[#EE4D38] -bottom-12 -left-12 -top-12" />
      <div class="z-1 flex flex-initial flex-col rounded-l-[30px] bg-[#F8F8FF] px-4 py-8">
        <div class="flex gap-4 px-6 py-6">
          <img
            src="/baboulinet.jpg"
            class="size-14 rounded-2xl object-cover"
          >
          <div class="flex flex-col justify-center">
            <div class="text-base font-bold">
              Bière Gasoil
            </div>
            <div class="text-[#62618F] font-normal">
              @baboulinet
            </div>
          </div>
        </div>
        <nav class="mt-6 flex flex-1 flex-col justify-center gap-2">
          <div
            v-for="{ title, icon, active } of menu"
            :key="icon"
            :class="[{ 'text-[#1A194D]': active, 'text-[#62618F]': !active }, 'group relative flex cursor-pointer items-center gap-3 px-4 py-2 hover:text-[#1A194D]']"
          >
            <span
              v-if="active"
              class="absolute left-0 z-1 h-full w-[6px] rounded-3xl bg-[#EE4D38]"
            />
            <span class="absolute left-0 hidden h-full w-[6px] rounded-3xl bg-[#EE4D38] group-hover:flex" />
            <span :class="[icon, 'size-8']" />
            <span class="font-normal">{{ title }}</span>
          </div>
          <div class="group relative mt-auto flex cursor-pointer items-center gap-3 px-4 py-2 text-[#62618F] hover:text-[#1A194D]">
            <span class="absolute left-0 hidden h-full w-[6px] rounded-3xl bg-[#EE4D38] group-hover:flex" />
            <span class="i-ph-sign-out size-8" />
            <span class="font-normal">Log out</span>
          </div>
        </nav>
      </div>
      <div class="z-1 flex flex-1 flex-col rounded-r-[30px] from-[#F8F8FF] to-white bg-gradient-to-tl p-16">
        <div class="mb-12 text-[32px]/12 font-bold">
          Billing
        </div>
        <div class="flex items-start gap-x-18">
          <div class="grid content-start">
            <div class="mb-12 flex flex-col">
              <div class="text-base font-bold">
                Order History
              </div>
              <div class="text-[#62618F]">
                Manage billing information and view receipts
              </div>
            </div>
            <div class="grid mb-4 -mx-4">
              <div class="grid grid-cols-3 justify-start gap-28 px-4 text-[#62618F]">
                <span>Date</span>
                <span>Type</span>
                <span>Receipt</span>
              </div>
              <div
                v-for="({ date, type }, i) of billingItems"
                :key="i"
                class="grid grid-cols-3 items-center gap-28 rounded-lg px-4 py-2 text-base hover:bg-white hover:shadow-[#DFDFFD]/60 hover:shadow-lg"
              >
                <span>{{ formatDate(date) }}</span>
                <span>{{ type }}</span>
                <button class="border border-[#CBCBD9] rounded-lg px-4 py-2 hover:shadow">
                  Download
                </button>
              </div>
            </div>
            <a
              href="#"
              class="text-[#EE4D38] underline"
            >
              Load more
            </a>
            <div class="mb-6 mt-20 flex flex-col">
              <div class="text-base font-bold">
                Payment Method
              </div>
              <div class="text-[#62618F]">
                Manage billing information and view receipts
              </div>
            </div>
            <div class="flex items-center gap-4">
              <img
                src="/visa.png"
                alt="visa logo"
                class="border border-[#CBCBD9] rounded-[6px] p-2.5"
              >
              <span class="flex-1 text-base">Visa ending in 2255</span>
              <button class="border border-[#CBCBD9] rounded-lg px-4 py-2 text-base hover:shadow">
                Remove
              </button>
            </div>
          </div>
          <div class="grid rounded-2xl bg-[#EE4D38] p-8 text-white">
            <div class="mb-4 text-base">
              Your plan
            </div>
            <div class="text-2xl font-bold">
              Pro Annual
            </div>
            <div>Renews on Nov.2021</div>
            <button class="mt-4 border border-white/50 rounded-lg px-4 py-2 text-base hover:shadow">
              Cancel subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
