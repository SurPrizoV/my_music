import React from 'react'
import Nav from '../../components/main/Nav'
import ContentBlock from '../../components/main/ContentBlock'
import SideBar from '../../components/main/SideBar'
import * as Styled from './home-styles'
import { useThemeContext } from '../../context/theme'
import { useGetAllTracksQuery } from '../../redux/services/tracks'

function Home() {
  const response = useGetAllTracksQuery()
  const { theme } = useThemeContext()

  return (
    <Styled.Container theme={theme}>
      <Styled.Main>
        <Nav />
        <ContentBlock response={response} />
        <SideBar />
      </Styled.Main>
    </Styled.Container>
  )
}

export default Home
