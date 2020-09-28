// Packaging configuration for signing, notarizing, and listing entitlements

const config = {
  hooks: {
    readPackageJson: async (forgeConfigJson, packageJson) => {
      packageJson.name = "MyNewName";
      packageJson.version = "1.2.3";

      return packageJson;
    }
  },
  packagerConfig: {},
  plugins: [
    [
      '@electron-forge/plugin-webpack',
      {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              "html": "./src/index.html",
              "js": "./src/renderer.ts",
              "name": "main_window"
            }

          ]
        }
      }
    ]
  ]
};

module.exports = config;