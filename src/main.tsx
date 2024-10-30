import { createRoot } from 'react-dom/client'
import './index.css'
import Localize from './features/localization/localize.tsx'
import App from './app/app.tsx'

createRoot(document.getElementById('root')!).render(
  <Localize>
    <App />
  </Localize>
)
