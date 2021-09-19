<h2 id="docs">Docs</h2>

<h3>Initial Setup</h3>

<p>
  To <strong>show the toasts</strong>, import and place the <code>&lt;Toasts /&gt;</code>
  component inside your
  <code>src/routes/__layout.svelte</code> for SvelteKit or
  <code>src/pages/_layout.svelte</code>
  for Routify, like this:
</p>

<pre>
  <code>
&lt;script&gt;
  import {'{'} Toasts {'}'} from &quot;as-toast&quot;;
&lt;/script&gt;

&lt;Toasts /&gt;

&lt;slot /&gt;
  </code>
</pre>

<p>
  This is used to display the toasts, so it needs to be rendered wherever you want your toasts
  visible.
</p>

<h3>Add Toasts</h3>

<p>
  To create or <strong>add a toast</strong> import the <code>addToast</code> function from
  <code>as-toast</code> and call it with a message or any HTML.
</p>

<pre>
  <code>
import {'{'} addToast {'}'} from &quot;as-toast&quot;

addToast("Just a simple 'info' toast", "info");
</code>
</pre>

<p>
  <strong>Set the toast type</strong> with the second parameter. Currently there is only two types: 'info'
  and 'warn'. By default, toasts will be of type 'info'.
</p>

<pre>
  <code>
addToast("Just a simple 'info' toast", "info");

addToast("Just a simple 'warn' toast", "warn");
</code>
</pre>

<p>
  <strong>Set the amount of time</strong> in milliseconds the toast will be displayed by setting the
  third parameter. By default, toasts will be displayed for 5000 milliseconds.
</p>

<pre>
  <code>
addToast("This toast will display for about 11,574 days.", undefined, 999999999);
</code>
</pre>

<h3>Customizing with CSS Custom Properties</h3>

<p>
  The default <code>&lt;Toast /&gt;</code> item component can be replaced, but is also configurable using
  CSS Custom Properties. Overwrite the defaults either by setting CSS Custom Properties in a global scope
  like this:
</p>

<pre>
  <code>
:root {'{'}
  --as-toast-border-radius: 0; /* gives toasts square shape */
{'}'}
  </code>
</pre>

<p>Or you can use <a href="https://svelte.dev/docs#style_props">--style-props sugar</a>:</p>
<pre>
  <code>
    &lt;Toasts --as-toast-border-radius="99999999px"/&gt; &lt;!-- gives toasts pill shape --&gt;
</pre>

<h4 id="css-custom-props-list">Full list of CSS Custom Properties with defaults</h4>

<pre>
  <code>
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

<h3>Customizing by replacing Components</h3>

<p>
  The default <code>&lt;Toast /&gt;</code> item and <code>&lt;Cancel /&gt;</code> icon components
  can be replaced. Pass in your custom toast item and cancel icon components to the
  <code>&lt;Toasts /&gt;</code> component.
</p>

<pre>
  <code>
&lt;Toasts {'{toastComponent} {cancelIcon}'} /&gt;
  </code>
</pre>

<p>
  To create custom toast item or cancel icon components, refer to the original components' source
  code.
</p>

<style>
  pre {
    max-width: 100%;
    overflow-y: auto;
  }
</style>