import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/Image"
import { Heading1, Heading4, Paragraph, Wrapper } from "../styles/base"
import SEO from "../components/seo"

const Hero = styled.section`
  padding: 80px 24px;
`

const AboutWrapper = styled(Wrapper)`
  max-width: 720px;
  margin: 0 auto;

  h1 {
    margin-bottom: 40px;
    text-align: center;
  }

  h4 {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 64px;
  }

  .app-icon {
    width: 80px;
    margin: 0 auto 24px;
  }
`

export default function () {
  return (
    <Layout>
      <SEO title="About Meala" />
      <Hero>
        <AboutWrapper>
          <Image className="app-icon" src={"appicon.png"} alt="Meala" />
          <Heading1>About Us</Heading1>
          <Paragraph>
            This app is targeted towards people who live with diabetes. Their
            bodies either lack or underproduce an essential hormone called
            insulin which helps glucose enter the cells in the body. Without
            insulin, the glucose stays in the bloodstream, causing high blood
            sugar levels which damage their bodies. Usually, people use external
            insulin by injecting it into their bodies. One of the most difficult
            challenges they face is giving themselves accurate insulin amounts.
            The standard way used by people is carb-related calculations to
            generate an insulin dosage amount. This is often a hassle and can be
            very time-consuming.
          </Paragraph>
          <Heading4>How does Meala help?</Heading4>
          <Paragraph>
            Meala will use artifical intelligence to train itself based on meal
            pictures taken by the user. After the first few snapshot of a dish,
            Meala will recognize the food and deliver an insulin dosage based on
            personal insulin to carb ratio and current glucose levels. A single
            snapshot of your meal delivers your insulin dosage so that you don’t
            have to sit around calculating your carbs.
          </Paragraph>
          <Heading4>What we use?</Heading4>
          <Paragraph>
            Valuing your privacy, we take minimal data upon account creation.
            Just age and weight helps us get an estimate of your insulin to carb
            ratio which we then use to help get a dosage based on what you eat.
            Without asking for carbohydrates, we have only a few simple entries
            required which include blood sugar level and previous estimated
            insulin dosage for the first time you eat a new meal. This helps us
            maintain simplicity and offer you the most simple and fast way
            possible to get your insulin dosage.
          </Paragraph>
        </AboutWrapper>
      </Hero>
    </Layout>
  )
}
