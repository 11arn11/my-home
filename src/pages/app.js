import React from "react"
import { Router } from "@reach/router"
import Dispensa from "../components/app/Dispensa/Dispensa"

export default () => {
  return (
      <Router>
        <Dispensa path="/app" />
        <Dispensa path="/app/dispensa" />
      </Router>
  )
}
