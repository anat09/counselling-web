import { NextPageContext } from 'next'
import requestIp from 'request-ip'

export const getAdminProps = async (context: NextPageContext) => {
  const acceptConnection = () => {
		const ip = requestIp.getClientIp(context.req)
    console.log(ip)
		if (ip === "::1" || ip === "127.0.0.1" || "172.20.0.1")
			return true
		else if (ip === process.env.WHITELISTED_IP)
			return true
		else
			return false
	}
	return acceptConnection() ? {
		props: {
			isAdminPage: true,
		} 
	} : {
		redirect: {
			permanent: false,
			destination: "/",
		}
	}
}