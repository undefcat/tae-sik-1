import { useRef } from 'react'
import { toPng } from 'html-to-image'

function ImageDownloadButton() {
  const ref = useRef()

  const handleDownload = async () => {
    try {
      const dataUrl = await toPng(document.querySelector('#wrap'))

      ref.current.setAttribute('href', dataUrl)
      ref.current.click()

    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <button type="button" onClick={handleDownload}>이미지 다운로드</button>
      <a download="image.png" ref={ref} style={{visibility: 'hidden'}}/>
    </>
  )
}

export default ImageDownloadButton