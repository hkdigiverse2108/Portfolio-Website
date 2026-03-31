export const splitLastWord = (text?: string): { firstPart: string; lastWord: string } => {
    if (!text) return { firstPart: "", lastWord: "" };
    const words = text.trim().split(/\s+/);
    if (words.length <= 1) return { firstPart: "", lastWord: text };
    const lastWord = words.pop() || "";
    return { firstPart: words.join(" "), lastWord };
};