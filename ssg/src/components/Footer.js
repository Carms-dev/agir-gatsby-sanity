import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'
// import SocialMediaIcons from './SocialMediaIcons'

export default function Footer({ language }) {
  const { sanitySiteSettings, allSanityContactPage, allSanityPrivacyPolicyPage } = useStaticQuery(graphql`
    query {
      sanitySiteSettings {
        name
        address
      }
      allSanityContactPage {
        nodes {
          title
          slug {
            current
          }
          language
        }
      }
      allSanityPrivacyPolicyPage {
        nodes {
          title
          slug {
            current
          }
          language
        }
      }
    }
  `)

  const { name, address } = sanitySiteSettings

  // Index does not have language state
  const contactLink = allSanityContactPage.nodes.find(node => node.language === language)
  const privacyPolicyLink = allSanityPrivacyPolicyPage.nodes.find(node => node.language === language)

  // get contact info from contact page
  return (
    <div style={{ background: `var(--off-white)`}}>
      <FooterStyles>
        <Link to={`/${language}`}>
          <Logo style={{width: `80px`}} />
        </Link>
        <p>{address}</p>
        {/* TODO: add switcher */}
        <LanguageSwitcher language={language} />
        <Link className="btn btn-primary" to={`/${language}/${contactLink.slug.current}`}>
          {contactLink.title}
        </Link>
        {/* <SocialMediaIcons socialMedia={socialMedia} /> */}
        <p>
          <span>© {name}, {new Date().getFullYear()}.{` `}</span>
          <Link to={`/${language}/${privacyPolicyLink.slug.current}`}>
            {privacyPolicyLink.title}
          </Link>
        </p>
      </FooterStyles>
    </div>
  )
}

const FooterStyles = styled.footer`
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  padding: 50px 20px 20px 20px;

  div:first-child {
    grid-column: 1 / 1;
  }
  p:nth-child(2) {
    grid-column: 2 / -1;
    align-self: center
  }
  div:nth-child(3) {
    grid-column: 1 / -1;
  }
  a:nth-child(4) {
    grid-column: 1 / -1;
  }
  div:nth-child(5) {
    grid-column: 1 / -1;
    text-align: center;
  }
  p:last-child {
    grid-column: 1 / -1;
    a {
      padding: 2px 0;
      text-decoration: underline;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px 100px;
    place-items: center center;

    & > * {
      max-width: 240px;
    }
    div:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
    p:nth-child(2) {
      grid-column: 2 / 3;
      text-align: center;
    }
    div:nth-child(3) {
      grid-column: 3 / -1;
    }
    a:nth-child(4) {
      grid-column: 2 / 3;
      grid-row: 2 / 3
    }
    div:nth-child(5) {
      grid-column: 3 / -1;
      grid-row: 2 / 3;
    }
    p:last-child {
      grid-column: 1 / -1;
      justify-self: start;
      max-width: unset;
    }
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`
