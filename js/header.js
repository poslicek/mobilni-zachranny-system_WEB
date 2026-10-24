const projectRoot = new URL("../", document.currentScript.src);
const currentPage = window.location.pathname.slice(projectRoot.pathname.length).replace(/\/$/, "") || "index.html";
const headerContainer = document.getElementById("site-header");

const navigationLinks = [
    ["index.html", "O systému MZS"],
    ["stabilizacni-bod/index.html", "Stabilizační bod"],
    ["operacni-schopnosti/index.html", "Operační schopnosti"],
    ["nasazeni-a-zkusenosti/index.html", "Nasazení a zkušenosti"],
    ["krizove-rizeni/index.html", "Pro krizové řízení"],
    ["o-nas/index.html", "O nás"],
    ["kontakt/index.html", "Kontakt"],
];

headerContainer.innerHTML = `
    <header class="site-header">
        <a class="brand" href="${new URL("index.html", projectRoot)}" aria-label="MZS - hlavní stránka">
            <img class="brand-logo" src="${new URL("images/velkeLogoSTextem.webp", projectRoot)}" alt="Logo MZS">
        </a>
        <nav class="site-nav" aria-label="Hlavní navigace">
            ${navigationLinks.map(([href, label]) => `
                <a href="${new URL(href, projectRoot)}"${currentPage === href ? ' aria-current="page"' : ""}>${label}</a>
            `).join("")}
        </nav>
    </header>
`;