import { parseAsString, useQueryState } from 'nuqs'

export const useSearch = () => {
  const [search, setSearch] = useQueryState('search', parseAsString)

  return {
    search,
    setSearch,
  }
}
