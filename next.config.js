/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['img2.shaadi.com', 'www.simplilearn.com']
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

module.exports = nextConfig;
