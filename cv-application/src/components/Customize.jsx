import "../styles/Customize.css"

export default function Customize({
    handleLayoutChange,
    handleAccentColorChange,
    theme: {
        accentColor,
        textColor
    },
    font,
    handleFontChange,
    }) {

    return (
        <div className="customize">
            <Layout
                handleLayoutChange = { handleLayoutChange }
                accentColor = { accentColor}
            />
            <Color 
                handleAccentColorChange = { handleAccentColorChange }
                accentColor = { accentColor }
            />
            <Font 
                handleFontChange = { handleFontChange }
                font = { font }
                accentColor = { accentColor }
                textColor = { textColor }
            />
        </div>
    )
}

function Layout({
    handleLayoutChange,
    accentColor,
     }) {

    const style = {backgroundColor: accentColor}

    const layouts = [
        {text: "Top", layout: "topLayout", handleClick: handleLayoutChange, className: "top", style: style},
        {text: "Left", layout: "leftLayout", handleClick: handleLayoutChange, className: "left", style: style},
        {text: "Right", layout: "rightLayout", handleClick: handleLayoutChange, className: "right", style: style}
    ]

    return (
        <div className="layout">
            <h2 className="title">Layout</h2>
            <div className="layoutToggles">
                {layouts.map(layout => (
                    <>
                        <LayoutToggle
                            text = { layout.text }
                            layout = { layout.layout }
                            handleClick = { layout.handleClick }
                            className = { layout.className }
                            style = { layout.style }
                        />
                    </>
                ))}
            </div>
        </div>
    )
}

function LayoutToggle({ text, layout, handleClick, className, style}) {
    return (
        <div className="layoutToggle">
            <button onClick={() => handleClick(layout)} className={className} style={style}></button>
            {text}
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

function Font({
    font,
    handleFontChange,
    accentColor,
    textColor
    }) {

    const fontBtns = [
        {text: "Roboto", changeFont: handleFontChange, className: "font", fontFamily: "Roboto", isActive: font === "Roboto"},
        {text: "Mono", changeFont: handleFontChange, className: "font", fontFamily: "monospace", isActive: font === "monospace"},
        {text: "Courier", changeFont: handleFontChange, className: "font", fontFamily: "Courier", isActive: font === "Courier"},
        {text: "Arial", changeFont: handleFontChange, className: "font", fontFamily: "Arial", isActive: font === "Arial"},
        {text: "Serif", changeFont: handleFontChange, className: "font", fontFamily: "serif", isActive: font === "serif"},
    ]

    return (
        <div className="fontContainer">
            <h2 className="title">Fonts</h2>
            <div className="fontPicker">
                {fontBtns.map((fontBtn) => (
                    <>
                        <FontButton
                            isActive = { fontBtn.isActive }
                            text = {fontBtn.text }
                            changeFont = {fontBtn.changeFont }
                            className = { fontBtn.className }
                            fontFamily = { fontBtn.fontFamily }
                            accentColor = { accentColor }
                            textColor = { textColor } 
                        />
                    </>
                ))

                }
            </div>
        </div>
    )
}   

function FontButton({ isActive, text, changeFont, className, fontFamily, accentColor, textColor}) {
    const style = {fontFamily}

    if (isActive) {
        className = className + ' ' + 'active'
        style.backgroundColor = accentColor
        style.color = textColor
    }

    return (
        <button onClick={() => changeFont(fontFamily)} className={className} style={style}>
            Aa<br />{text}
        </button>
    )
}