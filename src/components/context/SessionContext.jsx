import React, { createContext } from "react";

const SessionContext = createContext({
  session: {
    token: null,
    serverStatus: null
  }
});

export default SessionContext;