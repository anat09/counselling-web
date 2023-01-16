export const enquire = async (opts: { email: string, message: string, name: string, token: string }): Promise<Record<string, any>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/enquiries`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: opts.email,
      message: opts.message,
      name: opts.name,
      token: opts.token,
    }),
  });
  return response.json();
}