import React from "react"
import { Router } from "@reach/router"
import Programmazione from "../Routes/Programmazione"
import Dispensa from "../Routes/Dispensa"
import ListaSpesa from "../Routes/ListaSpesa"
import Ricette from '../Routes/Ricette'
import Ricetta from '../Routes/Ricetta'
import RicettaEdit from '../Routes/RicettaEdit'

export default () => {
  return (
      <Router>
        <Programmazione path="/app/" />
        <Programmazione path="/app/menu-della-settimana/" />
        <Dispensa path="/app/dispensa/" />
        <ListaSpesa path="/app/lista-della-spesa/" />
        <Ricette path="/app/ricette"/>
        <Ricetta path="/app/ricetta/:id"/>
        <RicettaEdit path="/app/ricetta/:id/edit"/>
        <RicettaEdit path="/app/ricetta/add"/>
      </Router>
  )
}
