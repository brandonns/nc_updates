// currently-reading.js
function insertCurrentlyReading(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div id="currentlyReading" style="width:33%;float:right;position:relative;text-align:center;">
                <p style="width:100%;margin:0;padding:5px 0;">currently reading</p>
                <model-viewer
                        auto-rotate
                        camera-controls
                        camera-orbit="0deg 75deg 0.5408m"
                        field-of-view="30deg"
                        interaction-prompt="none"
                        poster="/src/poster.webp"
                        shadow-intensity="0"
                        src="/src/book.glb"
                        style="width:100%;max-width:250px;margin:0 auto;">
                    <div slot="progress-bar"></div>
                </model-viewer>
            </div>
        `;
    }
}

// Auto-insert if there's a container with class 'currently-reading-container'
document.addEventListener('DOMContentLoaded', function() {
    const autoContainer = document.querySelector('.currently-reading-container');
    if (autoContainer) {
        autoContainer.innerHTML = `
            <p style="width:100%;margin:0;padding:5px 0;">currently reading</p>
            <model-viewer
                    auto-rotate
                    camera-controls
                    camera-orbit="0deg 75deg 0.5408m"
                    field-of-view="30deg"
                    interaction-prompt="none"
                    poster="/src/poster.webp"
                    shadow-intensity="0"
                    src="/src/book.glb"
                    style="width:100%;max-width:250px;margin:0 auto;">
                <div slot="progress-bar"></div>
            </model-viewer>
        `;
    }
});