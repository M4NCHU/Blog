export function shortenText(
  text: string,
  textLen: number
  ): string {
    if (text.length <= textLen) {
      return text
    }
    return text.substring(0, textLen) + "..."
}