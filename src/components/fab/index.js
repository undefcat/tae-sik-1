import { Button, Container } from 'react-floating-action-button'
import DownloadButton from './DownloadButton'

function Fab({ toggleConfigPanel }) {
  return (
    <Container className="fab-button">
      <DownloadButton />
      <Button
        className="fab-button-item"
        tooltip="옵션패널"
        icon="fas fa-tools"
        onClick={toggleConfigPanel}
      />
      <Button
        tooltip="메뉴"
        icon="fas fa-bars"
      />
    </Container>
  )
}

export default Fab