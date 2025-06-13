<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'À compléter'
  }
})
</script>

<template>
  <UCard
    variant="soft"
    :ui="{
      root: 'bg-white rounded-[24px]'
    }"
  >
    <div class="flex">
      <div class="flex flex-col gap-1">
        <h2 class="font-bold">
          {{ title }}
        </h2>
        <span class="text-grey">À compléter</span>
      </div>
      <UIcon
        name="i-lucide-pencil-line"
        class="cursor-pointer ml-auto"
      />
    </div>
  </UCard>
</template>
