export const debug = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
}