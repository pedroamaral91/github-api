import { useEffect, useRef, useState } from 'react'
import { LanguageType } from '../../services/get-languages/languages.interface'
import { LanguagesService } from '../../services/get-languages/languages.service'

export const useLanguages = () => {
  const [loading, setLoading] = useState(false)
  const [languages, setLanguages] = useState<LanguageType[]>([])
  const isError = useRef(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      try {
        const data = await LanguagesService.get()
        setLanguages(data)
      } catch {
        isError.current = true
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return {
    languages,
    isError: isError.current,
    isLoading: loading
  }
}
