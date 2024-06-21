import { useTheme } from "./context/themeContext";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="container">
      <h1>Hello World</h1>
      <div>
        <button onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
      </div>
    </div>
  );
}
