/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStringMode: true,
    env:{
        OPENAI_API_KEY: process.env.OPENAI_API_KEY
    }
};
export default nextConfig;
