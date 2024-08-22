import React, { useContext } from "react"
import SessionContext from "../components/context/SessionContext.jsx"

export const useSession = () => {
  return useContext(SessionContext)
}