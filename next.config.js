/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: `@import "styles/variables";`,
      },
}

module.exports = nextConfig
