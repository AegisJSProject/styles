import nodeResolve from '@rollup/plugin-node-resolve';

export default {
	input: 'styles.js',
	output: {
		file: 'styles.cjs',
		format: 'cjs',
	},
	plugins: [nodeResolve()],
};

