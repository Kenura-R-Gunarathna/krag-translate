---
sidebar_position: 1
---

# Event Listeners

Learn how to listen for and respond to Google Translate language changes using the `googtrans` cookie.

## The Challenge

Google Translate doesn't provide a native event listener for language changes. However, we can work around this by monitoring the `googtrans` cookie that Google Translate sets when a user changes the language.

## Cookie Structure

When a user selects a language, Google Translate creates a cookie named `googtrans` with a value like:
- `/en/fr` - Translating from English to French
- `/en/es` - Translating from English to Spanish
- `en` - Default language (no translation)

## Implementation

Here's the complete code to detect language changes:

```javascript
// Browse the cookies
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Check the cookies
function checkCookie(){
    let lang = getCookie("googtrans");
    
    if (lang != "") {
        return lang;
    } else {
        return "en";
    }
}

// Browse the value of the `googtrans` cookie
function checkLanguage() {
    let lang = checkCookie();
    
    console.log(lang);
    
    if(lang == "en"){
        console.log("english");
        // Your custom code for English
    }
    
    if(lang == "/en/si"){
        console.log("sinhala");
        // Your custom code for Sinhala
    }
    
    if(lang == "/en/ta"){
        console.log("tamil");
        // Your custom code for Tamil
    }
}

// Call the function
checkLanguage();
```

## Triggering on Language Change

To run your function when a user clicks a language option, add it to the `onclick` handler:

```html
<div class="flex items-center md:ml-[15px] notranslate" id="wsmu-google-translate" style="height: 100%;">
    <div id="translate-to-english" onclick="doGTranslate('en|en'); checkLanguage();" title="EN">English</div>
    <div id="translate-to-sinhala" onclick="doGTranslate('en|si'); checkLanguage();" title="SI">Sinhala</div>
    <div id="translate-to-tamil" onclick="doGTranslate('en|ta'); checkLanguage();" title="TA">Tamil</div>
</div>
```

## Use Cases

### 1. Update UI Elements

```javascript
function checkLanguage() {
    let lang = checkCookie();
    
    // Update a status indicator
    const statusElement = document.getElementById('current-language');
    
    if(lang == "en"){
        statusElement.textContent = "English";
    } else if(lang == "/en/fr"){
        statusElement.textContent = "Français";
    }
}
```

### 2. Load Language-Specific Resources

```javascript
function checkLanguage() {
    let lang = checkCookie();
    
    if(lang == "/en/ar"){
        // Load RTL stylesheet for Arabic
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}
```

### 3. Analytics Tracking

```javascript
function checkLanguage() {
    let lang = checkCookie();
    
    // Track language selection in analytics
    if(typeof gtag !== 'undefined') {
        gtag('event', 'language_change', {
            'language': lang
        });
    }
}
```

### 4. Store User Preference

```javascript
function checkLanguage() {
    let lang = checkCookie();
    
    // Save to localStorage for future visits
    localStorage.setItem('preferredLanguage', lang);
}
```

## Polling for Changes

If you need to detect language changes without user interaction (e.g., if they use the native Google Translate widget), you can poll the cookie:

```javascript
let currentLang = checkCookie();

setInterval(() => {
    let newLang = checkCookie();
    
    if(newLang !== currentLang) {
        console.log('Language changed from', currentLang, 'to', newLang);
        currentLang = newLang;
        
        // Trigger your custom logic
        onLanguageChange(newLang);
    }
}, 1000); // Check every second
```

## Best Practices

1. **Debounce Checks**: If polling, don't check too frequently to avoid performance issues
2. **Handle Edge Cases**: Always have a fallback for when the cookie isn't set
3. **Test Thoroughly**: Different browsers may handle cookies slightly differently
4. **Consider Privacy**: Be transparent about cookie usage in your privacy policy

## Common Language Codes

Here are some common language code patterns in the `googtrans` cookie:

| Language | Cookie Value |
|----------|-------------|
| English (default) | `en` |
| French | `/en/fr` |
| Spanish | `/en/es` |
| German | `/en/de` |
| Portuguese | `/en/pt` |
| Russian | `/en/ru` |
| Arabic | `/en/ar` |
| Sinhala | `/en/si` |
| Tamil | `/en/ta` |
| Italian | `/en/it` |

## Next Steps

- Explore the [Core JavaScript](./core-javascript) to understand the translation mechanism
- Check out [Customization Tips](./customization) for styling options
