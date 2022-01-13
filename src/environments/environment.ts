// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  uploadImageHostname: "node.deso.org",
  verificationEndpointHostname: "http://localhost:18001",
  uploadVideoHostname: "node.deso.org",
  identityURL: "https://identity.deso.org",
  supportEmail: "",
  dd: {
    apiKey: "4397c1da9c4c465369fee8f2ce6ea9c4",
    jsPath: "https://discoverdeso.com/tags.js",
    ajaxListenerPath: "discoverdeso.com/api",
    endpoint: "https://discoverdeso.com/js/",
  },
  amplitude: {
    key: "",
    domain: "",
  },
  node: {
    name: "DiscoverDeso",
    url: "https://discoverdeso.com",
    logoAssetDir: "/assets/discoverdeso/",
  },
};
