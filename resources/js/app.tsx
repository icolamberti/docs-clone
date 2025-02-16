import '../css/app.css'
import './bootstrap'

import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { NuqsAdapter } from 'nuqs/adapters/react'
import { createRoot } from 'react-dom/client'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
  title: title => (title ? `${title} - ${appName}` : appName),
  resolve: name =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el)

    root.render(
      <NuqsAdapter>
        <App {...props} />
      </NuqsAdapter>,
    )
  },
  progress: {
    color: '#4B5563',
  },
})
