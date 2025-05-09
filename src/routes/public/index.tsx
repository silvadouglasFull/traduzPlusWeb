import { DefaultLayout } from '@layouts/public'
import { Route, Routes } from 'react-router-dom'
export default function App() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route index path="/" element={<h1>Olá</h1>} />
            </Route>
        </Routes>
    )
}
