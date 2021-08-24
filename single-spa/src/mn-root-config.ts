import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@mn/mf-react-1",
  app: () => System.import("@mn/mf-react-1"),
  activeWhen: (location) => location.pathname === "/mf-react-1",
});

registerApplication({
  name: "@mn/mf-react-header",
  app: () => System.import("@mn/mf-react-header"),
  activeWhen: ['/'],
});

registerApplication({
  name: "@mn/mf-react-2",
  app: () => System.import("@mn/mf-react-2"),
  activeWhen: (location) => location.pathname.includes("/mf-react-2"),
});

registerApplication({
  name: "@mn/mf-react-3",
  app: () => System.import("@mn/mf-react-3"),
  activeWhen: (location) => location.pathname.includes("/mf-react-3"),
});

registerApplication({
  name: "@mn/parcel-react-1",
  app: () => System.import("@mn/parcel-react-1"),
  activeWhen: (location) => location.pathname === "/parcel-react-1",
});

// registerApplication({
//   name: "@mn/navbar",
//   app: () => System.import("@mn/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
