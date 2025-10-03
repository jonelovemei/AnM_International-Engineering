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

// 搜索函数 - 只在 search.html 页面使用
function performSearch(keyword) {
    console.log('performSearch called with keyword:', keyword);
    
    // 更严格的参数检查
    if (typeof keyword === 'undefined' || keyword === null || keyword.trim() === '') {
        console.error('No search keyword provided');
        document.getElementById('search-results').innerHTML = '<p>Please enter a search term.</p>';
        return;
    }
    
    const originalKeyword = keyword;
    keyword = keyword.toLowerCase().trim();
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

    console.log('Search results:', results);
    
    if (results.length === 0) {
        // 站内无结果，显示Google搜索选项
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(originalKeyword)}`;
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

// 页面加载时自动执行搜索 - 只在 search.html 页面执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('Search page loaded');
    
    // 获取 URL 参数中的搜索关键词
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    
    console.log('URL query parameter:', query);
    
    if (query && query.trim() !== '') {
        document.getElementById('search-query').textContent = query;
        performSearch(query);
    } else {
        document.getElementById('search-query').textContent = 'No query provided';
        document.getElementById('search-results').innerHTML = '<p>Please enter a search term.</p>';
    }
});

// 确保函数不会在全局作用域中被错误调用
if (typeof window !== 'undefined') {
    window.performSearch = performSearch;
}
