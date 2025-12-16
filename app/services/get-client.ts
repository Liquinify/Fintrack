import { useAxios } from "@/composables/useAxios";
import type { ClientInfo } from "~/types/client-info";


export const getClientInfo = async() => {
    const clientInfo = await useAxios<ClientInfo>('/personal/client-info')

    return clientInfo
}

