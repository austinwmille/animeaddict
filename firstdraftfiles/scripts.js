
function checkImageQuality(fileInput) {
    const file = fileInput.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function() {
        const width = img.width;
        const height = img.height;
        let qualityMessage = '';

        if (width < 1000 || height < 1000) {
            qualityMessage = 'Image quality is too low. Try a higher resolution.';
        } else {
            qualityMessage = 'Image quality looks good!';
        }
        document.getElementById('quality-check').innerText = qualityMessage;
        URL.revokeObjectURL(img.src);
    };
}
