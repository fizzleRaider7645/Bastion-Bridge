import { Theme } from "@radix-ui/themes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

// import { Flex, Text, Button } from "@radix-ui/themes";

function App() {
  return (
    <html>
      <body>
        <Theme>
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
          </Router>
        </Theme>
      </body>
    </html>
  );
}
export default App;
