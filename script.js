// Blockly yapılandırması
function initBlockly() {
    Blockly.inject('blocklyDiv', {
        toolbox: `
            <xml xmlns="http://www.w3.org/1999/xhtml">
                <block type="controls_if"></block>
                <block type="controls_repeat_ext"></block>
                <block type="logic_compare"></block>
                <block type="math_number"></block>
                <!-- Diğer Scratch blokları buraya eklenebilir -->
            </xml>`,
        trashcan: true
    });
}

// Kodu dışa aktarma işlevi
function exportCode() {
    const code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    document.getElementById('codeOutput').textContent = code;
}

// Phaser ile basit bir oyun sahnesi
function initPhaser() {
    const config = {
        type: Phaser.AUTO,
        width: 600,
        height: 400,
        parent: 'gameDiv',
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
    const game = new Phaser.Game(config);

    function preload() {
        this.load.image('sprite', 'path/to/sprite.png');
    }

    function create() {
        this.add.sprite(100, 100, 'sprite');
    }

    function update() {
        // Oyun güncellemeleri buraya
    }
}

// Başlangıç
window.onload = function() {
    initBlockly();
    initPhaser();
};