import { twMerge } from 'tailwind-merge'

import { InputProps } from './Input.types'
import { StyledInput, StyledText, StyledView } from '../StyledComponents'

export const Input = ({
  label,
  isError,
  onChangeText,
  error,
  value,
  placeholder,
  keyboardType,
  wrapperClass = '',
  inputClass = '',
  labelClass = '',
  errorClass = '',
  name,
  ...rest
}: InputProps) => {
  return (
    <StyledView>
      {label && (
        <StyledText className={twMerge('text-gray-600 pb-1', labelClass)}>
          {label}
        </StyledText>
      )}

      <StyledView
        className={twMerge(
          'w-full bg-white flex justify-center border-gray-600 border pb-1',
          wrapperClass
        )}
      >
        <StyledInput
          onChangeText={onChangeText}
          className={twMerge(
            'text-gray-800 text-lg px-3 py-2 h-12',
            inputClass
          )}
          value={value}
          data-name={name}
          placeholder={placeholder}
          keyboardType={keyboardType}
          {...rest}
        />
      </StyledView>

      {isError && error && (
        <StyledText className={twMerge('text-red-500 pt-1', errorClass)}>
          {error}
        </StyledText>
      )}
    </StyledView>
  )
}
