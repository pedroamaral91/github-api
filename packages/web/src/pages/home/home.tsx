import { FC, useMemo, useState, useCallback } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Select } from '../../components/select'
import { useLanguages } from '../../hooks/languages/useLanguages'
import { RepositoriesSection } from './repositories-section/repositories-section'

export const Home: FC = () => {
  const { languages, isLoading } = useLanguages()
  const languagesSelect = useMemo(() => languages.map(({ name }) => ({ label: name, value: name })), [languages])
  const [language, setLanguage] = useState('')

  const handleChange = useCallback(({ value }) => {
    setLanguage(value)
  }, [])
  return (
    <Flex flexDir="column" p="3" alignItems="center" minW={{ base: 'auto', md: '80vw' }} minH="80vh" maxW="80vw">
      <Flex flexDir="column" alignItems="center" justifyContent="center" w="50%">
        <Text fontWeight={600} fontSize="lg" my="3">
          Choose your favourite language! :)
        </Text>
        <Select options={languagesSelect} onChange={handleChange} isLoading={isLoading} isClearable />
      </Flex>
      <RepositoriesSection language={language} />
    </Flex>
  )
}
