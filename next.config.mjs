/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
      
      config.module.rules.push({
        test: /\.(mp4|webm|ogg)$/, // 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',  
              publicPath: '/_next/static/videos/',  
              outputPath: 'static/videos/', 
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  
