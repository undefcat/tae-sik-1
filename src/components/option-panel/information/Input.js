import { useDispatch, useSelector } from 'react-redux'
import { change } from '../../../store/state/information'

const valueSelector = name => state => state.information[name]

function Input({ name, placeholder }) {
  const dispatch = useDispatch()
  const value = useSelector(valueSelector(name))

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={e => dispatch(change({ name, value: e.target.value }))}
      value={value}
    />
  )
}

export default Input