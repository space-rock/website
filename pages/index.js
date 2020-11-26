import Head from "next/head";

import Box from "../components/Box";
import styles from "../styles/home";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <Box css={styles.wrapper}>
      <Head>
        <title>Space Rock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo css={styles.logo} />
    </Box>
  );
};

export default Home;
