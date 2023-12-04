'use client'

import { SessoinProvider } from 'next-auth/react'

export const NextAuthProvider = ({ children }) => {
  return <SessoinProvider>{children}</SessoinProvider>
}
