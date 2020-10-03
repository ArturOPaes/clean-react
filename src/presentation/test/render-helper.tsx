import React from 'react'
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { mockAccountModel } from '@/domain/test'
import { MemoryHistory } from 'history'
import { AccountModel } from '@/domain/models'
import { Router } from 'react-router-dom'
import { currentAccountState } from '@/presentation/components'

type Params = {
  Page: React.FC
  history: MemoryHistory
  account?: AccountModel
}

type Result = {
  setCurrentAccountMock: (account: AccountModel) => void
}

export const renderWithHistory = ({
  Page,
  history,
  account = mockAccountModel()
}: Params): Result => {
  const setCurrentAccountMock = jest.fn()
  const mockedState = {
    setCurrentAccount: setCurrentAccountMock,
    getCurrentAccount: () => account
  }
  render(
    <RecoilRoot
      initializeState={({ set }) => set(currentAccountState, mockedState)}
    >
      <Router history={history}>
        <Page />
      </Router>
    </RecoilRoot>
  )
  return {
    setCurrentAccountMock
  }
}
