import { sample } from "../../sample";
import blackDeleteIcon from "../assets/delete-black.svg"
import deleteIcon from "../assets/delete-red.svg"
import educationIcon from "../assets/education.svg"
import experienceIcon from "../assets/experience.svg"
import downArrowIcon from "../assets/down-arrow.svg"
import addIcon from "../assets/add.svg"
import eyeIcon from "../assets/eye.svg"
import "../styles/Content.css";

export default function Content({formInputs, formInputsEventHandlers, sectionStates}) {

    const loadSample = () => {
        formInputs.setFullname(sample.fullname)
        formInputs.setEmail(sample.email)
        formInputs.setPhoneNumber(sample.phoneNumber)
        formInputs.setAddress(sample.address)

        const educationItems = sectionStates.items.education.items
        const experienceItems = sectionStates.items.experience.items

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

        educationItems.push(educationItem)
        experienceItems.push(experienceItem)
        sectionStates.items.education.setItems(educationItems)
        sectionStates.items.experience.setItems(experienceItems)

    }

    const clearResume = () => {
        formInputs.setFullname("")
        formInputs.setEmail("")
        formInputs.setPhoneNumber("")
        formInputs.setAddress("")

        const educationItems = sectionStates.items.education.items
        const experienceItems = sectionStates.items.experience.items

        educationItems.length = 0
        experienceItems.length = 0

        sectionStates.items.education.setItems(educationItems)
        sectionStates.items.experience.setItems(experienceItems)
    }

    const toggleSection = (index) => {
        if (sectionStates.isSectionActiveIndex === index) {
            sectionStates.setIsSectionActiveIndex(null)
            sectionStates.setSectionFormActiveIndex(null)
        } else {
            sectionStates.setIsSectionActiveIndex(index)
            sectionStates.setSectionFormActiveIndex(null)
        }
    }

    const showForm = (index) => {
        sectionStates.setSectionFormActiveIndex(index)
    }

    const hideForm = () => {
        sectionStates.setSectionFormActiveIndex(null)
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
            
            <PersonalDetails formInputs={formInputs} formInputsEventHandlers={formInputsEventHandlers} />

            <Section sectionStates={sectionStates.items.education} formInputs={formInputs.education} formInputsEventHandlers={formInputsEventHandlers.education} mainIcon={educationIcon} text="Education" addIcon={addIcon} isSectionActive={sectionStates.isSectionActiveIndex === 0} onShow={() => toggleSection(0)} formFields={educationFormFields} isSectionFormActive={sectionStates.sectionFormActiveIndex === 0} onShowSectionForm={() => showForm(0)} onHideSectionForm={() => hideForm()} />

            <Section sectionStates={sectionStates.items.experience} formInputs={formInputs.experience} formInputsEventHandlers={formInputsEventHandlers.experience} mainIcon={experienceIcon} text="Professional Experience" addIcon={addIcon} isSectionActive={sectionStates.isSectionActiveIndex === 1} onShow={() => toggleSection(1)} formFields={experienceFormFields} isSectionFormActive={sectionStates.sectionFormActiveIndex  === 1} onShowSectionForm={() => showForm(1)} onHideSectionForm={() => hideForm()} />
        </div>
    )
}

function PersonalDetails({formInputs, formInputsEventHandlers}) {
    return (
        <div className="personalDetails">
            <h1>Personal Details</h1>
            <form action="" className="personalDetailsForm">
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" value={formInputs.fullname} placeholder="First and last name" onChange={formInputsEventHandlers.handleFullnameChange} />
                <label htmlFor="email">Email <span>recommended</span></label>
                <input type="email" id="email" value={formInputs.email} placeholder="Enter email" onChange={formInputsEventHandlers.handleEmailChange} />
                <label htmlFor="phone">Phone number <span>recommended</span></label>
                <input type="text" id="phone" value={formInputs.phoneNumber} placeholder="Enter phone number" onChange={formInputsEventHandlers.handlePhoneNumberChange} />
                <label htmlFor="address">Address <span>recommended</span></label>
                <input type="text" id="address" value={formInputs.address} placeholder="City, Country" onChange={formInputsEventHandlers.handleAddressChange} />
            </form>
        </div>
    )
}

function Section({sectionStates, formInputs, formInputsEventHandlers, mainIcon, text, addIcon, isSectionActive, onShow, formFields, isSectionFormActive, onShowSectionForm, onHideSectionForm}) {

    const resetInputs = () => {
        formInputs.setPrimary("")
        formInputs.setSecondary("")
        formInputs.setStartDate("")
        formInputs.setEndDate("")
        formInputs.setLoc("")
    }

    const cancelEdit = (event) => {
        event.preventDefault()
        resetInputs()
        onHideSectionForm()
        sectionStates.setItemEdit(false)
        sectionStates.setItemEditIndex(null)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const newItems = sectionStates.items
        
        const item = {
            primary: formInputs.primary,
            secondary: formInputs.secondary,
            startDate: formInputs.startDate,
            endDate: formInputs.endDate,
            loc: formInputs.loc
        }

        if (sectionStates.itemEdit) {
            newItems[sectionStates.itemEditIndex] = item
            sectionStates.setItems(newItems)
            sectionStates.setItemEdit(false)
            sectionStates.setItemEditIndex(null)
        } else {
            newItems.push(item)
            sectionStates.setItems(newItems)
            sectionStates.setItemEditIndex(null)
        }

        onHideSectionForm()
        resetInputs()
    }

    const deleteItem = (event) => {
        event.preventDefault()
        const newItems = sectionStates.items
        newItems.splice(sectionStates.itemEditIndex, 1)
        sectionStates.setItems(newItems)
        sectionStates.setItemEdit(false)

        onHideSectionForm()
        resetInputs()
    }

    const editItem = (event) => {
        const index = Number(event.target.dataset.key)
        sectionStates.setItemEdit(true)
        sectionStates.setItemEditIndex(index)

        const item = sectionStates.items[index]

        const newPrimary = item.primary
        const newSecondary = item.secondary
        const newStartDate = item.startDate
        const newEndDate = item.endDate
        const newLoc = item.loc

        formInputs.setPrimary(newPrimary)
        formInputs.setSecondary(newSecondary)
        formInputs.setStartDate(newStartDate)
        formInputs.setEndDate(newEndDate)
        formInputs.setLoc(newLoc)

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
                {sectionStates.items.length > 0 && isSectionActive && !isSectionFormActive && (
                    <SectionList items={sectionStates.items} editItem={() => editItem(event)} />
                )}
                {isSectionFormActive && (
                    <form action="" className="sectionForm">
                        <label htmlFor="primary">{formFields.primary.label}</label>
                        <input type="text" id="primary" value={formInputs.primary} placeholder={formFields.primary.placeholder} onChange={formInputsEventHandlers.primary} />
                        <label htmlFor="secondary">{formFields.secondary.label}</label>
                        <input type="text" id="secondary" value={formInputs.secondary} placeholder={formFields.secondary.placeholder} onChange={formInputsEventHandlers.secondary} />
                        <div className="dateArea">
                            <div className="start">
                                <label htmlFor="startDate">{formFields.startDate.label}</label>
                                <input type="date" id="startDate" value={formInputs.startDate} placeholder={formFields.startDate.placeholder} onChange={formInputsEventHandlers.startDate} />
                            </div>
                            <div className="end">
                                <label htmlFor="endDate">{formFields.endDate.label}</label>
                                <input type="date" id="endDate" value={formInputs.endDate} placeholder={formFields.endDate.placeholder} onChange={formInputsEventHandlers.endDate} />
                            </div>
                        </div>
                        <label htmlFor="location">{formFields.location.label}</label>
                        <input type="text" id="location" value={formInputs.loc} placeholder={formFields.location.placeholder} onChange={formInputsEventHandlers.loc} />
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

function SectionList({items, editItem}) {
    const listItems = items.map((item, index) =>
        <li className="sectionListItem" data-key={index} key={index} onClick={editItem}>
            {item.primary}
            <img src={eyeIcon} alt="Eye icon" />
        </li>
    )

    return <ul className="sectionList">{listItems}</ul>
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