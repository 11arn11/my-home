import React from "react"
import { Router } from "@reach/router"
import Dispensa from "../components/app/Dispensa/Dispensa"

export default () => {
  return (
      <Router>
        <Dispensa path="/" />
        <Dispensa path="/app" />
        <Dispensa path="/app/dispensa" />
      </Router>
  )
}
