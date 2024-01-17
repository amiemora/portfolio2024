import "./App.css";
import NavBar from "./components/layout/NavBar";

function App() {
  const pageStyle = {
    backgroundColor: "#212121",
    minHeight: "100vh", // Ensures that the background color covers the entire viewport height
  };
  return (
    <>
      <div style={pageStyle}>
        <NavBar />
      </div>
    </>
  );
}

export default App;
