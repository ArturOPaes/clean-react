import { atom } from 'recoil'

export const signUpState = atom({
  key: 'signUpState',
  default: {
    isLoading: false,
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isFormInvalid: false,
    nameError: '',
    emailError: '',
    passwordError: '',
    passwordConfirmationError: '',
    mainError: ''
  }
})
