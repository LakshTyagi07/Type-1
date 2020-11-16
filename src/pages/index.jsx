import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/Image"
import HeroTrailer from "../videos/hero.mp4"
import SEO from "../components/seo"
import { Heading1, Paragraph, Wrapper } from "../styles/base"
import { isAndroid, isIOS, isMobile } from "react-device-detect"

const Hero = styled.section`
  padding: 48px 24px;
`

const HeroWrapper = styled(Wrapper)`
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    align-items: center;
  }
`

const HeroCopy = styled.div`
  p {
    margin: 1.25rem 0;
  }
  @media screen and (min-width: 960px) {
    p {
      margin: 2rem 0;
    }
  }
`

const HeroTeaser = styled.div`
  @media screen and (min-width: 960px) {
    height: 75vh;
    position: relative;
    video {
      transform: scale(1.1);
    }
  }
`

const StoreButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(2, 165px);
  }
`

const ExternalLink = styled.a``

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero>
      <HeroWrapper>
        <HeroCopy>
          <Heading1>Your health at your fingertips.</Heading1>
          <Paragraph>
            Recieve personal tailored insulin dosages with a single snapshot.
          </Paragraph>
          <StoreButtons>
            {isMobile && isIOS && (
              <ExternalLink href="/">
                <Image className="store-cta" src="appstore.png" />
              </ExternalLink>
            )}

            {isMobile && isAndroid && (
              <ExternalLink href="/">
                <Image className="store-cta" src="playstore.png" />
              </ExternalLink>
            )}

            {!isMobile && (
              <>
                <ExternalLink href="/">
                  <Image className="store-cta" src="appstore.png" />
                </ExternalLink>

                <ExternalLink href="/">
                  <Image className="store-cta" src="playstore.png" />
                </ExternalLink>
              </>
            )}
          </StoreButtons>
        </HeroCopy>
        <HeroTeaser>
          <video
            width="100%"
            height="100%"
            autoPlay={true}
            playsInline
            muted
            loop
          >
            <source src={HeroTrailer} type="video/mp4" />
          </video>
        </HeroTeaser>
      </HeroWrapper>
    </Hero>
  </Layout>
)

export default IndexPage
