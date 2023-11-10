import { chmodSync } from 'node:fs'
import { join } from 'node:path'
import { execa } from 'execa'
import { environment } from '@raycast/api'
// import { getMarkdown } from './turndown'

const filepath = join(environment.assetsPath, 'define')
// Raycast will copy assets without execute permission
chmodSync(filepath, 0o755)

export async function define(text: string): Promise<string | false> {
    // We use a sub process here because Raycast
    const canBeDefined = Boolean(text) && text.trimStart().trimEnd().split(' ').length === 1
    if (!canBeDefined) return false
    // does not support bundling native bindings
    try {
        const { stdout: corrected } = await execa(filepath, [text])
        // const markdown = getMarkdown(corrected)
        return text === corrected ? false : corrected
    }
    catch (e) {
        console.error(e)
        return false
    }
}
function formatMarkdown(subject: any, markdown: string): string | PromiseLike<string> {
    throw new Error('Function not implemented.')
}

