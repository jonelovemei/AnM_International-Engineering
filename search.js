const pages = [
    {
        title: "Home",
        content: "Welcome to A&M INTERNATIONAL ENGINEERING PTE LTD. We provide professional integration solutions.",
        url: "index.html"
    },
    {
        title: "About Us",
        content: "Learn more about our company's history, values, and mission.",
        url: "about.html"
    },
    {
        title: "Solutions",
        content: "Our solutions include supply chain optimization, digital transformation, and operational risk management.",
        url: "Solutions.html"
    },
    {
        title: "Products & Services",
        content: "Explore our services including control, measurement, and project execution.",
        url: "services.html"
    },
    {
        title: "Projects",
        content: "View our portfolio of completed and ongoing projects in various industries.",
        url: "projects.html"
    },
    {
        title: "Support",
        content: "Access technical support, product finder, and customer portal.",
        url: "Support.html"
    },
    {
        title: "Contact Us",
        content: "Reach out to us through our contact form or find our office location.",
        url: "contact.html"
    }
];

// 在 search.js 中修改这个函数名
function performSearch(keyword) {
    keyword = keyword.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    
    if (!resultsContainer) {
        console.error('Search results container not found');
        // 如果没有搜索结果容器，跳转到搜索页面
        window.location.href = `search.html?query=${encodeURIComponent(keyword)}`;
        return;
    }
    
    resultsContainer.innerHTML = "";

    const results = pages.filter(page =>
        page.title.toLowerCase().includes(keyword) ||
        page.content.toLowerCase().includes(keyword)
    );

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    } else {
        const list = document.createElement("ul");
        results.forEach(page => {
            const item = document.createElement("li");
            item.innerHTML = `<a href="${page.url}">${page.title}</a> - ${page.content.substring(0, 100)}...`;
            list.appendChild(item);
        });
        resultsContainer.appendChild(list);
    }
}

// 同时修改导出的函数名
window.performSearch = performSearch;
