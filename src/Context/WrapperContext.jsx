import React, { createContext, useContext, useState } from "react"
import { useInView } from "react-intersection-observer"

export const WrapperContext = createContext()
const WrapperContextProvider = WrapperContext.Provider
export const LinkContext = createContext()
const LinkContextProvider = LinkContext.Provider

export function WrapperProvider({ children }) {
  const [ref, inView] = useInView({
    /* Optional options */
    rootMargin: "-56px",
  })

  const [count, setCount] = useState(0)

  return (
    <WrapperContextProvider value={{ ref, inView, count, setCount }}>
      <LinksProvider>{children}</LinksProvider>
    </WrapperContextProvider>
  )
}

export function LinksProvider({ children }) {
  //
  const [link, setLink] = useState(null)

  function setTheLink(data) {
    setLink(data)
  }

  return (
    <LinkContextProvider value={{ link, setTheLink }}>
      {children}
    </LinkContextProvider>
  )
}

export function useLinks() {
  return useContext(LinkContext)
}

export function useWrapper() {
  return useContext(WrapperContext)
}
