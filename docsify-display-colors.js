(function () {
    function addSpanBeforeHex(text) {
        // Regex taken from ctwheels on https://stackoverflow.com/a/63856391
        const hexRegex = /#[a-f\d]{3}(?:[a-f\d]?|(?:[a-f\d]{3}(?:[a-f\d]{2})?)?)\b/gmi;
        const hslRegex = /hsla?\((?:(-?\d+(?:deg|g?rad|turn)?),\s*((?:\d{1,2}|100)%),\s*((?:\d{1,2}|100)%)(?:,\s*((?:\d{1,2}|100)%|0(?:\.\d+)?|1))?|(-?\d+(?:deg|g?rad|turn)?)\s+((?:\d{1,2}|100)%)\s+((?:\d{1,2}|100)%)(?:\s+((?:\d{1,2}|100)%|0(?:\.\d+)?|1))?)\)/gmi;
        const rgbRegex = /rgba?\((?:(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%),\s*(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%),\s*(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%)(?:,\s*((?:\d{1,2}|100)%|0(?:\.\d+)?|1))?|(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%)\s+(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%)\s+(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%)(?:\s+((?:\d{1,2}|100)%|0(?:\.\d+)?|1))?)\)/gmi;
        
        return text.replace(hexRegex, '<span class="color-swatch" style="background-color:$&;"></span>$&')
            .replace(hslRegex, '<span class="color-swatch" style="background-color:$&;"></span>$&')
            .replace(rgbRegex, '<span class="color-swatch" style="background-color:$&;"></span>$&');
    }
      
    var colorsInCode = function (hook, vm) {
        hook.afterEach(function (html) {
            html = addSpanBeforeHex(html);
            return html;
        });
    };
  
    $docsify = $docsify || {};
    $docsify.plugins = [].concat($docsify.plugins || [], colorsInCode);
})();