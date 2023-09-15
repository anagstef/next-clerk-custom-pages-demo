import { useTheme } from "../contexts/ThemeContext";

export const Icon = () => {
    const { theme } = useTheme();
    return (
        <div style={{
            margin:'2px', 
            width: '15px', 
            height: '15px', 
            border: '1px solid grey', 
            borderRadius:'50%', 
            backgroundColor: theme
        }} />
    );
};