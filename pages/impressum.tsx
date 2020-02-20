import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import styled from 'styled-components';
import {Normalize} from 'styled-normalize'

const Header = styled.div`
  background-image: url('/header.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100px;
  display: flex;
  align-items: center;
  color: #fdfefe;
  font-size: 30px;
  font-family: "Verdana";
  padding: 20px;
`
const Welcome = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin: 230px;
  font-family: "Verdana";
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('/header.jpg');
  background-size: cover;
  background-position: bottom;
  min-height: 100px;
  align-self: baseline; 
  align-items: column;
  font-family: "Verdana";
  color: #fdfefe;

`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding:   0px 100px 0px 20px;
  font-size: 15px;
`
const OpeningHours = styled.div`
  flex-direction: row;
  display: flex;
  align-items: column;  
  font-size: 15px;
  justify-content: space-between;

`

 const NavigationBar = styled.div`
 display: flex;
 flex-direction: row;
 text-align: center;
 padding: 10px;
 background: ;
 `


const Home = () => (
<>
<Normalize/>
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header>
      <p>LH Boatbuilders</p>
      <link rel="stylesheet" href="/index.ts"/>
    </Header>

    <div>
        <NavigationBar>
            <li>Home</li>
            <li>About Us</li>
            <li>References</li>
            <li>Contact</li>
        </NavigationBar>
    </div>

    <Welcome>
    <h1>Willkommen!</h1>
      <p>
        Diese Website befindet sich im Aufbau. 
      </p> 
    </Welcome>

    <Footer>
      <Contact>
        <p>Adresse folgt</p>
        <p>Telefonnummer</p>
      </Contact>
      <OpeningHours>
        <div>
            <p>Öffnungszeiten</p>
            <p>Montag bis Freitag:</p>
            <p>Samstag</p>
            <p>Sonntag:</p>
        </div>
        <div>
            <br/>
            <br/>
            <p>10:00 - 18:00 Uhr</p>
            <p>10:00 - 14:00 Uhr</p>
            <p>geschlossen</p>
        </div>
      </OpeningHours>
    </Footer>
  </div>
  </>
)

export default Home
