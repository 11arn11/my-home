import React from "react"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Sidebar from "./Sidebar"

export default ({ title, onClickMenu }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Sidebar/>
        <Typography variant="h6">
          { title }
        </Typography>
      </Toolbar>
    </AppBar>  
  )
}
