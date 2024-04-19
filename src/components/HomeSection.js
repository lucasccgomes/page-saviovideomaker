import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import HomeImg from '../assets/images/home.png';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import Title from './titles/Title';

const HomeSectionStyles = styled.div`
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 30px); // height of header
  display: flex;
  align-items: center;
  justify-content: center;
  .home__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
  .home__info {
    flex: 3;
  }
  .home__img {
    flex: 4;
    img {
      object-fit: contain;
    }
  }
  .home__title {
    margin-bottom: 1.5rem;
    max-width: 400px;
  }
  .home__desc {
    margin-bottom: 1.5rem;
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    .home__wrapper {
      flex-direction: column-reverse;
      gap: 0.5rem;
    }
    .home__img {
      display: flex;
      justify-content: flex-end;
      img {
        max-width: 400px;
        margin-top: auto;
      }
    }
  }
`;

function HomeSection() {
  return (
    <HomeSectionStyles id="home">
      <div className="container">
        <div className="home__wrapper">
          <div className="home__info">
            <Title className="home__title">
              Fotógrafo e Videomaker mobile📱
            </Title>
            <ParagraphText className="home__desc">
              🎬+ de 3.000 mil vídeos produzidos!
            </ParagraphText>
            <PrimaryButton
              buttonType={Link}
              smooth
              to="contact"
              className="home__cta"
            >
              Contato
            </PrimaryButton>
          </div>
          <div className="home__img">
            <img src={HomeImg} alt="Sávio" />
          </div>
        </div>
      </div>
    </HomeSectionStyles>
  );
}

export default HomeSection;
