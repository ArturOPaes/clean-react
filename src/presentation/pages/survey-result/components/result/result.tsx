import React from 'react'
import { Calendar } from '@/presentation/components'
import { useHistory } from 'react-router-dom'
import { LoadSurveyResult } from '@/domain/usecases'
import Styles from './result-styles.scss'
import { SurveyResultAnswer } from '@/presentation/pages/survey-result/components'

type Props = {
  surveyResult: LoadSurveyResult.Model
}

const Result: React.FC<Props> = ({ surveyResult }: Props) => {
  const { goBack } = useHistory()
  return (
    <>
      <hgroup>
        <Calendar date={surveyResult.date} className={Styles.calendarWrap} />
        <h2 data-testid="question">{surveyResult.question}</h2>
      </hgroup>
      <ul data-testid="answers" className={Styles.answersList}>
        {surveyResult.answers.map((answer) => (
          <SurveyResultAnswer answer={answer} key={answer.answer} />
        ))}
      </ul>
      <button
        data-testid="back-button"
        className={Styles.button}
        onClick={goBack}
      >
        Voltar
      </button>
    </>
  )
}

export default Result
