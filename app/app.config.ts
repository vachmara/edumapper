export default defineAppConfig({
  ui: {
    colors: {
      primary: 'neutral',
      neutral: 'slate'
    },
    button: {
      slots: {
        base: 'rounded-[1000px] border'
      },
      defaultVariants: {
        color: 'neutral'
      },
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'solid',
          class: 'text-inverted bg-inverted hover:bg-inverted/90 disabled:opacity-50 disabled:bg-beige aria-disabled:bg-beige disabled:text-black disabled:border-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted'
        }
      ]
    },
    radioGroup: {
      slots: {
        item: 'bg-beige',
        label: 'text-base',
        fieldset: 'gap-2 grid grid-cols-2 md:flex'
      },
      variants: {
        variant: {
          card: {
            item: 'border-beige rounded-[24px] cursor-pointer'
          }
        },
        size: {
          md: {
            fieldset: 'gap-y-2 md:gap-y-1'
          }
        }
      },
      compoundVariants: [
        {
          size: 'md',
          variant: [
            'card',
            'table'
          ],
          class: {
            item: 'px-4 py-2'
          }
        },
        {
          color: 'primary',
          variant: 'card',
          class: {
            item: 'has-data-[state=checked]:border-black border'
          }
        }
      ]
    }
  },
  uiPro: {
    header: {
      slots: {
        root: 'bg-beige border-2 border-[#1B1B1B1A]'
      }
    }
  }
})
