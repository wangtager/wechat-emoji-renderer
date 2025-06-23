/**
 * Copy text to clipboard
 * @param text text to copy
 * @returns Promise<boolean> whether copy was successful
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    /*
     * Prefer modern Clipboard API
     */
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
    
    /*
     * Fallback: use execCommand
     */
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed'
    textArea.style.left = '-999999px'
    textArea.style.top = '-999999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    
    const result = document.execCommand('copy')
    document.body.removeChild(textArea)
    return result
  } catch (error) {
    console.error('Failed to copy text: ', error)
    return false
  }
}

/**
 * Check if clipboard is supported
 * @returns boolean indicating clipboard support
 */
export function isClipboardSupported(): boolean {
  return !!(navigator.clipboard || document.execCommand)
}

