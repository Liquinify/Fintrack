export const useMonobankWebhook = () => {
  const { data } = useCustomFetch("", {
    method: "POST",
    body: {},
  });
};
