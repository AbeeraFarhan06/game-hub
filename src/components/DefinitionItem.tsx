import { Box, Heading } from "@chakra-ui/react"
import { ReactNode } from "react"

//dd: definition decscription
//dt: definition terms
interface Props {
    term: string
    children: ReactNode | ReactNode[]
}

const DefinitionItem = ({term, children}: Props ) => {
  return (
    <Box marginY={5} >
        <Heading as='dt' fontSize='md' color='blue.800'>
            {term}
        </Heading>
        <dd>
            {children}
        </dd>
    </Box>
  )
}

export default DefinitionItem