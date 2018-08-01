const path = require('path');
export default {
  plugins: ['umi-plugin-dva'],
  hashHistory: true,
  alias: {
      '@': path.resolve(__dirname, 'src/'),
  }
}
