export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    const formData = new FormData();
    formData.append("token", config.secretKey);

    const res = await $fetch(config.public.apiBase + 'get-footer', {
        method: 'POST',
        body: formData,
        redirect: 'follow'
    });

    return res
})