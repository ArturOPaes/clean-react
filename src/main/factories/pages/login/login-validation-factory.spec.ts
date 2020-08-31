import { makeLoginValidation } from './login-validation-factory'
import { ValidationComposite, ValidationBuilder } from '@/validation/validators'

describe('LoginValidationFactory', () => {
  test('Should make compose ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(
      ValidationComposite.build([
        ...ValidationBuilder.field('email').required().email().build(),
        ...ValidationBuilder.field('password').required().min(6).build()
      ])
    )
  })
})