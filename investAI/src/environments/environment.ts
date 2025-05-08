// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

// The list of file replacements can be found in `angular.json`.
export const apiUrl = 'http://localhost:8080';

export const environment = {
  production: false,
  endpoints: {
    frame: `${apiUrl}/frames/`,
    calculator: `${apiUrl}/calculate`,
    passepartout: `${apiUrl}/passepartout/`,
    settings: `${apiUrl}/settings/`,
    auth: `${apiUrl}/authentication`,
    password: `${apiUrl}/password/`,
    roles: `${apiUrl}/roles/`,
  },
  jwt: {
    encryptionKey: 'Qs23RBNF330ms00n',
    allowedDomain: [apiUrl, apiUrl.replace('http://', '')],
    refresh: {
      minutesBeforeTokenExpiration: 8
    }
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
