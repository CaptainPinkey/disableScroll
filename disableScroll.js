function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function keydown(e) {
    switch (e.keyCode) {
        case 32:
            eventScrollBottom(e);
            break;
        case 33:
            eventScrollTop(e);
            break;
        case 34:
            eventScrollBottom(e);
            break;
        case 35:
            eventScrollUp(e);
            break;
        case 36:
            eventScrollDown(e);
        case 37:
            //TODO scrolling left/right
            break;
        case 38:
            eventScrollUp(e);
            break;
        case 39:
            //TODO scrolling left/right
            break;
        case 40:
            eventScrollDown(e);
            break;
    }
}

function wheel(e) {
    d = e.wheelDelta
    if(d < 0){
        eventScrollDown(e);
    }
    else if(d > 0 ){
        eventScrollUp(e);
    }
}

var touches;

function touchstart(e){
    touches = new Array(e.touches[0]);
}
function touchmove(e) {
    preventDefault(e);
    touches.push(e.touches[0]);
}
function touchend(e){
    var offset = 0;
    var lastTouch = 0;
    touches.foreach(function(){
        offset += this.screenY - lastTouch.screenY;
    });
    if(offset > 20){
        eventScrollUp(e);
    }
    else if(offset < -20){
        eventScrollDown(e);
    }
}

function disableScroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    document.onmousewheel = wheel;
    document.onkeydown = keydown;
    document.ontouchstart = touchstart;
    document.ontouchmove = touchmove;
    document.ontouchend = touchend;
}

function enableScroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = document.ontouchmove = null;
}

function eventScrollDown(e) {
    preventDefault(e);
    console.log('Down');
    var event = new CustomEvent('scrollDown', {
        'originalEvent': e
    });
}

function eventScrollUp(e) {
    preventDefault(e);
    console.log('Up');
    var event = new CustomEvent('scrollUp', {
        'originalEvent': e
    });
}
function eventScrollBottom (e) {
    preventDefault(e);
    console.log('Bottom');
    var event = new CustomEvent('scrollBottom', {
        'originalEvent': e
    });
}
function eventScrollTop (e) {
    preventDefault(e);
    console.log('Top');
    var event = new CustomEvent('scrollTop', {
        'originalEvent': e
    });
}


