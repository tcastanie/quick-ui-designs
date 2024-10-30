<script lang="ts" setup>
import { Label } from 'radix-vue'
</script>

<template>
  <div class="grid min-h-screen place-items-center">
    <div class="grid grid-cols-2 bg-blue">
      <div class="col-span-2">
        UIDesignDaily
      </div>
      <div class="col-span-2">
        Upload Files
      </div>
      <div class="col-span-2 flex flex-col md:col-span-1">
        <Label for="authKeyInput">Authorization key</Label>
        <input
          id="authKeyInput"
          type="password"
          value="0123456789"
        >
      </div>
      <div class="col-span-2 flex flex-col md:col-span-1">
        <Label for="tagsInput">Tags (comma separated)</Label>
        <input
          id="tagsInput"
          type="text"
          placeholder="Tags (comma separated)"
        >
      </div>
      <div class="col-span-2 flex flex-col md:col-span-1">
        <Label for="titleInput">Title</Label>
        <input
          id="titleInput"
          type="text"
          value="Day 001"
        >
      </div>
      <div class="col-span-2 flex flex-col md:col-span-1">
        <Label for="dateInput">Date</Label>
        <input
          id="dateInput"
          type="text"
          placeholder="DD/MM/YYYY"
        >
      </div>
      <div class="col-span-2 row-span-2 flex flex-col md:col-span-1">
        <Label for="descInput">Description</Label>
        <textarea
          id="descInput"
          placeholder="Description"
          class="h-full resize-none"
        />
      </div>
      <div class="col-span-2 flex flex-col md:col-span-1">
        <Label for="softwareInput">Software</Label>
        <select id="softwareInput">
          <option value="Figma">
            Figma
          </option>
          <option value="Sketch">
            Sketch
          </option>
          <option value="Adobe XD">
            Adobe XD
          </option>
        </select>
      </div>
      <div class="grid col-span-2 grid-cols-2 md:col-span-1">
        <div class="flex flex-col">
          <Label for="thumbImage">Thumbnail Image</Label>
          <input
            id="thumbImage"
            type="file"
            accept="image/*"
          >
        </div>
        <div class="flex flex-col">
          <Label for="sourceFile">Source File</Label>
          <input
            id="sourceFile"
            type="file"
            accept=".fig,.sketch,.xd"
          >
        </div>
      </div>
      <div class="col-span-2">
        <button class="bg-pink">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
