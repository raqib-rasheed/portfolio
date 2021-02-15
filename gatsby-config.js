module.exports = {
  siteMetadata: {
    title: "my-portfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "yys0eoto",
        dataset: "portfolio",
        watchMode: true,
        token:
          "skSY6zC280HDo8l982gVLtgznpHZs3LFEMx15RPppoJplm28bbvgC6t2UPCvDumwPLKHqRVzRj3CFaNYTj6hSDjKjqvs1xigpqT7TfR2AUatqC0i1I6VtPD5EjoKXlicKkJfPm5zAIU585z29mYpp4VBZ8KIk95rOVdQqWqRCDK3KdKFlSpM",
      },
    },
  ],
};
