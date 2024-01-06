import { TouchableOpacityProps } from 'react-native'

export type PressButtonProps = TouchableOpacityProps & {
  pressHandler: () => void
  wrapperClass?: string
  titleClass?: string
  buttonClass?: string
  title: string
}
