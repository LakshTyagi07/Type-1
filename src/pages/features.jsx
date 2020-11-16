import React from "react"
import styled from "styled-components"
import Image from "../components/Image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Heading1,
  Heading2,
  Heading3,
  Paragraph,
  Wrapper,
} from "../styles/base"

const Hero = styled.section`
  padding: 48px 24px;
`

const HeroWrapper = styled(Wrapper)`
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
    align-items: center;
  }
`

const HeroCopy = styled.div`
  h1 {
    margin-bottom: 24px;
    background: linear-gradient(127.07deg, #e94511 -5.82%, #411402 108.38%);
    line-height: 1.2;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`

const HeroTeaser = styled.div`
  width: 100%;
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

export default function () {
  return (
    <Layout>
      <SEO title="Features" />
      <Hero>
        <HeroWrapper>
          <HeroCopy>
            <Heading1>Your whole experience, Reimagined.</Heading1>
            <Paragraph>
              Meala has everything you need to track your blood suger level.
            </Paragraph>
          </HeroCopy>
          <HeroTeaser>
            <Image
              src={"features/hero.png"}
              alt="Your whole experience, Reimagined."
            />
          </HeroTeaser>
        </HeroWrapper>
      </Hero>

      <Feature greyBackground>
        <FeatureWrapper>
          <FeatureCopy reversed>
            <Heading2>Identification</Heading2>
            <Paragraph>
              AI helps recognise food from a personally trained database.
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
            <Heading2>Dosage</Heading2>
            <Paragraph>
              Get instant dosage right before you eat your meal.
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
            <Heading2>Adjustment</Heading2>
            <Paragraph>
              Enter post meal checks to help create more accurate doses.
            </Paragraph>
          </FeatureCopy>
          <FeatureTeaser reversed>
            <Image
              className="feature-image"
              src="features/adjustments.png"
              alt="Adjustment"
            />
          </FeatureTeaser>
        </FeatureWrapper>
      </Feature>

      <Feature greyBackground>
        <FeatureWrapper>
          <FeatureCopy>
            <Heading2>One Picture</Heading2>
            <Paragraph>
              With a single snapshot of your meal, AI will recognise it from
              your existing data.
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

      <Feature>
        <FeatureWrapper>
          <FeatureCopy reversed>
            <Heading2>Detailed Data</Heading2>
            <Paragraph>
              Over time, you can view personal data which will help you stay in
              check.
            </Paragraph>
          </FeatureCopy>
          <FeatureTeaser reversed>
            <Image
              className="feature-image"
              src="features/data.png"
              alt="Detailed Data"
            />
          </FeatureTeaser>
        </FeatureWrapper>
      </Feature>

      <Banner>
        <BannerWrapper>
          <Heading3>Start using Meala</Heading3>
          <ExternalLink href="/">
            <Image className="store-cta" src="appstore.png" />
          </ExternalLink>
        </BannerWrapper>
      </Banner>
    </Layout>
  )
}
