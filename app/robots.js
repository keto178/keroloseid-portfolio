export default function robots() {
    const baseUrl = "https://keroloseid-portfolio.vercel.app";

    return {
    rules: {
        userAgent: "*",
        allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    };
}