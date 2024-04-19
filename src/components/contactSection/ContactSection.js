/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { LuYoutube } from 'react-icons/lu';
import SectionTitle from '../titles/SectionTitle';
import CapCut from '../../assets/images/capcut.png';
import Cell from '../../assets/images/cell.png';

const ContactSectionStyles = styled.div`
  padding: 0rem 0rem 8rem 0rem;
  .contact__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    margin-top: 2rem
  }

  .contact__title {
    text-align: center;
  }

  .img_cell {
    height: 400px !important;
      }  

  .container_icon {
    margin-top: 3.5rem;
    margin-right: 2rem;
  }

  .redes_icon:hover {
      background-color: var(--lightBlue_2);
      color: var(--mediumSlateBlue);
    }

  .redes_icon {
    font-size: 2rem;
    margin-bottom: 2rem;
    background-color: var(--mediumSlateBlue);
    width: fit-content;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--white);
    svg {
      width: 60%;
    }

    .img-size {
      height: 23px;
      width: 23px;
    }
`;

function ContactSection() {
  return (
    <ContactSectionStyles id="contact">
      <div className="container container_contact">
        <SectionTitle className="contact__title">
          Onde me encontrar
        </SectionTitle>
        <div className="contact__wrapper">
          <div className="container_icon">
            <a
              href="https://www.instagram.com/saviovideomaker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="redes_icon">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://lucasgomesdev.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="redes_icon">
                <FaWhatsapp />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@saviovideomaker?_t=8leyFDSPfgT&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="redes_icon">
                <FaTiktok />
              </div>
            </a>
            <a
              href="https://youtube.com/@Saviovideomaker?si=RQ2gz-4oVGtYYHt1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="redes_icon">
                <LuYoutube />
              </div>
            </a>
            <a
              href="https://mobile.capcutshare.com/s/ZmFqaKc3X/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="redes_icon">
                <img className="img-size" src={CapCut} alt="" />
              </div>
            </a>
          </div>
          <div className="img_cell">
            <img className="cell-size" src={Cell} alt="" />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;
