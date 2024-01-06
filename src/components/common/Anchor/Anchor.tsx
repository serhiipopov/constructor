import { Pressable } from 'react-native'
import { twMerge } from 'tailwind-merge'

import { StyledText, StyledView } from '../StyledComponents'
import { AnchorProps } from './Anchor.types'

export const Anchor = ({
  text,
  handlePress,
  textClassName = '',
  wrapperCLassName = '',
  disabled,
  ...rest
}: AnchorProps) => {
  return (
    <StyledView className={wrapperCLassName}>
      <Pressable onPress={handlePress} {...rest}>
        {({ pressed }) => (
          <StyledText
            className={twMerge(
              'text-center text-blue-600',
              textClassName,
              disabled && 'opacity-30',
              !disabled && pressed && 'opacity-40'
            )}
          >
            {text}
          </StyledText>
        )}
      </Pressable>
    </StyledView>
  )
}
