import { createContext } from 'react';

export type SearchContext = {
  searchQuery: string | null;
  setSearchQuery: (query: string | null) => void;
}

export default createContext<SearchContext>({
  searchQuery: null,
  setSearchQuery: () => {}
});