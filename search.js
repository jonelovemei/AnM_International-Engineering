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
    // 检查参数
    if (!keyword) {
        console.error('No search keyword provided');
        return;
    }
    
    console.log('Searching for:', keyword);
    
    const originalKeyword = keyword;
    keyword = keyword.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    
    if (!resultsContainer) {
        console.error('Search results container not found');
        return;
    }
    
    resultsContainer.innerHTML = "";

    // 站内搜索
    const results = pages.filter(page =>
        page.title.toLowerCase().includes(keyword) ||
        page.content.toLowerCase().includes(keyword)
    );

    if (results.length === 0) {
        // 站内无结果，显示Google搜索选项
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(originalKeyword + ' site:am-engineering.com')}`;
        resultsContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <p>No results found on our website for "<strong>${originalKeyword}</strong>".</p>
                <p>Would you like to search the internet?</p>
                <a href="${googleSearchUrl}" target="_blank" style="
                    display: inline-block;
                    background: #00b4d8;
                    color: white;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 10px;
                ">Search on Google</a>
            </div>
        `;
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

// 页面加载时自动执行搜索
document.addEventListener('DOMContentLoaded', function() {
    // 获取 URL 参数中的搜索关键词
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    
    if (query) {
        document.getElementById('search-query').textContent = query;
        performSearch(query);
    }
});

// 导出函数供其他脚本使用
window.performSearch = performSearch;
