export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const formData = new FormData();
  formData.append('token', config.secretKey);
  console.log(formData, 'formData ');
  const res = await $fetch(config.public.apiBase + 'get-banner-home', {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  });
  return res;
});
