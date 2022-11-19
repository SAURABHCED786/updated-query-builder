import logo from "./logo.svg";
import "./App.css";
import { AppProvider } from "@shopify/polaris";
import { useState } from "react";
import QueryBuilder from "./pages/QueryBuilder";
function App() {
  const [main, setMain] = useState([
    {
      groupId: Math.floor(Math.random() * 54646462),
      row: [],
    },
  ]);

  return (
    <AppProvider>
      <div className="App">
        <>
          <QueryBuilder main={main} setMain={setMain} />
        </>
      </div>
    </AppProvider>
  );
}

export default App;
