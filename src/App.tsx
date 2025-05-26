import { Provider } from "@context/language"
import { Router } from "@router/index"
import type React from 'react'
export const App: React.FC = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}
