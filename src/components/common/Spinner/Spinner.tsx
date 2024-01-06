import { ActivityIndicator } from 'react-native'

import { StyledView } from '../StyledComponents'

export const Spinner = () => {
  return (
    <StyledView className='flex-1 p-6 mx-auto justify-center'>
      <ActivityIndicator size='large' color='#60a5fa' />
    </StyledView>
  )
}
