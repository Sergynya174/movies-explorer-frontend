import { errMessages } from "../const/errMessages";

export const getErrMessage = (error) => {
    error = error.split(':')[0];
    const code = error.match(/\d+/gm)[0];
    console.log(error.match(/\d+/gm));
    console.log(code);
    return `${error}: ` + errMessages[code];
  };