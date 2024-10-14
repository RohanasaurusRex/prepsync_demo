/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStringMode: true,
    env:{
        OPENAI_API_KEY: process.env.OPENAI_API_KEY
    },
    images:{
        domains: ["lh3.googleusercontent.com"]
    }
  
};
export default nextConfig;
