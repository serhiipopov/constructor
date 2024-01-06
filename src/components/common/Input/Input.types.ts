import { TextInputProps } from 'react-native'

export type InputProps = TextInputProps & {
  label?: string
  isError?: boolean
  onChangeText: (id: string, value: string) => void
  error?: string
  wrapperClass?: string
  inputClass?: string
  errorClass?: string
  labelClass?: string
  name?: string
}
