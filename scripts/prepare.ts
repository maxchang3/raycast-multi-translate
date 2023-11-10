import { execa } from 'execa'

(async () => {
  // Compile a native CLI to interact with the system dictionary
  await execa('swiftc', ['-o', 'define', 'define.swift'], { cwd: './assets' })
})()
