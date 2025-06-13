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
          class: 'text-inverted bg-inverted hover:bg-inverted/90 disabled:bg-beige aria-disabled:bg-beige disabled:text-black disabled:border-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted'
        }
      ]
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
