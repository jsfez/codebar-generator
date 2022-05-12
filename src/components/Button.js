import { x } from '@xstyled/styled-components'

export const Button = ({ children, ...props }) => (
  <x.button py={1} px={3} fontSize="lg" cursor="pointer" {...props}>
    {children}
  </x.button>
)
