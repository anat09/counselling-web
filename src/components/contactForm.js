import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center w-12 bg-red-500">
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"/>
        </svg>
      </div>
      
      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-red-500">Error</span>
          <p className="text-sm text-gray-600">{ message }</p>
        </div>
      </div>
    </div>
  )
}

const SuccessMessage = ({ message }) => {
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center w-12 bg-emerald-500">
        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"/>
        </svg>
      </div>
      
      <div className="px-4 py-2 -mx-3">
        <div className="mx-3">
          <span className="font-semibold text-emerald-500">Success</span>
          <p className="text-sm text-gray-600">{ message }</p>
        </div>
      </div>
    </div>
  )
}

const ContactForm = () => {
  const [ email, setEmail ] = useState('');
  const [ error, setError ] = useState(null);
  const [ message, setMessage ] = useState('');
  const [ name, setName] = useState('');
  const [ success, setSuccess ] = useState(false);
  const [ token, setToken ] = useState(null);

  const successfulResponse = "Email delivered successfully!"

  const resetState = () => {
    setEmail('');
    setError(null);
    setMessage('');
    setName('');
    setSuccess(true);
    setToken(null);
  }

  const postEmail = async () => {
    if (!token) return { error: 'Validate the reCAPTCHA challenge before submitting'}
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        message: message,
        name: name,
        token: token,
      }),
    });
    return response.json();
  }

  const handleExpired = () => {
    setToken(null)
  }
  const handleToken = (token) => {
    setToken(token)
  }

  const onSubmit = async (e) => {
      e.preventDefault(); // stops page reloading via html form default action
      postEmail().then((data) => {
      if (data.error) setError(data);
      else if (data.success) resetState();
    })
  }

  return (
    <section className="w-full font-philosopher max-w-2xl px-6 py-14 mx-auto rounded-md">
      <h2 className="text-3xl font-semibold text-center text-primary">Contact Form</h2>
      {/* <p className="mt-3 text-center text-gray-600">Feel free to reach out to me and I will try to respond as soon as possible!</p> */}
      <div className="mt-6 ">
        <form onSubmit={(e) => onSubmit(e)}>
        <div className="items-center -mx-2 md:flex">
          <div className="w-full mx-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">Name</label>
            <input
              name="name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="block w-full px-4 py-2 text-gray-700 border rounded-md ocus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="w-full mx-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm font-medium text-gray-600">E-mail</label>
            <input
              name="email"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="block w-full px-4 py-2 text-gray-700 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600">Message</label>
          <textarea
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="block w-full h-40 px-4 py-2 text-gray-700 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
        </div>

        <label className="w-full mt-4">
          <input
            name="checkbox"
            type="checkbox"
            required
            className="mr-2 leading-tight"
          />
          <span className="text-sm text-gray-700 pb-2">
            I consent to having this website store my submitted information so they can respond to my inquiry. I understand that these details will be stored for this purpose only.
          </span>
        </label>

        <div className="flex justify-center">
        <ReCAPTCHA
          sitekey={ process.env.NEXT_PUBLIC_RECAPTCHA_KEY }
          onChange={handleToken}
          onExpired={handleExpired}
        />
        </div>

        { error && <ErrorMessage message={error.error}/> }

        { success && <SuccessMessage message={successfulResponse} /> }
        
        <div className="flex justify-center mt-6">
          { 
            token === null ? (
              <button
                disabled
                name="submit"
                type="submit"
                className="px-4 py-2 text-white transition-colors duration-200 transform bg-secondary rounded-md focus:outline-none"
              >
                Send Message
              </button>
            ) : (
              <button
                name="submit"
                type="submit"
                className="px-4 py-2 text-white transition-colors duration-200 transform bg-secondary rounded-md hover:bg-secondaryDark focus:outline-none focus:bg-secondaryDark"
              >
                Send Message
              </button>
            )
          }
        </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;