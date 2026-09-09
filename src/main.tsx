import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./theme.css";
import PixelatedCursor from "./components/originkit/ui/inkbleed-cursor.tsx";
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
        <PixelatedCursor
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
            }}
            label={false}
            pixelCount={24}
            pixelSize={20}
            pixelShape="circle"
            trailColor="#E50027"
            trailStyle="solid"
            trailSpacing={2}
        />
    </StrictMode>,
);
