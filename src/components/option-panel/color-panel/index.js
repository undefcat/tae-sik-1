import MiniMap from './mini-map'
import ColorPicker from './color-picker'
import ResetButton from '../buttons/ResetButton'

function ColorPanel({ color, onChange }) {
  return (
    <>
      <MiniMap />
      <ColorPicker
        color={color}
        onChange={onChange}
      />
      <ResetButton />
    </>
  )
}

export default ColorPanel