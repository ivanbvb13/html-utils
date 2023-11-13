document.addEventListener('DOMContentLoaded', function () {
    // Obtén la URL de la consulta
    const urlParams = new URLSearchParams(window.location.search);
    const urlBase64 = urlParams.get('url');

    console.log(urlBase64);

    if (urlBase64) {
        // Decodifica la URL base64
        const url = atob(urlBase64);

        console.log(url);
        // Actualiza la fuente del iframe
        const iframe = document.getElementById('miIframe');
        iframe.src = url;
    }
});
