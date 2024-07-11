import React, { useState, createContext } from "react"

const ShareContext = createContext({})
const ShareContextProvider = props => {


  // console.log("context hello", props.Value)

  return (
    <ShareContext.Provider value={props}>
      {props.children}
    </ShareContext.Provider>
  )
}

export { ShareContextProvider, ShareContext }