import { PressableProps } from 'react-native'

export type AnchorProps = PressableProps & {
  text: string
  textClassName?: string
  wrapperCLassName?: string
  handlePress?: () => void
}
