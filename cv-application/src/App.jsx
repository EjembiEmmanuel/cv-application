import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Preview from './components/Preview'
import './App.css'

function App() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")

  const [isSectionActiveIndex, setIsSectionActiveIndex] = useState(null)
  const [sectionFormActiveIndex, setSectionFormActiveIndex] = useState(null)

  const [school, setSchool] = useState("")
  const [degree, setDegree] = useState("")
  const [schoolStartDate, setSchoolStartDate] = useState("")
  const [schoolEndDate, setSchoolEndDate] = useState("")
  const [schoolLocation, setSchoolLocation] = useState("")

  const [company, setCompany] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [companyStartDate, setCompanyStartDate] = useState("")
  const [companyEndDate, setCompanyEndDate] = useState("")
  const [companyLocation, setCompanyLocation] = useState("")

  const [educationItems, setEducationItems] = useState([])
  const [educationItemEdit, setEducationItemEdit] = useState(false)
  const [educationItemEditIndex, setEducationItemEditIndex] = useState(null)

  const [experienceItems, setExperienceItems] = useState([])
  const [experienceItemEdit, setExperienceItemEdit] = useState(false)
  const [experienceItemEditIndex, setExperienceItemEditIndex] = useState(null)

  const handleFullnameChange = (event) => {
    const newFullname = event.target.value
    setFullname(newFullname)
  }

  const handleEmailChange = (event) => {
      const newEmail = event.target.value
      setEmail(newEmail)
  }

  const handlePhoneNumberChange = (event) => {
      const newPhoneNumber = event.target.value
      setPhoneNumber(newPhoneNumber)
  }

  const handleAddressChange = (event) => {
      const newAddress = event.target.value
      setAddress(newAddress)
  }

  const handleSchoolChange = (event) => {
    const newSchool = event.target.value
    setSchool(newSchool)
  }

  const handleDegreeChange = (event) => {
    const newDegree = event.target.value
    setDegree(newDegree)
  }

  const handleSchoolStartDateChange = (event) => {
    const newSchoolStartDate = event.target.value
    setSchoolStartDate(newSchoolStartDate)
  }

  const handleSchoolEndDateChange = (event) => {
    const newSchoolEndDate = event.target.value
    setSchoolEndDate(newSchoolEndDate)
  }

  const handleSchoolLocationChange = (event) => {
    const newSchoolLocation = event.target.value
    setSchoolLocation(newSchoolLocation)
  }

  const handleCompanyChange = (event) => {
    const newCompany = event.target.value
    setCompany(newCompany)
  }

  const handleJobTitleChange = (event) => {
    const newJobTitle = event.target.value
    setJobTitle(newJobTitle)
  }

  const handleCompanyStartDateChange = (event) => {
    const newCompanyStartDate = event.target.value
    setCompanyStartDate(newCompanyStartDate)
  }

  const handleCompanyEndDateChange = (event) => {
    const newCompanyEndDate = event.target.value
    setCompanyEndDate(newCompanyEndDate)
  }

  const handleCompanyLocationChange = (event) => {
    const newCompanyLocation = event.target.value
    setCompanyLocation(newCompanyLocation)
  }

  const sectionStates = {
    isSectionActiveIndex: isSectionActiveIndex,
    setIsSectionActiveIndex: setIsSectionActiveIndex,
    sectionFormActiveIndex: sectionFormActiveIndex,
    setSectionFormActiveIndex: setSectionFormActiveIndex,
  }

  const educationSectionStates = {
    educationItems: educationItems,
    setEducationItems: setEducationItems,
    educationItemEdit: educationItemEdit,
    setEducationItemEdit: setEducationItemEdit,
    educationItemEditIndex: educationItemEditIndex,
    setEducationItemEditIndex: setEducationItemEditIndex
  }

  const experienceSectionStates = {
    experienceItems: experienceItems,
    setExperienceItems: setExperienceItems,
    experienceItemEdit: experienceItemEdit,
    setExperienceItemEdit: setExperienceItemEdit,
    experienceItemEditIndex: experienceItemEditIndex,
    setExperienceItemEditIndex: setExperienceItemEditIndex
  }

  const personalDetailsFormStates = {
    fullname: fullname,
    setFullname: setFullname,
    email: email,
    setEmail: setEmail,
    phoneNumber: phoneNumber,
    setPhoneNumber: setPhoneNumber,
    address: address,
    setAddress: setAddress,
  }

  const personalDetailsFormEventHandlers = {
    handleFullnameChange: handleFullnameChange,
    handleEmailChange: handleEmailChange,
    handlePhoneNumberChange: handlePhoneNumberChange,
    handleAddressChange: handleAddressChange,
  }

  const educationSectionFormStates = {
    school: school,
    setSchool: setSchool,
    degree: degree,
    setDegree: setDegree,
    schoolStartDate: schoolStartDate,
    setSchoolStartDate: setSchoolStartDate,
    schoolEndDate: schoolEndDate,
    setSchoolEndDate: setSchoolEndDate,
    schoolLocation: schoolLocation,
    setSchoolLocation: setSchoolLocation
  }

  const experienceSectionFormStates = {
    company: company,
    setCompany: setCompany,
    jobTitle: jobTitle,
    setJobTitle: setJobTitle,
    companyStartDate: companyStartDate,
    setCompanyStartDate: setCompanyStartDate,
    companyEndDate: companyEndDate,
    setCompanyEndDate: setCompanyEndDate,
    companyLocation: companyLocation,
    setCompanyLocation: setCompanyLocation,
  }

  const educationSectionFormEventHandlers = {
    handleSchoolChange: handleSchoolChange,
    handleDegreeChange: handleDegreeChange,
    handleSchoolStartDateChange: handleSchoolStartDateChange,
    handleSchoolEndDateChange: handleSchoolEndDateChange,
    handleSchoolLocationChange: handleSchoolLocationChange,
  }

  const experienceSectionFormEventHandlers = {
    handleCompanyChange: handleCompanyChange,
    handleJobTitleChange: handleJobTitleChange,
    handleCompanyStartDateChange: handleCompanyStartDateChange,
    handleCompanyEndDateChange: handleCompanyEndDateChange,
    handleCompanyLocationChange: handleCompanyLocationChange,
  }

  return (
    <>
      <Sidebar />
      <Content 
        personalDetailsFormStates = { personalDetailsFormStates }
        personalDetailsFormEventHandlers = { personalDetailsFormEventHandlers }
        sectionStates = { sectionStates }
        educationSectionStates = { educationSectionStates }
        experienceSectionStates = { experienceSectionStates }
        educationSectionFormStates = { educationSectionFormStates }
        experienceSectionFormStates = { experienceSectionFormStates }
        educationSectionFormEventHandlers = { educationSectionFormEventHandlers }
        experienceSectionFormEventHandlers = { experienceSectionFormEventHandlers }
      />
      <Preview />
    </>
  )
}

export default App
