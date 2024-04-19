import React from 'react';
import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa6';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdPhotoCamera } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Meus Serviços</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<IoVideocamOutline />}
            title="Videomaker"
            desc="Sou criador e editor de vídeo profissional. Deixe-me elevar seu vídeo a um novo patamar."
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Fotógrafo"
            desc="Estou disponível para diversos tipos de serviços fotográficos. Contrate-me para seus próximos eventos."
          />
          <ServiceItem
            icon={<FaInstagram />}
            title="@saviovideomaker"
            desc="Descubra como transformar seu smartphone em uma poderosa ferramenta de criação de vídeos! Sigo compartilhando dicas, técnicas e segredos no Instagram."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
