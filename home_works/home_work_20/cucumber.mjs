export default {
    loader: ['ts-node/esm'],
    formatOptions: {
        snippetInterface: 'async-await'
    },
    import: ['src/**/*.ts'],
};