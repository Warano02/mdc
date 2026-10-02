export default function manifest() {
  return {
    name: "Easy Steps for Canadian Visa Applications | MDC Canada",
    short_name: "MDC Canada",
    description: "Looking to work, study, or live in Canada? MDC Canada’s certified consultants simplify the visa and immigration process for you. Apply today!",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#000000",
    theme_color: "#000000",
    categories: ["visa", "canada", "travel"],
    icons: [
      {
        src: "/macbook.png",
        sizes: "100x100",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "444x592",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    screenshots: [
      {
        src: "/readme/desktop.png",
        sizes: "1920x1080",
        type: "image/png",
        form_factor: "wide",
        label: "Desktop mdc experience",
      },
      {
        src: "/readme/mobile.png",
        sizes: "441x789",
        type: "image/png",
        form_factor: "narrow",
        label: "Mobile mdc experience",
      },
    ],
  };
}
