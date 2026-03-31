export const splitLastWord = (text?: string): { firstPart: string; lastWord: string } => {
    if (!text) return { firstPart: "", lastWord: "" };
    const words = text.trim().split(/\s+/);
    if (words.length <= 1) return { firstPart: "", lastWord: text };
    const lastWord = words.pop() || "";
    return { firstPart: words.join(" "), lastWord };
};

export const buildQueryParams = (params?: Record<string, string | number | boolean | undefined | null>): string => {
    if (!params) return "";
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") {
            queryParams.append(key, value.toString());
        }
    });
    const queryString = queryParams.toString();
    return queryString ? `?${queryString}` : "";
};