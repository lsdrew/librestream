import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import parse from "html-react-parser"
import Hero from "../../common/ui/Hero"
import FooterCTAs from '../../common/ui/FooterCTAs'

const BlankTemplate = ({ data: { page } }) => {
  const hero = {
    heroHeading: page.title
  }
  const { cta } = page.acfFooterCTAs

  return (
    <>
      <Helmet bodyAttributes={{
          class: 'template-blank'
        }} />
      <Hero hero={hero} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {!!page.content && (
              <article className="py-5">{parse(page.content)}</article>
            )}
          </div>
        </div>
      </div>

      <FooterCTAs featured={cta} />
    </>
  )
}

export const pageQuery = graphql`
  query BlankTemplateQuery($id: String!) {
    # selecting the current page by id
    page: wpPage(id: { eq: $id }) {
      ...PageDetails
      ...FooterCTAs
    }
  }
`

export default BlankTemplate