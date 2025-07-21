import { useParams } from "react-router-dom"
import useGam from "../hooks/useGam"
import { Heading, Spinner, Text } from "@chakra-ui/react"

const GameDetailPage = () => {

  const {slug} = useParams()
  const {data: game, isLoading, error} = useGam(slug!)

  if (isLoading) return <Spinner />

  if (error || !game) throw error

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  )
}

export default GameDetailPage