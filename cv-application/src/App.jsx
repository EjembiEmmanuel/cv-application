import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Preview from './components/Preview'
import './App.css'

function App() {
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

  return (
    <>
      {/* Render the sidebar */}
      <Sidebar />
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
      {/* Render a preview section */}
      <Preview
        personalDetailsFormStates={personalDetailsFormStates}
        educationSectionStates={educationSectionStates}
        experienceSectionStates={experienceSectionStates}
      />
    </>
  )
}

export default App
