const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true, // Limpia el folder public/ en cada build
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Carga CSS e inyecta en <style>
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // Copia la imagen al output automáticamente
        generator: {
          filename: 'images/[name][ext]' // Guarda imágenes en public/images/
        }
      }
    ],
  },
};
