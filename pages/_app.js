import { createTheme, ThemeProvider } from "@mui/material";
import { ProvideAuth } from "@context/auth";
import Head from "next/head";
import "../public/styles.css";

import Layout from "@components/Layout";

const Theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#c7d6d5",
      dark: "#667574",
      contrastText: "#667574",
    },
    secondary: {
      light: "#ffffff",
      main: "#801f12",
      dark: "#343a40",
      contrastText: "#ffffff",
    },
    info: {
      main: "#dbd5d5",
    },
    success: {
      main: "#d1e6e4",
    },
    error: {
      main: "#c62828",
    },
    warning: {
      main: "#801f12",
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <title>Marxet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProvideAuth>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProvideAuth>
    </ThemeProvider>
  );
};

export default App;
