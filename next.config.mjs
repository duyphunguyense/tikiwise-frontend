/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        domains: ['salt.tikicdn.com']
    }
};

export default nextConfig;
