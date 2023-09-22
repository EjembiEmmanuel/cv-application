import { useState } from 'react'
import { hexToRgb, calculateBrightness } from './utils/utils';
import { sample } from "../sample";
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Customize from './components/Customize';
import Preview from './components/Preview'
import deleteIcon from "./assets/delete-red.svg"
import './App.css'

function App() {
  // State variables for component visibility and active state
  const [activeComponentIndex, setActiveComponentIndex] = useState(0)

  // State variables for personal details form fields
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  // State variables for section visibility and active state
  const [isSectionActiveIndex, setIsSectionActiveIndex] = useState(null);
  const [sectionFormActiveIndex, setSectionFormActiveIndex] = useState(null);

  // State variables for education section form fields
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStartDate, setSchoolStartDate] = useState("");
  const [schoolEndDate, setSchoolEndDate] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");

  // State variables for experience section form fields
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyStartDate, setCompanyStartDate] = useState("");
  const [companyEndDate, setCompanyEndDate] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");

  // State variables for education section items and editing status
  const [educationItems, setEducationItems] = useState([]);
  const [educationItemEdit, setEducationItemEdit] = useState(false);
  const [educationItemEditIndex, setEducationItemEditIndex] = useState(null);

  // State variables for experience section items and editing status
  const [experienceItems, setExperienceItems] = useState([]);
  const [experienceItemEdit, setExperienceItemEdit] = useState(false);
  const [experienceItemEditIndex, setExperienceItemEditIndex] = useState(null);

  const [layout, setLayout] = useState("topLayout")

  const [accentColor, setAccentColor] = useState("#4e0e0e")
  const [mainColor, setMainColor] = useState("#eef0f4")
  const [textColor, setTextColor] = useState("#ffffff")

  const [font, setFont] = useState("Roboto")

  // Event handler for toggling active components
  const handleActiveComponentChange = (index) => {
    setActiveComponentIndex(index)
  }

  // Event handlers for personal details form fields
  const handleFullnameChange = (event) => {
    const newFullname = event.target.value;
    setFullname(newFullname);
  }

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }
 
  const handlePhoneNumberChange = (event) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
  }

  const handleAddressChange = (event) => {
    const newAddress = event.target.value;
    setAddress(newAddress);
  }

  // Event handlers for education section form fields
  const handleSchoolChange = (event) => {
    const newSchool = event.target.value;
    setSchool(newSchool);
  }

  const handleDegreeChange = (event) => {
    const newDegree = event.target.value;
    setDegree(newDegree);
  }

  const handleSchoolStartDateChange = (event) => {
    const newSchoolStartDate = event.target.value;
    setSchoolStartDate(newSchoolStartDate);
  }

  const handleSchoolEndDateChange = (event) => {
    const newSchoolEndDate = event.target.value;
    setSchoolEndDate(newSchoolEndDate);
  }

  const handleSchoolLocationChange = (event) => {
    const newSchoolLocation = event.target.value;
    setSchoolLocation(newSchoolLocation);
  }

  // Event handlers for experience section form fields
  const handleCompanyChange = (event) => {
    const newCompany = event.target.value;
    setCompany(newCompany);
  }

  const handleJobTitleChange = (event) => {
    const newJobTitle = event.target.value;
    setJobTitle(newJobTitle);
  }

  const handleCompanyStartDateChange = (event) => {
    const newCompanyStartDate = event.target.value;
    setCompanyStartDate(newCompanyStartDate);
  }

  const handleCompanyEndDateChange = (event) => {
    const newCompanyEndDate = event.target.value;
    setCompanyEndDate(newCompanyEndDate);
  }

  const handleCompanyLocationChange = (event) => {
    const newCompanyLocation = event.target.value;
    setCompanyLocation(newCompanyLocation);
  }

  // Event handler for layout change
  const handleLayoutChange = (layout) => {
    const newLayout = layout
    setLayout(newLayout)
  }

  // Event handler for accent color change
  const handleAccentColorChange = (event) => {
    const newAccentColor = hexToRgb(event.target.value)
    setAccentColor(newAccentColor)

    const brightness = calculateBrightness(newAccentColor)

    if (brightness < 128) {
      setMainColor("#eef0f4")
      setTextColor("#ffffff")
    } else {
      setMainColor("#000000")
      setTextColor("#000000")
    }
  }

  const handleFontChange = (font) => {
    const newFont = font
    setFont(newFont)
  }

  // Define state objects for easier passing as props
  const sectionStates = {
    isSectionActiveIndex,
    setIsSectionActiveIndex,
    sectionFormActiveIndex,
    setSectionFormActiveIndex,
  }

  const educationSectionStates = {
    educationItems,
    setEducationItems,
    educationItemEdit,
    setEducationItemEdit,
    educationItemEditIndex,
    setEducationItemEditIndex
  }

  const experienceSectionStates = {
    experienceItems,
    setExperienceItems,
    experienceItemEdit,
    setExperienceItemEdit,
    experienceItemEditIndex,
    setExperienceItemEditIndex
  }

  const personalDetailsFormStates = {
    fullname,
    setFullname,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
  }

  const personalDetailsFormEventHandlers = {
    handleFullnameChange,
    handleEmailChange,
    handlePhoneNumberChange,
    handleAddressChange,
  }

  const educationSectionFormStates = {
    school,
    setSchool,
    degree,
    setDegree,
    schoolStartDate,
    setSchoolStartDate,
    schoolEndDate,
    setSchoolEndDate,
    schoolLocation,
    setSchoolLocation
  }

  const experienceSectionFormStates = {
    company,
    setCompany,
    jobTitle,
    setJobTitle,
    companyStartDate,
    setCompanyStartDate,
    companyEndDate,
    setCompanyEndDate,
    companyLocation,
    setCompanyLocation,
  }

  const educationSectionFormEventHandlers = {
    handleSchoolChange,
    handleDegreeChange,
    handleSchoolStartDateChange,
    handleSchoolEndDateChange,
    handleSchoolLocationChange,
  }

  const experienceSectionFormEventHandlers = {
    handleCompanyChange,
    handleJobTitleChange,
    handleCompanyStartDateChange,
    handleCompanyEndDateChange,
    handleCompanyLocationChange,
  }

  const theme = {
    accentColor,
    mainColor,
    textColor
  }

  // Function to load sample data into the form
  const loadSample = () => {
    // Set personal details from a sample object
    setFullname(sample.fullname);
    setEmail(sample.email);
    setPhoneNumber(sample.phoneNumber);
    setAddress(sample.address);

    // Create new arrays for education and experience items
    const newEducationItems = [...educationItems];
    const newExperienceItems = [...experienceItems];

    // Define education and experience items from sample data
    const educationItem = {
      primary: sample.education.primary,
      secondary: sample.education.secondary,
      startDate: sample.education.startDate,
      endDate: sample.education.endDate,
      loc: sample.education.location
    };

    const experienceItem = {
      primary: sample.experience.primary,
      secondary: sample.experience.secondary,
      startDate: sample.experience.startDate,
      endDate: sample.experience.endDate,
      loc: sample.experience.location
    };

    // Add education and experience items to their respective arrays
    newEducationItems.push(educationItem);
    newExperienceItems.push(experienceItem);

    // Update the state with the new education and experience items
    setEducationItems(newEducationItems);
    setExperienceItems(newExperienceItems);
  };

  // Function to clear the resume form
  const clearResume = () => {
    // Clear personal details
    setFullname("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");

    // Create new arrays for education and experience items
    const newEducationItems = [...educationItems];
    const newExperienceItems = [...experienceItems];

    // Clear the education and experience items arrays
    newEducationItems.length = 0;
    newExperienceItems.length = 0;

    // Update the state with the cleared arrays
    setEducationItems(newEducationItems);
    setExperienceItems(newExperienceItems);
  };

  return (
    <>
      {/* Render the sidebar */}
      <Sidebar
        activeComponentIndex = { activeComponentIndex }
        handleActiveComponentChange = { handleActiveComponentChange }
      />

      <div className="main">
        <div className="header">
          {/* Button to load sample data */}
          <button onClick={loadSample} className="headerBtn load">
            Load Sample
          </button>
          {/* Button to clear the resume form */}
          <button onClick={clearResume} className="headerBtn clear">
            <img src={deleteIcon} className="delete-logo" alt="delete icon" />
            Clear
          </button>
        </div>

        {activeComponentIndex === 0 && (
          <>
            {/* Render the main content with props */}
            <Content
              personalDetailsFormStates={personalDetailsFormStates}
              personalDetailsFormEventHandlers={personalDetailsFormEventHandlers}
              sectionStates={sectionStates}
              educationSectionStates={educationSectionStates}
              experienceSectionStates={experienceSectionStates}
              educationSectionFormStates={educationSectionFormStates}
              experienceSectionFormStates={experienceSectionFormStates}
              educationSectionFormEventHandlers={educationSectionFormEventHandlers}
              experienceSectionFormEventHandlers={experienceSectionFormEventHandlers}
            />
          </>
        )}

        {activeComponentIndex === 1 && (
          <>
            <Customize
              handleLayoutChange = { handleLayoutChange }
              handleAccentColorChange = { handleAccentColorChange }
              theme = { theme }
              font = { font }
              handleFontChange = { handleFontChange }
            />
          </>
        )}
      </div>

      {/* Render a preview section */}
      <Preview
        personalDetailsFormStates = {personalDetailsFormStates}
        educationSectionStates = {educationSectionStates}
        experienceSectionStates = {experienceSectionStates}
        layout = {layout}
        theme = { theme }
        font = { font }
      />
    </>
  )
}

export default App
