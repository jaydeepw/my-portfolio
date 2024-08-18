const path = require("path");
const { version } = require("./package.json");

module.exports = {
  publicRuntimeConfig: {
    version,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "**",
      },
    ],
  },
};
