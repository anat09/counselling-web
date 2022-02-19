import { FaAmbulance, FaClinicMedical, FaPhoneVolume, FaMobileAlt } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'

const EmergencyOption = ({ children, description, header, iconColor, link }) => {
  return (
    <div className="flex flex-col md:flex-row items-center pb-5">
      <div className="pb-4 md:pb-0 md:pl-28" style={{color: iconColor}}>
        { children }
      </div>
      <div className="pl-2 pr-2 md:pl-8 flex flex-col items-center md:items-start">
        <div className="font-lato text-primary text-lg font-bold pb-2"><a href={link}>{ header }</a></div>
        <div className="font-lato para">{ description }</div>
      </div>
    </div>
  )
}

const EmergencyOptions = ({ iconColor }) => {
  const ICON_SIZE = 80;
  const options = [
    {
      icon: <FaClinicMedical size={ICON_SIZE}/>,
      header: 'Find Support in Your Area',
      link: 'https://hubofhope.co.uk',
      description: `Websites such as "The Hub of Hope" have collated a directory of local Mental Health Support Services,
      which you can find by just typing in your postcode. By clicking on "Find Support in Your Area" you will be redirected to their website.`,
    },
    {
      icon: <MdOutlineLocationOn size={ICON_SIZE}/>,
      header: 'NHS Assistance - 111',
      link: 'https://111.nhs.uk',
      description: `If you are experiencing a Mental Health Crisis, please contact your GP (General Practitioner).
      If you cannot contact your GP, but you need urgent help with your mental health, you may get advice by calling 111 or by contacting them online (click on "111" above)`,
    },
    {
      icon: <FaPhoneVolume size={ICON_SIZE}/>,
      header: 'Samaritans - 116 123',
      link: 'https://www.samaritans.org',
      description: `If you wish to talk to someone in confidentiality, the Samaritans provide free of charge 24/7 anonymous & non-judgemental emotional support.
      By clicking on the "Samaritans" headline you will be redirected to their website.`,
    },
    {
      icon: <FaMobileAlt size={ICON_SIZE}/>,
      header: 'SHOUT - 85 258',
      link: 'https://giveusashout.org',
      description: `Alternatively, SHOUT provide free of charge 24/7 mental health text support in confidentiality. By clicking on the "SHOUT" headline you will be redirected to their website.`,
    },
    {
      icon: <FaAmbulance size={ICON_SIZE}/>,
      header: 'Emergency Services - 999',
      link: 'https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-call-999/',
      description: `Call 999 if you are concerned about the safety of yourself or of somebody else! When you cannot speak, dial 999 and press 55 when prompted.
      Please note that your location is not immediately traceable. If you can only say one thing, say your location!`,
    },
  ]
  return options.map((option) => (
    <EmergencyOption
      description={option.description}
      header={option.header}
      iconColor={iconColor}
      link={option.link}
    >
      {option.icon}
    </EmergencyOption>
  ));
}

EmergencyOptions.defaultProps = {
  iconColor: "#80719c"
}

export default EmergencyOptions