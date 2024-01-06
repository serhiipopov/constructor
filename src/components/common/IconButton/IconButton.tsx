import { twMerge } from 'tailwind-merge'
import { Pressable } from 'react-native'

import { StyledFontAwesome, StyledView } from '../StyledComponents'
import { IconButtonType } from './IconButton.types'

export const IconButton = ({
  handlePress,
  name,
  size,
  iconClassName = '',
  wrapperClassName = '',
}: IconButtonType) => {
  return (
    <StyledView className={twMerge('bg-white', wrapperClassName)}>
      <Pressable onPress={handlePress}>
        {({ pressed }) => (
          <StyledFontAwesome
            name={name}
            size={size}
            className={twMerge(pressed && 'opacity-40', iconClassName)}
          />
        )}
      </Pressable>
    </StyledView>
  )
}
