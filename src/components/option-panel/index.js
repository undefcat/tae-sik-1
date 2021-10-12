import { Switch, Route, NavLink } from 'react-router-dom'
import ColorPanel from './color-panel'
import './index.css'

function OptionPanel({ color, onChangeColor, visible }) {
  return (
    <div className={visible ? '' : 'hide'} id="option">
      <div className="menus">
        <NavLink exact to="/" activeClassName="active">벽 색칠</NavLink>
      </div>
      <Switch>
        <Route exact path="/">
          <ColorPanel
            color={color}
            onChange={onChangeColor}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default OptionPanel