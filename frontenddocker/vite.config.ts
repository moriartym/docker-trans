import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // listen on all network interfaces (0.0.0.0)
    port: 25173,          // optional: force exact port
    strictPort: true,     // fail if port is taken
  },
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import fs from 'fs';
// import path from 'path';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,           // listen on all network interfaces (0.0.0.0)
//     port: 25173,          // exact port
//     strictPort: true,     // fail if port is taken
//     https: {
//       key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
//       cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert.pem')),
//     },
//   },
// });



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
