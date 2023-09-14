import { useTheme } from "@/app/contexts/ThemeContext";

export const ColorThemePage = () => {
    const { theme, setTheme } = useTheme();
    return (
        <> 
            <h1>🎨 Color Theme</h1>
            <div style={{padding: '5px'}}>Here you can change the color of your app.</div>
            <div style={{padding: '15px'}}>The color now is: <span style={{backgroundColor: theme, border: '1px solid black', padding: '10px'}}>{theme}</span></div>
            <div style={{padding: '5px'}}>
                <button style={{padding: '5px'}} onClick={() => setTheme('white')}>white</button>
            </div>
            <div style={{padding: '5px'}}>
                <button style={{padding: '5px'}} onClick={() => setTheme('lightblue')}>lightblue</button>
            </div>
            <div style={{padding: '5px'}}>
                <button style={{padding: '5px'}} onClick={() => setTheme('lightgreen')}>lightgreen</button>
            </div>
            <div style={{padding: '5px'}}>
                <button style={{padding: '5px'}} onClick={() => setTheme('lightpink')}>lightpink</button>
            </div>
        </>
    );
};