import * as React from "react";
import { Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav"
import MyFooter from "./components/MyFooter"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Search from './pages/Search'

function App() {
  return (
    <div>
      <main style={styles.container}>
        <SideNav />
        <section style={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Search" element={<Search />} />
          </Routes>
        </section>
        <section style={styles.footer}>
          <MyFooter />
        </section>
      </main>
    </div>
  );
}
export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    background: "#111827",
    height: "100vh",
  },
  page: {
    padding: "20px",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  }
};
