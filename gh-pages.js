import { publish } from 'gh-pages';

publish('build', (e) => {
	console.log('Deploy Complete!', e);
});
