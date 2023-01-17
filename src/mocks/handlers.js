/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw'
import baseUrl from '../constants'

const getAllTracks = () =>
  rest.get(`${baseUrl}catalog/track/all/`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 8,
          name: 'Chase',
          author: 'Alexander Nakarada',
          album: 'Chase',
          release_date: '2005-06-11',
          duration_in_seconds: 205,
          track_file:
            'https://painassasin.online/media/music_files/Alexander_Nakarada_-_Chase.mp3',
        },
        {
          id: 9,
          name: 'Open Sea epic',
          author: 'Frank Schroter',
          album: 'Open Sea epic',
          release_date: '2019-06-12',
          duration_in_seconds: 165,
          track_file:
            'https://painassasin.online/media/music_files/Frank_Schroter_-_Open_Sea_epic.mp3',
        },
      ])
    )
  )

export const handlers = [getAllTracks()]
