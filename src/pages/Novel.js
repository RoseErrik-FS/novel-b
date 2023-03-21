import React from "react";
import CardNovelInfo from './../components/CardNovelInfo';

function Novel() {
  return (
    <section style={styles.container}>
        <section style={styles.row1}>
        <CardNovelInfo/>
        </section>
        <section style={styles.column1}>
        <CardNovelInfo />
        </section>
    </section>
  );
}

export default Novel
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
  