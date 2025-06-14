<script lang="ts" setup>
import type { RadioGroupItem } from '@nuxt/ui'
import type { CardFormItem } from '~/components/CardForm.vue'

const cardFormItems: CardFormItem[] = [
  {
    type: 'radio-group',
    name: 'class',
    items: ['Seconde', 'Première', 'Terminale'] as RadioGroupItem[]
  },
  {
    type: 'radio-group',
    label: 'Type de bac',
    name: 'level',
    items: ['Générale', 'Technologique', 'Professionnelle'] as RadioGroupItem[]
  }
]
</script>

<template>
  <UContainer class="mt-8 flex flex-col gap-4">
    <UCard
      variant="soft"
      :ui="{
        root: 'rounded-[24px] text-white'
      }"
      style="background-image: linear-gradient(124deg,rgba(255, 115, 66, 1) 0%, rgba(177, 118, 255, 1) 48%, rgba(255, 187, 225, 1) 73%, rgba(255, 187, 225, 1) 100%);"
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
            class="px-3 py-2 cursor-pointer w-fit border-none text-black"
            style="--ui-bg-inverted: #fff;"
          />
        </div>
      </div>
    </UCard>
    <CardForm
      title="Classe"
      question="En quelle classe es-tu ?"
      :items="cardFormItems"
      default-open
    />
    <CardForm title="Spécialités" />
    <CardForm title="Notes" />
  </UContainer>
</template>
