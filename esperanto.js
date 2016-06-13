'use strict';

function analyze(text) {
	let info = {};
	
	info.wordlist = text.toLowerCase().match(/[abcĉdefgĝhĥijĵklmnoprsŝtuŭvz]+/g);
	
	return info;
}
