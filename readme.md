# sTabs jQuery plugin

Tiny jQuery plugin making tabs from simple unordered lists.
Licensed under the MIT License (https://opensource.org/licenses/MIT)

## Example
```javascript
$(function(){
  $('#tabs').sTabs({animate: true});
});
```

## Options

- `startWith (int; default: 1)` \
Which tab should be activated as first.

- `eventType (string; default: 'click')` \
Event to trigger changing tabs. Must be a valid `jQuery.bind()` event type.

- `followTarget (bool; default: true)` \
Should the tab referenced by `location.hash` be activated on page load?
If enabled, also updates the location.hash via `history.pushState`.

- `animate (bool; default: false)` \
Add fadeIn animation when changing tabs.

- `duration (int; default: 300)` \
Duration of animation in milliseconds.

- `cycle (bool; default: false)` \
Automatically cycle through tabs.

- `interval (int; default: 5000)` \
Cycle interval in miliseconds.
