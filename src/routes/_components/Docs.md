## Docs

### Initial Setup

To **show the toasts**, import and place the `<Toasts />` component
inside your `src/routes/__layout.svelte` for SvelteKit
or `src/pages/_layout.svelte` for Routify, like this:

```html
<script>
  import { Toasts } from "as-toast";
</script>

<slot />

<Toasts />
```

This is used to display the toasts, so it needs to be rendered wherever you want your toasts
visible.

### Add Toasts

To create or **add a toast** import the `addToast` function from
`"as-toast"` and call it with a message or any HTML.

```js
import { addToast } from "as-toast";

addToast("Just a simple 'info' toast", "info");
```

**Set the toast type** with the second parameter. Currently, there is only two types:
'info' and 'warn'. By default, toasts will be of type 'info'.

```js
addToast("Just a simple 'info' toast", "info");

addToast("Just a simple 'warn' toast", "warn");
```

**Set the amount of time** in milliseconds the toast will be displayed by setting the
third parameter. By default, toasts will be displayed for 5000 milliseconds.

```js
addToast("This toast will display for about 11,574 days.", undefined, 9001);
```

### Customizing with CSS Custom Properties

The default toast item component can be replaced, but is also highly configurable using
CSS Custom Properties. Overwrite the defaults, either by setting CSS Custom Properties in a global
scope like this:

```css
:root {
  --as-toast-border-radius: 0; /* gives toasts square shape */
}
```

Or you can use <a href="https://svelte.dev/docs#style_props" target="_blank">--style-props sugar</a>:

```html
<Toasts --as-toast-border-radius="999px" />
<!-- gives toasts pill shape -->
```

#### Full list of CSS Custom Properties with defaults

<details>
  <summary>
    Toggle full list
  </summary>

<pre class="language-css">
  <code class="language-css">
/* Toasts Wrapper */
--as-toast-bottom: 1em; /* Distance from bottom of screen */

/* Toast */
--as-toast-padding: 1em;
--as-toast-border: 1px solid black;
--as-toast-border-radius: 0.5em;
--as-toast-color: black;
--as-toast-backdrop-filter: none;
--as-toast-shadow:  0 0.3px 1.4px rgba(0, 0, 0, 0.068),
                    0 0.7px 3.5px rgba(0, 0, 0, 0.098),
                    0 1.4px 7.1px rgba(0, 0, 0, 0.122),
                    0 2.9px 14.6px rgba(0, 0, 0, 0.152),
                    0 8px 40px rgba(0, 0, 0, 0.22);

/* Inline Toast Cancel Button */
--as-toast-btn-border-radius: 999999999px;
--as-toast-btn-padding: 0.45em;
--as-toast-btn-border: 1px solid black;
-as-toast-btn-background: white;

/* Type: 'info'*/
--as-toast-info-color: var(--as-toast-color, black);
--as-toast-info-border-color: #2786cb;
--as-toast-info-background: #abd2ef;

/* Type: 'warn'*/
--as-toast-warn-color: var(--as-toast-color, black);
--as-toast-warn-border-color: #c92626;
--as-toast-warn-background: #efa9a9;
  </code>
</pre>
</details>

Check out some [theme ideas at the end of the page](#themes)!

### Customizing by replacing default components

The default toast item and cancel icon components can be replaced.
Pass in your custom components to the `<Toasts />` component.

```html
<Toasts {toastComponent} {cancelIcon} />
```

To create custom toast item or cancel icon components, refer to the original components' source
code:

- <a href="https://github.com/SarcevicAntonio/as-toast/blob/main/src/lib/Toast.svelte" target="_blank">
    Sourcecode for toast item component
  </a>
- <a href="https://github.com/SarcevicAntonio/as-toast/blob/main/src/lib/Cancel.svelte" target="_blank">
      Sourcecode for cancel icon component
    </a>
