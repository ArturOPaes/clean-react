import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import { InputBase } from '@/presentation/components'
import faker from 'faker'

const makeSut = (fieldName: string): RenderResult => {
  return render(<InputBase name={fieldName} state={{}} setState={null} />)
}

describe('Input Component', () => {
  test('Should begin with readOnly', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const input = sut.getByTestId(fieldName) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('Should remove readOnly on focus', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const input = sut.getByTestId(fieldName) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })

  test('Should focus input on label click', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const input = sut.getByTestId(fieldName)
    const label = sut.getByTestId(`${fieldName}-label`)
    fireEvent.click(label)
    expect(document.activeElement).toBe(input)
  })
})
