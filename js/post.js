// ===========================
// 文章详情页 JS
// ===========================

// 简单 Markdown 转 HTML
function simpleMarkdown(md) {
  return md
    // 代码块
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
      `<pre><code class="lang-${lang}">${escapeHtml(code.trim())}</code></pre>`)
    // 标题
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // 引用
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // 粗体
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // 行内代码
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // 列表
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')
    // 段落
    .replace(/\n\n([^<])/g, '\n\n<p>$1')
    .replace(/([^>])\n\n/g, '$1</p>\n\n')
    // 清理多余空行
    .replace(/\n{3,}/g, '\n\n');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderPost() {
  const container = document.getElementById('postDetail');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const post = POSTS_DATA.find(p => p.id === id);

  if (!post) {
    container.innerHTML = `
      <div style="text-align:center; padding:5rem;">
        <p style="font-size:4rem; margin-bottom:1rem;">😕</p>
        <h2 style="margin-bottom:1rem;">文章不存在</h2>
        <a href="posts.html" class="btn btn-outline">← 返回文章列表</a>
      </div>
    `;
    return;
  }

  // 更新页面标题
  document.title = `${post.title} - 黄shiqin的博客`;
  // 动态更新 og:title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', `${post.title} - 黄shiqin的博客`);

  // 渲染文章
  container.innerHTML = `
    <div style="margin-bottom:1.5rem;">
      <a href="posts.html" style="color:var(--text-secondary); font-size:0.9rem; display:inline-flex; align-items:center; gap:4px; transition:color .3s;"
         onmouseover="this.style.color='var(--accent)'"
         onmouseout="this.style.color='var(--text-secondary)'">
        ← 返回文章列表
      </a>
    </div>
    
    <div class="post-header fade-up">
      <div style="font-size:4rem; margin-bottom:1.5rem; text-align:center;">${post.emoji}</div>
      <div class="post-header-meta">
        <span class="post-category">${post.category}</span>
        <span class="post-date">📅 ${post.date}</span>
        <span class="post-date">⏱️ ${post.readTime}</span>
      </div>
      <h1 class="post-header-title">${post.title}</h1>
      <p style="color:var(--text-secondary); font-size:1.05rem; line-height:1.7;">${post.excerpt}</p>
      <div class="post-tags" style="margin-top:1rem;">
        ${post.tags.map(t => `<span class="post-tag">#${t}</span>`).join('')}
      </div>
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:2.5rem 0;" />

    <div class="post-body fade-up">
      ${simpleMarkdown(post.content)}
    </div>

    <hr style="border:none; border-top:1px solid var(--border); margin:3rem 0;" />

    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
      <a href="posts.html" class="btn btn-outline">← 所有文章</a>
      <div style="display:flex; align-items:center; gap:0.8rem;">
        <span style="color:var(--text-muted); font-size:0.88rem;">分享文章：</span>
        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}" 
           target="_blank" class="btn btn-outline" style="padding:6px 14px; font-size:0.85rem;">
          Twitter
        </a>
      </div>
    </div>
  `;

  // 触发动画
  requestAnimationFrame(() => {
    initScrollAnimation();
    document.querySelectorAll('.fade-up').forEach(el => {
      el.classList.add('visible');
    });
  });
}

document.addEventListener('DOMContentLoaded', renderPost);
