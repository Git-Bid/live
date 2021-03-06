import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal
} from "../web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let main1;

	return {
		c() {
			main1 = element("main");

			main1.innerHTML = `<hero class="svelte-auwo9d"><inlineFlex class="svelte-auwo9d"><div><h1 class="svelte-auwo9d">GitBid</h1> 
                <p class="svelte-auwo9d">helping sustain open source development</p></div></inlineFlex> 
        <list class="svelte-auwo9d"><div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled=""><main id="js-pjax-container" data-pjax-container=""><div class="page-content position-relative container-lg p-responsive svelte-auwo9d"><div class="Box Box--responsive hx_Box--firstRowRounded0" id="js-issues-toolbar" data-pjax=""><div class="Box-header d-flex flex-justify-between svelte-auwo9d"><div class="table-list-filters flex-auto d-none d-md-block no-wrap svelte-auwo9d"><div class="table-list-header-toggle states flex-auto pl-0 svelte-auwo9d"><span class="btn-link selected svelte-auwo9d" data-ga-click="Issues, Table state, Open"><svg class="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
                                            19 Open</span> 

                                        <span class="btn-link  svelte-auwo9d" data-ga-click="Issues, Table state, Closed"><svg class="octicon octicon-check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                                            10 Closed</span></div></div></div> 
                            <div class="js-navigation-container js-active-navigation-container svelte-auwo9d" style="margin: -1px;"><div class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row navigation-focus svelte-w4vpom svelte-auwo9d"><div class="d-flex Box-row--drag-hide position-relative svelte-w4vpom svelte-auwo9d"><div class="flex-shrink-0 pt-2 pl-3 svelte-w4vpom svelte-auwo9d"><span class="tooltipped tooltipped-e" aria-label="Open issue"><svg class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg></span></div> 
                                        <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2 svelte-w4vpom svelte-auwo9d"><a class="v-align-middle muted-link h4 pr-1 svelte-w4vpom svelte-auwo9d">gitbid/api</a> 
                                            <a id="issue_4_dylantmarsh_monokai-vibrant_link" class="link-gray-dark v-align-middle no-underline h4 js-navigation-open svelte-w4vpom svelte-auwo9d" data-hovercard-type="issue" data-hovercard-url="/dylantmarsh/monokai-vibrant/issues/4/hovercard" href="/dylantmarsh/monokai-vibrant/issues/4">Add
                                                querying option</a> 
                                            <div class="mt-1 text-small text-gray svelte-w4vpom svelte-auwo9d"><span class="opened-by">#4
                                                    opened
                                                    <relative-time datetime="2020-12-11T07:23:18Z" class="no-wrap svelte-w4vpom svelte-auwo9d" title="Dec 10, 2020, 11:23 PM PST">on Dec 10, 2020</relative-time>
                                                    by
                                                    <a class="muted-link svelte-w4vpom svelte-auwo9d" title="Open issues created by JacobZwang" href="/issues?q=is%3Aissue+is%3Aopen+author%3AJacobZwang">JacobZwang</a></span> 
                                                <span class="d-none d-md-inline svelte-w4vpom svelte-auwo9d"></span></div></div></div></div></div> 
                            <div class="js-navigation-container js-active-navigation-container svelte-auwo9d" style="margin: -1px;"><div class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row navigation-focus svelte-w4vpom svelte-auwo9d"><div class="d-flex Box-row--drag-hide position-relative svelte-w4vpom svelte-auwo9d"><div class="flex-shrink-0 pt-2 pl-3 svelte-w4vpom svelte-auwo9d"><span class="tooltipped tooltipped-e" aria-label="Open issue"><svg class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg></span></div> 
                                        <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2 svelte-w4vpom svelte-auwo9d"><span style="float: left;"><a class="v-align-middle muted-link h4 pr-1 svelte-w4vpom svelte-auwo9d">gitbid/api</a> 
                                                <a id="issue_4_dylantmarsh_monokai-vibrant_link" class="link-gray-dark v-align-middle no-underline h4 js-navigation-open svelte-w4vpom svelte-auwo9d" data-hovercard-type="issue" data-hovercard-url="/dylantmarsh/monokai-vibrant/issues/4/hovercard" href="/dylantmarsh/monokai-vibrant/issues/4">Add
                                                    querying option</a> 
                                                <div class="mt-1 text-small text-gray svelte-w4vpom svelte-auwo9d"><span class="opened-by">#4
                                                        opened
                                                        <relative-time datetime="2020-12-11T07:23:18Z" class="no-wrap svelte-w4vpom svelte-auwo9d" title="Dec 10, 2020, 11:23 PM PST">on Dec 10, 2020</relative-time>
                                                        by
                                                        <a class="muted-link svelte-w4vpom svelte-auwo9d" title="Open issues created by JacobZwang" href="/issues?q=is%3Aissue+is%3Aopen+author%3AJacobZwang">JacobZwang</a></span> 
                                                    <span class="d-none d-md-inline svelte-w4vpom svelte-auwo9d"></span></div></span> 
                                            <div style="height: 14pt; background-color: green; float: right; width: 50pt; border-radius: 4pt;"><span style="color: white; font-size: 10pt; font-weight: bold; text-align: center; display: block; margin-top: 1pt;">\$30</span></div></div></div></div></div> 
                            <div class="js-navigation-container js-active-navigation-container svelte-auwo9d" style="margin: -1px;"><div class="Box-row Box-row--focus-gray p-0 mt-0 js-navigation-item js-issue-row navigation-focus svelte-w4vpom svelte-auwo9d"><div class="d-flex Box-row--drag-hide position-relative svelte-w4vpom svelte-auwo9d"><div class="flex-shrink-0 pt-2 pl-3 svelte-w4vpom svelte-auwo9d"><span class="tooltipped tooltipped-e" aria-label="Open issue"><svg class="octicon octicon-issue-opened open" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg></span></div> 
                                        <div class="flex-auto min-width-0 p-2 pr-3 pr-md-2 svelte-w4vpom svelte-auwo9d"><a class="v-align-middle muted-link h4 pr-1 svelte-w4vpom svelte-auwo9d">gitbid/api</a> 
                                            <a id="issue_4_dylantmarsh_monokai-vibrant_link" class="link-gray-dark v-align-middle no-underline h4 js-navigation-open svelte-w4vpom svelte-auwo9d" data-hovercard-type="issue" data-hovercard-url="/dylantmarsh/monokai-vibrant/issues/4/hovercard" href="/dylantmarsh/monokai-vibrant/issues/4">Add
                                                querying option</a> 
                                            <div class="mt-1 text-small text-gray svelte-w4vpom svelte-auwo9d"><span class="opened-by">#4
                                                    opened
                                                    <relative-time datetime="2020-12-11T07:23:18Z" class="no-wrap svelte-w4vpom svelte-auwo9d" title="Dec 10, 2020, 11:23 PM PST">on Dec 10, 2020</relative-time>
                                                    by
                                                    <a class="muted-link svelte-w4vpom svelte-auwo9d" title="Open issues created by JacobZwang" href="/issues?q=is%3Aissue+is%3Aopen+author%3AJacobZwang">JacobZwang</a></span> 
                                                <span class="d-none d-md-inline svelte-w4vpom svelte-auwo9d"></span></div></div></div></div></div></div></div></main></div></list></hero> 
    <grid class="svelte-auwo9d"><div><h2 class="svelte-auwo9d">Developers</h2> 
            <p class="svelte-auwo9d">make money for for fixing important issues</p></div> 
        <div><h2 class="svelte-auwo9d">Creators</h2> 
            <p class="svelte-auwo9d">pay to get what they need fixed faster</p></div></grid> 
    <grid class="svelte-auwo9d"><div><h2 class="svelte-auwo9d">github integration</h2> 
            <p class="svelte-auwo9d">we created a chrom extension so you can create <br/>a view issues
                directly in github</p></div> 
        <div><h2 class="svelte-auwo9d">open source</h2> 
            <p class="svelte-auwo9d">exisitng solutions are not open source, Gitbid is itself open
                source <br/>to promote open source development</p></div></grid>`;
		},
		m(target, anchor) {
			insert(target, main1, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(main1);
		}
	};
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default App;