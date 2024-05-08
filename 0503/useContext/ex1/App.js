import { useState } from "react";
import "./App.css";
import Page from "./Compopnents/Page";
import { ThemeContext } from "./context/ThemeContext";
function App() {
const [isDark, setIsDark] = useState(false);
return (
// 📌
<ThemeContext.Provider value={{ isDark, setIsDark }}>
<Page />
</ThemeContext.Provider>
);
}
export default App;
