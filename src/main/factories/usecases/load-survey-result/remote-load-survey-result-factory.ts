import { LoadSurveyResult } from '@/domain/usecases'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { RemoteLoadSurveyResult } from '@/data/usecases'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorators'

export const makeRemoteLoadSurveyResult = (id: string): LoadSurveyResult => {
  return new RemoteLoadSurveyResult(
    makeApiUrl(`/surveys/${id}/results`),
    makeAuthorizeHttpClientDecorator()
  )
}
