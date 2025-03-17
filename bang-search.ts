import { bangs } from "./bang-array.js";

const SEARCH_PARAM = "q";
const BANG_PATTERN = /!(\S+)/i;
const BANG_CLEANUP_PATTERN = /!\S+\s*/i;
const DEFAULT_SEARCH = "g";

const defaultSearch = localStorage.getItem('defaultSearch') ?? DEFAULT_SEARCH;

function bangRedirectURL(): string | null {
    try {
        const url = new URL(window.location.href);
        const query = url.searchParams.get(SEARCH_PARAM)?.trim() ?? "";
        
        if (!query) {
            console.warn("No search query provided");
            return null;
        }
        
        const match = query.match(BANG_PATTERN);
        const serci = match?.[1]?.toLowerCase();
        
        const searchBang = serci 
            ? bangs.find((shortcut) => shortcut.shortcut === serci)
            : bangs.find((shortcut) => shortcut.shortcut === defaultSearch);

        // Fallback to DEFAULT_SEARCH if no valid bang found
        if (!searchBang) {
            console.warn("No valid search bang found, falling back to default");
            const fallbackBang = bangs.find((shortcut) => shortcut.shortcut === DEFAULT_SEARCH);
            if (!fallbackBang) {
                console.error("Default search engine is missing from bangs");
                return null;
            }
            const cleanQuery = query.replace(BANG_CLEANUP_PATTERN, "").trim();
            return fallbackBang.link.replace("{{{s}}}", 
                encodeURIComponent(cleanQuery).replace(/%2F/g, "/")
            );
        }

        const cleanQuery = query.replace(BANG_CLEANUP_PATTERN, "").trim();
        
        return searchBang.link.replace("{{{s}}}", 
            encodeURIComponent(cleanQuery).replace(/%2F/g, "/")
        );
    } catch (error) {
        console.error("Error processing search:", error);
        return null;
    }
}

function redirectURL(): void {
    const searchURL = bangRedirectURL();
    if (!searchURL) return;
    window.location.replace(searchURL);
}

redirectURL();