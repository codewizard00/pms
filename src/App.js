import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import SignInSide from "./scenes/signIn/index";
import SignUpSide from "./scenes/signup/index";

import Header from "./scenes/global/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProduct from "./scenes/contacts/[id]";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


  return (
    <Provider store={store}>
      
      <ColorModeContext.Provider value={colorMode}>
      <ToastContainer />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
          {["/signin", "/signup"].includes(window.location.pathname) ? (
              <></>
            ) : (
              <Sidebar isSidebar={isSidebar} />
            )}
            <main className="content">
              {["/signin", "/signup"].includes(window.location.pathname) ? (
                <Header />
              ) : (
                <Topbar setIsSidebar={setIsSidebar} />
              )}

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/signin" element={<SignInSide />} />
                <Route path="/signup" element={<SignUpSide />} />
                <Route path="/team" element={<Team />} />
                <Route path="/product/:id" element={<UpdateProduct />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Provider>
  );
}

export default App;
