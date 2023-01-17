// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import server from './mocks/server'

// Поднимаем тестовый сервер перед запуском тестов
beforeAll(() => server.listen())

// Чистим обработчики между тестами
afterEach(() => server.resetHandlers())

// Отрубаем сервер после выполнения тестов.
afterAll(() => server.close())
