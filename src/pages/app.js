import React from "react"
import { Router } from "@reach/router"
import Programmazione from "../Routes/Programmazione"
import Dispensa from "../Routes/Dispensa"

export default () => {
  return (
      <Router>
        <Programmazione path="/app/" />
        <Programmazione path="/app/programmazione/" />
        <Dispensa path="/app/dispensa/" />
      </Router>
  )
}
