export interface ICredentials {
	email: string
	password: string
}

export type LoginContextType = {
	credentials: ICredentials
	setCredentials: (credentials: ICredentials) => void
  submitCredentials: () => void
}