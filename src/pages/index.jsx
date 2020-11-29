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
import { LogoIcon, ScrollIcon } from "../components/Icons"

const Hero = styled.section`
  width: 100vw;
  height: 100vh;
`

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
  width: 100%;
  height: 100%;
`

const CopySection = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const HeroContent = styled.div`
  p {
    margin: 24px 0;
  }
`

const TeaserSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ebffec;
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
    alternateBackground ? "#F4FFF4" : theme.backgroundColor};
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Hero>
      <HeroWrapper>
        <CopySection>
          <LogoIcon />
          <HeroContent>
            <Heading1>
              Diabetes
              <div>
                made <Highlight>simple.</Highlight>
              </div>
            </Heading1>
            <Paragraph>Accurate insulin doses with a snapshot.</Paragraph>
            <StoreButtons>
              {isMobile && isIOS && (
                <ExternalLink href="/">
                  <Image className="store-cta" src="appstore.png" />
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
          </HeroContent>
          <ScrollIcon />
        </CopySection>

        <TeaserSection>
          <Image src="hero.png" />
        </TeaserSection>
      </HeroWrapper>
    </Hero>

    <Feature>
      <FeatureWrapper>
        <FeatureCopy>
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

    <Feature alternateBackground>
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

    <Feature>
      <FeatureWrapper>
        <FeatureCopy>
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

    <Feature alternateBackground>
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
  </Layout>
)

export default IndexPage
