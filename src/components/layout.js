/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "../styles/global"
import "../styles/reset.css"
import Nav from "./Nav"
import Footer from "./Footer"

const lightTheme = {
  foregroundColor: "#000",
  backgroundColor: "#fff",
  secondaryBackgroundColor: "#fafafa",
}

const darkTheme = {
  foregroundColor: "#fff",
  backgroundColor: "#000",
  secondaryBackgroundColor: "#101010",
}

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Nav />
        <main> {children}</main>
        <Footer theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
