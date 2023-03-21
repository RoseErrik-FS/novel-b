import React from "react";
import CardSearchResult from '../components/CardSearchResult'

function Search() {
  return (
    <section style={styles.container}>
        <section style={styles.row1}>
        <Search/>
        </section>
        <section style={styles.column1}>
        <CardSearchResult />
        </section>
    </section>
  );
}

export default Search
const styles = {
    container: {
      display: 'grid',
      gridTemplateAreas: 
        '"search"\n"result"',
      gridTemplateRows: '1fr',
      gridTemplateColumns: '1fr',
      gap: '1rem',
      padding: '1rem',
    },
    
    row1: {
      gridArea: 'search',
    },
    
    column1: {
      gridArea: 'result',
    },
  }
  