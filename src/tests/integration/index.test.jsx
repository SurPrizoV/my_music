import React from 'react'
import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import baseUrl from '../../constants'
import { setupApiStore, customRender } from '../../test-utils'
import { trackApi, useGetAllTracksQuery } from '../../redux/services/tracks'
import server from '../../mocks/server'
import { ThemeContextProvider } from '../../context/theme'
import Playlist from '../../components/main/content-block/Playlist'

// Мокируем api store
const storeRef = setupApiStore(trackApi)

// const tracks = [
//   {
//     id: 8,
//     name: 'Chase',
//     author: 'Alexander Nakarada',
//     album: 'Chase',
//     release_date: '2005-06-11',
//     duration_in_seconds: 205,
//     track_file:
//       'https://painassasin.online/media/music_files/Alexander_Nakarada_-_Chase.mp3',
//   },
//   {
//     id: 9,
//     name: 'Open Sea epic',
//     author: 'Frank Schroter',
//     album: 'Open Sea epic',
//     release_date: '2019-06-12',
//     duration_in_seconds: 165,
//     track_file:
//       'https://painassasin.online/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3',
//   },
// ]

describe('All Tracks test suite', () => {
  it('Renders the component with loading state', async () => {
    render(
      <ThemeContextProvider>
        <Playlist endpointHook={useGetAllTracksQuery()} />
      </ThemeContextProvider>,
      { wrapper: storeRef.wrapper }
    )

    // Проверяем начальное состояние компонента
    screen.getByText('Loading tracks...')
  })

  it('Renders the component without tracks', async () => {
    server.use(
      rest.get(`${baseUrl}catalog/track/all/`, (req, res, ctx) =>
        res(ctx.status(200), ctx.json([]))
      )
    )
    render(
      <ThemeContextProvider>
        <Playlist endpointHook={useGetAllTracksQuery()} />
      </ThemeContextProvider>,
      { wrapper: storeRef.wrapper }
    )

    await screen.findByText(/No tracks published/i)
  })

  it('Renders the component with tracks', async () => {
    render(
      <ThemeContextProvider>
        <Playlist endpointHook={useGetAllTracksQuery()} />
      </ThemeContextProvider>,
      { wrapper: storeRef.wrapper }
    )

    const tracksItems = await screen.findAllByRole('track')

    // Ждем ответа от сервера.
    expect(tracksItems).toHaveLength(2)
    // expect(await screen.findByText(/Chase/i)).toBeInTheDocument()
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
  })
})
