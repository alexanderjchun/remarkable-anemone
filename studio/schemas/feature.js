export default {
    "type": "object",
    "name": "feature",
    "title": "Feature",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the feature",
            "validation": null
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "The text content of the feature",
            "validation": null
        },
        {
            "type": "string",
            "name": "align",
            "title": "Align",
            "description": "The alignment of the text content",
            "initialValue": "left",
            "validation": null,
            "options": {
                "list": [
                    "left",
                    "right",
                    "center"
                ]
            }
        },
        {
            "type": "image",
            "name": "image",
            "title": "Image",
            "description": "The image of the feature",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_alt",
            "title": "Image Alt Text",
            "description": "The alt text of the image",
            "validation": null
        },
        {
            "type": "string",
            "name": "image_position",
            "title": "Image Position",
            "description": "The position of the image",
            "initialValue": "left",
            "validation": null,
            "options": {
                "list": [
                    "left",
                    "right"
                ]
            }
        },
        {
            "type": "array",
            "name": "actions",
            "title": "Action Buttons",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}
