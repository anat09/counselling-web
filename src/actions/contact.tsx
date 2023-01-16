export const contact = async (opts: { email: string, message: string, name: string, token: string }): Promise<Record<string, any>> => {
  const response = await fetch('/api/contact', {
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