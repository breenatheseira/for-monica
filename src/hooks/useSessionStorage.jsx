import { useState } from 'react'

export const useSessionStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.sessionStorage.getItem(key)
      if(value){
        return JSON.parse(value)
      } else {
        window.sessionStorage.setItem(key, JSON.stringify(defaultValue))
        console.log('value set')
        return defaultValue
      }
    } catch (error) {
      console.error(error.message)
      return defaultValue
    }
  })

  const setValue = (newValue) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.error(error.message)
    }
    setStoredValue(newValue)
  }
  return [storedValue, setValue]
}