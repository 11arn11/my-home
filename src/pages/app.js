import React from "react"
import { Router } from "@reach/router"
import Programmazione from "../Routes/Programmazione/Page"

export default () => {
  return (
      <Router>
        <Programmazione path="/app/" />
        <Programmazione path="/app/programmazione/" />
      </Router>
  )
}
