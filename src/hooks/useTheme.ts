import { ThemeContext } from "@context/index";
import { useContext } from "react";

const useTheme = () => {
    return useContext(ThemeContext);
};

export default useTheme;