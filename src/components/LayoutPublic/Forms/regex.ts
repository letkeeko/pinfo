export const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const usernamePattern = /^[A-Z0-9\_\.]{3,30}$/i;

export const passwordPattern =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i;

export const urlPattern =
  /^https:\/\/[A-Z0-9\/\.\(\)#;,$&\+*:%@='~_!\[\]\-\?]+$/i;

export const noSpecialPattern = /^[A-Z0-9\-\/\s]+$/i;
