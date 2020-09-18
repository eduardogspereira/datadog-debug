import React from "react";
import ReactDOM from "react-dom";
import { datadogRum } from "@datadog/browser-rum";
import App from "./App";

datadogRum.init({
  applicationId: "REDACTED",
  clientToken: "REDACTED",
  sampleRate: 100,
  service: "debug",
  site: "datadoghq.com",
  trackInteractions: true,
  version: "1",
});

ReactDOM.render(<App />, document.getElementById("root"));
