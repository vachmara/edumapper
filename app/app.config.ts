export default defineAppConfig({
  ui: {
    colors: {
      primary: 'neutral',
      neutral: 'slate'
    },
    button: {
      slots: {
        base: 'rounded-[1000px]'
      },
      defaultVariants: {
        color: 'neutral'
      }
    },
    radioGroup: {
      slots: {
        item: 'bg-beige',
        label: 'text-base'
      },
      variants: {
        variant: {
          card: {
            item: 'border-beige rounded-[24px] cursor-pointer'
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
        root: 'bg-beige'
      }
    }
  }
})
