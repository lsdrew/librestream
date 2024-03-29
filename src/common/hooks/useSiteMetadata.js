import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
      query SiteMetaData {
        wp(id: {eq: "/graphql--rootfields"}) {
          generalSettings {
            description
          }
          seo {
            schema {
              inLanguage
              siteName
              siteUrl
            }
            social {
              facebook {
                url
                defaultImage {
                  sourceUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              wikipedia {
                url
              }
              instagram {
                url
              }
              linkedIn {
                url
              }
              mySpace {
                url
              }
              pinterest {
                url
              }
              twitter {
                username
              }
              youTube {
                url
              }
            }
            openGraph {
              frontPage {
                description
                title
              }
              defaultImage {
                sourceUrl
              }
            }
          }
        }
      }
    `
  )

  const { generalSettings, seo: { schema, openGraph, social } } = data.wp

  const meta = {
    url: schema.siteUrl,
    title: schema.siteName,
    description: generalSettings.description,
    language: schema.inLanguage,
    social,
    image: openGraph.defaultImage.sourceUrl,
    twitter: social.twitter.username,
  }

  return meta
}
