// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId: 'f29b81501eda4c60b5160c2713017d3f',
  authorizeUrl: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/auth/redirect',
  scopes: ['user-library-modify', 'user-library-read'],
  logoUrl: 'https://res.cloudinary.com/dnat0jmou/image/upload/v1643209622/logo_cpghqu.png',
  baseUrl: 'https://api.spotify.com/v1',
  endpoints: {
    recommendations: 'recommendations',
    tracks: 'tracks',
    me: 'me',
    favorites: 'me/tracks',
    checkFavorites: 'me/tracks/contains',
    albums: 'albums'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
