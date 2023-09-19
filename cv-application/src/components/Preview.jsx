import whiteEnvolopeIcon from "../assets/envelope-white.svg"
import whitePhoneIcon from "../assets/phone-white.svg"
import whiteLocationIcon from "../assets/location-white.svg"
import "../styles/Preview.css"

export default function Preview({
    personalDetailsFormStates: {
        fullname,
        email,
        phoneNumber,
        address
    },
    educationSectionStates: {
        educationItems,
    },
    experienceSectionStates: {
        experienceItems,
    },
    layout
}) {

    return (
        <div className={"preview" + ' ' + layout}>
            <div className="bioData">   
                <div className="heading">
                    <div className="fullname">
                        <h1>{fullname}</h1>
                    </div>
                </div>
                <div className={"details" + ' ' + layout}>
                    <div className="email">
                        {email.length > 0 && (
                            <>
                                <img src={whiteEnvolopeIcon} alt="Envelope icon" />
                                <p>{email}</p>
                            </>
                        )}
                    </div>
                    <div className="phoneNumber">
                        {phoneNumber.length > 0 && (
                            <>
                                <img src={whitePhoneIcon} alt="Phone icon" />
                                <p>{phoneNumber}</p>
                            </>
                        )}
                    </div>
                    <div className="address">
                        {address.length > 0 && (
                            <>
                                <img src={whiteLocationIcon} alt="Location icon" />
                                <p>{address}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="resume">
                {educationItems.length > 0 && (
                    <div className="education">
                        <div className="title">Education</div>
                        {educationItems.map(item => (
                            <>
                                <div className="details">
                                    <div className="left">
                                        <p className="date">{item.startDate} - {item.endDate}</p>
                                        <p className="location">{item.loc}</p>
                                    </div>
                                    <div className="right">
                                        <p className="primary">{item.primary}</p>
                                        <p className="secondary">{item.secondary}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                )}
                {experienceItems.length > 0 && (
                    <div className="experience">
                        <div className="title">Professional Experience</div>
                        {experienceItems.map(item => (
                            <>
                                <div className="details">
                                    <div className="left">
                                        <p className="date">{item.startDate} - {item.endDate}</p>
                                        <p className="location">{item.loc}</p>
                                    </div>
                                    <div className="right">
                                        <p className="primary">{item.primary}</p>
                                        <p className="secondary">{item.secondary}</p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}