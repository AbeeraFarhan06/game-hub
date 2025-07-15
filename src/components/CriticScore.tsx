import { Badge } from "@chakra-ui/react"

interface Props {
    score: number
}

const CriticScore = ({score}: Props ) => {

    let colour = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red' ;

  return (
    <Badge fontSize='14px' colorScheme={color} borderRadius='5px'>{score}</Badge>
  )
}

export default CriticScore