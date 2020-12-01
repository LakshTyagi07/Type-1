import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`

export const Heading1 = styled.h1`
  font-size: clamp(32px, 4.4vw, 64px);
  font-weight: 800;
  line-height: 1.1;
`

export const Heading2 = styled.h2`
  font-size: clamp(28px, 3.9vw, 56px);
  font-weight: 800;
  line-height: 1.1;
  span {
    display: inline;
  }

  @media screen and (min-width: 640px) {
    span.block {
      display: block;
    }
  }
`

export const Heading3 = styled.h3`
  font-size: clamp(24px, 3vw, 44px);
  font-weight: 700;
  line-height: 1.1;
`

export const Heading4 = styled.h4`
  font-size: clamp(24px, 2.75vw, 40px);
  font-weight: 700;
  line-height: 1.1;
`

export const Heading5 = styled.h5`
  font-size: clamp(24px, 2.75vw, 32px);
  font-weight: 600;
  line-height: 1.1;
`

export const Paragraph = styled.p`
  font-size: clamp(20px, 1.6vw, 24px);
  line-height: 1.5;
`
