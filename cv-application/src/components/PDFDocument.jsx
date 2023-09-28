import { Page, Text, Svg, View, Document, StyleSheet, Path, Font } from '@react-pdf/renderer';
import RobotoFont from "../assets/Roboto/Roboto-Regular.ttf"


export default function PDFDocument({
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
    layout,
    theme: {
        accentColor,
        mainColor,
        textColor
    },
    font,
}) {

    Font.register({family: 'Roboto', src: RobotoFont})

    // Create styles
    let styles

    const topLayoutStyles = StyleSheet.create({
        pdf: {
            fontFamily: font,
        },
        page: {
            display: 'flex',
            flexDirection: 'column',
        },
        section1: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 50,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 50,
            backgroundColor: accentColor
        },
        name: {
            color: textColor,
            fontFamily: font,
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 5
        },
        info: {
            width: '100%',
            display: "flex",
            flexDirection: "row",
            justifyContent: 'space-evenly',
        },
        infoDetails: {
            display: "flex",
            flexDirection: "row"
        },
        infoDetailsText: {
            color: textColor,
            fontSize: 12,
        },
        svg: {
            width: 15,
            height: 15,
            marginRight: 5,
        },
        section2: {
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '80vh',
            paddingTop: 50,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 50,
        },
        items: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 50
        },
        itemsTitle: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: mainColor,
            color: accentColor,
            fontWeight: 'bold',
            fontSize: 18,
            paddingTop: 5,
            paddingBottom: 5,
            marginBottom: 10
        },
        itemsDetails: {
            display: 'flex',
            flexDirection: 'column',
        },
        item: {
            display: 'flex',
            flexDirection: 'row',
        },
        itemLeft: {
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginRight: 40,

        },
        itemRight: {
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
        },
        itemDate: {
            fontSize: 12
        },
        itemLocation: {
            fontSize: 12
        },
        itemPrimary: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        itemSecondary: {
            fontSize: 12,
        }
    });

    const leftLayoutStyles = StyleSheet.create({
        pdf: {
            fontFamily: font,
        },
        page: {
            display: 'flex',
            flexDirection: 'row',
            minHeight: '100vh'
        },
        section1: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '35%',
            paddingTop: 50,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 50,
            backgroundColor: accentColor
        },
        name: {
            color: textColor,
            fontFamily: font,
            fontSize: 18,
            fontWeight: 800,
            marginBottom: 10
        },
        info: {
            width: '100%',
            display: "flex",
            flexDirection: "column",
            justifyContent: 'space-evenly',
        },
        infoDetails: {
            display: "flex",
            flexDirection: "row",
            paddingLeft: 10,
            marginBottom: 10,
        },
        infoDetailsText: {
            color: textColor,
            fontSize: 10,
        },
        svg: {
            width: 15,
            height: 15,
            marginRight: 5,
        },
        section2: {
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            width: '65%',
            paddingTop: 50,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 50,
        },
        items: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 50
        },
        itemsTitle: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: mainColor,
            color: accentColor,
            fontWeight: 'bold',
            fontSize: 14,
            paddingTop: 5,
            paddingBottom: 5,
            marginBottom: 10
        },
        itemsDetails: {
            display: 'flex',
            flexDirection: 'column',
        },
        item: {
            display: 'flex',
            flexDirection: 'row',
        },
        itemLeft: {
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginRight: 10,
        },
        itemRight: {
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
        },
        itemDate: {
            fontSize: 12
        },
        itemLocation: {
            fontSize: 12
        },
        itemPrimary: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        itemSecondary: {
            fontSize: 10,
        }
    });

    const rightLayoutStyles = StyleSheet.create({
        pdf: {
            fontFamily: font,
        },
        page: {
            display: 'flex',
            flexDirection: 'row-reverse',
            minHeight: '100vh'
        },
        section1: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '35%',
            paddingTop: 50,
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 50,
            backgroundColor: accentColor
        },
        name: {
            color: textColor,
            fontFamily: font,
            fontSize: 18,
            fontWeight: 800,
            marginBottom: 10
        },
        info: {
            width: '100%',
            display: "flex",
            flexDirection: "column",
            justifyContent: 'space-evenly',
        },
        infoDetails: {
            display: "flex",
            flexDirection: "row",
            paddingLeft: 10,
            marginBottom: 10,
        },
        infoDetailsText: {
            color: textColor,
            fontSize: 10,
        },
        svg: {
            width: 15,
            height: 15,
            marginRight: 5,
        },
        section2: {
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            width: '65%',
            paddingTop: 50,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 50,
        },
        items: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 50
        },
        itemsTitle: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: mainColor,
            color: accentColor,
            fontWeight: 'bold',
            fontSize: 14,
            paddingTop: 5,
            paddingBottom: 5,
            marginBottom: 10
        },
        itemsDetails: {
            display: 'flex',
            flexDirection: 'column',
        },
        item: {
            display: 'flex',
            flexDirection: 'row',
        },
        itemLeft: {
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            marginRight: 20,
        },
        itemRight: {
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
        },
        itemDate: {
            fontSize: 12
        },
        itemLocation: {
            fontSize: 12
        },
        itemPrimary: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        itemSecondary: {
            fontSize: 10,
        }
    });

    if (layout === 'topLayout') {
        styles = topLayoutStyles
    } else if (layout === 'leftLayout') {
        styles = leftLayoutStyles
    } else if (layout === 'rightLayout') {
        styles = rightLayoutStyles
    }

    return (
        <>
            <Document style={styles.pdf}>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section1}>
                        <View>
                            <Text style={styles.name}>{fullname}</Text>
                        </View>
                        <View style={styles.info}>
                            {email.length > 0 && (
                                <>
                                    <View style={styles.infoDetails}>
                                        <Svg style={styles.svg} viewBox="0 0 512 512">
                                            <Path
                                                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                                                stroke="#000000"
                                                fill={textColor}
                                            />
                                        </Svg>
                                        <Text style={styles.infoDetailsText}>{email}</Text>
                                    </View>
                                </>
                            )}
                            {phoneNumber.length > 0 && (
                                <>
                                    <View style={styles.infoDetails}>
                                        <Svg style={styles.svg} viewBox="0 0 512 512">
                                            <Path
                                                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                                                stroke="#000000"
                                                fill={textColor}
                                            />
                                        </Svg>
                                        <Text style={styles.infoDetailsText}>{phoneNumber}</Text>
                                    </View>
                                </>
                            )}
                            {address.length > 0 && (
                                <>
                                    <View style={styles.infoDetails}>
                                        <Svg style={styles.svg} viewBox="0 0 512 512">
                                            <Path
                                                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                                                stroke="#000000"
                                                fill={textColor}
                                            />
                                        </Svg>
                                        <Text style={styles.infoDetailsText}>{address}</Text>
                                    </View>
                                </>
                            )}
                        </View>
                    </View>
                    <View style={styles.section2}>
                        <View style={styles.items}>
                            {educationItems.length > 0 && (
                                <>
                                    <View style={styles.itemsTitle}>
                                        <Text>Education</Text>
                                    </View>
                                    <View style={styles.itemsDetails}>
                                        {educationItems.map(item => (
                                            <>
                                                <View style={styles.item}>
                                                    <View style={styles.itemLeft}>
                                                        <Text style={styles.itemDate}>{item.startDate} - {item.endDate}</Text>
                                                        <Text style={styles.itemLocation}>{item.loc}</Text>
                                                    </View>
                                                    <View style={styles.itemRight}>
                                                        <Text style={styles.itemPrimary}>{item.primary}</Text>
                                                        <Text style={styles.itemSecondary}>{item.secondary}</Text>
                                                    </View>
                                                </View>
                                            </>
                                        ))}
                                    </View>
                                </>
                            )}
                        </View>
                        <View style={styles.items}>
                            {experienceItems.length > 0 && (
                                <>
                                    <View style={styles.itemsTitle}>
                                        <Text>Professional Experience</Text>
                                    </View>
                                    <View style={styles.itemsDetails}>
                                        {experienceItems.map(item => (
                                            <>
                                                <View style={styles.item}>
                                                    <View style={styles.itemLeft}>
                                                        <Text style={styles.itemDate}>{item.startDate} - {item.endDate}</Text>
                                                        <Text style={styles.itemLocation}>{item.loc}</Text>
                                                    </View>
                                                    <View style={styles.itemRight}>
                                                        <Text style={styles.itemPrimary}>{item.primary}</Text>
                                                        <Text style={styles.itemSecondary}>{item.secondary}</Text>
                                                    </View>
                                                </View>
                                            </>
                                        ))}
                                    </View>
                                </>
                            )}
                        </View>
                    </View>
                </Page>
            </Document>
        </>
    )
}