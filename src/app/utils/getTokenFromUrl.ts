export const getTokenFromUrl = (hash: any) => {
  const data = hash.substring(1).split('&').reduce( (initial: any, item: string) => {
      let parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])
      return initial
  }, {})

  return {
    token: data.ccess_token,
    expires: parseInt(data.expires_in)
  };
}
