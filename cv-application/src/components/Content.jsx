import blackDeleteIcon from "../assets/delete-black.svg"
import educationIcon from "../assets/education.svg"
import experienceIcon from "../assets/experience.svg"
import downArrowIcon from "../assets/down-arrow.svg"
import addIcon from "../assets/add.svg"
import eyeIcon from "../assets/eye.svg"
import "../styles/Content.css";


export default function Content({
  personalDetailsFormStates: {
    fullname,
    email,
    phoneNumber,
    address
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
    setCompanyLocation
  },
  educationSectionFormEventHandlers: {
    handleSchoolChange,
    handleDegreeChange,
    handleSchoolStartDateChange,
    handleSchoolEndDateChange,
    handleSchoolLocationChange
  },
  experienceSectionFormEventHandlers: {
    handleCompanyChange,
    handleJobTitleChange,
    handleCompanyStartDateChange,
    handleCompanyEndDateChange,
    handleCompanyLocationChange
  }
}) {

  // Function to toggle the visibility of a section
  const toggleSection = (index) => {
    if (isSectionActiveIndex === index) {
      // If the section is already active, deactivate it
      setIsSectionActiveIndex(null);
      setSectionFormActiveIndex(null);
    } else {
      // If the section is not active, activate it
      setIsSectionActiveIndex(index);
      setSectionFormActiveIndex(null);
    }
  };

  // Function to show the form for a specific section
  const showForm = (index) => {
    setSectionFormActiveIndex(index);
  };

  // Function to hide the form for a section
  const hideForm = () => {
    setSectionFormActiveIndex(null);
  };

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

  return (
    <div className="content">
      {/* Render the personal details section */}
      <PersonalDetails
        fullname={fullname}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
        handleFullnameChange={handleFullnameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        handleAddressChange={handleAddressChange}
      />

      {/* Render the education section */}
      <Section
        items={educationItems}
        setItems={setEducationItems}
        itemEdit={educationItemEdit}
        setItemEdit={setEducationItemEdit}
        itemEditIndex={educationItemEditIndex}
        setItemEditIndex={setEducationItemEditIndex}
        primary={school}
        setPrimary={setSchool}
        secondary={degree}
        setSecondary={setDegree}
        startDate={schoolStartDate}
        setStartDate={setSchoolStartDate}
        endDate={schoolEndDate}
        setEndDate={setSchoolEndDate}
        loc={schoolLocation}
        setLoc={setSchoolLocation}
        handlePrimary={handleSchoolChange}
        handleSecondary={handleDegreeChange}
        handleStartDate={handleSchoolStartDateChange}
        handleEndDate={handleSchoolEndDateChange}
        handleLocation={handleSchoolLocationChange}
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

      {/* Render the experience section */}
      <Section
        items={experienceItems}
        setItems={setExperienceItems}
        itemEdit={experienceItemEdit}
        setItemEdit={setExperienceItemEdit}
        itemEditIndex={experienceItemEditIndex}
        setItemEditIndex={setExperienceItemEditIndex}
        primary={company}
        setPrimary={setCompany}
        secondary={jobTitle}
        setSecondary={setJobTitle}
        startDate={companyStartDate}
        setStartDate={setCompanyStartDate}
        endDate={companyEndDate}
        setEndDate={setCompanyEndDate}
        loc={companyLocation}
        setLoc={setCompanyLocation}
        handlePrimary={handleCompanyChange}
        handleSecondary={handleJobTitleChange}
        handleStartDate={handleCompanyStartDateChange}
        handleEndDate={handleCompanyEndDateChange}
        handleLocation={handleCompanyLocationChange}
        mainIcon={experienceIcon}
        text="Professional Experience"
        addIcon={addIcon}
        isSectionActive={isSectionActiveIndex === 1}
        onShow={() => toggleSection(1)}
        formFields={experienceFormFields}
        isSectionFormActive={sectionFormActiveIndex === 1}
        onShowSectionForm={() => showForm(1)}
        onHideSectionForm={() => hideForm()}
      />
    </div>
  );
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
  // Define an array of input field configurations for the personal details section
  const inputFields = [
    { id: "name", label: "Full name", placeholder: "First and last name", value: fullname, onChange: handleFullnameChange },
    { id: "email", label: "Email", placeholder: "Enter email", value: email, onChange: handleEmailChange },
    { id: "phone", label: "Phone number", placeholder: "Enter phone number", value: phoneNumber, onChange: handlePhoneNumberChange },
    { id: "address", label: "Address", placeholder: "City, Country", value: address, onChange: handleAddressChange },
  ];

  // Render the personal details section
  return (
    <div className="personalDetails">
      <h1>Personal Details</h1>
      <form action="" className="personalDetailsForm">
        {inputFields.map((field) => (
          <>
            {/* Label for the input field */}
            <label htmlFor={field.id}>
              {field.label} <span>recommended</span>
            </label>
            {/* Input field with its value, placeholder, and onChange event handler */}
            <input type="text" id={field.id} value={field.value} placeholder={field.placeholder} onChange={field.onChange} />
          </>
        ))}
      </form>
    </div>
  );
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
  onHideSectionForm
}) {
  // Function to reset input fields in the section form
  const resetInputs = () => {
    setPrimary("");
    setSecondary("");
    setStartDate("");
    setEndDate("");
    setLoc("");
  };

  // Function to cancel editing and hide the section form
  const cancelEdit = () => {
    resetInputs();
    onHideSectionForm();
    setItemEdit(false);
    setItemEditIndex(null);
  };

  // Function to handle form submission for adding or editing items
  const handleFormSubmit = () => {
    const newItems = [...items];

    const item = {
      primary,
      secondary,
      startDate,
      endDate,
      loc
    };

    if (itemEdit) {
      newItems[itemEditIndex] = item; // Update an existing item
    } else {
      newItems.push(item); // Add a new item
    }

    // Update the section items
    setItems(newItems);
    setItemEdit(false);
    setItemEditIndex(null);

    // Hide the section form and reset input fields
    onHideSectionForm();
    resetInputs();
  };

  // Function to delete an item from the section
  const deleteItem = () => {
    const newItems = [...items];
    newItems.splice(itemEditIndex, 1);
    setItems(newItems);
    setItemEdit(false);

    // Hide the section form and reset input fields
    onHideSectionForm();
    resetInputs();
  };

  // Function to edit an existing item in the section
  const editItem = (index) => {
    setItemEdit(true);
    setItemEditIndex(index);

    // Populate input fields with the item data and show the section form
    const item = items[index];
    setPrimary(item.primary);
    setSecondary(item.secondary);
    setStartDate(item.startDate);
    setEndDate(item.endDate);
    setLoc(item.loc);
    onShowSectionForm();
  };

  return (
    <div className="section">
      <div className="sectionHeader">
        <div className="info">
          {/* Display the main icon and section title */}
          <img className="mainIcon" src={mainIcon} alt={text + ' ' + 'icon'} />
          <h2>{text}</h2>
        </div>
        <button onClick={onShow}>
          {/* Display an arrow icon to toggle section visibility */}
          <img className={isSectionActive ? 'arrowAnimation' : undefined} src={downArrowIcon} alt="Down arrow icon" />
        </button>
      </div>
      <div className="sectionBody">
        {/* Display the list of section items if the section is active and not in edit mode */}
        {items.length > 0 && isSectionActive && !isSectionFormActive && (
          <SectionList items={items} editItem={editItem} />
        )}
        {/* Display the section form if it is in edit or add mode */}
        {isSectionFormActive && (
          <form action="" className="sectionForm" onSubmit={() => handleFormSubmit()} onReset={() => cancelEdit()}>
            {/* Input fields for section data */}
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
                <button onClick={() => deleteItem()}>
                  {/* Button to delete the item */}
                  <img className="delete-logo" src={blackDeleteIcon} alt="delete icon" />
                  Delete
                </button>
              </div>
              <div className="right">
                {/* Buttons for canceling or saving the form */}
                <button type="reset" className="cancel">Cancel</button>
                <button type="submit" className="save">Save</button>
              </div>
            </div>
          </form>
        )}
      </div>
      {/* Button to add a new item to the section */}
      {isSectionActive && !isSectionFormActive && (
        <div className="sectionFooter">
          <button onClick={onShowSectionForm}>
            <img src={addIcon} alt="Add icon" />
            {text}
          </button>
        </div>
      )}
    </div>
  );
}

function SectionList({ items, editItem }) {
  return (
    <ul className="sectionList">
      {/* Map through the items and render each item in the list */}
      {items.map((item, index) => (
        <li
          className="sectionListItem"
          key={index}
          onClick={() => editItem(index)}
        >
          {/* Display the primary data of the item and an eye icon */}
          {item.primary}
          <img src={eyeIcon} alt="Eye icon" />
        </li>
      ))}
    </ul>
  );
} 