import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";
import { Normalize } from "styled-normalize";
import Link from "next/link";

const Header = styled.div`
  background-image: url("/header.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100px;
  display: grid;
  align-items: center;
  color: #fdfefe;
  font-size: 30px;
  font-family: "Verdana";
`;

const Title = styled.h1`
  color: #ecf0f1;
  font-size: 30px;
  font-family: "Verdana";
  font-weight: lighter;
  text-decoration: none;
  padding: 20px;
`;

const ImpressumContent = styled.div`
  font-family: "Verdana";
  padding: 20px;
  background-color: #ecf0f1;
  background-size: 100%;

  h3 {
    font-size: 15px;
    padding-top: 20px;
  }

  p {
    font-size: 12px;
  }
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

const Home = () => (
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

      <ImpressumContent>
        <h2>Impressum</h2>
        <h3>Rasmus Lamersdorf Bootsbau</h3>
        <p>Rasmus Lamersdorf</p>
        <p>Willebrandstraße 18</p>
        <p>22767 Hamburg</p>
        <h3>Kontakt</h3>
        <p>Telefon: 0174 4344527</p>
        <p>E-Mail: info@lh-boatbuilders.de</p>
        <h3>Streitschlichtung</h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </ImpressumContent>

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
