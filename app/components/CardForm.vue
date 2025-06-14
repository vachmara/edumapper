<script lang="ts">
import type { RadioGroupItem } from '@nuxt/ui'

export type CardFormItem = {
  /**
   * Define the type of the item. Support only radio group for now.
   */
  type: 'radio-group'
  label?: string
  /**
   * Define the name of the item. This will be used in the form submission.
   */
  name: string
  items?: RadioGroupItem[]
}

export interface CardFormProps {
  title: string
  /**
   *
   * Define the question to ask the use when the form is opened.
   * @default 'Quelle est ta classe ?'
   */
  question?: string
  /**
   * Define the status of the form. Only visible when the form is closed.
   * @default 'À compléter'
   */
  status?: string
  /**
   * Define if the form should be opened by default.
   * @default false
   */
  defaultOpen?: boolean
  /**
   *  Define the items of the form. If not provided, the form will not open.
   */
  items?: CardFormItem[]
}
</script>

<script lang="ts" setup>
const props = withDefaults(defineProps<CardFormProps>(), {
  question: 'Quelle est ta classe ?',
  status: 'À compléter',
  defaultOpen: false
})

const open = defineModel<boolean>()

const rawState = toValue(props.items ?? [])?.reduce((acc, item) => {
  if (item.type === 'radio-group') {
    acc[item.name] = undefined
  }
  return acc
}, {} as Record<string, undefined>)

const state = reactive({
  ...rawState
})

const onClick = () => {
  if (!props.items?.length) return
  open.value = !open.value
}

onMounted(() => {
  open.value = props.defaultOpen
})
</script>

<template>
  <UCard
    variant="soft"
    :ui="{
      root: 'bg-white rounded-[24px]'
    }"
  >
    <UForm
      :state="state"
      class="flex flex-col gap-6"
    >
      <div class="flex justify-between">
        <div
          class="flex flex-col gap-1"
        >
          <h2 class="font-bold">
            {{ open ? question : title }}
          </h2>
          <span
            v-if="!open"
            class="text-grey"
          >{{ status }}</span>
        </div>
        <UIcon
          :name="open ? 'i-lucide-x':'i-lucide-pencil-line'"
          class="cursor-pointer ml-auto"
          :class="{ 'pointer-events-none': !items?.length }"
          @click="onClick"
        />
      </div>
      <Transition
        name="form-expand"
        mode="out-in"
      >
        <div
          v-if="open && items?.length"
          class="flex flex-col gap-6"
        >
          <UFormField
            v-for="cardItem in items.filter(i => i.type === 'radio-group')"
            :key="cardItem.name"
            :name="cardItem.name"
            :label="cardItem.label"
          >
            <URadioGroup
              color="primary"
              variant="card"
              indicator="hidden"
              :items="cardItem.items"
              orientation="horizontal"
              :model-value="state[cardItem.name]"
            />
          </UFormField>
          <UButton
            label="Confirmer"
            size="xl"
            :ui="{
              base: 'flex items-center justify-center cursor-pointer'
            }"
            disabled
          />
        </div>
      </Transition>
    </UForm>
  </UCard>
</template>

<style scoped>
.form-expand-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.form-expand-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-expand-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  max-height: 0;
}

.form-expand-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
  max-height: 0;
}

.form-expand-enter-to,
.form-expand-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
  max-height: 500px;
}
</style>
