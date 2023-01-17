import { render } from '@testing-library/react'
import BarElement from '../BarElement'

describe('<BarElement />', () => {
  describe('Snapshots tests', () => {
    it('should render "play bar element" successfully and match snapshot', () => {
      const typeBarElem = 'play'
      const { container } = render(
        <BarElement>
          <svg>
            <use xlinkHref={`sprite.svg#icon-${typeBarElem}`} />
          </svg>
        </BarElement>
      )

      expect(container).toMatchSnapshot()
    })
  })
})
