// Blockly yapılandırması
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
        <xml xmlns="http://www.w3.org/1999/xhtml">
            <block type="controls_if"></block>
            <block type="controls_repeat_ext">
                <value name="TIMES">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="logic_compare"></block>
            <block type="math_number">
                <field name="NUM">0</field>
            </block>
        </xml>`
});

// Kodu dışa aktarma işlevi
function exportCode() {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('codeOutput').textContent = code;
}