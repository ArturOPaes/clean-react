import { atom } from 'recoil'

export const loginState = atom({
  key: 'loginState',
  default: {
    isLoading: false,
    email: '',
    password: '',
    isFormInvalid: false,
    emailError: '',
    passwordError: '',
    mainError: ''
  }
})
