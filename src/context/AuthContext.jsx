'use client'

import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authModalMode, setAuthModalMode] = useState('login')

  const openAuthModal = (mode = 'login') => {
    setAuthModalMode(mode)
    setAuthModalOpen(true)
  }

  const closeAuthModal = () => {
    setAuthModalOpen(false)
  }

  const login = (name, email) => {
    setIsLoggedIn(true)
    setUserName(name)
    setUserEmail(email)
    closeAuthModal()
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserName('')
    setUserEmail('')
  }

  const value = {
    isLoggedIn,
    userName,
    userEmail,
    authModalOpen,
    authModalMode,
    openAuthModal,
    closeAuthModal,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return ctx
}


/*Create src/context/AuthContext.jsx.

This is a plain JavaScript React context. No TypeScript.

'use client'

Import { createContext, useContext, useState } from 'react'.

Create AuthContext with createContext(null).

Export function AuthProvider({ children }):
  State:
    isLoggedIn   (bool, default false)
    userName     (string, default '')
    userEmail    (string, default '')
    authModalOpen  (bool, default false)
    authModalMode  (string, default 'login')  // 'login' | 'signup'

  Functions:
    openAuthModal(mode = 'login')  → sets authModalOpen true, authModalMode to mode
    closeAuthModal()               → sets authModalOpen false
    login(name, email)             → sets isLoggedIn true, userName, userEmail, closes modal
    logout()                       → resets isLoggedIn false, userName '', userEmail ''

  Return:
    <AuthContext.Provider value={{ isLoggedIn, userName, userEmail, authModalOpen, authModalMode, openAuthModal, closeAuthModal, login, logout }}>
      {children}
    </AuthContext.Provider>

Export custom hook:
  export function useAuth() {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
    return ctx
  }

Wrap app/layout.js children with <AuthProvider>:
  import { AuthProvider } from '@/context/AuthContext'
  // In layout: <AuthProvider>{children}</AuthProvider> */