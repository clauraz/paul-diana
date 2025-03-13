import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Form,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import Countdown from "react-countdown";
import simplyCountdown from "simplycountdown.js";
import styled from "styled-components";

function Copyright() {
  return (
    <StyledTypography
      variant="body2"
      align="center"
      sx={{
        color: "text.secondary",
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </StyledTypography>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 600;
`;

const Navigation = () => {
  return (
    <Container
      style={{
        padding: "40px 0px",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <a
          href="/"
          style={{
            fontFamily: "Sacramento, sans-serif",
            fontSize: "40px",
            fontWeight: "400",
            width: "140px",
            color: "white",
            textDecoration: "none",
          }}
        >
          Ne casatorim!
        </a>
        {/* <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <StyledLink href="/">ACASA</StyledLink>
          <StyledLink href="#MOMENTUL-SI-LOCUL">MOMENTUL SI LOCUL</StyledLink>
          <StyledLink href="#CONFIRMARE">CONFIRMARE</StyledLink>
        </nav> */}
      </Box>
    </Container>
  );
};

const StyledTypography = styled(Typography)`
  font-family: "Work Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: 100px;
  height: 100px;
  background: rgba(241, 78, 149, 0.8);
  margin: 0 4px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  position: relative;
`;

const StyledCircle = styled(Circle)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainNumber = styled.span`
  font-size: 30px;
`;

const Header = () => {
  return (
    <Box
      style={{
        backgroundPosition: "0px 0px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url(https://i.ibb.co/V0qGrrSc/008.jpg)",
      }}
      height="900px"
      display="flex"
      flexDirection="column"
    >
      <Navigation></Navigation>
      <Container
        style={{
          padding: "40px 0px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <StyledTypography
          variant="h1"
          component="h1"
          color="white"
          style={{
            fontFamily: "Sacramento, sans-serif",
            fontSize: "100px",
            fontWeight: "400",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Paul & Diana
        </StyledTypography>
        <StyledTypography
          variant="h2"
          component="h1"
          color="white"
          style={{
            fontSize: "30px",
            marginBottom: "20px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Au mai rămas...
        </StyledTypography>
        <Countdown
          date={1755957600000}
          daysInHours={false}
          renderer={(props) => {
            return (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}
              >
                <StyledCircle>
                  <MainNumber>{props.days}</MainNumber>
                  <span>zile</span>
                </StyledCircle>
                <StyledCircle>
                  <MainNumber>{props.hours}</MainNumber>
                  <span>ore</span>
                </StyledCircle>
                <StyledCircle>
                  <MainNumber>{props.minutes}</MainNumber>
                  <span>minute</span>
                </StyledCircle>
                <StyledCircle>
                  <MainNumber>{props.seconds}</MainNumber>
                  <span>secunde</span>
                </StyledCircle>
              </div>
            );
          }}
        ></Countdown>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <StyledButton
            variant="outlined"
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250823%2F20250824&details=&location=Hotel%20Sunny%20Hill%2C%20Strada%20F%C4%83getului%2031A%2C%20Cluj-Napoca%20400497%2C%20Romania&text=Nunta%20Paul%20si%20Diana"
          >
            Salvati Data
          </StyledButton>
        </div>
      </Container>
    </Box>
  );
};

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Message = () => {
  return (
    <Container
      style={{
        padding: "40px 0px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <h2
        style={{
          fontFamily: "Sacramento, sans-serif",
          fontSize: "60px",
          fontWeight: "400",
          width: "140px",
          color: "#f14e95",
        }}
      >
        Salut
      </h2>
      <p style={{ fontSize: "18px", color: "grey" }}>
        Vă invităm să fiți alături de noi în cea mai importantă zi.
      </p>
      <h3 style={{ fontSize: "24px", marginBottom: "50px" }}>
        23 August 2024, Cluj-Napoca
      </h3>
      <Box style={{ display: "flex", gap: "20px", position: "relative" }}>
        <StyledImg src="https://i.ibb.co/My6jr5v9/paul.jpg" />
        <StyledImg src="https://i.ibb.co/6Q8wRff/diana.jpg" />
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            width: "80px",
            height: "80px",
            top: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            left: "50%",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "30px" }}>💖</span>
        </div>
      </Box>
    </Container>
  );
};

const Card = ({ text, data, ora, locatie, link }) => {
  return (
    <Box
      style={{
        width: "100%",
        maxWidth: "320px",
        border: "3px solid white",
        height: "320px",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          zIndex: "1",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            padding: "25px 0px",
            color: "white",
            textAlign: "center",
          }}
        >
          {text}
        </h3>
        <hr />
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            gap: "20px",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "30px" }}>🕙</span>
            <span style={{ color: "white", fontWeight: "600" }}>{ora}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "30px" }}>📅</span>
            <span
              style={{ color: "white", fontWeight: "600", textAlign: "center" }}
            >
              {data}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "30px" }}>🌍</span>
            <span
              style={{ color: "white", fontWeight: "600", textAlign: "center" }}
            >
              {locatie}
            </span>
          </div>
        </div>
        <a
          href={link}
          style={{
            textDecoration: "none",
            textAlign: "center",
            color: "#f14e95",
            fontWeight: "bold",
            marginBottom: "25px",
          }}
        >
          DESCHIDE IN GOOGLE MAPS
        </a>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "7px",
          opacity: "0.3",
        }}
      ></div>
    </Box>
  );
};

const Cards = ({ id }) => {
  return (
    <Box
      id={id}
      style={{
        backgroundPosition: "0px 0px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url(https://i.ibb.co/9mBp2nqR/010.jpg)",
      }}
      height="fit-content"
      display="flex"
      flexDirection="column"
    >
      <Container
        style={{
          padding: "40px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <div>
          <h3
            style={{
              width: "100%",
              color: "white",
              opacity: "0.8",
              textAlign: "center",
            }}
          >
            DESPRE EVENIMENT
          </h3>
          <h2
            style={{
              width: "100%",
              fontFamily: "Sacramento, sans-serif",
              fontSize: "60px",
              fontWeight: "500",
              color: "#f14e95",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Nunta noastra
          </h2>
        </div>
        <Box
          style={{
            width: "100%",
            display: "flex",
            gap: "100px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Card
            text="CUNUNIA RELIGIOASA"
            ora="12:00"
            data="23 August 2025"
            locatie="Biserica Ortodoxă „Sfinții Apostoli Petru și Pavel” Mănăștur"
            link="https://maps.app.goo.gl/5nuSBoX7Ec7ZEMNR6"
          />

          <Card
            text="PETRECEREA"
            ora="14:00"
            data="23 August 2025"
            locatie="Hotel Sunny Hill by Vila Tușa, sala Noblesse"
            link="https://maps.app.goo.gl/eGJ8AfC9ztFeNytv5"
          />
        </Box>
      </Container>
    </Box>
  );
};

const Confirmare = () => {
  const [meniu, setMeniu] = React.useState("standard");
  const [participare, setParticipare] = React.useState("petrecere");

  const handleMeniuChange = (e) => {
    setMeniu(e.target.value);
  };

  const handleParticipareChange = (e) => {
    setParticipare(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const responses = {
      nume: e.target[0].value,
      adulti: e.target[2].value,
      copii: e.target[4].value,
      meniu: e.target[6].value,
      participare: e.target[8].value,
    };
    console.log(responses);
  };
  return (
    <Container
      id="CONFIRMARE"
      style={{
        padding: "40px 0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <div>
        <h2
          style={{
            width: "100%",
            fontFamily: "Sacramento, sans-serif",
            fontSize: "60px",
            fontWeight: "500",
            color: "#f14e95",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Participi?
        </h2>
        <p style={{ textAlign: "center", fontSize: "24px" }}>
          Te rugăm să completezi următoarele detalii pentru confirmare ideal
          până la data de <b>02.04.2024</b>.
        </p>
        <p style={{ textAlign: "center", fontSize: "24px" }}>
          Pentru că ne dorim să ne simțim cât mai confortabil, codul vestimentar
          este Smart Casual. Mulțumim.
        </p>
      </div>
      <div style={{ width: "100%" }}>
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Box
            style={{
              width: "100%",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <TextField
              id="nume-complet"
              label="Nume Complet"
              style={{ flexGrow: 1 }}
              variant="outlined"
              required
            />
            <TextField
              id="numar-adulti"
              min={0}
              label="Numar Adulti"
              variant="outlined"
              style={{ flexGrow: 1 }}
              type="number"
              required
            />
            <TextField
              id="numar-copii"
              min={0}
              label="Numar Copii"
              variant="outlined"
              style={{ flexGrow: 1 }}
              type="number"
              required
            ></TextField>
          </Box>
          <br />
          <Box
            style={{
              width: "100%",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="meniu"
              value={meniu}
              onChange={handleMeniuChange}
              style={{ flexGrow: 1 }}
            >
              <MenuItem value="standard">Meniu Standard</MenuItem>
              <MenuItem value="vegetarian">Meniu Vegetarian</MenuItem>
            </Select>
            <Select
              labelId="demo-simple-select-label-2"
              id="participare"
              value={participare}
              onChange={handleParticipareChange}
              style={{ flexGrow: 1 }}
            >
              <MenuItem value="petrecere">Particip doar la petrecere</MenuItem>
              <MenuItem value="biserica-si-petrecere">
                Particip la biserica si petrecere
              </MenuItem>
            </Select>
          </Box>
          <Box
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "#f14e95",
                color: "white",
                height: "50px",
                outline: "none",
                border: "none",
                borderRadius: "30px",
                padding: "0 30px",
              }}
            >
              Confirm prezenta
            </button>
          </Box>
        </form>
      </div>
    </Container>
  );
};

const StyledButton = styled.a`
    padding: 15px 20px;
    background: #fff !important;
    color: #F14E95;
    border: none !important;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 30px;
    text-decoration: none;
}`;
export default function App() {
  return (
    <>
      <Header />
      <Message />
      <Cards id="MOMENTUL-SI-LOCUL" />
      <Confirmare />
      <Copyright />
    </>
  );
}
