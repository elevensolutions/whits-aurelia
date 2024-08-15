import {$, HtmlBaseAttributeMap, HtmlGlobalAttribute} from 'whits';

type AuAttrs = 'if' | 'show' | 'hide';

type Bind = {
	[K in keyof HtmlBaseAttributeMap]:
		`${HtmlBaseAttributeMap[K] | HtmlGlobalAttribute | AuAttrs}.${'bind' | 'one-way' | 'two-way'}` | AuAttrs | 'repeat.for'
};

declare module 'whits' {
	interface HtmlAttributeOverrides extends Bind {}
}
