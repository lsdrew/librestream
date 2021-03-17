import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Hero from "../common/ui/Hero"
import Intro from "../common/ui/Intro"
import NextPrevMenu from '../common/ui/menus/NextPrevMenu'
import parse from "html-react-parser"
import BackgroundImage from 'gatsby-background-image'

const Solution = ({ data: { previous, next, post } }) => {
  const acf = post.acfPostTypeSolution

  const hero = post.acfHero
  const intro = post.acfIntro
  console.log(intro)
  const featuredImage = intro.introFeaturedImage.localFile.publicURL
  return (
    <>
      <Hero hero={hero} />
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Industry Solution</h2>
              <h3 className="lead text-primary">{post.title}</h3>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <Intro intro={intro} />
      <section className="bg-dark text-white bg-offset-right mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {!!post.content &&  parse(post.content)}
            </div>
            
            <div className="col-lg-5">
              {featuredImage && (
                <div 
                  style={{ backgroundImage: `url(${ intro.introFeaturedImage.localFile.publicURL })`}}
                  className="bg-image aspect-1x1 img-offset-top" 
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <NextPrevMenu previous={previous} next={next} />
    </>
  )
}

Solution.propTypes = {
  post: PropTypes.instanceOf(Object),
  next: PropTypes.string,
  previous: PropTypes.string,
}

export const pageQuery = graphql`
  query SolutionById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpSolution(id: { eq: $id }) {
      ...SolutionHero
      ...SolutionIntro
      id
      title
      uri
      slug
      acfPostTypeSolution {
        fieldGroupName
      }
      content
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`

export default Solution
