import "../styles/Customize.css"

export default function Customize({ handleLayoutChange }) {
    return (
        <div className="customize">
            <Layout
                handleLayoutChange= { handleLayoutChange } 
            />
        </div>
    )
}

function Layout({
    handleLayoutChange
}) {
    return (
        <div className="layout">
            <h2 className="title">Layout</h2>
            <div className="layoutToggles">
                <div className="layoutToggle">
                    <button onClick={() => handleLayoutChange("topLayout")} className="top"></button>
                    Top
                </div>
                <div className="layoutToggle">
                    <button onClick={() => handleLayoutChange("leftLayout")} className="left"></button>
                    Left
                </div>
                <div className="layoutToggle">
                    <button onClick={() => handleLayoutChange("rightLayout")} className="right"></button>
                    Right
                </div>
            </div>
        </div>
    )
}