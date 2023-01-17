/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable camelcase */
import React from 'react'
import { useDispatch } from 'react-redux'
import TrackAuthor from './track/TrackAuthor'
import TrackTitle from './track/TrackTitle'
import TrackAlbum from './track/TrackAlbum'
import TrackTime from './track/TrackTime'
import * as Styled from './styles/track-styles'
import { setActiveSong } from '../../../redux/slices/playerSlice'

function Track({
  id,
  name,
  author,
  duration_in_seconds,
  album,
  track_file,
  genre,
}) {
  const dispatch = useDispatch()

  const handleSetTrack = () => {
    dispatch(
      setActiveSong({
        id,
        name,
        author,
        duration_in_seconds,
        album,
        track_file,
        genre,
      })
    )
  }

  return (
    <Styled.TrackItem onClick={handleSetTrack} role="track">
      <Styled.TrackWrapper>
        <TrackTitle title={name} />
        <TrackAuthor author={author} />
        <TrackAlbum album={album} />
        <TrackTime time={duration_in_seconds} trackId={id} />
      </Styled.TrackWrapper>
    </Styled.TrackItem>
  )
}

export default Track
