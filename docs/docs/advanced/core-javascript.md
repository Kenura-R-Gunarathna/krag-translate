---
sidebar_position: 2
---

# Core JavaScript

Understanding the core JavaScript that powers KRAG Translate.

## Google Translate Initialization

The foundation of KRAG Translate is the Google Translate Element initialization:

```javascript
function googleTranslateElementInit2() {
    new google.translate.TranslateElement({
        pageLanguage: 'de',
        autoDisplay: false
    }, 'wsmu-google-translate-element');
}
```

### Configuration Options

- **pageLanguage**: The default language of your website (e.g., 'en', 'de', 'fr')
- **autoDisplay**: Set to `false` to hide the default Google Translate widget

## The doGTranslate Function

The `doGTranslate()` function is the core mechanism that triggers translation. It's included in the minified code in `app.js`:

```javascript
// Simplified version of what doGTranslate does:
function doGTranslate(lang_pair) {
    // lang_pair format: "source|target" (e.g., "en|fr")
    
    // Find the Google Translate select element
    var selectElement = document.querySelector('.goog-te-combo');
    
    if (selectElement) {
        // Set the target language
        selectElement.value = lang_pair.split('|')[1];
        
        // Trigger the change event
        var event = document.createEvent('HTMLEvents');
        event.initEvent('change', true, true);
        selectElement.dispatchEvent(event);
    }
}
```

### How It Works

1. **Parse Language Pair**: Splits the `lang_pair` string (e.g., "en|fr") into source and target languages
2. **Find Google's Select**: Locates the hidden Google Translate dropdown
3. **Set Value**: Changes the dropdown value to the target language
4. **Fire Event**: Triggers a change event to activate the translation

## Custom Dropdown Logic

For the dropdown style, we use jQuery to handle the custom UI:

```javascript
// Toggle dropdown visibility
$(".default_option").click(function(){
    $(this).parent().toggleClass("active");
    $(this).next().toggleClass("select-active");
});

// Update selected option
$(".select_ul li").click(function(){
    var currentele = $(this).html();
    $(".default_option li").html(currentele);
    $(this).parents(".select_wrap").removeClass("active");
    $(this).parent().removeClass("select-active");
});
```

### Breakdown

1. **Click Handler**: When the default option is clicked, toggle the `active` class
2. **Option Selection**: When a language is selected:
   - Copy the HTML of the selected option to the default option display
   - Close the dropdown by removing the `active` class

## Required Scripts

Your HTML must include these scripts in this order:

```html
<!-- jQuery (required for dropdown functionality) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- Google Translate API -->
<script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2" type="text/javascript"></script>

<!-- KRAG Translate custom code -->
<script src="./assets/js/app.js" type="text/javascript"></script>
```

## Hidden Elements

KRAG Translate hides Google's default UI elements using CSS:

```css
/* Hide Google's default widget */
#wsmu-google-translate-element {
    display: none !important;
}

/* Hide the Google Translate banner */
.goog-te-banner-frame {
    display: none !important;
}

/* Hide the tooltip */
#goog-gt-tt {
    display: none !important;
}

/* Hide the top bar */
.skiptranslate.VIpgJd-ZVi9od-ORHb-OEVmcd {
    display: none !important;
}
```

## The notranslate Class

Elements with the `notranslate` class won't be translated by Google Translate:

```html
<p class="notranslate">English</p>
```

This is crucial for:
- Language selector labels
- Navigation elements you want to keep in the original language
- Brand names and logos

## Language Code Reference

Common language codes used in `doGTranslate()`:

| Code | Language |
|------|----------|
| `en` | English |
| `fr` | French |
| `es` | Spanish |
| `de` | German |
| `pt` | Portuguese |
| `ru` | Russian |
| `ar` | Arabic |
| `zh-CN` | Chinese (Simplified) |
| `ja` | Japanese |
| `ko` | Korean |
| `hi` | Hindi |
| `si` | Sinhala |
| `ta` | Tamil |
| `it` | Italian |
| `nl` | Dutch |

## Troubleshooting

### Translation Not Working

1. **Check Script Order**: Ensure scripts are loaded in the correct order
2. **Verify Element ID**: The element with id `wsmu-google-translate-element` must exist
3. **Check Console**: Look for JavaScript errors in the browser console
4. **Language Codes**: Verify you're using correct language codes

### Dropdown Not Opening

1. **jQuery Loaded**: Ensure jQuery is loaded before `app.js`
2. **Class Names**: Verify class names match exactly (`default_option`, `select_ul`)
3. **CSS Loaded**: Ensure `app.css` is loaded

## Next Steps

- Learn about [Event Listeners](./event-listeners) to track language changes
- Explore [Customization](./customization) options
