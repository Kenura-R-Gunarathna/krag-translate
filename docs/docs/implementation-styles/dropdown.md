---
sidebar_position: 1
---

# Dropdown Style

The dropdown style provides a sleek, space-saving language selector with a custom dropdown menu featuring flag icons and language names.

![Dropdown Translate](/img/github/drop-down.png)

:::tip Try it Live!
**[View Live Example →](https://github.com/Kenura-R-Gunarathna/krag-translate/blob/master/examples/drop-down.html)** | **[Download HTML](https://raw.githubusercontent.com/Kenura-R-Gunarathna/krag-translate/master/examples/drop-down.html)**
:::

## Features

- Custom styled dropdown menu
- Flag icons for each language
- Smooth animations
- Click-to-expand functionality
- Selected language displayed at the top

## HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Google Translate - Dropdown</title>
</head>

<body>
    <div class="wrapper">
        <h1>Google Translate - Dropdown</h1>
        
        <div class="select_wrap">
            <div id="wsmu-google-translate" class="notranslate">
                    
                <ul class="default_option">
                    <li>
                        <div class="option">
                            <img class="icon" alt="English" src="./assets/img/en-flagge-icon.png" />
                            <p class="notranslate">English</p>
                        </div>
                    </li>
                </ul>
                
                <ul class="select_ul" id="wsmu-google-translate">
                    <li class="wsmu-gt-icons" onclick="doGTranslate('de|en');return false;" title="EN">
                        <div class="option">
                            <img class="icon" alt="English" src="./assets/img/en-flagge-icon.png" />
                            <p class="notranslate">English</p>
                        </div>
                    </li>
                    <li class="wsmu-gt-icons option" onclick="doGTranslate('de|fr');return false;" title="FR">
                        <div class="option">
                            <img class="icon" alt="French" src="./assets/img/fr-flagge-icon.png" />
                            <p class="notranslate">French</p>
                        </div>
                    </li>
                    <li class="wsmu-gt-icons option" onclick="doGTranslate('de|de');return false;" title="DE">
                        <div class="option">
                            <img class="icon" alt="German" src="./assets/img/de-flagge-icon.png" />
                            <p class="notranslate">German</p>
                        </div>
                    </li>
                    <!-- Add more languages as needed -->
                </ul>
                
                <div id="wsmu-google-translate-element"></div>
            </div>
        </div>
    </div>

    <!-- Put the google translate css files at the bottom most position -->
    <link rel="stylesheet" href="./assets/css/app.css">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2" type="text/javascript"></script>
    <script src="./assets/js/app.js" type="text/javascript"></script>
</body>
</html>
```

## Key Components

### Default Option
The `default_option` class displays the currently selected language. This is what users see before clicking to expand the dropdown.

### Select List
The `select_ul` contains all available language options. It's hidden by default and appears when the user clicks on the default option.

### Language Items
Each `<li>` element represents a language option with:
- An `onclick` handler calling `doGTranslate('source|target')`
- A flag icon
- The language name with `notranslate` class to prevent translation

## Customization

You can customize the dropdown by:

1. **Adding Languages**: Add more `<li>` elements with the appropriate language codes
2. **Changing Flags**: Replace the flag images with your own
3. **Styling**: Modify the CSS in `app.css` to match your design
4. **Default Language**: Change the `pageLanguage` in the JavaScript initialization

## Language Codes

Common language codes for the `doGTranslate()` function:
- `en` - English
- `fr` - French
- `de` - German
- `es` - Spanish
- `pt` - Portuguese
- `ru` - Russian
- `ar` - Arabic
- `si` - Sinhala
- `ta` - Tamil

## Next Steps

- Check out the [Flag-list Style](./flag-list) for a different approach
- Learn about [Event Listeners](../advanced/event-listeners) to respond to language changes
