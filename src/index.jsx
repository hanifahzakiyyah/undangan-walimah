import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <BrowserRouter>
            <Experience />
        </BrowserRouter>
    </StrictMode>
)
