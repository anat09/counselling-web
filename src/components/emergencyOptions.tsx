import { FaAmbulance, FaClinicMedical, FaPhoneVolume, FaMobileAlt } from 'react-icons/fa'
import { MdOutlineLocationOn } from 'react-icons/md'
import HyperRef from './hyperRef';
import Section from './section';

interface EmergencyOptionProps {
  children: JSX.Element,
  description: JSX.Element,
  header: string,
  iconColor: string,
  link: string,
}

interface EmergencyOptionsProps {
  iconColor: string,
}

const EmergencyOption = ({ children, description, header, iconColor, link }: EmergencyOptionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center pb-5">
      <div className="pb-4 md:pb-0 md:pl-28" style={{color: iconColor}}>
        { children }
      </div>
      <div className="px-2 md:pl-8 flex flex-col items-center md:items-start leading-8 py-0 text-lg sm:py-1.5 font-lato">
        <div className="text-primary text-xl font-bold pb-2"><a href={link}>{ header }</a></div>
        { description }
      </div>
    </div>
  )
}

const EmergencyOptions = ({ iconColor }: EmergencyOptionsProps) => {
  const ICON_SIZE = 100;
  const options = [
    {
      icon: <FaClinicMedical size={ICON_SIZE}/>,
      header: 'GP or NHS Assistance',
      link: 'https://111.nhs.uk',
      description: <Section paras={[
        `If you're experiencing a mental health crisis, please contact your GP (General
        Practitioner), They should be able to support you as a first point of contact, or at least
        know what is happening for you so they can support you.`,
        <>
          If you cannot contact your GP, you can also find a local NHS urgent mental health helpline (in England only)&nbsp;
          <HyperRef link="https://www.nhs.uk/service-search/mental-health/find-an-urgent-mental-health-helpline" value="here" />,
          which is available 24/7.
        </>
      ]} />,
    },
    {
      icon: <FaAmbulance size={ICON_SIZE}/>,
      header: 'Call - 999',
      link: 'https://www.nhs.uk/nhs-services/urgent-and-emergency-care-services/when-to-call-999/',
      // description: `Call 999 if you are concerned about the safety of yourself or of somebody else! When you cannot speak, dial 999 and press 55 when prompted.
      // Please note that your location is not immediately traceable. If you can only say one thing, say your location!`,
      description: <Section paras={[
        <>
          If you are concerned about the safety of yourself or of somebody else! When you can't talk, dial
          999 then press 55 when prompted. This is called&nbsp;
          <HyperRef
            link="https://www.policeconduct.gov.uk/sites/default/files/Documents/research-learning/Silent_solution_guide.pdf"
            value="The Silent Solution system"  /> (please note that your location is not immediately traceable, if you can only say one thing, say your location!)
        </>,
        `If you just wish to talk to someone in confidentiality, the following places provide
        emotional support.`
      ]} />
    },
    {
      icon: <FaPhoneVolume size={ICON_SIZE}/>,
      header: 'Samaritans - 116 123',
      link: 'https://www.samaritans.org',
      description: <Section paras={[`If you wish to talk to someone in confidentiality, the Samaritans provide free of charge 24/7 anonymous & non-judgemental emotional support.
      By clicking on the "Samaritans" headline you will be redirected to their website.`]} />,
    },
    {
      icon: <FaMobileAlt size={ICON_SIZE}/>,
      header: 'Crisis Text Line',
      link: 'https://giveusashout.org',
      description: <Section paras={[
        <>
          Text "SHOUT" to 85258 to contact the <HyperRef link="https://giveusashout.org" value="Shout Crisis Text Line" />, or text "YM" if you're
          under 19 (Free of charge - 24/7 Anonymous Text Support).
        </>,
      ]} />,
    },
    {
      icon: <MdOutlineLocationOn size={ICON_SIZE}/>,
      header: 'Find Support in Your Area',
      link: 'https://hubofhope.co.uk',
      description: <Section paras={[
        <>
          Websites such as <HyperRef link="https://hubofhope.co.uk" value="The Hub of Hope" /> have collated a directory of local Mental Health
          Support Services, which you can find by just typing in your postcode. By clicking on
          "Find Support" you will be redirected to their website.
        </>,
      ]} />,
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