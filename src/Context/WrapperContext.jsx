import React, { createContext, useContext, useState } from "react"
import { useInView } from "react-intersection-observer"

export const WrapperContext = createContext()
const WrapperContextProvider = WrapperContext.Provider

export function WrapperProvider({ children }) {
  const [ref, inView] = useInView({
    /* Optional options */
    rootMargin: "-56px",
  })

  const [count, setCount] = useState(0)

  return (
    <WrapperContextProvider value={{ ref, inView, count, setCount }}>
      <>{children}</>
    </WrapperContextProvider>
  )
}

export function useWrapper() {
  return useContext(WrapperContext)
}
