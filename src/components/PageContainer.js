import { x } from '@xstyled/styled-components'

export const PageContainer = (props) => (
  <x.div
    display="flex"
    flexDirection="column"
    mx="auto"
    alignItems="center"
    fontSize="xl"
    fontFamily="sans"
    {...props}
  />
)
