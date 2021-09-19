import ResetButton from './ResetButton'
import SaveButton from './SaveButton'
import LoadButton from './LoadButton'
import ImageDownloadButton from './ImageDownloadButton'
import './index.css'

function Buttons() {
  return (
    <section id="buttons">
      <ResetButton />
      <LoadButton />
      <SaveButton />
      <ImageDownloadButton />
    </section>
  )
}

export default Buttons