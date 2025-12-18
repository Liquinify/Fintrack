export function useCustomFetch<T>(
  endpoint: string,
  options: any = {}
) {
  const config = useRuntimeConfig()

  return useFetch<T>(endpoint, {
    baseURL: config.public.monobankUrl,

    headers: {
      'X-Token': config.public.monobankToken,
      ...(options.headers || {})
    },

    ...options,

    onResponseError(ctx) {
      if (ctx.response?.status === 401 || ctx.response?.status === 403) {
        navigateTo('/')
      }

      options.onResponseError?.(ctx)
    }
  })
}
