// tailwind.config.js
export default {
    // If you’re using Nuxt 3, it might be `export default { ... }` instead of `module.exports`.
    theme: {
        extend: {
            colors: {
                terracotta: {
                    DEFAULT: '#C1440E',
                    hover:   '#A2360C',
                },
                burnt: {
                    DEFAULT: '#E07A5F',
                    hover:   '#C86951',
                },
                mustard: {
                    DEFAULT: '#F2CC8F',
                    hover:   '#D6B578',
                },
                teal: {
                    DEFAULT: '#2E8B57',
                    hover:   '#276F47',
                },
                olive: {
                    DEFAULT: '#556B2F',
                    hover:   '#47592A',
                },
                cream: {
                    DEFAULT: '#FFF4E6',
                    hover:   '#E8D8CC',
                },
            },
        },
    },
    // Make sure to include any paths to your Vue files so Tailwind can tree-shake unused classes:
    content: [
        './components/**/*.vue',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.js',
        './nuxt.config.{js,ts}',
    ],
}
