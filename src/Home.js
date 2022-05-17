import React, { useState } from 'react'
import { x } from '@xstyled/styled-components'
import { useJsBarcodeEan13 } from './components/Barcode'
import { PageContainer } from './components/PageContainer'
import { Input } from './components/Input'
import { Label } from './components/Label'

export function Home() {
  const [ean13, setEan13] = useState('')
  const [error, setError] = useState(false)
  useJsBarcodeEan13(ean13, setError)

  function onInputChange({ target }) {
    const matchNumber = target.value.match(/^[0-9]{1,13}$/g)
    setEan13(matchNumber?.[0] || '')
  }

  return (
    <PageContainer>
      <x.h1 fontFamily="inhenrit">Barcode pour mon papa ♥️</x.h1>

      <x.div
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        columnGap="24px"
        w="100%"
        mt={3}
      >
        <Label htmlFor="ean13">
          Code EAN13
          <Input
            type="text"
            id="ean13"
            value={ean13}
            onChange={onInputChange}
          />
        </Label>
      </x.div>

      <x.div textAlign="center" mt={4} h={40} p={3} w={1}>
        {error ? (
          <p>
            Le barcode ne peut pas être généré :{' '}
            <x.span color="red">code invalide</x.span>
          </p>
        ) : ean13.length === 13 ? (
          <img id="barcode" alt="generated-barcode" />
        ) : (
          <p>
            Remplissez le champ avec 13 chiffres pour générer le code barre.
          </p>
        )}
      </x.div>
    </PageContainer>
  )
}
