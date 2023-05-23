import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --color-brand-1: #08b3d4;
        --color-brand-2: #0d60b1;
        --color-brand-3: #fa96bf;
        --color-brand-4: #69798e;
        --color-brand-5: #9cbdc7;
        --color-brand-6: #342c2d;
        --fixed-white: white;
        
        --gap-1: 64px;
        --gap-2: 56px;
        --gap-3: 48px;
        --gap-4: 40px;
        --gap-5: 32px;
        --gap-6: 24px;
        --gap-7: 16px;
        --gap-8: 12px;
        --gap-9: 08px;
        --gap-10: 4px;

        --full-radius: 32px;
        --radius-1: 8px;
        --radius-2: 6px;
        --radius-3: 4px;
        --radius-4: 2px;
    }
    
    body {
        font-family: "Inter";
    }
    
    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        font-family: "Inter";
    }

    input, select {
        font-family: "Inter";
        padding-left: 10px;
    }

    label {
        width: max-content;
    }
`;
