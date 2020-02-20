import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";
import { Normalize } from "styled-normalize";
import { NextPage } from "next";
import Link from "next/link";

const Header = styled.div`
  background-image: url("/header.jpg");
  background-size: cover;
  background-position: center;
  min-height: 130px;
  display: grid;
  align-items: center;
`;

const Title = styled.h1`
  color: #ecf0f1;
  font-size: 30px;
  font-family: "Verdana";
  font-weight: lighter;
  text-decoration: none;
  padding: 20px;
`;

const Welcome = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  padding: 230px;
  font-family: "Verdana";
  color: #2c3e50;
  background-color: #ecf0f1;
  background-size: 100%;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: max-content auto min-content;
  grid-gap: 50px;
  padding: 20px;
  background-image: url("/header.jpg");
  background-size: cover;
  background-position: bottom;
  font-family: "Verdana";
  font-weight: normal;
  color: #ecf0f1;
`;
// TODO Fonts über "GlobalStyles"

const FooterHeadline = styled.h3`
  margin-top: 0px;
  font-size: 15px;
`;

const FooterContent = styled.div`
  align-items: row;
  font-size: 15px;
`;

const ImpressumLink = styled.a`
  text-decoration: none;
  color: #ecf0f1;
  &:hover {
    transition: 0, 5s;
    color: #7f8c8d;
  }
`;

const Times = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 12px;
`;

const Home: NextPage = props => (
  <>
    <Normalize />
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Link href="/">
          <Title>LH Boatbuilders</Title>
        </Link>
      </Header>

      <Welcome>
        <h2>Willkommen</h2>
        <p>Diese Website befindet sich im Aufbau.</p>
      </Welcome>

      <Footer>
        <FooterContent>
          <FooterHeadline>Adresse</FooterHeadline>
          <p>Adresse folgt</p>
        </FooterContent>
        <FooterContent>
          <FooterHeadline>Öffnungszeiten</FooterHeadline>
          <Times>
            <span>Montag bis Freitag: </span>
            <span>10:00 - 18:00 Uhr</span>
            <span>Samstag: </span>
            <span>10:00 - 14:00 Uhr</span>
          </Times>
        </FooterContent>
        <ImpressumLink href="/impressum">
          <a>Impressum</a>
        </ImpressumLink>
      </Footer>
    </div>
  </>
);

export default Home;
