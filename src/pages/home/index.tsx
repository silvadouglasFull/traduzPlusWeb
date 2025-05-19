import type React from "react";

export const PageHome: React.FC = () => {
    return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 20, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingTop: 200 }}>
            <h1>Home</h1>
            <button onClick={() => { }}>
                Clique em mim
            </button>
        </div>
    )
}