import { useState } from 'react'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'

import SignIn from '../horizon-ui/pages/auth/sign-in'

import { login } from '../actions/login'
import { LoginContext } from '../contexts/login'
import { getAdminProps } from '../getAdminProps'

export default function Login() {
	const router = useRouter()
	const [ credentials, setCredentials ] = useState({
		email: "",
		password: ""
	})
	const [ loading, setLoading ] = useState(false)

	const submitCredentials = () => {
		setLoading(true)
		login(credentials.email, credentials.password)
			.then((res) => {
				if (res.status === 200)
					router.push("/admin")
				else {
					console.error(res.body)
					setLoading(false)
				}
			})
			.catch((err) => {
				setLoading(false)
				console.error(err)
			})
	}

	const context = { credentials, loading, setCredentials, submitCredentials }
	return (
		<LoginContext.Provider value={context}>
			<SignIn />
		</LoginContext.Provider>
	)
}

export async function getServerSideProps(context: NextPageContext) {
	return await getAdminProps(context)
}