// 博客文章数据
const POSTS_DATA = [
  {
    id: 1,
    title: "从零开始构建 React 状态管理库",
    excerpt: "深入探讨 React 状态管理的原理，手写一个轻量级的状态管理库，理解 Zustand 和 Redux 背后的设计思想。",
    category: "前端开发",
    tags: ["React", "JavaScript", "状态管理"],
    date: "2024-12-15",
    emoji: "⚛️",
    readTime: "12 min",
    content: `
## 前言

状态管理是前端开发中的核心话题之一。本文将带你从零开始，构建一个轻量级的 React 状态管理库，深入理解其背后的原理。

## 为什么需要状态管理？

在大型 React 应用中，组件间的数据共享变得复杂：
- 父子组件之间通过 props 传递数据（props drilling）
- 兄弟组件需要通过公共父组件中转
- 全局状态（用户信息、主题、权限等）需要在多处访问

## 核心原理

一个简单的状态管理库需要具备以下能力：

1. **存储状态** - 全局单例存储
2. **读取状态** - 订阅机制
3. **更新状态** - 触发重渲染

\`\`\`javascript
class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = new Set();
  }

  getState() {
    return this.state;
  }

  setState(updater) {
    const nextState = typeof updater === 'function'
      ? updater(this.state)
      : { ...this.state, ...updater };
    this.state = nextState;
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}
\`\`\`

## React Hook 集成

利用 \`useSyncExternalStore\` 将 Store 与 React 集成：

\`\`\`javascript
import { useSyncExternalStore } from 'react';

function useStore(store, selector) {
  return useSyncExternalStore(
    store.subscribe.bind(store),
    () => selector(store.getState())
  );
}
\`\`\`

## 总结

通过这个简单的实现，我们理解了状态管理的核心：**发布-订阅模式**。Zustand、Jotai 等现代状态管理库本质上也是相同的思路，只是加入了更多的优化和功能。
    `
  },
  {
    id: 2,
    title: "Python 异步编程深度解析：asyncio 实战",
    excerpt: "全面解析 Python asyncio 的核心概念，包括协程、事件循环、Task 和 Future，通过实际案例掌握异步编程。",
    category: "后端开发",
    tags: ["Python", "asyncio", "异步"],
    date: "2024-12-08",
    emoji: "🐍",
    readTime: "15 min",
    content: `
## Python 异步编程

Python 3.4 引入了 asyncio 模块，为异步编程提供了原生支持。理解异步编程对于编写高性能的 I/O 密集型应用至关重要。

## 核心概念

### 协程 (Coroutine)

协程是 Python 异步编程的基础单元：

\`\`\`python
import asyncio

async def fetch_data(url: str) -> dict:
    """模拟异步 HTTP 请求"""
    await asyncio.sleep(1)  # 模拟 I/O 操作
    return {"url": url, "data": "..."}

async def main():
    # 并发执行多个协程
    results = await asyncio.gather(
        fetch_data("https://api.example.com/users"),
        fetch_data("https://api.example.com/posts"),
        fetch_data("https://api.example.com/comments"),
    )
    print(f"获取到 {len(results)} 个结果")

asyncio.run(main())
\`\`\`

### 事件循环

事件循环是 asyncio 的核心，它负责调度和执行协程：

> "事件循环就像一个高效的调度员，在 I/O 等待期间切换到其他任务，最大化 CPU 利用率。"

## 实际应用：并发爬虫

\`\`\`python
import asyncio
import aiohttp
from typing import List

async def crawl(session: aiohttp.ClientSession, url: str) -> str:
    async with session.get(url) as response:
        return await response.text()

async def batch_crawl(urls: List[str]) -> List[str]:
    async with aiohttp.ClientSession() as session:
        tasks = [crawl(session, url) for url in urls]
        return await asyncio.gather(*tasks, return_exceptions=True)
\`\`\`

## 总结

异步编程能显著提升 I/O 密集型任务的性能，但需要注意避免在异步代码中使用阻塞操作。
    `
  },
  {
    id: 3,
    title: "Docker + Nginx 部署 Node.js 应用完整指南",
    excerpt: "手把手教你使用 Docker 容器化 Node.js 应用，配合 Nginx 反向代理实现生产级部署，包含 SSL 配置和负载均衡。",
    category: "DevOps",
    tags: ["Docker", "Nginx", "Node.js", "部署"],
    date: "2024-11-28",
    emoji: "🐳",
    readTime: "18 min",
    content: `
## 概述

本文介绍如何将 Node.js 应用完整地容器化并部署到生产环境。

## Dockerfile 编写

\`\`\`dockerfile
# 多阶段构建，减小镜像体积
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
USER node
CMD ["node", "server.js"]
\`\`\`

## docker-compose 配置

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - DATABASE_URL=\${DATABASE_URL}
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
\`\`\`

## Nginx 反向代理

\`\`\`nginx
upstream app {
    server app:3000;
    keepalive 32;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

## 总结

Docker + Nginx 的组合为 Node.js 应用提供了可靠、可扩展的生产环境部署方案。
    `
  },
  {
    id: 4,
    title: "TypeScript 高级类型编程：泛型与条件类型",
    excerpt: "探索 TypeScript 类型系统的深层能力，掌握泛型约束、映射类型、条件类型，编写类型安全的高质量代码。",
    category: "前端开发",
    tags: ["TypeScript", "类型系统", "泛型"],
    date: "2024-11-20",
    emoji: "🟦",
    readTime: "14 min",
    content: `
## TypeScript 高级类型

TypeScript 的类型系统极为强大，本文将探索几个高级特性。

## 条件类型

\`\`\`typescript
// 条件类型
type IsArray<T> = T extends any[] ? true : false;

type A = IsArray<string[]>; // true
type B = IsArray<string>;   // false

// 内置工具类型的实现
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};
\`\`\`

## 模板字面量类型

\`\`\`typescript
type EventName = "click" | "focus" | "blur";
type Handler = \`on\${Capitalize<EventName>}\`;
// "onClick" | "onFocus" | "onBlur"

// API 路径类型安全
type ApiRoute = 
  | \`/users/\${string}\`
  | \`/posts/\${number}\`
  | "/login";
\`\`\`

## 推断类型

\`\`\`typescript
// 从函数返回值推断类型
type ReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => infer R ? R : never;

// 展开 Promise
type Awaited<T> =
  T extends Promise<infer U> ? Awaited<U> : T;
\`\`\`

## 总结

掌握这些高级类型特性，能让你写出更加健壮、可维护的 TypeScript 代码。
    `
  },
  {
    id: 5,
    title: "Git 工作流进阶：团队协作最佳实践",
    excerpt: "从 GitFlow 到 Trunk-Based Development，深入分析各种 Git 工作流的优缺点，帮助团队选择最适合的协作方式。",
    category: "工程实践",
    tags: ["Git", "团队协作", "工作流"],
    date: "2024-11-10",
    emoji: "🌿",
    readTime: "10 min",
    content: `
## Git 工作流选择

选择合适的 Git 工作流对团队效率至关重要。

## GitFlow

适合有明确版本发布周期的项目：

\`\`\`bash
# 创建功能分支
git checkout -b feature/user-auth develop

# 完成后合并回 develop
git checkout develop
git merge --no-ff feature/user-auth

# 创建发布分支
git checkout -b release/1.0.0 develop
\`\`\`

## Trunk-Based Development

适合 CI/CD 成熟、需要快速迭代的团队：

> "每天多次向主分支提交小改动，通过 Feature Flags 控制功能的可见性。"

\`\`\`bash
# 直接在 main 分支工作，或使用短期特性分支（< 2天）
git checkout -b feature/quick-fix
# 快速完成，同天合并
git push origin feature/quick-fix
# 创建 PR，通过 CI 后合并
\`\`\`

## Commit 规范

采用 Conventional Commits 规范：

\`\`\`
feat: add user authentication
fix: resolve login redirect bug
docs: update API documentation
refactor: extract payment logic
test: add unit tests for auth module
\`\`\`

## 总结

没有最好的工作流，只有最适合团队当前阶段的工作流。关键是保持一致性和持续改进。
    `
  },
  {
    id: 6,
    title: "构建你的第一个 AI 应用：OpenAI API 实战",
    excerpt: "从零开始使用 OpenAI API 构建智能应用，涵盖 Chat Completions、Streaming、Function Calling 等核心功能。",
    category: "AI 应用",
    tags: ["AI", "OpenAI", "LLM", "Python"],
    date: "2024-10-30",
    emoji: "🤖",
    readTime: "16 min",
    content: `
## 开始使用 OpenAI API

构建 AI 应用从未如此简单，让我们从基础开始。

## 基本对话

\`\`\`python
from openai import OpenAI

client = OpenAI(api_key="your-api-key")

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "你是一个专业的代码助手"},
        {"role": "user", "content": "帮我用 Python 写一个快速排序"}
    ]
)

print(response.choices[0].message.content)
\`\`\`

## 流式输出

\`\`\`python
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "讲一个故事"}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)
\`\`\`

## Function Calling

让 AI 能够调用你的函数：

\`\`\`python
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "获取指定城市的天气",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {"type": "string", "description": "城市名称"}
            },
            "required": ["city"]
        }
    }
}]
\`\`\`

## 总结

OpenAI API 提供了强大的接口，结合 Function Calling 和 RAG 技术，可以构建出非常实用的 AI 应用。
    `
  }
];

// 获取最新文章（首页用）
function getLatestPosts(count = 3) {
  return POSTS_DATA.slice(0, count);
}

// 获取所有文章
function getAllPosts() {
  return POSTS_DATA;
}

// 按分类过滤
function getPostsByCategory(category) {
  if (category === 'all') return POSTS_DATA;
  return POSTS_DATA.filter(p => p.category === category);
}

// 搜索文章
function searchPosts(query) {
  const q = query.toLowerCase();
  return POSTS_DATA.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.excerpt.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
}

// 获取所有分类
function getCategories() {
  const cats = ['全部', ...new Set(POSTS_DATA.map(p => p.category))];
  return cats;
}
