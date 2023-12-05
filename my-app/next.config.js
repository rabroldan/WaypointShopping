/** @type {import('next').NextConfig} */


module.exports = {
    eslint: {
      // Warning: This allows production builds to successfully complete even ifs
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  }