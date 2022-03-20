import styled from "styled-components";
import { media } from "../../styles/GlobalStyle";

export const CardWrapper = styled.div`
  width: 90vw;
  max-width: 34rem;
  border-radius: 2rem;
  padding: 2.4rem;
  background: var(--color-bg-card);

  ${media.tablet} {
    max-width: 36rem;
  }
`;

export const CardImage = styled.div`
  height: 27rem;
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardImageHover = styled.div`
  position: absolute;
  display: flex;
  inset: 0;
  background-color: var(--color-cyan);
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: 1.5s;

  ${CardImage}:hover & {
    visibility: visible;
    opacity: 0.6;
  }
`;

export const CardContent = styled.div`
  padding: 1.4rem 0;
  border-bottom: 1px solid var(--color-line);
`;

export const CardHeader = styled.h2`
  color: white;
  font-size: 2.2rem;
  font-weight: 600;
  margin-top: 1rem;
  transition: 1s;

  &:hover {
    color: var(--color-cyan);
    cursor: pointer;
  }

  ${media.tablet} {
    font-size: 2.4rem;
  }
`;

export const CardText = styled.p`
  color: var(--color-para);
  font-size: 1.6rem;
  margin: 1.6rem 0;
  line-height: 1.8;

  ${media.tablet} {
    font-size: 1.8rem;
    font-weight: 300;
  }
`;

export const CardInf0 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardInfoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-weight: 600;
    color: var(--color-cyan);
    font-size: 1.6rem;
  }
`;

export const CardInfoRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  span {
    font-weight: 300;
    color: var(--color-para);
    font-size: 1.6rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  padding: 1.6rem 0;
`;

export const CardAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 2px solid white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet} {
    width: 5rem;
    height: 5rem;
  }
`;

export const CardCredit = styled.p`
  color: var(--color-para);
  font-size: 1.6rem;
  font-weight: 400;

  span {
    color: white;
    cursor: pointer;
    transition: 1s;

    &:hover {
      color: var(--color-cyan);
    }
  }

  ${media.tablet} {
    font-size: 1.8rem;
  }
`;
