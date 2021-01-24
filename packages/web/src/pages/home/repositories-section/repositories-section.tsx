import { FC, useState, useCallback } from 'react'
import { Button, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { useRepositories } from '../../../hooks/repositories/useRepositories'
import { Pagination } from '../../../components/pagination/pagination'

type AvatarSectionProps = {
  url: string;
  full_name: string;
};
const AvatarSection: FC<AvatarSectionProps> = ({ url, full_name }) => (
  <Flex flexDir="column" alignItems="center" justifyContent="center">
    <Flex w="5rem" h="5rem" borderRadius="100%" overflow="hidden">
      <Image src={url} alt="avatar github repository" objectFit="cover" objectPosition="center center" />
    </Flex>
    <Text fontSize="lg" fontWeight={600}>
      {full_name}
    </Text>
  </Flex>
)

type RepositoryCardProps = {
  full_name: string;
  avatar_url: string;
  description: string;
  html_url: string;
};

const RepositoryCard: FC<RepositoryCardProps> = (props: RepositoryCardProps) => {
  const { avatar_url, description, full_name, html_url } = props
  return (
    <Flex alignItems="center" justifyContent="center" flexDir="column" boxShadow="base" p="5" rounded="md" bg="white" w="100%">
      <AvatarSection full_name={full_name} url={avatar_url} />
      <Flex p="3">{description}</Flex>
      <Flex p="3">
        <Button as="a" target="_blank" href={html_url}>
          Go to repository
        </Button>
      </Flex>
    </Flex>
  )
}

type RepositoriesSectionProps = {
  language: string;
};

export const RepositoriesSection: FC<RepositoriesSectionProps> = ({ language }) => {
  const [page, setPage] = useState(1)
  const handlePageChange = useCallback(({ selected }) => {
    setPage(selected + 1)
  }, [])

  const { data, statusCodeError } = useRepositories({ language, page: page.toString() })
  if (statusCodeError) {
    return <div>error</div>
  }
  if (data) {
    return (
      <Flex flexDir="column" alignItems="center">
        <Grid
          justifyItems="center"
          w="100%"
          my="5"
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          columnGap="5"
          rowGap="5"
        >
          {data.items.map((item) => (
            <RepositoryCard
              key={item.id}
              avatar_url={item.avatar_url}
              description={item.description}
              full_name={item.full_name}
              html_url={item.html_url}
            />
          ))}
        </Grid>
        <Pagination
          onPageChange={handlePageChange}
          pagesQuantity={Math.floor(data.total_count / 16)}
          currentPage={page - 1}
        />
      </Flex>
    )
  }
  return <div>loading..</div>
}
