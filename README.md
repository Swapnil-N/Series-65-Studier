# Series-65-Studier

## Development

```sh
npm install      # install dependencies
npm run dev      # start Vite dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
npm test         # run the vitest suite
```

Node 20+ recommended. The app is a PWA; a service worker is generated on
`npm run build` by `vite-plugin-pwa`.
