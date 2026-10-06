module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "src/includes/assets": "assets"
  });

  return {
    dir: {
      input: "src",
      includes: "includes",
      data: "data",
      output: "dist"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};