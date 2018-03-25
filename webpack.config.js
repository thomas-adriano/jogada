/**
 * Este arquivo contém customizações do webpack, podendo ser utilizado para incluir
 * ou modificar comportamentos do processo de build do IONIC. Seu objeto de retorno
 * (module.exports) não segue o padrão esperado pelo webpack, mas atende ao padrão
 * esperado pelo IONIC.
 *
 * Padrão webpack:
 * module.exports = {
 *      entry: ...
 *      plugins: ...
 *      output: ...
 *      ...
 * }
 *
 * Padrão IONIC:
 * module.exports = {
 *      prod: {
 *          entry: ...
 *          plugins: ...
 *          ...
 *      },
 *      prod: {
 *          entry: ...
 *          plugins: ...
 *          ...
 *      },
 * }
 */
const defaultWebpackConfigs = require("@ionic/app-scripts/config/webpack.config.js");
const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

const DEV_ENV = process.env.IONIC_ENV === "dev";

const pluginsApplied = applyPlugins(defaultWebpackConfigs);
const loadersApplied = applyLoaders(pluginsApplied);
const additionalsApplied = applyAdditionalConfigs(loadersApplied);

module.exports = additionalsApplied;

function applyPlugins(ionicConfigs) {
  //commons plugins
  const plugins = [

  ];

  const commonsDefinePluginProps = {
    DEV_ENV: JSON.stringify(DEV_ENV)
  };
  if (DEV_ENV) {
    //dev plugins
    plugins.push(
      new webpack.DefinePlugin(Object.assign(commonsDefinePluginProps, {

      }))
    );
  } else {
    //prod plugins
    plugins.push(
      new webpack.DefinePlugin(Object.assign(commonsDefinePluginProps, {

      }))
    );
  }

  return mergeConfigs(ionicConfigs, { plugins });
}

function applyLoaders(ionicConfigs) {
  //commons loaders
  const loaders = [];

  if (DEV_ENV) {
    //dev loaders
  } else {
    //prod loaders
  }
  return mergeConfigs(ionicConfigs, { module: { loaders } });
}

function applyAdditionalConfigs(ionicConfigs) {
  const additionalConfigs = {
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "src/app")
      }
    }
  };

  return mergeConfigs(ionicConfigs, additionalConfigs);
}

function mergeConfigs(ionicConfigs, customConfigs) {
  if (DEV_ENV) {
    return {
      dev: merge.smart(ionicConfigs.dev, customConfigs),
      prod: Object.assign({}, ionicConfigs.prod)
    };
  } else {
    return {
      prod: merge.smart(ionicConfigs.prod, customConfigs),
      dev: Object.assign({}, ionicConfigs.dev)
    };
  }
}
