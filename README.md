# Google Translator - With Flags #

A simple translator package using the google translater. Converts the whole website to your desired language, with multiple output formats.

1. [Dropdown Translate](./drop-down.html)
2. [Flag-list Translate](./flag-list.html)
3. [Text Translate](./text.html)

## Dropdown Translate

<img src="./assets/img/github/drop-down.png" width="100%">

## Flag-list Translate

<img src="./assets/img/github/flag-list.png" width="100%">

## Text Translate

<img src="./assets/img/github/text.png" width="100%">

## Adding event listner for google translation

Actually its impossible to listen to that. But there is a other way around. We can use the cookie `googtrans` to know the language currently set by the google translate.

```
// Browse the cookies.
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
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

// Check the cookies.
function checkCookie(){
    let lang = getCookie("googtrans");

    if (lang != "") {
        return lang;
    } else {
        return "en";
    }
}

// Browse the value of the `googtrans` cookie.
function checkLanguage() {

    // no-b-radius-translate-bt

    let lang = checkCookie();

    console.log(lang);

    if(lang == "en"){
        console.log("english");
    }

    if(lang == "/en/si"){
        console.log("sinhala");
    }

    if(lang == "/en/ta"){
        console.log("tamil");
    }

}

checkLanguage();
```
In order to run the function we can address it like this.

```
<div class="flex items-center md:ml-[15px] notranslate" id="wsmu-google-translate" style="height: 100%;">
    <div id="translate-to-english" onclick="doGTranslate('en|en'); checkLanguage();" title="EN">English</div>
    <div id="translate-to-sinhala" onclick="doGTranslate('en|si'); checkLanguage();" title="SI">Sinhala</div>
    <div id="translate-to-tamil" onclick="doGTranslate('en|ta'); checkLanguage();" title="TA">Tamil</div>
</div>
```