module.exports = {
  presets: [
    '@babel/preset-env', // Transpile modern JavaScript to older versions
    '@babel/preset-react', // Transpile JSX
    '@babel/preset-typescript', // Transpile TypeScript
    '@babel/preset-flow' // Transpile Flow (if you have any Flow code)
  ],
  plugins: [
    '@babel/plugin-syntax-flow' // Enable parsing of Flow syntax (if you have any Flow code)
  ]
};
