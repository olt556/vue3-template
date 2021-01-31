import { useStoreTop } from './pages/top'

export function useStore() {
  return {
    useStoreTop: useStoreTop(),
  }
}
