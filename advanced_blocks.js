// Gelişmiş blok tanımlamaları
Blockly.defineBlocksWithJsonArray([
    // Kontrol Blokları
    {
        "type": "controls_if",
        "message0": "if %1 then %2",
        "args0": [
            {
                "type": "input_value",
                "name": "CONDITION"
            },
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "colour": 210,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "controls_repeat_ext",
        "message0": "repeat %1",
        "args0": [
            {
                "type": "input_value",
                "name": "TIMES"
            }
        ],
        "message1": "do %1",
        "args1": [
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "logic_compare",
        "message0": "%1 %2 %3",
        "args0": [
            {
                "type": "input_value",
                "name": "A"
            },
            {
                "type": "field_dropdown",
                "name": "OP",
                "options": [
                    ["=", "EQ"],
                    ["<", "LT"],
                    [">", "GT"]
                ]
            },
            {
                "type": "input_value",
                "name": "B"
            }
        ],
        "output": null,
        "colour": 210,
        "tooltip": "",
        "helpUrl": ""
    }
]);