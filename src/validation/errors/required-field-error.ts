export class RequiredFieldError extends Error {
  constructor() {
    super('Campo obrigaótio')
    this.name = 'RequiredFieldError'
  }
}
