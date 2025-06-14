<script lang="ts">
import type { FormSubmitEvent, RadioGroupItem } from '@nuxt/ui'

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
  defaultOpen: false
})

const open = ref(false)
const modelValue = defineModel<string | undefined>()

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

const onSubmit = (event: FormSubmitEvent<Record<string, undefined>>) => {
  if (isButtonDisabled.value) return
  modelValue.value = Object.values(event.data)?.join(' ') || undefined
  open.value = false
}

const isButtonDisabled = computed(() => Object.values(state).some(value => value === undefined))

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
      @submit="onSubmit"
    >
      <div class="flex justify-between">
        <div
          class="flex flex-col gap-1"
        >
          <h2
            class="font-bold"
            :class="{ 'text-grey text-sm font-normal': modelValue }"
          >
            {{ open ? question : title }}
          </h2>
          <div v-if="!open">
            <span
              v-if="!modelValue"
              class="text-grey"
            >
              À compléter
            </span>
            <span
              v-else
              class="text-[16px] font-semibold"
            >
              {{ modelValue }}
            </span>
          </div>
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
            :ui="{
              root: cardItem.label ? 'flex flex-col gap-4' : ''
            }"
          >
            <div class="flex flex-col gap-6">
              <URadioGroup
                v-model="state[cardItem.name]"
                color="primary"
                variant="card"
                indicator="hidden"
                :items="cardItem.items"
                orientation="horizontal"
              />
              <USeparator v-if="cardItem !== items[items.length - 1]" />
            </div>
          </UFormField>
          <UButton
            label="Confirmer"
            type="submit"
            size="xl"
            :ui="{
              base: 'flex items-center justify-center cursor-pointer'
            }"
            :disabled="isButtonDisabled"
          />
        </div>
      </Transition>
    </UForm>
  </UCard>
</template>

<style scoped>
.form-expand-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.form-expand-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-expand-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
  max-height: 0;
}

.form-expand-leave-to {
  opacity: 0;
  transform: translateY(-5px) scale(0.98);
  max-height: 0;
}

.form-expand-enter-to,
.form-expand-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
  max-height: 500px;
}

.fade-enter-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
