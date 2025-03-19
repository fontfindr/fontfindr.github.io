import { useState } from 'react'
import './App.css'
import Button from "@mui/material/Button";

function App() {

  return (
    <>
      <div class="mainDiv">
        <h1>Welcome to the FontFindr.</h1>
        <Button component="a" href="mailto:team@fontfindr.io" color="black" variant="contained">
          Contact Us
        </Button>
      </div>
    </>
  )
}

export default App
