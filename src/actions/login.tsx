

// const obtainSessionCookie = async (token: string) => {
//   await fetch()
// }

// export const login = (email: string, password: string) => {
//   const auth = getAuth()
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       const user = userCredential.user
//       user.getIdToken()
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }

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