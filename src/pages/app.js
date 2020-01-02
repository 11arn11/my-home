import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import Dispensa from "../components/app/Dispensa"
import Pasti from "../components/app/Pasti"
import Programmazione from "../components/app/Programmazione"

export default () => {
  return (
      <Router>
        <Dispensa path="/app" />
        <Dispensa path="/app/dispensa" />
        <Pasti path="/app/pasti" />
        <Programmazione path="/app/programmazione" />
      </Router>
  )
}
