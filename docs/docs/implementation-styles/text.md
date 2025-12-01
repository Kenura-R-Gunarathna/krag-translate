---
sidebar_position: 3
---

# Text Style

The text style is the most minimalist approach, displaying only the language names without flag icons. Perfect for clean, text-focused designs.

![Text Translate](/img/github/text.png)

:::tip Try it Live!
**[View Live Demo →](/demos/text.html)** | **[Download HTML](https://raw.githubusercontent.com/Kenura-R-Gunarathna/krag-translate/master/examples/text.html)**
:::

## Features

- Minimalist text-only design
- No images required
- Lightweight and fast
- Easy to style with CSS
- Perfect for simple implementations

## HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Google Translate - Text</title>
</head>

<body>
    <div class="wrapper">
        <h1>Google Translate - Text</h1>
        
        <div class="select_wrap">
            <div>
                <div class="notranslate" id="wsmu-google-translate">
                        
                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|en');return false;" 
                         title="EN" style="display: flex;">
                        <p class="notranslate">English</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('si|lk');return false;" 
                         title="SI" style="display: flex;">
                        <p class="notranslate">Sinhala</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|fr');return false;" 
                         title="FR" style="display: flex;">
                        <p class="notranslate">French</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|de');return false;" 
                         title="DE" style="display: flex;">
                        <p class="notranslate">German</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|ru');return false;" 
                         title="RU" style="display: flex;">
                        <p class="notranslate">Russian</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|ar');return false;" 
                         title="AR" style="display: flex;">
                        <p class="notranslate">Arabic</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|es');return false;" 
                         title="ES" style="display: flex;">
                        <p class="notranslate">Spanish</p>
                    </div>

                    <div class="wsmu-gt-icons" onclick="doGTranslate('de|pt');return false;" 
                         title="PT" style="display: flex;">
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

### Simple Structure
Each language option is just a `<div>` with:
- The `wsmu-gt-icons` class for styling
- An `onclick` handler for translation
- A `<p>` tag containing the language name
- The `notranslate` class to prevent the language names from being translated

## Styling Options

Since there are no images, you have complete freedom with text styling:

```css
.wsmu-gt-icons {
    display: flex;
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.wsmu-gt-icons:hover {
    background-color: #f0f0f0;
}

.wsmu-gt-icons p {
    margin: 0;
    font-size: 14px;
    color: #333;
}
```

## When to Use Text Style

This style is perfect when:
- You want a minimalist design
- You're optimizing for performance (no image loading)
- You have limited space
- Your design is text-focused
- You want maximum customization flexibility

## Horizontal Layout

You can easily convert this to a horizontal layout:

```css
#wsmu-google-translate {
    display: flex;
    flex-direction: row;
    gap: 15px;
}

.wsmu-gt-icons {
    display: inline-block;
}
```

## Adding Separators

For a horizontal layout, you might want separators:

```css
.wsmu-gt-icons:not(:last-child)::after {
    content: "|";
    margin-left: 15px;
    color: #ccc;
}
```

## Accessibility

The text style is inherently more accessible:
- Screen readers can easily read language names
- No alt text needed for images
- Clear, readable text for all users

## Next Steps

- Learn about [Event Listeners](../advanced/event-listeners) to track language changes
- Check out the [Dropdown Style](./dropdown) for a more compact option
