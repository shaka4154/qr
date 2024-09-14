// Blockly yapılandırması
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if"></block></xml>'
});

// Kodu dışa aktarma işlevi
function exportCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.getElementById('downloadLink');
    link.href = url;
    link.download = 'code.js';
    link.style.display = 'block';
    link.click();
}

// Yapay Zeka entegrasyonu
document.getElementById('upload').addEventListener('change', async function(event) {
    const file = event.target.files[0];
    const image = document.getElementById('image');
    image.src = URL.createObjectURL(file);
    image.style.display = 'block';
    image.onload = async () => {
        const model = await tf.loadLayersModel('model.json'); // Model dosyanızın yolunu buraya ekleyin
        const tensor = tf.browser.fromPixels(image).toFloat().expandDims(0);
        const prediction = model.predict(tensor);
        prediction.array().then(array => {
            document.getElementById('prediction').textContent = `Prediction: ${array[0]}`;
        });
    };
});