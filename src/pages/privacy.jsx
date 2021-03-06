import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Heading1, Heading3, Heading5, Paragraph } from "../styles/base"

const PrivacySection = styled.section`
  padding: 80px 32px;
`

const PrivacyWrapper = styled.div`
  max-width: 64ch;
  margin: 0 auto;

  h1 {
    font-size: clamp(28px, 4.4vw, 64px);
    margin-bottom: 56px;
  }

  h3 {
    font-size: clamp(28px, 3.3vw, 40px);
    font-weight: 600;
    margin-bottom: 24px;
  }

  p + p {
    margin-top: 24px;
  }

  p + h3,
  ul + h3 {
    margin-top: 56px;
  }

  h5 {
    font-weight: 500;
    margin-bottom: 12px;
    opacity: 0.6;
  }

  li {
    margin-bottom: 20px;
  }
`

export default function () {
  return (
    <Layout>
      <PrivacySection>
        <PrivacyWrapper>
          <Heading1>Privacy Policy </Heading1>
          <Heading3>No Collection of Data</Heading3>
          <Paragraph>
            Being sensitive to user data and privacy, we do not store any
            information outside of the user’s device. When you download Type1,
            you provide your age and sex which stays with you as long as
            application stays on your device. Your age and sex are needed to
            determine your estimated insulin sensitivity. No health related data
            such as insulin consumption values or blood glucose levels are
            stored outside of the application. No pictures taken from the camera
            or personalized meals are collected. Users have an option to save
            their data on icloud upon deletion of the application.
          </Paragraph>

          <Paragraph>
            We value your privacy which is the reason we don’t ask you to create
            an account with Type1. Not worrying about your data should be a
            right and not a privilege. Which is why you can stay off-grid
            without having to enter any personal information. Even your name.
            You can backup and restore your data from icloud if you change your
            device. Your data stays with you.
          </Paragraph>

          <Heading3>Terms of Use</Heading3>

          <Heading5>Disclaimer </Heading5>

          <ul>
            <li>
              <Paragraph>
                We do not endorse the use of hormones such as insulin, we simply
                help people map their own insulin doses to a picture of their
                food.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                We are not liable for the user intake of insulin, the values are
                based on personal approximation and estimation.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                We do not calculate insulin doses for the user.
              </Paragraph>
            </li>
          </ul>

          <Heading3>Health and nutritional information</Heading3>

          <Paragraph>
            You are responsible for your own health. Type1 is not a medical
            organization, and we will not provide you with any medical advice or
            diagnosis. The purpose of the Services is solely to help our users
            manage their diabetes more efficiently and easily by mapping insulin
            doses to food pictures. We cannot guarantee any health, weight
            and/or fitness results or improvements. Our Services are only
            intended for people who depend on insulin, and please do not use our
            application if you suffer from, or might suffer from, any medical
            condition that may be impaired by the use of insulin. We are not
            responsible for any personal injury or any other damages that may
            have been the result, direct or indirect, of any use or misuse of
            our app.
          </Paragraph>
        </PrivacyWrapper>
      </PrivacySection>
    </Layout>
  )
}
