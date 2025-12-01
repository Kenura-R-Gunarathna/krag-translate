---
sidebar_position: 2
---

# Flag-list Style

The flag-list style displays languages in a vertical list format with flag icons beside each language name. This style is perfect for sidebars or dedicated language selection areas.

![Flag-list Translate](/img/github/flag-list.png)

:::tip Try it Live!
**[View Live Example →](https://github.com/Kenura-R-Gunarathna/krag-translate/blob/master/examples/flag-list.html)** | **[Download HTML](https://raw.githubusercontent.com/Kenura-R-Gunarathna/krag-translate/master/examples/flag-list.html)**
:::

## Features

- Vertical list layout
- Flag icons for visual recognition
- Hover effects for better UX
- No dropdown - all options visible
- Clean and straightforward design

## HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Google Translate - Flag-list</title>
</head>

<body>
    <div class="wrapper">
        <h1>Google Translate - Flag-list</h1>
        
        <div class="select_wrap">
            <div id="wsmu-google-translate">
                <div id="wsmu-google-translate" class="notranslate">
                        
                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|en');return false;" title="EN" 
                         style="display: flex; margin-bottom: 5px;">
                        <img alt="English" src="./assets/img/en-flagge-icon.png" width="15px" 
                             style="margin-right: 10px;" />
                        <p class="notranslate">English</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|fr');return false;" title="FR" 
                         style="display: flex; margin-bottom: 5px;">
                        <img alt="French" src="./assets/img/fr-flagge-icon.png" width="15px" 
                             style="margin-right: 10px;" />
                        <p class="notranslate">French</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|de');return false;" title="DE" 
                         style="display: flex; margin-bottom: 5px;">
                        <img alt="German" src="./assets/img/de-flagge-icon.png" width="15px" 
                             style="margin-right: 10px;" />
                        <p class="notranslate">German</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|ru');return false;" title="RU" 
                         style="display: flex; margin-bottom: 5px;">
                        <img alt="Russian" src="./assets/img/ru-flagge-icon.png" width="15px" 
                             style="margin-right: 10px;" />
                        <p class="notranslate">Russian</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|ar');return false;" title="AR" 
                         style="display: flex; margin-bottom: 5px;">
                        <img alt="Arabic" src="./assets/img/ar-flagge-icon.png" width="15px" 
                             style="margin-right: 10px;" />
                        <p class="notranslate">Arabic</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|es');return false;" title="ES" 
                         style="display: flex; margin-bottom: 5px;">
                        <img alt="Spanish" src="./assets/img/es-flagge-icon.png" width="15px" 
                             style="margin-right: 10px;" />
                        <p class="notranslate">Spanish</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|pt');return false;" title="PT" 
                         style="display: flex; margin-bottom: 5px;">
                        <img alt="Portuguese" src="./assets/img/pt-flagge-icon.png" width="15px" 
                             style="margin-right: 10px;" />
                        <p class="notranslate">Portuguese</p>
                    </div>
                </div>
                
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

### Language Items
Each language is represented by a `<div>` with class `wsmu-gt-icons` containing:
- A flag image (15px width recommended)
- The language name in a `<p>` tag with `notranslate` class
- Flexbox layout for horizontal alignment
- Bottom margin for spacing

### Inline Styling
This example uses inline styles for quick implementation, but you can move these to your CSS file for better maintainability:

```css
.wsmu-gt-icons {
    display: flex;
    margin-bottom: 5px;
    cursor: pointer;
}

.wsmu-gt-icons img {
    width: 15px;
    margin-right: 10px;
}
```

## When to Use Flag-list Style

This style is ideal when:
- You have a dedicated language selection area
- You want all options visible at once
- You're building a sidebar navigation
- You prefer a more traditional list layout
- You have limited language options (5-10 languages)

## Customization Tips

1. **Adjust Spacing**: Modify `margin-bottom` to control spacing between items
2. **Icon Size**: Change the `width` attribute on images for larger/smaller flags
3. **Add Hover Effects**: Use CSS to add background colors or borders on hover
4. **Responsive Design**: Stack items differently on mobile devices

## Next Steps

- Explore the [Text Style](./text) for a minimalist approach
- Learn about [Event Listeners](../advanced/event-listeners)
