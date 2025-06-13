<script lang="ts" setup>
import type { RadioGroupItem } from '@nuxt/ui'

const yearItems = ref<RadioGroupItem[]>(['Seconde', 'Première', 'Terminale'])
const levelItems = ref<RadioGroupItem[]>(['Générale', 'Technologique', 'Professionnelle'])
</script>

<template>
  <UContainer class="mt-8 flex flex-col gap-4">
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
    <UCard
      variant="soft"
      :ui="{
        root: 'bg-white rounded-[24px]'
      }"
    >
      <UForm class="flex flex-col gap-6">
        <div class="flex justify-between">
          <h2 class="font-bold">
            En quelle classe es-tu ?
          </h2>
          <UIcon
            name="i-lucide-x"
            class="cursor-pointer"
          />
        </div>
        <URadioGroup
          color="primary"
          variant="card"
          indicator="hidden"
          :items="yearItems"
          orientation="horizontal"
        />
        <USeparator />
        <URadioGroup
          legend="Type de bac"
          color="primary"
          variant="card"
          indicator="hidden"
          :items="levelItems"
          orientation="horizontal"
        />
        <UButton
          label="Confirmer"
          size="xl"
          :ui="{
            base: 'flex items-center justify-center cursor-pointer'
          }"
          disabled
        />
      </UForm>
    </UCard>
    <CardForm title="Spécialités" />
    <CardForm title="Notes" />
  </UContainer>
</template>
