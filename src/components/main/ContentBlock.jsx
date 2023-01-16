/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Search from './content-block/Search'
import FilterTrack from './content-block/FilterTrack'
import TracksTitle from './content-block/TracksTitle'
import watch from '../img/sprite.svg'
import * as Styled from './styles/content-block-styles'
import { StyledTrackTimeIcon } from './content-block/styles/track-styles'
import { setCurrentSongs } from '../../redux/slices/playerSlice'
import Playlist from './content-block/Playlist'

function ContentBlock({ title = 'Треки', endpointHook }) {
  const dispatch = useDispatch()

  // Нужно для логики nextTrack и prevTrack
  useEffect(() => {
    dispatch(setCurrentSongs(tracks))
  }, [])

  return (
    <Styled.CenterBlock>
      <Search />
      <Styled.Title>{title}</Styled.Title>
      <Styled.FilterBlock className="filter">
        <Styled.FilterHeader>Искать по:</Styled.FilterHeader>
        <FilterTrack
          filter="исполнителю"
          items={endpointHook}
          filterName="author"
        />
        <FilterTrack
          filter="году выпуска"
          items={endpointHook}
          filterName="release_date"
        />
        <FilterTrack filter="жанру" items={endpointHook} filterName="genre" />
      </Styled.FilterBlock>
      <Styled.CenterBlockContent>
        <Styled.ContentTitles>
          <TracksTitle title="Трек" />
          <TracksTitle title="Исполнитель" />
          <TracksTitle title="Альбом" />
          <TracksTitle
            title={
              <StyledTrackTimeIcon alt="time">
                <use xlinkHref={`${watch}#icon-watch`} />
              </StyledTrackTimeIcon>
            }
          />
        </Styled.ContentTitles>
        <Playlist endpointHook={endpointHook} />
      </Styled.CenterBlockContent>
    </Styled.CenterBlock>
  )
}

export default ContentBlock
