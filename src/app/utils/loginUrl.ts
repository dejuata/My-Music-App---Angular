import { environment } from 'src/environments/environment';


export const loginUrl = ( ) => {
  const { authorizeUrl, clientId, redirectUrl, scopes } = environment;
  return `${authorizeUrl}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&show_dialog=true`;
}
