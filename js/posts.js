// ===========================
// 文章列表页 JS
// ===========================

let currentCategory = '全部';
let currentQuery = '';

function renderFilterBtns() {
  const container = document.getElementById('filterBtns');
  if (!container) return;

  container.style.cssText = 'display:flex; gap:0.5rem; flex-wrap:wrap;';

  const categories = getCategories();
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === '全部' ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = cat === '全部' ? 'all' : cat;
      renderPosts();
    });
    container.appendChild(btn);
  });
}

function renderPosts() {
  const grid = document.getElementById('postsGrid');
  const noResult = document.getElementById('noResult');
  if (!grid) return;

  grid.innerHTML = '';

  let posts = currentQuery
    ? searchPosts(currentQuery)
    : getPostsByCategory(currentCategory);

  if (posts.length === 0) {
    noResult.style.display = 'block';
    return;
  }

  noResult.style.display = 'none';

  posts.forEach((post, i) => {
    const card = createPostCard(post);
    card.style.transitionDelay = `${i * 0.05}s`;
    grid.appendChild(card);
  });

  // 重新触发动画
  requestAnimationFrame(() => {
    document.querySelectorAll('.fade-up').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
    initScrollAnimation();
  });
}

function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;

  let debounceTimer;
  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentQuery = e.target.value.trim();
      renderPosts();
    }, 300);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFilterBtns();
  renderPosts();
  initSearch();
});
