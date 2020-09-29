import React from 'react'
import { Spinner } from '@/presentation/components'
import Styles from './loading-styles.scss'

// import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <div className={Styles.loadingWrap}>
      <div className={Styles.loading}>
        <span>Aguarde...</span>
        <Spinner isNegative />
      </div>
    </div>
  )
}

export default Loading
