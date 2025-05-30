//@ts-ignore
import process from "process"
export const REACT_APP_ENV = process.env.REACT_APP_ENV ?? 'develop'
export const REACT_API_PORT = process.env.REACT_API_PORT ?? '8000'
export const REACT_APP_X_API_KEY = 'your_secret_api_key_here'