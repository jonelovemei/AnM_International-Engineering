// search-component.js - 搜索功能独立组件

// 页面数据 - 需要根据实际页面调整
const pages = [
    {
        title: "Home",
        content: "Welcome to A&M INTERNATIONAL ENGINEERING PTE LTD. We provide professional integration solutions.",
        url: "index.html"
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

// 显示下拉搜索结果
function showSearchResults(results, query) {
    const dropdown = document.getElementById('search-results-dropdown');
    if (!dropdown) {
        console.error('Dropdown element not found');
        return;
    }

    if (results.length === 0) {
        // 没有结果，显示Google搜索选项
        dropdown.innerHTML = `
            <div class="no-results">
                <p>No results found for "<strong>${query}</strong>"</p>
            </div>
            <a href="https://www.google.com/search?q=${encodeURIComponent('A&M INTERNATIONAL ENGINEERING ' + query)}" 
               target="_blank" class="google-search-link">
               Search on Google for "${query}"
            </a>
        `;
    } else {
        // 显示搜索结果
        dropdown.innerHTML = results.map(page => `
            <div class="search-result-item" onclick="window.location.href='${page.url}'">
                <div class="search-result-title">${page.title}</div>
                <div class="search-result-content">${page.content.substring(0, 100)}...</div>
                <div class="search-result-url">${page.url}</div>
            </div>
        `).join('');
    }
    
    dropdown.style.display = 'block';
}

// 隐藏下拉结果
function hideSearchResults() {
    const dropdown = document.getElementById('search-results-dropdown');
    if (dropdown) {
        setTimeout(() => {
            dropdown.style.display = 'none';
        }, 200);
    }
}

// 执行搜索
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const query = searchInput ? searchInput.value.trim() : '';
    
    if (!query) {
        hideSearchResults();
        alert('Please enter search keywords');
        return;
    }

    // 在页面中搜索
    const results = pages.filter(page =>
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.content.toLowerCase().includes(query.toLowerCase())
    );

    showSearchResults(results, query);
}

// 实时搜索
function handleRealTimeSearch() {
    const query = this.value.trim();
    
    if (query.length < 2) {
        hideSearchResults();
        return;
    }
    
    // 在页面中搜索
    const results = pages.filter(page =>
        page.title.toLowerCase().includes(query.toLowerCase()) ||
        page.content.toLowerCase().includes(query.toLowerCase())
    );

    showSearchResults(results, query);
}

// 初始化搜索功能
function initSearchFunctionality() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (searchInput && searchButton) {
        // 实时搜索
        searchInput.addEventListener('input', handleRealTimeSearch);
        
        // 点击搜索按钮
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            performSearch();
        });
        
        // Enter键搜索
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });
        
        // 点击页面其他区域隐藏下拉菜单
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                hideSearchResults();
            }
        });
        
        // 搜索框获得焦点时显示最近的结果
        searchInput.addEventListener('focus', function() {
            if (this.value.trim().length >= 2) {
                handleRealTimeSearch.call(this);
            }
        });
        
        console.log('Search functionality initialized successfully');
    } else {
        console.error('Search elements not found');
    }
}

// 页面加载完成后初始化搜索功能
document.addEventListener('DOMContentLoaded', function() {
    // 确保下拉菜单容器存在
    if (!document.getElementById('search-results-dropdown')) {
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
            const dropdown = document.createElement('div');
            dropdown.id = 'search-results-dropdown';
            dropdown.className = 'search-dropdown';
            searchContainer.appendChild(dropdown);
        }
    }
    
    // 初始化搜索功能
    setTimeout(initSearchFunctionality, 100);
});
