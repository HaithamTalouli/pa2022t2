import '../styles/globals.css'

import Navbar from './Components/Navbar'
import React, { StrictMode } from 'react'
import * as ReactDOM from "react-dom";
import { ConvexProvider, ConvexReactClient } from 'convex/react'
import clientConfig from '../convex/_generated/clientConfig'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Hometest from './Hometest'
import JobPost from './Events/JobPost'
import LogIn from './LogIn/LogIn'
const convex = new ConvexReactClient(clientConfig)


function MyApp(/*{ Component, pageProps }: AppProps*/) {
  // const routeResult = useRoutes(routes);
  if (typeof window !== 'undefined') {
  return (
    // <div className="App">
    //   <A href="/">Home</A>
    //   {routeResult}
    // </div>
    <>
       <ConvexProvider client={convex}>
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hometest />} />
        <Route path="/about" element={<LogIn />} />
      </Routes>
      </BrowserRouter> 
    </ConvexProvider>
    </>
  
  )}
}

export default MyApp
