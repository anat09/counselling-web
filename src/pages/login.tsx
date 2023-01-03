import { useState } from 'react'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'

import SignIn from '../horizon-ui/pages/auth/sign-in'

import { login } from '../actions/login'
import { LoginContext } from '../context/login'
import { getAdminProps } from '../getAdminProps'

export default function Login() {
	const router = useRouter()
	const [ credentials, setCredentials ] = useState({
		email: "",
		password: ""
	})

	const submitCredentials = () => {
		login(credentials.email, credentials.password)
			.then((res) => {
				if (res.status === 200)
					router.push("/admin")
				else
					console.error(res.body)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	const context = { credentials, setCredentials, submitCredentials }
	return (
		<LoginContext.Provider value={context}>
			<SignIn />
		</LoginContext.Provider>
	)
}

export async function getServerSideProps(context: NextPageContext) {
	return await getAdminProps(context)
}