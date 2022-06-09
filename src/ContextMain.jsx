import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ContextMain = () => {
    const { DarkTheme, themeChange } = useContext(ThemeContext);
    return { theme: DarkTheme, changeTheme: themeChange };
}
export default ContextMain;