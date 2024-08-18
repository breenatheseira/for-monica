import { createContext } from "react";

const SessionContext = createContext({
  token: '',
  id: '',
  passcode: '',
  serverStatus: ''
});

export default SessionContext;