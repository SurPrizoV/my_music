/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import * as Styled from './styles/playlist'
import Track from './Track'
import SkeletonTrack from './SkeletonTrack'

function Playlist({ endpointHook }) {
  const { data, error, isLoading } = endpointHook

  const isEmptyList = !isLoading && !data?.length

  if (isLoading) {
    return (
      <>
        {' Loading tracks...'}
        <Styled.SkeletonWrapper>
          {Array.from({ length: 5 }, (_v, k) => (
            <SkeletonTrack key={k} />
          ))}
        </Styled.SkeletonWrapper>
      </>
    )
  }

  if (error) {
    return <p>Oops, some error just happened</p>
  }

  if (isEmptyList) {
    return <p>No tracks published</p>
  }

  return (
    <Styled.PlaylistWrapper>
      {data?.map((track) => (
        <Track key={track.id} {...track} />
      ))}
    </Styled.PlaylistWrapper>
  )
}

export default Playlist
