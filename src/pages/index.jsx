import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/Image"
import HeroTrailer from "../videos/hero.mp4"
import SEO from "../components/seo"
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Wrapper,
} from "../styles/base"
import { isAndroid, isIOS, isMobile } from "react-device-detect"
import { LogoIcon } from "../components/Icons"

const Hero = styled.section`
  padding: 48px 24px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeroWrapper = styled(Wrapper)`
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    align-items: center;
  }
`

const HeroCopy = styled.div`
  h1 {
    margin-top: 2.5rem;
  }
  p {
    margin: 1.25rem 0;
  }
  @media screen and (min-width: 960px) {
    p {
      margin: 1.5rem 0;
    }
  }
`

const HeroTeaser = styled.div`
  @media screen and (min-width: 960px) {
    height: 80vh;
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

const Feature = styled.section`
  padding: 48px 24px;
  background-color: ${({ theme, greyBackground }) =>
    greyBackground ? theme.secondaryBackgroundColor : theme.backgroundColor};
  @media screen and (min-width: 960px) {
    padding: 64px 32px;
  }
`

const FeatureWrapper = styled(Wrapper)`
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
    align-items: center;
  }
`

const FeatureCopy = styled.div`
  order: 1;
  h2 {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 960px) {
    order: ${({ reversed }) => (reversed ? 2 : 1)};
  }
`

const FeatureTeaser = styled.div`
  order: 2;
  @media screen and (min-width: 960px) {
    order: ${({ reversed }) => (reversed ? 1 : 2)};
  }
`

const Banner = styled.section`
  padding: 64px 24px;
  background: ${props => props.theme.secondaryBackgroundColor};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`

const BannerWrapper = styled(Wrapper)`
  max-width: 840px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-bottom: 24px;
  }
`

const ExternalLink = styled.a`
  .store-cta {
    width: 165px;
  }
`

const Highlight = styled.span`
  display: inline;
  color: ${props => props.theme.accentColor};
`

const LogoWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: ${props => props.theme.backgroundColor};
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero>
      <HeroWrapper>
        <HeroCopy>
          <LogoWrapper>
            <LogoIcon />
          </LogoWrapper>
          <Heading1>Diabetes made simple.</Heading1>
          <Paragraph>Accurate insulin doses with a snapshot.</Paragraph>
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
    <Feature greyBackground>
      <FeatureWrapper>
        <FeatureCopy reversed>
          <Heading2>
            Your food{" "}
            <span className="block">
              is{" "}
              <>
                <Highlight>personal</Highlight>
              </>
            </span>
          </Heading2>
          <Paragraph>
            Train AI to recognize your meals from a database of the food you eat
            on the daily.
          </Paragraph>
        </FeatureCopy>
        <FeatureTeaser reversed>
          <Image
            className="feature-image"
            src="features/identification.png"
            alt="Identification"
          />
        </FeatureTeaser>
      </FeatureWrapper>
    </Feature>

    <Feature>
      <FeatureWrapper>
        <FeatureCopy>
          <Heading2>
            <Highlight>Stop calculating.</Highlight> Start eating.
          </Heading2>
          <Paragraph>
            No carbs. No calories. Just a picture of your food to know how much
            insulin you need.
          </Paragraph>
        </FeatureCopy>
        <FeatureTeaser>
          <Image
            className="feature-image"
            src="features/dosage.png"
            alt="Dosage"
          />
        </FeatureTeaser>
      </FeatureWrapper>
    </Feature>

    <Feature greyBackground>
      <FeatureWrapper>
        <FeatureCopy reversed>
          <Heading2>
            <Highlight>Keep an eye</Highlight> on your health
          </Heading2>
          <Paragraph>
            Look back at your blood sugar levels and your eating habits.
          </Paragraph>
        </FeatureCopy>
        <FeatureTeaser reversed>
          <Image
            className="feature-image"
            src="features/data.png"
            alt="Keep an eye on your health"
          />
        </FeatureTeaser>
      </FeatureWrapper>
    </Feature>

    <Feature>
      <FeatureWrapper>
        <FeatureCopy>
          <Heading2>
            <Highlight>Your data</Highlight> stays with you.
          </Heading2>
          <Paragraph>
            Without the need for an account, your health data stays on the app.
          </Paragraph>
        </FeatureCopy>
        <FeatureTeaser>
          <Image
            className="feature-image"
            src="features/one-picture.png"
            alt="Get snapshot of your meal to recognize food."
          />
        </FeatureTeaser>
      </FeatureWrapper>
    </Feature>

    <Banner>
      <BannerWrapper>
        <Heading3>Start using Type 1</Heading3>
        <ExternalLink href="/">
          <Image className="store-cta" src="appstore.png" />
        </ExternalLink>
      </BannerWrapper>
    </Banner>
  </Layout>
)

export default IndexPage
