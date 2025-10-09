import fetch from 'node-fetch';

export async function fetchImmersiveProductDetails(apiUrl) {
    
    const apiKey  = process.env.SERPAPI_KEY1;
    let finalUrl = apiUrl;

    if (!apiUrl) return null;
    if (apiKey && !apiUrl.includes('api_key=')) {
        const separator = apiUrl.includes('?') ? '&' : '?';
        finalUrl = `${apiUrl}${separator}api_key=${apiKey}`;
    }

    try {
        const response = await fetch(finalUrl);
        if (!response.ok) {
            console.warn(`SerpApi Immersive Fetch Warning: HTTP status: ${response.status}`);
            return null;
        }
        const data = await response.json();
        return data.product_results || null;
    } catch (error) {
        console.error("❌ Error fetching Immersive Product API:", error);
        return null;
    }
}