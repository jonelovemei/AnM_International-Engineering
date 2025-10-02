// search.js
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

function performSearch(keyword) {
    // 修复：如果没有传递参数，从输入框获取值
    if (typeof keyword === 'undefined') {
        const searchInput = document.getElementById('search-input');
        keyword = searchInput ? searchInput.value.trim() : '';
    }
    
    // 如果还是没有关键词，直接返回
    if (!keyword) {
        console.error('No search keyword provided');
        alert('Please enter search keywords');
        return;
    }
    
    console.log('Searching for:', keyword);
    
    keyword = keyword.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    
    if (!resultsContainer) {
        console.error('Search results container not found');
        // 如果没有结果容器，跳转到搜索页面
        window.location.href = `search.html?query=${encodeURIComponent(keyword)}`;
        return;
    }
    
    resultsContainer.innerHTML = "";

    const results = pages.filter(page =>
        page.title.toLowerCase().includes(keyword) ||
        page.content.toLowerCase().includes(keyword)
    );

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found. Please try different keywords.</p>";
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

// 导出函数供其他脚本使用
window.performSearch = performSearch;
