import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ICalendarLink from "react-icalendar-link";

import { TextField, Select, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Countdown from "react-countdown";
import styled from "styled-components";

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
          Ne căsătorim!
        </a>
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
  const event = {
    title: "Nunta Paul & Diana",
    startTime: "2025-08-23T11:00:00+02:00",
    endTime: "2025-08-23T21:00:00+02:00",
    location:
      "Hotel Sunny Hill, Strada Făgetului 31A, Cluj-Napoca 400497, Romania",
  };

  return (
    <Box
      style={{
        backgroundPosition: "0px 0px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url(https://i.ibb.co/39jg3Y1X/22.jpg)",
        backgroundPositionY: "16%",
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
            fontWeight: "400",
          }}
        >
          Au mai rămas...
        </StyledTypography>
        <Countdown
          date={1755950400000}
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
            event={event}
            style={{ textTransform: "uppercase" }}
          >
            Salvaţi Data
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
          fontWeight: "500",
          width: "140px",
          color: "#f14e95",
        }}
      >
        Salut!
      </h2>
      <p style={{ fontSize: "18px", color: "grey", textAlign: "center" }}>
        Vă invităm să fiți alături de noi în cea mai importantă zi.
      </p>
      <h3 style={{ fontSize: "24px", marginBottom: "50px", fontWeight: "500" }}>
        23 August 2025, Cluj-Napoca
      </h3>
      <Box style={{ display: "flex", gap: "20px", position: "relative" }}>
        <StyledImg src="https://i.ibb.co/gLRwzg7M/paul2.jpg" />
        <StyledImg src="https://i.ibb.co/pj4Vq9MW/diana3a.jpg" />
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
          <span style={{ fontSize: "30px" }}>♥️</span>
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
        border: "2px solid white",
        height: "320px",
        borderRadius: "10px",
        position: "relative",
        fontWeight: "400 !important",
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
            fontWeight: "400",
            textTransform: "uppercase",
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
            alignItems: "flex-start",
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
            <span style={{ color: "white", fontWeight: "500" }}>{ora}</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "30px" }}>📌</span>
            <span
              style={{
                color: "white",
                fontWeight: "600",
                textAlign: "center",
                fontWeight: "500",
              }}
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
            <span style={{ fontSize: "30px" }}>📍</span>
            <span
              style={{ color: "white", fontWeight: "500", textAlign: "center" }}
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
            fontWeight: "500",
            marginBottom: "25px",
            textTransform: "uppercase",
          }}
        >
          DESCHIDE îN GOOGLE MAPS
        </a>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
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
        backgroundImage: "url(https://i.ibb.co/VcHj561Y/26.jpg)",
        backgroundPositionY: "65%",
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
            Nunta noastră
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
            text="CUNUNIA RELIGIOASă"
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
  const [isLoading, setIsLoading] = React.useState(false);

  const handleMeniuChange = (e) => {
    setMeniu(e.target.value);
  };

  const handleParticipareChange = (e) => {
    setParticipare(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const target = event.target;

    const inputValue = {
      Nume: target.Nume.value,
      Adulti: target.Adulti.value,
      Copii: target.Copii.value,
      Meniu: target.Meniu.value,
      Prezenta: target.Prezenta.value,
    };

    const baseURL = `https://script.google.com/macros/s/AKfycbyPOp7EJM3laGvauh6l9Tk8CaxJdzsortrZJ01N4OCEAahWp5YrItEoiPirokOPEa1Jhg/exec`;
    const formData = new FormData();
    Object.keys(inputValue).forEach((key) => {
      formData.append(key, inputValue[key]);
    });
    fetch(baseURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        alert("Ati trimis confirmarea cu succes. Multumim!");
        target.reset();
      })
      .catch((err) => {
        setIsLoading(false);
        console.error("There was a problem with the fetch operation:", err);
        alert("Ceva nu a mers bine. Mai incearca o data!");
      });
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
            marginBottom: "5px",
          }}
        >
          Participi?
        </h2>
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Te rugăm să completezi următoarele detalii pentru confirmare, ideal
          până la data de <br />
          <span style={{ fontWeight: "500" }}>02.08.2025</span>
        </p>
      </div>
      <div style={{ width: "100%", marginTop: "50px" }}>
        <form onSubmit={handleSubmit}>
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
              name="Nume"
              style={{ flexGrow: 1 }}
              variant="outlined"
              required
            />
            <TextField
              id="numar-adulti"
              min={0}
              label="Număr Adulţi"
              variant="outlined"
              style={{ flexGrow: 1 }}
              type="number"
              name="Adulti"
              required
              slotProps={{ htmlInput: { inputMode: "numeric" } }}
            />
            <TextField
              id="numar-copii"
              min={0}
              label="Număr Copii"
              name="Copii"
              variant="outlined"
              style={{ flexGrow: 1 }}
              type="number"
              required
              slotProps={{ htmlInput: { inputMode: "numeric" } }}
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
              name="Meniu"
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
              name="Prezenta"
            >
              <MenuItem value="petrecere">Particip doar la petrecere</MenuItem>
              <MenuItem value="biserica-si-petrecere">
                Particip la biserică și petrecere
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
            <StyledSubmit disabled={isLoading} type="submit">
              {isLoading ? "Se trimite..." : "Confirmă prezenta"}
            </StyledSubmit>
          </Box>
        </form>
      </div>
    </Container>
  );
};

const StyledSubmit = styled.button`
  background-color: #f14e95;
  color: white;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 30px;
  padding: 0 30px;
  &:disabled {
    background-color: grey;
    opacity: 0.5;
  }
`;

const StyledButton = styled(ICalendarLink)`
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
    </>
  );
}
