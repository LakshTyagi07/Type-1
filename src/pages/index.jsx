import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import {
  Heading1,
  Heading2,
  Heading4,
  Paragraph,
  Wrapper,
} from "../styles/base"

import { LogoIcon, SquareIcon } from "../components/Icons"

import HeroVideo from "../videos/hero.mp4"

const Hero = styled.section`
  padding: 40px 24px;
  @media screen and (min-width: 1000px) {
    padding: 20px;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
`

const HeroWrapper = styled(Wrapper)`
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 48px;
  }
`

const HeroCopy = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
`

const HeroTeaser = styled.div`
  @media screen and (min-width: 1000px) {
    height: 80vh;
  }
`

const Highlight = styled.span`
  color: ${props => props.theme.accentColor};
`

const StoreButtons = styled.div`
  width: 172px;
`

const ExternalLink = styled.a``

const Feature = styled.section`
  padding: 48px 24px;
  background-color: ${({ theme, alternateBackground }) =>
    alternateBackground ? "#fafafa" : theme.backgroundColor};
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
    order: ${props => (props.reversed ? 2 : 1)};
  }
`

const FeatureTeaser = styled.div`
  order: 2;
  @media screen and (min-width: 960px) {
    order: ${props => (props.reversed ? 1 : 2)};
  }
`

const Banner = styled.section`
  padding: 40px 24px;
  background-color: #fafafa;
`

const BannerWrapper = styled(Wrapper)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    margin-bottom: 24px;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero>
      <HeroWrapper>
        <HeroCopy>
          <SquareIcon />
          <Heading1>Accurate insulin doses with a snapshot.</Heading1>
          <Paragraph>
            A single snapshot of your meal delivers your insulin dosage so that
            you don’t have to sit around calculating your carbs.
          </Paragraph>
          <StoreButtons>
            <ExternalLink href="/">
              <Image className="store-cta" src="appstore.png" />
            </ExternalLink>
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
            <source src={HeroVideo} type="video/mp4" />
          </video>
        </HeroTeaser>
      </HeroWrapper>
    </Hero>

    <Feature alternateBackground>
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
            Train AI to recognize the food you eat on the regular. After
            labeling your food for the first time, Type 1 will identify the meal
            and recommend an insulin dose the next time you click a picture of
            it.
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
            insulin you need. Type 1 will tune your estimated doses and alter
            your recommended insulin based on real time blood sugar levels and
            personal insulin sensitivity.
          </Paragraph>
        </FeatureCopy>
        <FeatureTeaser>
          <Image
            className="feature-image"
            src="features/dosage.png"
            alt="Dosage image"
          />
        </FeatureTeaser>
      </FeatureWrapper>
    </Feature>

    <Feature alternateBackground>
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
            <Highlight>Your data</Highlight> stays <br /> with you.
          </Heading2>
          <Paragraph>
            Without the need for an account, your health data stays on the app.
          </Paragraph>
        </FeatureCopy>
        <FeatureTeaser>
          <Image
            className="feature-image"
            src="features/privacy.png"
            alt="Get snapshot of your meal to recognize food."
          />
        </FeatureTeaser>
      </FeatureWrapper>
    </Feature>

    <Banner>
      <BannerWrapper>
        <Heading4>Start Using Type 1</Heading4>
        <StoreButtons>
          <ExternalLink href="/">
            <Image className="store-cta" src="appstore.png" />
          </ExternalLink>
        </StoreButtons>
      </BannerWrapper>
    </Banner>
  </Layout>
)

export default IndexPage
