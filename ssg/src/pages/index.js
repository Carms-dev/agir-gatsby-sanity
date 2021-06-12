import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Logo from "../components/Logo"
import { MdChevronRight } from 'react-icons/md'

export default function IndexPage({ data: { sanityLandingPage: { title, heading, featuredImage, languageHomeLinks } } }) {
  const langNames = {
    ar: 'عربى',
    en: 'English',
    fr: 'Français',
    es: 'Espagñol'
  }
  return (
    <Layout language={`fr`} noHeader={true}>
      <LandingPageStyles>
        <Seo title={title} />
        <Logo style={{width: `100px`}}/>
        <h1>{heading}</h1>
        <GatsbyImage
          image={featuredImage.asset.gatsbyImageData}
          alt={featuredImage.alt}
          imgStyle={{ height: `auto` }} />
        <ul>
          {languageHomeLinks.map(link =>   (
            <li key={link.language}>
              <Link className="btn btn-primary" to={`/${link.language}`}>
                {langNames[link.language]}
                <MdChevronRight />
              </Link>
            </li>
          ))}
        </ul>
      </LandingPageStyles>
    </Layout>
  )
}

const LandingPageStyles = styled.div`
  text-align: center;
  padding: 1rem 0;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
    margin: 1rem 0;
  }
  li {
    font-size: 1.25rem;
    margin: 0 auto;
    padding: 0.5rem;
    max-width: 500px;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

`

export const query = graphql`
  query {
    sanityLandingPage {
      title
      heading
      featuredImage {
        alt
        asset {
          gatsbyImageData (
            width: 600
            placeholder: BLURRED
            layout: CONSTRAINED
          )
        }
      }
      languageHomeLinks {
        language
      }
    }
  }
`
