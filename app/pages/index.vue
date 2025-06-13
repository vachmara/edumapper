<template>
  <UContainer class="mt-8">
    <UCard
      variant="soft"
      :ui="{
        root: 'bg-white rounded-[24px]'
      }"
    >
      <div class="flex md:flex-row flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h1 class="text-xl font-bold">
            Lycée Gaston Berger
          </h1>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-1">
              <UIcon name="i-lucide-map-pin" />
              <span>Lille</span>
            </div>
            <div class="flex items-center gap-1">
              <UIcon name="i-lucide-building" />
              <span>Lycée public</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:ml-auto">
          <UButton
            label="Modifier"
            class="px-3 py-2 cursor-pointer w-fit"
          />
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
