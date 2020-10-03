import React, { useRef } from 'react'
import Styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  state: any
  setState: any
}

const Input: React.FC<Props> = ({ state, setState, ...props }: Props) => {
  const inputRef = useRef<HTMLInputElement>()
  const error = state[`${props.name}Error`]
  return (
    <div
      className={Styles.inputWrap}
      data-status={error ? 'invalid' : 'valid'}
      data-testid={`${props.name}-wrap`}
    >
      <input
        {...props}
        ref={inputRef}
        title={error}
        placeholder=" "
        data-testid={props.name}
        readOnly
        onFocus={(e) => {
          e.target.readOnly = false
        }}
        onChange={(e) => {
          setState({
            ...state,
            [e.target.name]: e.target.value
          })
        }}
      />
      <label
        onClick={() => inputRef.current.focus()}
        title={error}
        data-testid={`${props.name}-label`}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
