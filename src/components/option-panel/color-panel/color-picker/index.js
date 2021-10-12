import { CirclePicker } from 'react-color'
import './index.css'

const colors = [
  '#877B6780',
  '#B2A59280',
  '#CDC1AE80',
  '#A6251080',
  '#A1221080',
  '#DFBAB980',
  '#CF5D1780',
  '#D0844F80',
  '#D8AE8D80',
  '#8E688B80',
  '#B091AB80',
  '#CCB5C380',
  '#2C823F80',
  '#76B79480',
  '#A5CEAF80',
  '#2F427A7F',
  '#6798B980',
  '#A7BDC480',
]

function ColorPicker({ color, onChange }) {
  return (
    <section id="color-picker">
      <CirclePicker
        color={color}
        colors={colors}
        onChange={onChange}
      />
      <p>Shift + 클릭: 행 색칠</p>
      <p>Alt + 클릭: 열 색칠</p>
    </section>
  )
}

export default ColorPicker