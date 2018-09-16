'use strict'
// 定义输入终端的样式
const chalk = require('chalk')
// 版本号处理
const semver = require('semver')
const packageConfig = require('../package.json')
// 执行终端的命令
const shell = require('shelljs')

function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}
// 版本要求
/*
process  node的变量，返回一个对象，包括nodejs的版本和其依赖
以下来自node 官网  https://nodejs.org/api/process.html#process_process_version
console.log(process.versions);
{ http_parser: '2.7.0',
  node: '8.9.0',
  v8: '6.3.292.48-node.6',
  uv: '1.18.0',
  zlib: '1.2.11',
  ares: '1.13.0',
  modules: '60',
  nghttp2: '1.29.0',
  napi: '2',
  openssl: '1.0.2n',
  icu: '60.1',
  unicode: '10.0',
  cldr: '32.0',
  tz: '2016b' }
 *  */
const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]
// 在全局变量中搜索npm，如果存在，则将npm相关的信息加入到versionRequirements数组中
if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]
    // 检查当前版本是否在所要求的范围内，如果不在，则将提示信息push到warnings数组中
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

    console.log()
    process.exit(1)
  }
}
