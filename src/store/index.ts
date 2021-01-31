import { useStoreTop } from '@/store/pages/top'

export function useStore() {
  return {
    useStoreTop: useStoreTop(),
  }
}
