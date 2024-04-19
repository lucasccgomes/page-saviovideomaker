import React from 'react';
import styled from 'styled-components';
import ParagraphText from '../paragraphTexts/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import FotoK from '../../assets/images/foto-de-1k.png';

const TeamSectionStyles = styled.div`
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
    .fotok__img {
      max-width: 400px;
    }
  }
`;

function TeamSection() {
  return (
    <TeamSectionStyles>
      <div className="container">
        <div className="about__wrapper">
          <div className="conquista__info">
            <SectionTitle className="about__title">Conquista 🎉</SectionTitle>
            <ParagraphText className="about__desc">
              <p>
                Nesse dia, uma onda de alegria me envolveu. Por muito tempo,
                mantive meu perfil com dedicação e paciência, mas parecia que eu
                estava em um patamar estático, com os seguidores girando em
                torno de 800. Então, finalmente, o momento tão esperado chegou –
                a marca de 1.000 seguidores no Instagram foi atingida. Foi um
                sentimento de conquista e gratidão, um marco simbólico que
                celebra o crescimento, a perseverança e a conexão autêntica com
                cada pessoa que decidiu me seguir. Um pequeno número para
                alguns, mas um grande salto para mim, repleto de significado e
                motivação para continuar.
              </p>
            </ParagraphText>
          </div>
          <div className="fotok__img">
            <img className="" src={FotoK} alt="Savio 1K" />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
