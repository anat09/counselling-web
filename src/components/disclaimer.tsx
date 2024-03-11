import Section from './section';
import SubHeader from './subHeader';

const Disclaimer = () => {
  return (
    <>
      <SubHeader title='Disclaimer' />
      <Section paras={[
        `The information contained in this website is for general information purposes only. The
        information is provided by ‘AT Counselling Services’ and while I endeavour to keep the
        information up to date and correct, I make no representations or warranties of any
        kind, express or implied, about the completeness, accuracy, reliability, suitability or
        availability with respect to the website or the information, products, services, or
        related graphics contained on the website for any purpose.`,
        `Any reliance you place on such information is therefore strictly at your own risk.
        In no event will I be liable for any loss or damage including without limitation, indirect
        or consequential loss or damage, or any loss or damage whatsoever arising from loss of
        data or profits arising out of, or in connection with, the use of this website. Your use of
        this website and any dispute arising out of such use of the website is subject to the laws
        of England, Northern Ireland, Scotland and Wales.`,
        `Through this website you can link to other websites which are not under the control of
        ‘AT Counselling Services’. I have no control over the nature, content and availability of
        those sites. The inclusion of any links does not necessarily imply a recommendation or
        endorse the views expressed within them.`,
      ]} />
      <SubHeader title='Changes to any of the above' />
      <Section paras={[
        `‘AT Counselling Services’ reserves the rights to edit these policies from time to time. If
        you are engaged in therapy, you will be notified as soon as possible of any substantial
        changes.`
      ]} />
    </>
  )
}

export default Disclaimer;