// ===========================
// 首页专用 JS
// ===========================

// 打字机效果
function initTypingEffect() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const texts = [
    '热爱代码，享受创造 ✨',
    '全栈开发者 & 技术博主 🚀',
    '每行代码都是一首诗 💻',
    '学习 · 分享 · 成长 🌱'
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
      el.textContent = currentText.slice(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentText.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// 渲染首页最新文章
function renderLatestPosts() {
  const grid = document.getElementById('postsGrid');
  if (!grid) return;

  const posts = getLatestPosts(3);
  posts.forEach((post, i) => {
    const card = createPostCard(post);
    card.style.animationDelay = `${i * 0.1}s`;
    grid.appendChild(card);
  });

  // 触发动画
  requestAnimationFrame(() => {
    initScrollAnimation();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  renderLatestPosts();
});
