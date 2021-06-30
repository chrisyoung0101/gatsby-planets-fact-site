// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
// gatsby docs show common js modules
// this is ES module(s)
// we have a helper script in pacckage.json to allow us to use ES modules
export default {
  // not sure if siteMetadata will work when there is no live site
  // can't query this in GraphiQL(Gastby Side)
  siteMetadata: {
    title: `Planets Fact`,
    description: `The best Planets Fact Site in the Solar System`,
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
