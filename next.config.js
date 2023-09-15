/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["storage.googleapis.com"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "storage.googleapis.com",
            port: "",
            pathname: "/ssg-images/**",
          },
          {
            protocol: "https",
            hostname: "ssgpoint.s3.amazonaws.com",
            port: "",
            pathname: "/**",
          },
        ],
      },
      env: {
        NEXT_PUBLIC_SESSION_SECRET: "SSGPOINTAPP04",
      },
      
      typescript: {
        ignoreBuildErrors: true,
      },
};

module.exports = nextConfig;
