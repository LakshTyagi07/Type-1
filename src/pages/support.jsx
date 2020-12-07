import React, { useState } from "react"
import styled from "styled-components"
import Image from "../components/Image"
import Layout from "../components/layout"
import { Heading1, Heading4, Heading5, Paragraph } from "../styles/base"
import { motion } from "framer-motion"
import Accordion from "../components/Accordion"

const Hero = styled.section`
  background-color: #fafafa;
  padding: 80px 32px;
`

const HeroWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .hero-image {
    width: 64px;
  }

  h1 {
    margin: 12px 0 24px 0;
    text-align: center;
  }

  p {
    text-align: center;
  }
`

const FAQSection = styled.section`
  padding: 80px 32px;
`

const FAQWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

export default function () {
  const [questions, setQuestion] = useState([
    {
      id: 1,
      label: "How does AI help?",
      answer:
        "AI will use image recognition to identify your food by matching it to your personally created labels. After identifying your food, you will be given an insulin dose with adjustments made based on your blood sugar.",
    },
    {
      id: 2,
      label: "Do we use carbs and calories in our calculations?",
      answer:
        "No. We do not use food macros like carbohydrates in the calculations of your insulin doses. Instead, we fine-tune your estimated doses by adjusting based on your post-meal blood sugar levels.",
    },
    {
      id: 3,
      label: "How are the corrections calculated?",
      answer:
        "The corrections are calculated based on your personal insulin sensitivity. Type 1 will ask you an estimated amount of total insulin intake per day, which we use to determine your insulin sensitivity. Insulin sensitivity is found by diving 1700 from your total daily intake. If you take 60 units of insulin in a day, one unit of insulin will lower around 28 mg/dL of your blood sugar (1700/60 = 28).",
    },
    {
      id: 4,
      label: "How much time should it take to receive accurate doses?",
      answer:
        "Depending on the consistency of your food, you should start seeing accurate doses after repeating the same meal about 2-3 times. After the first couple of times of eating the same food, Type 1 will adjust your dose based on your blood sugar before eating and how your blood sugar changed after you ate.",
    },
    {
      id: 5,
      label: "What other benefits do I receive?",
      answer:
        "Other than knowing your insulin doses with a click of a button, Type 1 will help you stay in check with your blood sugar levels. You will receive constant reminders to check your blood sugar and over time, you will have a large database of the food you ate and how your blood sugar levels stayed after those foods. You can also view how much insulin you took for a meal, for correction, and you can also have a picture of your meals at your fingertips.",
    },
  ])

  return (
    <Layout>
      <Hero>
        <HeroWrapper>
          <Image src="help.png" className="hero-image" alt="Type 1 Help" />
          <Heading1>Your questions answered.</Heading1>
          <Paragraph>
            If you've got any questions about Type 1, read on below for answers
            to some of the most common ones we've already been asked. Feel free
            to contact us if you have any other questions. We will be happy to
            assist you as soon as possible.
          </Paragraph>
        </HeroWrapper>
      </Hero>

      <FAQSection>
        <FAQWrapper>
          {questions.map((question, index) => {
            return (
              <Accordion
                key={index}
                label={question.label}
                description={question.answer}
              />
            )
          })}
        </FAQWrapper>
      </FAQSection>
    </Layout>
  )
}
