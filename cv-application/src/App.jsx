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
    items: {
      education: {
        items: educationItems,
        setItems: setEducationItems,
        itemEdit: educationItemEdit,
        setItemEdit: setEducationItemEdit,
        itemEditIndex: educationItemEditIndex,
        setItemEditIndex: setEducationItemEditIndex
      },
      experience: {
        items: experienceItems,
        setItems: setExperienceItems,
        itemEdit: experienceItemEdit,
        setItemEdit: setExperienceItemEdit,
        itemEditIndex: experienceItemEditIndex,
        setItemEditIndex: setExperienceItemEditIndex
      }
    }
  }


  const formInputs = {
    fullname: fullname,
    setFullname: setFullname,
    email: email,
    setEmail: setEmail,
    phoneNumber: phoneNumber,
    setPhoneNumber: setPhoneNumber,
    address: address,
    setAddress: setAddress,
    education: {
      primary: school,
      setPrimary: setSchool,
      secondary: degree,
      setSecondary: setDegree,
      startDate: schoolStartDate,
      setStartDate: setSchoolStartDate,
      endDate: schoolEndDate,
      setEndDate: setSchoolEndDate,
      loc: schoolLocation,
      setLoc: setSchoolLocation,
    },
    experience: {
      primary: company,
      setPrimary: setCompany,
      secondary: jobTitle,
      setSecondary: setJobTitle,
      startDate: companyStartDate,
      setStartDate: setCompanyStartDate,
      endDate: companyEndDate,
      setEndDate: setCompanyEndDate,
      loc: companyLocation,
      setLoc: setCompanyLocation,
    }
  }

  const formInputsEventHandlers = {
    handleFullnameChange: handleFullnameChange,
    handleEmailChange: handleEmailChange,
    handlePhoneNumberChange: handlePhoneNumberChange,
    handleAddressChange: handleAddressChange,
    education: {
      primary: handleSchoolChange,
      secondary: handleDegreeChange,
      startDate: handleSchoolStartDateChange,
      endDate: handleSchoolEndDateChange,
      loc: handleSchoolLocationChange,
    },
    experience: {
      primary: handleCompanyChange,
      secondary: handleJobTitleChange,
      startDate: handleCompanyStartDateChange,
      endDate: handleCompanyEndDateChange,
      loc: handleCompanyLocationChange,
    }
  }

  return (
    <>
      <Sidebar />
      <Content formInputs={formInputs} formInputsEventHandlers={formInputsEventHandlers} sectionStates={sectionStates} />
      <Preview />
    </>
  )
}

export default App
