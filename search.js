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

function searchSite(keyword) {
    keyword = keyword.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    
    // 添加安全检查
    if (!resultsContainer) {
        console.error('Search results container not found');
        return;
    }
    
    resultsContainer.innerHTML = ""; // 清空上次结果

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

// 初始化函数 - 添加错误处理
function initSearch() {
    const input = document.getElementById("search-input");
    const button = document.getElementById("search-button");

    console.log('initSearch called - Input:', input, 'Button:', button);

    if (input && button) {
        // 点击按钮时搜索
        button.addEventListener("click", () => {
            console.log('Search button clicked');
            const query = input.value.trim();
            if (query) {
                searchSite(query);
            } else {
                alert('Please enter search keywords');
            }
        });

        // 按下 Enter 时搜索
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                console.log('Enter key pressed');
                const query = input.value.trim();
                if (query) {
                    searchSite(query);
                } else {
                    alert('Please enter search keywords');
                }
            }
        });
        
        console.log('Search event listeners added successfully');
    } else {
        console.error('Search elements not found:', { input, button });
    }
}

// 页面加载完成后执行
document.addEventListener("DOMContentLoaded", initSearch);

// 导出函数供其他脚本使用
window.searchSite = searchSite;
window.initSearch = initSearch;
