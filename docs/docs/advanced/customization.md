---
sidebar_position: 3
---

# Customization

Learn how to customize KRAG Translate to match your website's design and branding.

## Styling the Dropdown

The dropdown style uses custom CSS that you can easily modify:

### Colors

```css
/* Change dropdown background */
.select_wrap .default_option {
    background: #ffffff; /* Change to your brand color */
    border-radius: 5px;
}

/* Change hover color */
.select_wrap .select_ul li:hover {
    background: #fff4dd; /* Your hover color */
}

/* Change arrow color */
.select_wrap .default_option:before {
    border-color: transparent transparent #555555 #555555; /* Arrow color */
}
```

### Sizing

```css
/* Change dropdown width */
.select_wrap {
    width: 250px; /* Adjust as needed */
}

/* Change padding */
.select_wrap .default_option li {
    padding: 12px 24px; /* Vertical | Horizontal */
}
```

### Typography

```css
/* Change font */
.select_wrap {
    font-family: 'Your Font', sans-serif;
    font-size: 16px;
}

/* Import custom font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
```

## Styling the Flag-list

Customize the vertical flag list:

### Spacing

```css
.wsmu-gt-icons {
    margin-bottom: 10px; /* Space between items */
    padding: 8px; /* Internal padding */
}
```

### Hover Effects

```css
.wsmu-gt-icons {
    transition: all 0.3s ease;
    border-radius: 4px;
}

.wsmu-gt-icons:hover {
    background-color: #f5f5f5;
    transform: translateX(5px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### Active State

```css
.wsmu-gt-icons.active {
    background-color: #4285F4;
    color: white;
}

.wsmu-gt-icons.active p {
    color: white;
}
```

## Custom Flag Icons

Replace the default flag icons with your own:

### Using Different Icons

```html
<!-- Use emoji flags -->
<div class="wsmu-gt-icons" onclick="doGTranslate('de|en');">
    <span style="font-size: 20px; margin-right: 10px;">🇬🇧</span>
    <p class="notranslate">English</p>
</div>

<!-- Use Font Awesome -->
<div class="wsmu-gt-icons" onclick="doGTranslate('de|fr');">
    <i class="fas fa-flag" style="color: #0055A4; margin-right: 10px;"></i>
    <p class="notranslate">French</p>
</div>
```

### Custom SVG Icons

```html
<div class="wsmu-gt-icons" onclick="doGTranslate('de|en');">
    <svg width="20" height="15" style="margin-right: 10px;">
        <!-- Your custom flag SVG -->
    </svg>
    <p class="notranslate">English</p>
</div>
```

## Dark Mode Support

Add dark mode styling:

```css
/* Dark mode variables */
@media (prefers-color-scheme: dark) {
    .select_wrap .default_option {
        background: #2d2d2d;
        color: #ffffff;
    }
    
    .select_wrap .select_ul {
        background: #2d2d2d;
    }
    
    .select_wrap .select_ul li:hover {
        background: #3d3d3d;
    }
    
    .select_wrap .default_option:before {
        border-color: transparent transparent #ffffff #ffffff;
    }
}
```

## Positioning

### Fixed Position

Make the language selector stick to a corner:

```css
.select_wrap {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
}
```

### Navbar Integration

Integrate into a navigation bar:

```css
.navbar .select_wrap {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
}
```

## Animations

Add smooth animations:

### Dropdown Animation

```css
.select_wrap .select_ul {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    pointer-events: none;
}

.select_wrap.active .select_ul {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}
```

### Flag List Animation

```css
.wsmu-gt-icons {
    animation: slideIn 0.3s ease forwards;
    opacity: 0;
}

.wsmu-gt-icons:nth-child(1) { animation-delay: 0.1s; }
.wsmu-gt-icons:nth-child(2) { animation-delay: 0.2s; }
.wsmu-gt-icons:nth-child(3) { animation-delay: 0.3s; }

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}
```

## Mobile Responsive

Make it mobile-friendly:

```css
@media (max-width: 768px) {
    .select_wrap {
        width: 100%;
        max-width: 300px;
    }
    
    /* Full-width on mobile */
    .select_wrap .select_ul {
        width: 100%;
    }
    
    /* Larger touch targets */
    .select_wrap .select_ul li {
        padding: 15px 20px;
    }
}
```

## Custom Layouts

### Horizontal Flag List

```css
#wsmu-google-translate {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
}

.wsmu-gt-icons {
    flex: 0 0 auto;
}
```

### Grid Layout

```css
#wsmu-google-translate {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
}

.wsmu-gt-icons {
    text-align: center;
    padding: 10px;
}
```

## Accessibility

Improve accessibility:

```css
/* Focus states for keyboard navigation */
.wsmu-gt-icons:focus {
    outline: 2px solid #4285F4;
    outline-offset: 2px;
}

/* High contrast mode */
@media (prefers-contrast: high) {
    .wsmu-gt-icons {
        border: 2px solid currentColor;
    }
}
```

### ARIA Labels

```html
<div class="wsmu-gt-icons" 
     onclick="doGTranslate('de|en');" 
     role="button"
     aria-label="Translate to English"
     tabindex="0">
    <p class="notranslate">English</p>
</div>
```

## Brand Integration

Match your brand colors:

```css
:root {
    --brand-primary: #4285F4;
    --brand-secondary: #34A853;
    --brand-hover: #f0f7ff;
}

.select_wrap .default_option {
    border: 2px solid var(--brand-primary);
}

.select_wrap .select_ul li:hover {
    background: var(--brand-hover);
    color: var(--brand-primary);
}
```

## Performance Tips

1. **Minimize Reflows**: Use `transform` instead of `top`/`left` for animations
2. **Lazy Load Flags**: Load flag images only when needed
3. **Optimize Images**: Use WebP format for flag icons
4. **Reduce jQuery**: Consider vanilla JavaScript for better performance

## Next Steps

- Check out [Core JavaScript](./core-javascript) to understand the underlying code
- Learn about [Event Listeners](./event-listeners) for advanced functionality
