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

export const getSocialIconClass = (icon?: string, title?: string): string => {
  if (icon && icon.includes("fa-")) {
    return icon.startsWith("fa-brands") || icon.startsWith("fa-solid") || icon.startsWith("fa-regular") || icon.startsWith("fas ") || icon.startsWith("fab ")
      ? icon
      : `fa-brands ${icon}`;
  }
  const key = (title || icon || "").toLowerCase();
  if (key.includes("facebook")) return "fa-brands fa-facebook-f";
  if (key.includes("insta")) return "fa-brands fa-instagram";
  if (key.includes("what") || key.includes("wa")) return "fa-brands fa-whatsapp";
  if (key.includes("link")) return "fa-brands fa-linkedin";
  if (key.includes("twit") || key.includes("x")) return "fa-brands fa-x-twitter";
  if (key.includes("you") || key.includes("yt")) return "fa-brands fa-youtube";
  if (key.includes("teleg")) return "fa-brands fa-telegram";
  if (key.includes("github")) return "fa-brands fa-github";
  if (key.includes("drib")) return "fa-brands fa-dribbble";
  return "fa-solid fa-share-nodes";
};