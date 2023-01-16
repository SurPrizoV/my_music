import React from 'react'
import { useParams } from 'react-router-dom'
import * as Styled from '../home/home-styles'
import Nav from '../../components/main/Nav'
import ContentBlock from '../../components/main/ContentBlock'
import { useGetSelectionQuery } from '../../redux/services/tracks'

function SelectionPlaylist() {
  const { id } = useParams()
  // const { data, isLoading } = useGetSelectionQuery(id)

  return (
    <Styled.Container>
      <Styled.Main>
        <Nav />
        <ContentBlock endpointHook={useGetSelectionQuery(id)} />
      </Styled.Main>
    </Styled.Container>
  )
}

export default SelectionPlaylist
