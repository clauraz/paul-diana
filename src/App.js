import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import Countdown from "react-countdown";
import simplyCountdown from "simplycountdown.js";
import styled from "styled-components";

// This is an example with default parameters
const contdown = simplyCountdown("#wedding-countdown", {
  year: 2025, // Target year (required)
  month: 6, // Target month [1-12] (required)
  day: 28, // Target day [1-31] (required)
  hours: 0, // Target hour [0-23], default: 0
  minutes: 0, // Target minute [0-59], default: 0
  seconds: 0, // Target second [0-59], default: 0
  words: {
    // Custom labels, with lambda for plurals
    days: { root: "day", lambda: (root, n) => (n > 1 ? root + "s" : root) },
    hours: { root: "hour", lambda: (root, n) => (n > 1 ? root + "s" : root) },
    minutes: {
      root: "minute",
      lambda: (root, n) => (n > 1 ? root + "s" : root),
    },
    seconds: {
      root: "second",
      lambda: (root, n) => (n > 1 ? root + "s" : root),
    },
  },
  plural: true, // Use plurals for labels
  inline: false, // Inline format: e.g., "24 days, 4 hours, 2 minutes"
  inlineSeparator: ", ", // Separator for inline format, default: ", "
  inlineClass: "simply-countdown-inline", // CSS class for inline countdown
  enableUtc: false, // Use UTC time if true
  refresh: 1000, // Refresh interval in ms, default: 1000
  sectionClass: "simply-section", // CSS class for each countdown section
  amountClass: "simply-amount", // CSS class for numeric values
  wordClass: "simply-word", // CSS class for unit labels
  zeroPad: false, // Pad numbers with leading zero
  removeZeroUnits: false, // Remove units with zero value
  countUp: false, // Count up after reaching zero
  onEnd: () => {}, // Callback when countdown ends
  onStop: () => {}, // Callback when countdown is stopped
  onResume: () => {}, // Callback when countdown is resumed
  onUpdate: (params) => {}, // Callback when countdown is updated
});

function Copyright() {
  return (
    <Typography
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
    </Typography>
  );
}

const Navigation = () => {
  return (
    <Container style={{ padding: "40px 0px" }}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" component="h1" color="white">
          Ne casatorim!
        </Typography>
        <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link>MOMENTUL SI LOCUL</Link>
          <Link>Confirmare</Link>
        </nav>
      </Box>
    </Container>
  );
};

const MyCountdown = (props) => {
  return (
    <>
      <span>Salut</span>
    </>
  );
};

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

const Header = () => {
  return (
    <Box
      style={{
        backgroundPosition: "0px 0px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage:
          "url(https://i0.wp.com/photofocus.com/wp-content/uploads/2021/03/wedding-hero-silhouette.jpg?w=2560&ssl=1)",
      }}
      height="900px"
      display="flex"
      flexDirection="column"
    >
      <Navigation></Navigation>
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
                height: "70%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Circle>{props.days} zile</Circle>
              <Circle>{props.hours} ore</Circle>
              <Circle>{props.minutes} minute</Circle>
              <Circle>{props.seconds} secunde</Circle>
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
        <StyledButton variant="outlined" href="https://google.com">
          Salvati Data
        </StyledButton>
      </div>
    </Box>
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
      <Copyright />
    </>
  );
}
