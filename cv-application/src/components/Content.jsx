import { sample } from "../../sample";
import blackDeleteIcon from "../assets/delete-black.svg"
import deleteIcon from "../assets/delete-red.svg"
import educationIcon from "../assets/education.svg"
import experienceIcon from "../assets/experience.svg"
import downArrowIcon from "../assets/down-arrow.svg"
import addIcon from "../assets/add.svg"
import eyeIcon from "../assets/eye.svg"
import "../styles/Content.css";

export default function Content({
    personalDetailsFormStates: { 
        fullname,
        setFullname,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        address,
        setAddress
    },
    personalDetailsFormEventHandlers: { 
        handleFullnameChange, 
        handleEmailChange, 
        handlePhoneNumberChange, 
        handleAddressChange 
    },
    sectionStates: {
        isSectionActiveIndex,
        setIsSectionActiveIndex,
        sectionFormActiveIndex,
        setSectionFormActiveIndex
    },
    educationSectionStates: {
        educationItems,
        setEducationItems,
        educationItemEdit,
        setEducationItemEdit,
        educationItemEditIndex,
        setEducationItemEditIndex
    },
    experienceSectionStates: {
        experienceItems,
        setExperienceItems,
        experienceItemEdit,
        setExperienceItemEdit,
        experienceItemEditIndex,
        setExperienceItemEditIndex
    },
    educationSectionFormStates: {
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
    },
    experienceSectionFormStates: {
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
    },
    educationSectionFormEventHandlers: {
        handleSchoolChange,
        handleDegreeChange,
        handleSchoolStartDateChange,
        handleSchoolEndDateChange,
        handleSchoolLocationChange,
    },
    experienceSectionFormEventHandlers: {
        handleCompanyChange,
        handleJobTitleChange,
        handleCompanyStartDateChange,
        handleCompanyEndDateChange,
        handleCompanyLocationChange,
    }, 
    }) {

    const loadSample = () => {
        setFullname(sample.fullname)
        setEmail(sample.email)
        setPhoneNumber(sample.phoneNumber)
        setAddress(sample.address)

        const newEducationItems = [...educationItems]
        const newExperienceItems = [...experienceItems]

        const educationItem = {
            primary: sample.education.primary,
            secondary: sample.education.secondary,
            startDate: sample.education.startDate,
            endDate: sample.education.endDate,
            loc: sample.education.location
        }

        const experienceItem = {
            primary: sample.experience.primary,
            secondary: sample.experience.secondary,
            startDate: sample.experience.startDate,
            endDate: sample.experience.endDate,
            loc: sample.experience.location
        }

        newEducationItems.push(educationItem)
        newExperienceItems.push(experienceItem)
        setEducationItems(newEducationItems)
        setExperienceItems(newExperienceItems)

    }

    const clearResume = () => {
        setFullname("")
        setEmail("")
        setPhoneNumber("")
        setAddress("")

        const newEducationItems = [...educationItems]
        const newExperienceItems = [...experienceItems]

        newEducationItems.length = 0
        newExperienceItems.length = 0

        setEducationItems(newEducationItems)
        setExperienceItems(newExperienceItems)
    }

    const toggleSection = (index) => {
        if (isSectionActiveIndex === index) {
            setIsSectionActiveIndex(null)
            setSectionFormActiveIndex(null)
        } else {
            setIsSectionActiveIndex(index)
            setSectionFormActiveIndex(null)
        }
    }

    const showForm = (index) => {
        setSectionFormActiveIndex(index)
    }

    const hideForm = () => {
        setSectionFormActiveIndex(null)
    }

    return (
        <div className="content">
            <div className="header">
                <button onClick={loadSample} className="headerBtn load">
                    Load Sample
                </button>
                <button onClick={clearResume} className="headerBtn clear">
                    <img className="delete-logo" src={deleteIcon} alt="delete icon" />
                    Clear
                </button>
            </div>

            <PersonalDetails
                fullname = { fullname }
                email = { email }
                phoneNumber = { phoneNumber }
                address = { address }
                handleFullnameChange = { handleFullnameChange }
                handleEmailChange = { handleEmailChange }
                handlePhoneNumberChange = { handlePhoneNumberChange }
                handleAddressChange = { handleAddressChange } 
            />

            <Section
                items = { educationItems }
                setItems = { setEducationItems }
                itemEdit = { educationItemEdit }
                setItemEdit = { setEducationItemEdit }
                itemEditIndex = { educationItemEditIndex }
                setItemEditIndex = { setEducationItemEditIndex }
                primary = { school }
                setPrimary = { setSchool }
                secondary = {degree}
                setSecondary = {setDegree}
                startDate = {schoolStartDate}
                setStartDate = {setSchoolStartDate}
                endDate = {schoolEndDate}
                setEndDate = {setSchoolEndDate}
                loc = {schoolLocation}
                setLoc = {setSchoolLocation}
                handlePrimary = {handleSchoolChange}
                handleSecondary = {handleDegreeChange}
                handleStartDate = {handleSchoolStartDateChange}
                handleEndDate = {handleSchoolEndDateChange}
                handleLocation = {handleSchoolLocationChange}
                 
                mainIcon={educationIcon} 
                text="Education" 
                addIcon={addIcon} 
                isSectionActive={isSectionActiveIndex === 0} 
                onShow={() => toggleSection(0)} 
                formFields={educationFormFields} 
                isSectionFormActive={sectionFormActiveIndex === 0} 
                onShowSectionForm={() => showForm(0)} 
                onHideSectionForm={() => hideForm()}
            />

            <Section
                items = { experienceItems }
                setItems = { setExperienceItems }
                itemEdit = { experienceItemEdit }
                setItemEdit = { setExperienceItemEdit }
                itemEditIndex = { experienceItemEditIndex }
                setItemEditIndex = { setExperienceItemEditIndex }
                primary = { company }
                setPrimary = { setCompany }
                secondary = {jobTitle}
                setSecondary = {setJobTitle}
                startDate = {companyStartDate}
                setStartDate = {setCompanyStartDate}
                endDate = {companyEndDate}
                setEndDate = {setCompanyEndDate}
                loc = {companyLocation}
                setLoc = {setCompanyLocation}
                handlePrimary = {handleCompanyChange}
                handleSecondary = {handleJobTitleChange}
                handleStartDate = {handleCompanyStartDateChange}
                handleEndDate = {handleCompanyEndDateChange}
                handleLocation = {handleCompanyLocationChange}
  
                mainIcon={experienceIcon} 
                text="Professional Experience" 
                addIcon={addIcon} 
                isSectionActive={isSectionActiveIndex === 1} 
                onShow={() => toggleSection(1)} 
                formFields={experienceFormFields} 
                isSectionFormActive={sectionFormActiveIndex  === 1} 
                onShowSectionForm={() => showForm(1)} 
                onHideSectionForm={() => hideForm()} 
            />
        </div>
    )
}

function PersonalDetails({
    fullname,
    email,
    phoneNumber,
    address,
    handleFullnameChange,
    handleEmailChange,
    handlePhoneNumberChange,
    handleAddressChange,
    }) {

    const inputFields = [
        { id: "name", label: "Full name", placeholder: "First and last name", value: fullname, onChange:handleFullnameChange },
        { id: "email", label: "Email", placeholder: "Enter email", value: email, onChange: handleEmailChange },
        { id: "phone", label: "Phone number", placeholder: "Enter phone number", value: phoneNumber, onChange: handlePhoneNumberChange },
        { id: "address", label: "Address", placeholder: "City, Country", value: address, onChange: handleAddressChange },
    ]

    return (
        <div className="personalDetails">
            <h1>Personal Details</h1>
            <form action="" className="personalDetailsForm">
                {inputFields.map((field) => (
                    <>
                        <label htmlFor={field.id}>
                            {field.label} <span>recommended</span>
                        </label>
                        <input type="text" id={field.id} value={field.value} placeholder={field.placeholder} onChange={field.onChange} />
                    </>
                ))}
            </form>
        </div>
    )
}

function Section({
    items,
    setItems,
    itemEdit,
    setItemEdit,
    itemEditIndex,
    setItemEditIndex,
    primary,
    setPrimary,
    secondary,
    setSecondary,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    loc,
    setLoc,
    handlePrimary,
    handleSecondary,
    handleStartDate,
    handleEndDate,
    handleLocation,

    mainIcon, 
    text, 
    addIcon, 
    isSectionActive, 
    onShow, 
    formFields, 
    isSectionFormActive, 
    onShowSectionForm, 
    onHideSectionForm}) {

    const resetInputs = () => {
        setPrimary("")
        setSecondary("")
        setStartDate("")
        setEndDate("")
        setLoc("")
    }

    const cancelEdit = (event) => {
        event.preventDefault()
        resetInputs()
        onHideSectionForm()
        setItemEdit(false)
        setItemEditIndex(null)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const newItems = [...items]
        
        const item = {
            primary,
            secondary,
            startDate,
            endDate,
            loc
        }

        itemEdit ? newItems[itemEditIndex] = item : newItems.push(item)

        setItems(newItems)
        setItemEdit(false)
        setItemEditIndex(null)

        onHideSectionForm()
        resetInputs()
    }

    const deleteItem = (event) => {
        event.preventDefault()
        const newItems = [...items]
        newItems.splice(itemEditIndex, 1)
        setItems(newItems)
        setItemEdit(false)

        onHideSectionForm()
        resetInputs()
    }

    const editItem = (event) => {
        const index = Number(event.target.dataset.key)
        setItemEdit(true)
        setItemEditIndex(index)

        const item = items[index]

        setPrimary(item.primary)
        setSecondary(item.secondary)
        setStartDate(item.startDate)
        setEndDate(item.endDate)
        setLoc(item.loc)

        onShowSectionForm()
    }

    return (
        <div className="section">
            <div className="sectionHeader">
                <div className="info">
                    <img className="mainIcon" src={mainIcon} alt={text + ' ' + 'icon'} />
                    <h2>{text}</h2>
                </div>
                <button onClick={onShow}>
                    <img className={isSectionActive ? 'arrowAnimation' : undefined} src={downArrowIcon} alt="Down arrow icon" />
                </button>
            </div>
            <div className="sectionBody">
                {items.length > 0 && isSectionActive && !isSectionFormActive && (
                    <SectionList items={items} editItem={() => editItem(event)} />
                )}
                {isSectionFormActive && (
                    <form action="" className="sectionForm">
                        <label htmlFor="primary">{formFields.primary.label}</label>
                        <input type="text" id="primary" value={primary} placeholder={formFields.primary.placeholder} onChange={handlePrimary} />
                        <label htmlFor="secondary">{formFields.secondary.label}</label>
                        <input type="text" id="secondary" value={secondary} placeholder={formFields.secondary.placeholder} onChange={handleSecondary} />
                        <div className="dateArea">
                            <div className="start">
                                <label htmlFor="startDate">{formFields.startDate.label}</label>
                                <input type="date" id="startDate" value={startDate} placeholder={formFields.startDate.placeholder} onChange={handleStartDate} />
                            </div>
                            <div className="end">
                                <label htmlFor="endDate">{formFields.endDate.label}</label>
                                <input type="date" id="endDate" value={endDate} placeholder={formFields.endDate.placeholder} onChange={handleEndDate} />
                            </div>
                        </div>
                        <label htmlFor="location">{formFields.location.label}</label>
                        <input type="text" id="location" value={loc} placeholder={formFields.location.placeholder} onChange={handleLocation} />
                        <div className="footerArea">
                            <div className="left">
                                <button onClick={() => deleteItem(event)}>
                                    <img className="delete-logo" src={blackDeleteIcon} alt="delete icon" />
                                    Delete
                                </button>
                            </div>
                            <div className="right">
                                <button onClick={() => cancelEdit(event)} className="cancel">Cancel</button>
                                <button onClick={() => handleFormSubmit(event)} className="save">Save</button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
            {isSectionActive && !isSectionFormActive && (
                <div className="sectionFooter">
                    <button onClick={onShowSectionForm}>
                        <img src={addIcon} alt="Add icon" />
                        {text}
                    </button>
                </div>
            )}
        </div>
    )
}

function SectionList({ items, editItem }) {
    return (
      <ul className="sectionList">
        {items.map((item, index) => (
          <li
            className="sectionListItem"
            data-key={index}
            key={index}
            onClick={() => editItem(item)}
          >
            {item.primary}
            <img src={eyeIcon} alt="Eye icon" />
          </li>
        ))}
      </ul>
    );
  }
  

const educationFormFields = {
    primary: {
    label: "School",
    placeholder: "Enter School"
    },
    secondary: {
        label: "Degree",
        placeholder: "Enter Degree"
    },
    startDate: {
        label: "Start Date",
        placeholder: "Enter Start Date"
    },
    endDate: {
        label: "End Date",
        placeholder: "Enter End Date"
    },
    location: {
        label: "Location",
        placeholder: "Enter Location"
    }
}

const experienceFormFields = {
    primary: {
    label: "Company Name",
    placeholder: "Enter Company Name"
    },
    secondary: {
        label: "Job Title",
        placeholder: "Enter Job Title"
    },
    startDate: {
        label: "Start Date",
        placeholder: "Enter Start Date"
    },
    endDate: {
        label: "End Date",
        placeholder: "Enter End Date"
    },
    location: {
        label: "Location",
        placeholder: "Enter Location"
    }
}