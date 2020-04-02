import React, { createContext, useContext, useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

export const WrapperContext = createContext()
const WrapperContextProvider = WrapperContext.Provider

export function WrapperProvider({ children }) {
  const [ref, inView] = useInView({
    /* Optional options */
    rootMargin: "-56px",
  })

  const [starting, setDefault] = useState(true)

  function removeDefault() {
    if (inView) {
      return setDefault(false)
    }
    setDefault(true)
  }

  useEffect(() => {
    removeDefault()
    console.log({ inView })
  }, [inView])

  console.log({ starting })

  return (
    <WrapperContextProvider value={{ ref, inView, starting }}>
      <>{children}</>
    </WrapperContextProvider>
  )
}

export function useWrapper() {
  return useContext(WrapperContext)
}
