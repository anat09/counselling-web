export const logout = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/logout`, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
}