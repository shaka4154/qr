Blockly.defineBlocksWithJsonArray([
    // Hareket Blokları
    {
        "type": "motion_move",
        "message0": "move %1 steps",
        "args0": [
            {
                "type": "field_number",
                "name": "STEPS",
                "value": 10
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "",
        "helpUrl": ""
    },
    {
        "type": "motion_turn",
        "message0": "turn %1 degrees",
        "args0": [
            {
                "type": "field_number",
                "name": "DEGREES",
                "value": 15
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "",
        "helpUrl": ""
    },
    // Görünüm Blokları
    {
        "type": "looks_say",
        "message0": "say %1",
        "args0": [
            {
                "type": "field_input",
                "name": "MESSAGE",
                "text": "Hello!"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
    },
    // Ses Blokları
    {
        "type": "sound_play",
        "message0": "play sound %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "SOUND",
                "options": [
                    ["sound1", "SOUND1"],
                    ["sound2", "SOUND2"]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210,
        "tooltip": "",
        "helpUrl": ""
    }
]);