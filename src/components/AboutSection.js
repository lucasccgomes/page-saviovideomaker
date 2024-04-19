import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import SectionTitle from './titles/SectionTitle';
import AboutImg from '../assets/images/about-1.png';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 350px;
  }
  .about__desc {
    margin-bottom: 2rem;
    max-width: 800px;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__img {
      max-width: 400px;
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img">
            <img src={AboutImg} alt="Savio" />
          </div>
          <div className="about__info">
            <SectionTitle className="about__title">Sobre mim</SectionTitle>
            <ParagraphText className="about__desc">
              <p>
                Olá! Meu nome é <strong>Sávio</strong>, tenho 16 anos e sou de
                Curuçá-PA. Atuo como fotógrafo e vídeomaker, utilizando
                predominantemente meu smartphone como ferramenta de trabalho.
              </p>
              <p>
                Minha jornada na captura de momentos especiais através de vídeos
                e fotos começou em 2021, com um Moto E5 Play. Apesar das
                limitações da câmera, isso só me motivou a melhorar minhas
                habilidades continuamente. Em 2022, atualizei para um Samsung
                A11, elevando significativamente a qualidade das minhas
                criações. No mesmo ano, comecei a compartilhar o conhecimento
                adquirido sobre fotografia e videografia móvel, inspirando
                outros a maximizar o potencial de seus dispositivos.
              </p>
              <p>
                Profissionalmente, iniciei minha carreira em fotografia usando
                meu celular e, em agosto de 2023, alcancei um importante marco
                ao assinar meu primeiro contrato com uma loja de moda feminina.
                Estou entusiasmado para continuar explorando as possibilidades
                que minha paixão e minha câmera me proporcionam.
              </p>
            </ParagraphText>
            <PrimaryButton buttonType={Link} to="contact" smooth>
              Contrate-me
            </PrimaryButton>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
