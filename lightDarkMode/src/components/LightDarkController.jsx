import useLocalStorage from "../hooks/useLocalStorage";

const LightDarkController = () => {
  const [theme, setTheme] = useLocalStorage(
    //     {
    // key: "theme",
    // initialValue: "light",
    // }
    "theme",
    "light"
  );

  //   console.log(theme);
  return (
    <div className="container" data-theme={theme}>
      <h1>Click the button to change the theme color</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        change color
      </button>
    </div>
  );
};

export default LightDarkController;
