module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        remarkPlugins: [
          import('remark-slug')
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'content',
        name: 'content'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/icon.svg'
      }
    }
  ]
}
