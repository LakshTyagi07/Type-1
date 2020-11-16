import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Wrapper } from "../styles/base"

const FooterView = styled.footer`
  padding: 24px;
`

const FooterWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Copyright = styled.div`
  opacity: 0.5;
`

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 48px;
`

const FooterLink = styled(Link)`
  opacity: 0.6;
  transition: all 200ms ease-in-out;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }
`

export default function () {
  return (
    <FooterView>
      <FooterWrapper>
        <Copyright>© Meala {new Date().getFullYear()}.</Copyright>
        <FooterLinks>
          <FooterLink to="/legal/privacy">Privacy</FooterLink>
          <FooterLink to="/legal/terms">Terms</FooterLink>
        </FooterLinks>
      </FooterWrapper>
    </FooterView>
  )
}