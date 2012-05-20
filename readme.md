# sTabs jQuery plugin

Tiny jQuery plugin making tabs from simple unordered lists.
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)

## Example
```javascript
$(function(){
  $('#tabs').sTabs({animate: true});
});
```

## Options

### startWith (int; default: 1)
Number of tab to activate as first.

### eventType (string; default: 'click')
Event to handle changing tabs. Must be a valid `jQuery.bind()` event type.

### animate (bool; default: false)
Whether or not animate changing tabs.

### duration (int; default: 300)
Duration of animation in miliseconds.
