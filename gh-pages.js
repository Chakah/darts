import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/Chakah/darts.git',
		user: {
			name: 'Chakah',
			email: 'flxkirschner@gmail.com'
		},
		dotfiles: true
	},
	(e) => {
		console.log('Deploy Complete!', e);
	}
);
