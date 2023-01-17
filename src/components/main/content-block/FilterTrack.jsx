/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import * as Styled from './styles/filter-track-styles'

function FilterTrack({ filter, tracks, filterName }) {
  const [active, setActive] = useState(false)
  const [filterCase, setFilter] = useState([])

  function chosenFilter() {
    setActive(!active)
    if (filterName === 'author') {
      setFilter([...new Set(tracks.map((item) => item.author))])
    } else if (filterName === 'genre') {
      setFilter([...new Set(tracks.map((item) => item.genre))])
    } else if (filterName === 'release_date') {
      setFilter([...new Set(tracks.map((item) => item.release_date))])
    }
  }

  return (
    <Styled.FilterWrapper>
      <Styled.FilterBtn onClick={() => chosenFilter()}>
        {filter}
      </Styled.FilterBtn>
      {active && (
        <Styled.FilterModal>
          <Styled.FilterModalList>
            {filterCase.map((item) => (
              <Styled.FilterModalItem>{item}</Styled.FilterModalItem>
            ))}
          </Styled.FilterModalList>
        </Styled.FilterModal>
      )}
    </Styled.FilterWrapper>
  )
}

export default FilterTrack
