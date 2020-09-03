import { Validation } from '@/presentation/protocols/validation'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  private constructor (private readonly validators: FieldValidation[]) {}

  static build (validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate (fildName: string, fildValue: string): string {
    const validators = this.validators.filter((v) => v.field === fildName)
    for (const validator of validators) {
      const error = validator.validate(fildValue)
      if (error) {
        return error.message
      }
    }
    return null
  }
}
