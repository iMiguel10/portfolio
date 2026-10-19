# Portfolio

Portfolio de Miguel Jiménez Cazorla. React + Vite + TypeScript, bilingüe (ES/EN), servido con nginx.

```bash
npm install
npm run dev      # desarrollo
npm run build    # producción en dist/
```

## Editar contenido

- Textos ES/EN y enlaces: `src/content.ts`
- Demo del Tracker: rellenar `links.demo` en `src/content.ts`
- Avatar: `public/avatar.webp`; capturas: añadir a `public/` y sustituir el marcador en `src/App.tsx`

## Despliegue (Coolify)

Build pack **Dockerfile**, puerto **80**, dominio `https://imigueldev.duckdns.org`.
