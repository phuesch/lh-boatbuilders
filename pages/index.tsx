import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";
import { Normalize } from "styled-normalize";
import { NextPage } from "next";

const Header = styled.div`
  background-image: url("/header.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  color: #fdfefe;
  font-size: 30px;
  font-family: "Verdana";
  padding: 20px;
`;
const Welcome = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin: 230px;
  font-family: "Verdana";
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-image: url("/header.jpg");
  background-size: cover;
  background-position: bottom;
  min-height: 100px;
  font-family: "Verdana";
  color: #fdfefe;
`;
// TODO Fonts über "GlobalStyles"
const Contact = styled.div`
  align-items: row;
  padding: 0px 100px 0px 20px;
  font-size: 15px;
`;
const OpeningHours = styled.div`
  align-items: row;
  font-size: 15px;
`;

const Times = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const NavigationBar = styled.div``;

const Home: NextPage = props => (
  <>
    <Normalize />
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <p>LH Boatbuilders</p>
        <link rel="stylesheet" href="/index.ts" />
      </Header>

      <Welcome>
        <h1 className="title">Willkommen</h1>
        <p className="description">Diese Website befindet sich im Aufbau.</p>
      </Welcome>

      <Footer>
        <Contact>
          <p>Adresse folgt</p>
          <p>Telefonnummer</p>
        </Contact>
        <OpeningHours>
          <p>Öffnungszeiten</p>
          <Times>
            <p>Montag bis Freitag: </p>
            <p>10:00 - 18:00 Uhr</p>
            <p>Sonntag: </p>
            <p>10:00 - 14:00 Uhr</p>
          </Times>
        </OpeningHours>
      </Footer>
    </div>
  </>
);

export default Home;
