import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';
import "../styles/Sidebar.css";

export default function Sidebar({
  activeComponentIndex,
  handleActiveComponentChange,
  personalDetailsFormStates,
  educationSectionStates,
  experienceSectionStates,
  layout,
  theme,
  font,
}) {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
        <symbol id="contentIcon" viewBox="0 0 384 512">
          <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/>
        </symbol>
        <symbol id="customizeIcon" viewBox="0 0 512 512">
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
        </symbol>
        <symbol id="downloadIcon" viewBox="0 0 512 512">
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
        </symbol>
      </svg>

      <div className="sidebar">
        {/* Button for 'Content' with an icon */}
        <button onClick={() => handleActiveComponentChange(0)} className={activeComponentIndex === 0 ? "sidebarBtn" + ' ' + "active" : "sidebarBtn"}>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#contentIcon" />
          </svg>
          Content
        </button>

        {/* Button for 'Customize' with an icon */}
        <button onClick={() => handleActiveComponentChange(1)} className={activeComponentIndex === 1 ? "sidebarBtn" + ' ' + "active" : "sidebarBtn"}>
          <svg className="logo" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref="#customizeIcon" />
          </svg>
          Customize
        </button>

        {/* Button for 'Download' with an icon */}
        <button className="sidebarBtn">
            <svg className="logo" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#downloadIcon" />
            </svg>
            <PDFDownloadLink
              style={{textDecoration: 'none', color: 'black'}}
              document={
                <PDFDocument
                  personalDetailsFormStates = { personalDetailsFormStates }
                  educationSectionStates = { educationSectionStates }
                  experienceSectionStates = { experienceSectionStates }
                  layout = { layout }
                  theme = { theme }
                  font = { font }
                />} 
              fileName="resume.pdf">
              Download
            </PDFDownloadLink>
        </button>
      </div>
    </>
  );
}
