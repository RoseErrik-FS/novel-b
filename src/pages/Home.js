import React from "react";
import CardSmallNewNovel from '../components/CardSmallNewNovel'
import CardSmallRandomNovel from '../components/CardSmallRandomNovel'
import CardTall from '../components/CardTall'
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <section style={styles.container}>
        <section style={styles.row1}>
        <SearchBar />
        </section>
        <section style={styles.column1}>
        <CardSmallNewNovel />
        </section>
        <section style={styles.column2}>
        <CardSmallRandomNovel />
      </section>
      <section style={styles.column3}>
        <CardTall />
      </section>
    </section>
  );
}

export default Home;
const styles = {
  container: {
    display: "grid",
    gridTemplate: `
      "row1 row1"
      "column1 column2"
      "column3 column3"
      / 1fr 1fr
    `,
    gap: "20px 0",
  },
  row1: { gridArea: "row1" },
  column1: { gridArea: "column1" },
  column2: { gridArea: "column2" },
  column3: { gridArea: "column3" },
};
