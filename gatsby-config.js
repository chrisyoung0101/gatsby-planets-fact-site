// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
module.exports = {
  siteMetadata: {
    title: `I like Google fonts`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Antonio\:500`, `Spartan\:400,700`],
        display: 'swap',
      },
    },
  ],
};
