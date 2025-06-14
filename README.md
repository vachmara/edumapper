## ℹ️ Technical test

### How to Launch and Use the Project

1. **Install dependencies:**
   ```bash
   pnpm i
   ```
2. **Start the development server:**
   ```bash
   pnpm dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Project Structure
- Main page: `app/pages/index.vue`
- UI components: `app/components/`
- Global styles: `app/assets/css/main.css`
- Design system config: `app/app.config.ts`

### Design System
- The file [`app/app.config.ts`](https://ui.nuxt.com/getting-started/theme#configuration) allows you to tweak the design system and Nuxt UI component defaults CSS classes.
- [Nuxt Icons](https://ui.nuxt.com/getting-started/icons/nuxt) are used for icons (lucide in our case)
- [Nuxt Fonts](https://ui.nuxt.com/getting-started/fonts) is used for font management (DM Sans in our case)
- Nuxt 4 Compatibility mode is enabled in `nuxt.config.ts` for a smoother transition to Nuxt 4.
- ESLint is configured

### Nuxt UI & Tailwind
- Uses [Nuxt UI](https://ui.nuxt.com/) for rapid, consistent UI development.
- Tailwind CSS v4 is used for utility-first styling.
- All components use are Type-safe and use the Composition API.

### Commit Conventions
- Commits follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for clarity and traceability.

### No API Integration
- The app is fully static and does not require any backend or API.

