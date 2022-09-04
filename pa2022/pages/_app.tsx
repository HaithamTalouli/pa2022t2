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
import About from './About';
import HomeScreen from './HomeScreen';
import SignUp from './SignUp/SignUp';
import OthersJobPost from './Events/OthersJobPost';
const convex = new ConvexReactClient(clientConfig)


function MyApp(/*{ Component, pageProps }: AppProps*/) {
  // const routeResult = useRoutes(routes);
  if (typeof window !== 'undefined') {
  return (
    <>
    <ConvexProvider  client={convex}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<JobPost />} />
        <Route path="/othersposts" element={<OthersJobPost />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      </BrowserRouter> 
    </ConvexProvider>
    </>
  
  )}
}

export default MyApp
