import "../styles/Customize.css"

export default function Customize({
    handleLayoutChange,
    handleAccentColorChange,
    theme: {
        accentColor
    }
    }) {

    return (
        <div className="customize">
            <Layout
                handleLayoutChange= { handleLayoutChange }
                accentColor = { accentColor}
            />
            <Color 
                handleAccentColorChange = { handleAccentColorChange }
                accentColor = { accentColor }
            />
        </div>
    )
}

function Layout({
    handleLayoutChange,
    accentColor,
     }) {

    return (
        <div className="layout">
            <h2 className="title">Layout</h2>
            <div className="layoutToggles">
                <div className="layoutToggle">
                    <button onClick={() => handleLayoutChange("topLayout")} className="top" style={{backgroundColor: accentColor}}></button>
                    Top
                </div>
                <div className="layoutToggle">
                    <button onClick={() => handleLayoutChange("leftLayout")} className="left" style={{backgroundColor: accentColor}}></button>
                    Left
                </div>
                <div className="layoutToggle">
                    <button onClick={() => handleLayoutChange("rightLayout")} className="right" style={{backgroundColor: accentColor}}></button>
                    Right
                </div>
            </div>
        </div>
    )
}

function Color({
    handleAccentColorChange,
    accentColor
    }) {

    return (
        <div className="colorContainer">
            <h2 className="title">Color</h2>
            <div className="color">
                <label htmlFor="colorPickerInput" className="accentColor">
                    Accent Color
                </label>
                <div className="colorPicker" style={{backgroundColor: accentColor}}>
                    <input name="colorPickerInput" id="colorPickerInput" type="color" onChange={handleAccentColorChange} />
                </div>
            </div>
        </div>
    )
}