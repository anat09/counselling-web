export interface ICredentials {
	email: string
	password: string
}

export type LoginContextType = {
	credentials: ICredentials
	loading: boolean
	setCredentials: (credentials: ICredentials) => void
  submitCredentials: () => void
}