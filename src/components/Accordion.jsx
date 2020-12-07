import React, { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"

import styled from "styled-components"
import { Paragraph } from "../styles/base"

const FAQ = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 32px 0;
  cursor: pointer;
`

const QuestionGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px;
  gap: 24px;
  margin-bottom: ${props => (props.isOpen ? "12px" : "0px")};
`

const Label = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: clamp(20px, 1.6vw, 24px);
`

const PlusIcon = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`

const Line = styled(motion.div)`
  width: 100%;
  height: 2px;
  position: absolute;
  background-color: #000;
  top: 50%;
  transform: translateY(-50%);
  right: 0;

  &.vertical {
    transform: rotate(90deg);
  }
`

export default function ({ label, description }) {
  const [isOpen, setOpen] = useState(false)

  const handleAccordion = () => {
    console.log("isOpen", isOpen)
    setOpen(!isOpen)
  }

  return (
    <>
      <FAQ initial={false} onClick={() => handleAccordion()}>
        <QuestionGroup>
          <Label>{label}</Label>
          <PlusIcon animate={{ rotate: isOpen ? 0 : -90 }}>
            <Line
              animate={{
                rotate: isOpen ? 0 : -90,
                display: isOpen ? "none" : "block",
              }}
              className="vertical"
            />
            <Line />
          </PlusIcon>

          <AnimatePresence>
            {isOpen && (
              <motion.section
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <Paragraph>{description}</Paragraph>
              </motion.section>
            )}
          </AnimatePresence>
        </QuestionGroup>
      </FAQ>
    </>
  )
}
