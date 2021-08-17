module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@database': './src/database',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@store': './src/store',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
