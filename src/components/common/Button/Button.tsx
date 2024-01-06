import { twMerge } from 'tailwind-merge'

import { PressButtonProps } from './Button.types'
import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from '../StyledComponents'

export const Button = ({
  pressHandler,
  onPress,
  wrapperClass = '',
  titleClass = '',
  buttonClass = '',
  title,
  disabled,
  ...rest
}: PressButtonProps) => {
  return (
    <StyledView className={twMerge(wrapperClass)}>
      <StyledTouchableOpacity
        onPress={pressHandler}
        className={twMerge(
          'flex w-full py-2 border border-gray-600 bg-white',
          disabled && 'border-0 bg-gray-200',
          buttonClass
        )}
        disabled={disabled}
        {...rest}
      >
        <StyledText
          className={twMerge(
            'text-xl px-2 py-2 text-center  text-gray-800',
            disabled && 'text-gray-500',
            titleClass
          )}
        >
          {title}
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  )
}
