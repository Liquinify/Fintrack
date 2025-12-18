import { type ClientInfo } from "~/types/client-info"

export function useClientInfo() {
  const {
    data: clientData,
    pending: loading,
    error,
    refresh
  } = useCustomFetch<ClientInfo>('/personal/client-info')

  return {
    clientData,
    loading,
    error,
    refresh
  }
}
