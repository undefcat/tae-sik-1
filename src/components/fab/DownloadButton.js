import { useRef, useState } from 'react'
import { Button } from 'react-floating-action-button'
import { toPng } from 'html-to-image'

function DownloadButton() {
  const ref = useRef()
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    if (downloading) {
      return
    }

    setDownloading(true)

    try {
      const dataUrl = await toPng(document.querySelector('#wrap'))

      ref.current.setAttribute('href', dataUrl)
      ref.current.click()

      setDownloading(false)

    } catch (e) {
      console.error(e)
      alert('다운로드 오류!')
    }
  }

  return (
    <>
      <Button
        className="fab-button-item"
        tooltip="다운로드"
        onClick={handleDownload}
        icon={`fas ${downloading ? 'fa-spinner fa-spin' : 'fa-save'}`}
      />
      <a download="image.png" ref={ref} style={{visibility: 'hidden'}}/>
    </>
  )
}

export default DownloadButton