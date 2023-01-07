export const login = async (email: string, password: string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email, password: password})
  })
}