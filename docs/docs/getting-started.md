---
sidebar_position: 1
---

# Getting Started

Get up and running with KRAG Translate in minutes.

## Prerequisites

Before you begin, you'll need:

- A website or web page where you want to add translation
- Basic knowledge of HTML and JavaScript
- A text editor

## Installation

KRAG Translate doesn't require npm or any build tools. Simply include the necessary files in your HTML.

### Step 1: Download Files

Download or clone the repository:

```bash
git clone https://github.com/Kenura-R-Gunarathna/krag-translate.git
```

### Step 2: Copy Assets

Copy the `assets` folder to your project:

```
your-project/
├── assets/
│   ├── css/
│   │   └── app.css
│   ├── js/
│   │   └── app.js
│   └── img/
│       ├── en-flagge-icon.png
│       ├── fr-flagge-icon.png
│       └── ... (other flag icons)
```

### Step 3: Include Scripts

Add these scripts to your HTML file (before the closing `</body>` tag):

```html
<!-- CSS should be at the bottom for Google Translate compatibility -->
<link rel="stylesheet" href="./assets/css/app.css">

<!-- jQuery (required) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- Google Translate API -->
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2" type="text/javascript"></script>

<!-- KRAG Translate -->
<script src="./assets/js/app.js" type="text/javascript"></script>
```

## Quick Start Example

Here's a complete minimal example using the dropdown style:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Multilingual Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This content will be translated.</p>
    
    <!-- Language Selector -->
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
            <ul class="select_ul">
                <li class="wsmu-gt-icons" onclick="doGTranslate('en|en');return false;" title="EN">
                    <div class="option">
                        <img class="icon" alt="English" src="./assets/img/en-flagge-icon.png" />
                        <p class="notranslate">English</p>
                    </div>
                </li>
                <li class="wsmu-gt-icons" onclick="doGTranslate('en|fr');return false;" title="FR">
                    <div class="option">
                        <img class="icon" alt="French" src="./assets/img/fr-flagge-icon.png" />
                        <p class="notranslate">French</p>
                    </div>
                </li>
                <li class="wsmu-gt-icons" onclick="doGTranslate('en|es');return false;" title="ES">
                    <div class="option">
                        <img class="icon" alt="Spanish" src="./assets/img/es-flagge-icon.png" />
                        <p class="notranslate">Spanish</p>
                    </div>
                </li>
            </ul>
            <div id="wsmu-google-translate-element"></div>
        </div>
    </div>

    <!-- Scripts at the bottom -->
    <link rel="stylesheet" href="./assets/css/app.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"></script>
    <script src="./assets/js/app.js"></script>
</body>
</html>
```

## Configuration

### Change Default Language

Edit the `pageLanguage` in `assets/js/app.js`:

```javascript
function googleTranslateElementInit2() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', // Change this to your default language
        autoDisplay: false
    }, 'wsmu-google-translate-element');
}
```

### Add More Languages

Add more `<li>` elements to the language list:

```html
<li class="wsmu-gt-icons" onclick="doGTranslate('en|de');return false;" title="DE">
    <div class="option">
        <img class="icon" alt="German" src="./assets/img/de-flagge-icon.png" />
        <p class="notranslate">German</p>
    </div>
</li>
```

## Choosing a Style

KRAG Translate offers three implementation styles:

### 1. Dropdown Style
Best for: Header navigation, limited space
- [View Documentation](./implementation-styles/dropdown)
- [Live Demo](/demos/drop-down.html)

### 2. Flag-list Style
Best for: Sidebars, dedicated language sections
- [View Documentation](./implementation-styles/flag-list)
- [Live Demo](/demos/flag-list.html)

### 3. Text Style
Best for: Minimalist designs, footer links
- [View Documentation](./implementation-styles/text)
- [Live Demo](/demos/text.html)

## Testing

1. Open your HTML file in a web browser
2. Click on a language option
3. The page content should translate to the selected language
4. Check the browser console for any errors

## Common Issues

### Translation Not Working

**Problem**: Clicking languages doesn't translate the page

**Solutions**:
- Verify all scripts are loaded (check browser console)
- Ensure the element with id `wsmu-google-translate-element` exists
- Check that you're using correct language codes
- Make sure scripts are in the correct order

### Dropdown Not Opening

**Problem**: The dropdown doesn't expand when clicked

**Solutions**:
- Verify jQuery is loaded before `app.js`
- Check that CSS file is loaded
- Ensure class names match exactly

### Google Translate Bar Showing

**Problem**: Google's default translate bar appears at the top

**Solutions**:
- Ensure `app.css` is loaded
- Check that the CSS hiding rules are present
- Clear browser cache

## Next Steps

- Explore [Implementation Styles](./category/implementation-styles) for different UI options
- Learn about [Event Listeners](./advanced/event-listeners) to track language changes
- Check out [Customization](./advanced/customization) to match your brand

## Need Help?

- [GitHub Issues](https://github.com/Kenura-R-Gunarathna/krag-translate/issues)
- [View Examples](https://kenura-r-gunarathna.github.io/krag-translate/)
