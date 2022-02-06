import EmergencyOptions from '../components/emergencyOptions.js'

export default function Emergency() {
  return (
    <>
      <div className="text-primary font-lato text-6xl">Emergency Contacts</div>
      <section className="font-lato p-2.5">
        <p className="para">No matter what you are going through, please know that there is a great amount of support out there.</p>
      </section>
      <EmergencyOptions />
    </>
  )
}