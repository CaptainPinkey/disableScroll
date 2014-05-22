disableScroll
=============

A javascript library to capture to all userinputs that could cause the browser to scroll.

What gets caught?
-----------------
- touch inputs
- mousewheel
- keys
  - arrow keys
  - page up/down
  - space

What events get fired?
----------------------

'scrollDown'
'scrollUp'
'scrollBottom'
'scrollTop'

How to use it?
--------------

Only 2 steps needed to use disableScroll:

1. Link the javascript
```html
<script type="text/javascript" src="disableScroll.js"></script>
```

2. Call disableScroll!
```javascript
<script type="text/javascript">
  disableScroll();
</script>
```

That was it!

Want more?
----------

To use the events listen to them for example with jQuery

```javascript
$(window).on('scrollDown', callback);
```

Want to reeanble scrolling? Easy going!
```javascript
<script type="text/javascript">
  enableScroll();
</script>
```


