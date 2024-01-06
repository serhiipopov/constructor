import { IconButtonProps } from '@expo/vector-icons/build/createIconSet'

export type IconButtonType = IconButtonProps<any> & {
  handlePress?: () => void
  size: number
  iconClassName?: string
  wrapperClassName?: string
}
