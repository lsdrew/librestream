import React from 'react'
import PropTypes from 'prop-types'
import { useSiteMetadata } from '../common/hooks/useSiteMetadata'
import HEAD from "../common/ui/Head"
import Header from '../common/ui/Header'
import Footer from '../common/ui/Footer'
// import CaseStudies from '../components/CaseStudies'


const Layout = ({ children }) => {
  const meta = useSiteMetadata()
  return (
    <>
      <HEAD />
      <Header siteTitle={meta.title} />
      <main id="pageContent">
        {children}
        {/* <CaseStudies /> */}
      </main>
      {/* <Footer siteTitle={meta.title} /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout