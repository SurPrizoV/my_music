/* eslint-disable import/no-extraneous-dependencies */
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Готовим моковый сервер
const server = setupServer(...handlers)

export default server
