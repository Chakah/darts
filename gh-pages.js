import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		dotfiles: true
	},
	(e) => {
		console.log('Deploy Complete!', e);
	}
);
