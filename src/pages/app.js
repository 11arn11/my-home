import React from "react"
import { Router } from "@reach/router"
import Programmazione from "../Routes/Programmazione"
import Dispensa from "../Routes/Dispensa"
import ListaSpesa from "../Routes/ListaSpesa"

export default () => {
  return (
      <Router>
        <Programmazione path="/app/" />
        <Programmazione path="/app/programmazione/" />
        <Dispensa path="/app/dispensa/" />
        <ListaSpesa path="/app/lista-della-spesa/" />
      </Router>
  )
}
