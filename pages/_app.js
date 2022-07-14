/* eslint-disable prettier/prettier */
import '../css/tailwind.css'
import '../css/prism.css'
import "../css/swiper.css"
import 'katex/dist/katex.css'
import styles from "../styles/Home.module.css"

import '@fontsource/inter/variable-full.css'
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '../data/siteMetadata'
import Analytics from '../components/analytics'
import LayoutWrapper from '../components/LayoutWrapper'
import { ClientReload } from '../components/ClientReload'



  export default function App({
    Component,
    pageProps: { session, ...pageProps },


            }) {
              return (
                
                <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
                    <SessionProvider session={session}>
                  <LayoutWrapper>
                  <Component {...pageProps} />
                  </LayoutWrapper>
                  </SessionProvider>


                </ThemeProvider>
                
              )
            }


  
    
      
      
     
  