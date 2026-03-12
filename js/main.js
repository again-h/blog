// ===========================
// 粒子背景
// ===========================
function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const count = 35;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      animation-duration: ${Math.random() * 15 + 10}s;
      animation-delay: ${Math.random() * 10}s;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    container.appendChild(p);
  }
}

// ===========================
// 导航栏滚动效果
// ===========================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const scrollTop = document.createElement('button');
  scrollTop.className = 'scroll-top';
  scrollTop.innerHTML = '↑';
  scrollTop.title = '回到顶部';
  document.body.appendChild(scrollTop);

  scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      scrollTop.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      scrollTop.classList.remove('visible');
    }
  });
}

// ===========================
// 移动端导航
// ===========================
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  // 点击链接后关闭菜单
  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

// ===========================
// 滚动进入动画
// ===========================
function initScrollAnimation() {
  const targets = document.querySelectorAll('.fade-up');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
}

// ===========================
// 技能条动画
// ===========================
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
          bar.style.width = width + '%';
        }, 200);
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

// ===========================
// 生成文章卡片 HTML
// ===========================
function createPostCard(post) {
  const card = document.createElement('article');
  card.className = 'post-card fade-up';
  card.innerHTML = `
    <div class="post-card-image">${post.emoji}</div>
    <div class="post-card-body">
      <div class="post-card-meta">
        <span class="post-category">${post.category}</span>
        <span class="post-date">${post.date}</span>
        <span class="post-date">📖 ${post.readTime}</span>
      </div>
      <h3 class="post-title">${post.title}</h3>
      <p class="post-excerpt">${post.excerpt}</p>
      <div class="post-tags">
        ${post.tags.map(t => `<span class="post-tag">#${t}</span>`).join('')}
      </div>
      <span class="read-more">阅读全文 →</span>
    </div>
  `;

  card.addEventListener('click', () => {
    window.location.href = `post.html?id=${post.id}`;
  });

  return card;
}

// ===========================
// 初始化
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavbar();
  initMobileNav();

  // 延迟执行动画初始化
  requestAnimationFrame(() => {
    initScrollAnimation();
    initSkillBars();
  });
});
