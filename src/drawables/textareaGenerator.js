const TEXT_AREA_ID = "konva-text-editor";

export default (x, y, color, fontFamily, onBlur) => {
    let textarea = getTextArea();
    styleTextarea(textarea, x, y, color, fontFamily);
    setupEvents(textarea, onBlur);

    //Auto focus after creation
    setTimeout(() => {
        textarea.focus();
    }, (100));
}


const getTextArea = () => {
    var textarea = document.getElementById(TEXT_AREA_ID);
    if (!textarea) {
        textarea = document.createElement('textarea');
        let canvas = document.getElementsByClassName("konvajs-content")[0];
        canvas.appendChild(textarea);

        textarea.style.position = 'absolute';
        textarea.id = TEXT_AREA_ID;
    }
    return textarea;
}

const styleTextarea = (textarea, x, y, color, fontFamily) => {
    textarea.style.top = y + 'px';
    textarea.style.left = x + 'px';
    textarea.style.width = "20px";
    textarea.style.height = "20px"
    textarea.style.fontSize = '12px';
    textarea.style.border = 'none';
    textarea.style.padding = '0px';
    textarea.style.margin = '0px';
    textarea.style.overflow = 'hidden';
    textarea.style.whiteSpace = 'nowrap';
    textarea.style.background = 'none';
    textarea.style.outline = 'none';
    textarea.style.resize = 'none';
    textarea.style.lineHeight = "12px"
    textarea.style.transformOrigin = 'left top';
    textarea.style.color = color;
    textarea.style.fontFamily = fontFamily;
}

const setupEvents = (textarea, onBlur) => {

    textarea.addEventListener('input', (e) => {
        autoExpand(e.target);
    });

    textarea.addEventListener('blur', (e) => {
        removeTextarea();
        onBlur(e);
    });
}

const removeTextarea = () => {
    var elem = document.getElementById(TEXT_AREA_ID);
    elem.parentNode.removeChild(elem);
}

const autoExpand = (field) => {
    // Calculate the height
    var height = field.scrollHeight;
    var width = field.scrollWidth;
    field.style.width = width + 'px';
    field.style.height = height + 'px';
}