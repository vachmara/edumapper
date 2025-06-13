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
