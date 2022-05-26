const { execSync } = require('child_process')

execSync(`cargo run -p napi-cli -- ${process.argv.slice(2).join(' ')}`, {
  shell: true,
  stdio: 'inherit',
})
