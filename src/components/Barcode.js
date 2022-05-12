import { useEffect } from 'react'
import JsBarcode from 'jsbarcode'

export function useJsBarcodeEan13(text, setError) {
  useEffect(() => {
    try {
      setError(false)

      if (text.length === 13) {
        JsBarcode('#barcode')
          .options({ font: 'OCR-B' })
          .EAN13(text, {
            fontSize: 12, // ok
            textMargin: 0,
            height: 38, // OK
            textPosition: 'bottom',
            marginTop: 28,
            width: 1.6,
            font: 'Arial',
          })
          .render()
      }
    } catch (e) {
      setError(true)
    }
  }, [text, setError])
}
