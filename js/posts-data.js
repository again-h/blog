// 博客文章数据
const POSTS_DATA = [
  // ===========================
  // Python 系列文章（来源：Python 官方文档，CC BY 4.0 授权）
  // https://docs.python.org/zh-cn/3/
  // ===========================
  {
    id: 7,
    title: "Python 基础语法速览：从数字到列表",
    excerpt: "基于 Python 官方教程整理，系统介绍 Python 的基础语法：数字运算、字符串操作、列表使用，以及 while 循环与缩进规则，是入门 Python 的最佳起点。",
    category: "Python 基础",
    tags: ["Python", "基础语法", "字符串", "列表"],
    date: "2024-12-20",
    emoji: "🐍",
    readTime: "10 min",
    source: "Python 官方文档 · CC BY 4.0",
    sourceUrl: "https://docs.python.org/zh-cn/3/tutorial/introduction.html",
    content: `
## 前言

本文整理自 [Python 官方教程第 3 章](https://docs.python.org/zh-cn/3/tutorial/introduction.html)，遵循 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 协议授权，系统介绍 Python 最核心的基础语法。

## 数字运算

Python 可以直接当计算器使用，支持完整的数学运算：

\`\`\`python
# 基本运算
2 + 2       # 4
50 - 5 * 6  # 20
8 / 5       # 1.6（除法总是返回浮点数）

# 高级运算
17 // 3     # 5（整除，向下取整）
17 % 3      # 2（取余数）
5 ** 2      # 25（乘方）
\`\`\`

Python 的数字类型涵盖 `int`（整数）、`float`（浮点数），以及 `Decimal`（精确十进制）、`Fraction`（分数）和复数（`3+5j`）。

## 字符串

字符串使用单引号或双引号定义，两者等价：

\`\`\`python
'Hello, World!'
"Python 入门"

# 原始字符串，不处理转义符
r'C:\\Users\\name'

# 多行字符串
"""
第一行
第二行
"""
\`\`\`

> 字符串是**不可变**的，一旦创建就无法修改其中某个字符，只能创建新字符串。

字符串支持索引和切片操作：

\`\`\`python
word = 'Python'
word[0]     # 'P'（正向索引从 0 开始）
word[-1]    # 'n'（负向索引从 -1 开始）
word[0:2]   # 'Py'（切片，左闭右开）
word[2:]    # 'thon'
len(word)   # 6（字符串长度）
\`\`\`

## 列表

列表是 Python 中最常用的数据结构，用方括号定义，元素类型可以不同：

\`\`\`python
squares = [1, 4, 9, 16, 25]
squares[0]      # 1
squares[-1]     # 25
squares[1:3]    # [4, 9]

# 列表是可变的
squares.append(36)  # 追加元素
squares[0] = 0      # 修改元素
\`\`\`

与字符串不同，列表是**可变的**（mutable），可以随时修改、增删元素。

## 第一步：控制流

\`\`\`python
# 斐波那契数列（展示多重赋值和 while 循环）
a, b = 0, 1
while a < 100:
    print(a, end=', ')
    a, b = b, a + b
# 输出：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
\`\`\`

Python 用**缩进**来组织代码块，同一块语句的缩进量必须完全一致，这是 Python 与众不同的语法设计。

## 总结

| 数据类型 | 可变性 | 特点 |
|----------|--------|------|
| `int` / `float` | 不可变 | 数字运算 |
| `str` 字符串 | 不可变 | 支持切片、索引 |
| `list` 列表 | **可变** | 支持增删改 |

掌握这三种基础类型，就迈出了 Python 入门的第一步。
    `
  },
  {
    id: 8,
    title: "Python 数据结构详解：列表、元组、集合与字典",
    excerpt: "基于 Python 官方文档整理，深入讲解四种核心数据结构的特性与操作方法，包括列表推导式、字典推导式、集合运算，以及 enumerate()、zip() 等高效循环技巧。",
    category: "Python 基础",
    tags: ["Python", "数据结构", "列表推导式", "字典"],
    date: "2024-12-18",
    emoji: "📦",
    readTime: "14 min",
    source: "Python 官方文档 · CC BY 4.0",
    sourceUrl: "https://docs.python.org/zh-cn/3/tutorial/datastructures.html",
    content: `
## 前言

本文整理自 [Python 官方文档——数据结构](https://docs.python.org/zh-cn/3/tutorial/datastructures.html)，遵循 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 协议授权。

## 列表详解

列表提供了丰富的内置方法：

\`\`\`python
fruits = ['orange', 'apple', 'pear', 'banana']

fruits.append('grape')       # 末尾追加
fruits.insert(1, 'mango')    # 指定位置插入
fruits.remove('banana')      # 删除第一个匹配值
fruits.pop()                 # 移除并返回末尾元素
fruits.sort()                # 就地排序
fruits.reverse()             # 就地翻转
fruits.count('apple')        # 统计出现次数
fruits.index('orange')       # 查找索引
\`\`\`

### 列表推导式

列表推导式是 Python 最具特色的语法之一，用一行代码替代多行循环：

\`\`\`python
# 传统写法
squares = []
for x in range(10):
    squares.append(x**2)

# 推导式写法（更简洁）
squares = [x**2 for x in range(10)]

# 带条件过滤
evens = [x for x in range(20) if x % 2 == 0]

# 多重循环（笛卡尔积）
pairs = [(x, y) for x in [1, 2, 3] for y in [3, 1, 4] if x != y]
\`\`\`

### 用列表模拟栈和队列

\`\`\`python
# 栈（LIFO）：用列表即可
stack = [3, 4, 5]
stack.append(6)   # 入栈
stack.pop()       # 出栈 → 6

# 队列（FIFO）：推荐用 deque，效率更高
from collections import deque
queue = deque(["Alice", "Bob", "Charlie"])
queue.append("Dave")   # 入队
queue.popleft()        # 出队 → "Alice"
\`\`\`

## 元组

元组与列表类似，但**不可变**，适合存储不需要修改的数据：

\`\`\`python
point = (3, 7)          # 坐标
rgb = (255, 128, 0)     # 颜色

# 元组解包
x, y = point
print(x, y)  # 3 7

# 单元素元组（注意末尾逗号）
singleton = ('hello',)
\`\`\`

> 列表适合存储同类元素的有序集合；元组更适合存储不同类型、有固定语义的记录，如 `(name, age, score)`。

## 集合

集合是**无序不重复**元素的集合，天然去重，支持数学运算：

\`\`\`python
a = {1, 2, 3, 4, 5}
b = {3, 4, 5, 6, 7}

a - b   # 差集：{1, 2}
a | b   # 并集：{1, 2, 3, 4, 5, 6, 7}
a & b   # 交集：{3, 4, 5}
a ^ b   # 对称差：{1, 2, 6, 7}

# 集合推导式
unique_chars = {c for c in 'abracadabra' if c not in 'abc'}
\`\`\`

## 字典

字典是键值对的映射，是 Python 中最强大的数据结构之一：

\`\`\`python
# 创建字典
person = {'name': '黄shiqin', 'age': 25, 'city': '深圳'}

# 增删改查
person['email'] = 'hi@example.com'   # 添加
person['age'] = 26                    # 修改
del person['city']                    # 删除
person.get('phone', '未填写')         # 安全访问

# 遍历字典
for key, value in person.items():
    print(f'{key}: {value}')

# 字典推导式
squares = {x: x**2 for x in range(6)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
\`\`\`

## 高效循环技巧

\`\`\`python
# enumerate：同时获取索引和值
for i, fruit in enumerate(['苹果', '香蕉', '橙子']):
    print(f'{i}: {fruit}')

# zip：并行遍历多个序列
names = ['Alice', 'Bob', 'Charlie']
scores = [95, 87, 92]
for name, score in zip(names, scores):
    print(f'{name}: {score}')

# sorted：排序后遍历（不改变原序列）
for fruit in sorted({'banana', 'apple', 'orange'}):
    print(fruit)

# reversed：逆向遍历
for i in reversed(range(1, 6)):
    print(i)  # 5, 4, 3, 2, 1
\`\`\`

## 四种数据结构对比

| 类型 | 有序 | 可变 | 可重复 | 语法 |
|------|------|------|--------|------|
| `list` 列表 | ✅ | ✅ | ✅ | `[1, 2, 3]` |
| `tuple` 元组 | ✅ | ❌ | ✅ | `(1, 2, 3)` |
| `set` 集合 | ❌ | ✅ | ❌ | `{1, 2, 3}` |
| `dict` 字典 | ✅(3.7+) | ✅ | 键唯一 | `{'k': 'v'}` |
    `
  },
  {
    id: 9,
    title: "Python 异步编程完全指南：asyncio 协程与并发任务",
    excerpt: "基于 Python 官方文档整理，全面介绍 asyncio 的核心概念：协程定义、await 关键字、Task 创建、gather 并发执行，以及 Python 3.11 引入的 TaskGroup 结构化并发。",
    category: "异步编程",
    tags: ["Python", "asyncio", "协程", "并发"],
    date: "2024-12-16",
    emoji: "⚡",
    readTime: "16 min",
    source: "Python 官方文档 · CC BY 4.0",
    sourceUrl: "https://docs.python.org/zh-cn/3/library/asyncio-task.html",
    content: `
## 前言

本文整理自 [Python 官方文档——asyncio 协程与任务](https://docs.python.org/zh-cn/3/library/asyncio-task.html)，遵循 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 协议授权。

## 为什么需要异步编程？

传统的同步代码在等待 I/O 操作（如网络请求、文件读写）时会**阻塞**整个程序。异步编程允许在等待期间切换到其他任务，大幅提升 I/O 密集型程序的吞吐量。

## 协程基础

使用 `async def` 定义协程函数：

\`\`\`python
import asyncio

async def say_hello():
    print("Hello")
    await asyncio.sleep(1)   # 模拟异步 I/O 等待
    print("World")

# 运行协程
asyncio.run(say_hello())
\`\`\`

> 注意：调用 `say_hello()` **不会执行**协程，只返回一个协程对象。必须通过 `asyncio.run()` 或 `await` 来真正执行。

## 三种运行协程的方式

| 方式 | 适用场景 |
|------|----------|
| `asyncio.run(coro)` | 程序入口，运行最顶层协程 |
| `await coro` | 在协程内部顺序等待另一个协程 |
| `asyncio.create_task(coro)` | 创建并发任务，不等待立即调度 |

## 顺序执行 vs 并发执行

\`\`\`python
async def fetch(name, delay):
    await asyncio.sleep(delay)
    print(f"{name} 完成，耗时 {delay}s")
    return name

# ❌ 顺序执行，总耗时 = 1 + 2 = 3s
async def sequential():
    await fetch("任务A", 1)
    await fetch("任务B", 2)

# ✅ 并发执行，总耗时 = max(1, 2) = 2s
async def concurrent():
    task1 = asyncio.create_task(fetch("任务A", 1))
    task2 = asyncio.create_task(fetch("任务B", 2))
    await task1
    await task2
\`\`\`

## asyncio.gather()：一次等待多个任务

\`\`\`python
async def factorial(name, n):
    result = 1
    for i in range(2, n + 1):
        await asyncio.sleep(0.1)
        result *= i
    print(f"factorial({name}, {n}) = {result}")
    return result

async def main():
    # 并发运行三个协程，等待全部完成
    results = await asyncio.gather(
        factorial("A", 3),
        factorial("B", 4),
        factorial("C", 5),
    )
    print(results)  # [6, 24, 120]

asyncio.run(main())
\`\`\`

`gather()` 返回的结果列表顺序与传入顺序一致，与实际完成顺序无关。

## TaskGroup：结构化并发（Python 3.11+）

Python 3.11 引入了更安全的 `TaskGroup`，推荐替代 `gather()`：

\`\`\`python
async def main():
    async with asyncio.TaskGroup() as tg:
        task1 = tg.create_task(fetch("任务A", 1))
        task2 = tg.create_task(fetch("任务B", 2))
        task3 = tg.create_task(fetch("任务C", 3))
    # 退出 with 块时自动等待所有任务完成
    print("全部任务完成")
\`\`\`

`TaskGroup` 的优势：任意一个子任务抛出异常，其余任务会**自动取消**，避免资源泄漏。

## 超时控制

\`\`\`python
async def main():
    try:
        async with asyncio.timeout(5.0):   # 5 秒超时
            await long_running_task()
    except asyncio.TimeoutError:
        print("任务超时！")
\`\`\`

## 任务取消

\`\`\`python
async def main():
    task = asyncio.create_task(some_long_task())
    await asyncio.sleep(1)
    task.cancel()   # 发送取消信号

    try:
        await task
    except asyncio.CancelledError:
        print("任务已被取消")
\`\`\`

## 实战：并发抓取多个 URL

\`\`\`python
import asyncio
import aiohttp

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def main():
    urls = [
        "https://httpbin.org/delay/1",
        "https://httpbin.org/delay/2",
        "https://httpbin.org/delay/1",
    ]
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
    print(f"获取到 {len(results)} 个响应")

asyncio.run(main())
\`\`\`

## 总结

- 用 `async def` 定义协程，用 `await` 等待结果
- 用 `create_task()` 创建并发任务（不立即等待）
- 用 `gather()` 同时等待多个任务并收集结果
- Python 3.11+ 推荐用 `TaskGroup` 实现结构化并发
- asyncio 适合 **I/O 密集型**任务；CPU 密集型任务请用 `multiprocessing`
    `
  },
  {
    id: 10,
    title: "Python 数据分析入门：pandas 核心操作详解",
    excerpt: "系统介绍 Python 数据分析利器 pandas 的核心用法，包括 Series 与 DataFrame 的创建与操作、数据清洗、聚合统计、条件过滤和数据合并，配有完整示例代码。",
    category: "数据分析",
    tags: ["Python", "pandas", "数据分析", "DataFrame"],
    date: "2024-12-14",
    emoji: "📊",
    readTime: "18 min",
    source: "原创整理",
    sourceUrl: "",
    content: `
## 前言

pandas 是 Python 数据分析生态的核心库，以 DataFrame 为中心的数据操作模型已成为数据分析的事实标准。本文系统梳理其最常用的操作。

## 安装与导入

\`\`\`bash
pip install pandas numpy
\`\`\`

\`\`\`python
import pandas as pd
import numpy as np
\`\`\`

## Series：一维数据

Series 是带标签的一维数组：

\`\`\`python
# 从列表创建
s = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'])

# 基本操作
s['a']          # 10（标签访问）
s[s > 20]       # 条件过滤：c→30, d→40
s * 2           # 广播运算：[20, 40, 60, 80]
s.mean()        # 均值：25.0
s.describe()    # 统计摘要
\`\`\`

## DataFrame：二维数据

DataFrame 是最常用的数据结构，类似 Excel 表格：

\`\`\`python
# 从字典创建
df = pd.DataFrame({
    '姓名': ['Alice', 'Bob', 'Charlie', 'Diana'],
    '年龄': [25, 30, 35, 28],
    '城市': ['北京', '上海', '广州', '深圳'],
    '薪资': [15000, 20000, 18000, 22000]
})

# 基本属性
df.shape        # (4, 4)
df.dtypes       # 各列数据类型
df.head(2)      # 前 2 行
df.tail(2)      # 后 2 行
df.info()       # 概览（含缺失值信息）
df.describe()   # 数值列统计摘要
\`\`\`

## 数据选取

\`\`\`python
# 选取列
df['姓名']                  # 单列 → Series
df[['姓名', '薪资']]        # 多列 → DataFrame

# loc：标签索引
df.loc[0, '姓名']           # 第 0 行、姓名列
df.loc[0:2, ['姓名', '年龄']] # 切片 + 多列

# iloc：位置索引
df.iloc[0, 0]               # 第 0 行第 0 列
df.iloc[1:3, :2]            # 第 1-2 行、前 2 列

# 条件过滤
df[df['薪资'] > 18000]
df[(df['年龄'] > 25) & (df['城市'] == '上海')]
\`\`\`

## 数据清洗

\`\`\`python
# 处理缺失值
df.isnull().sum()           # 各列缺失值数量
df.dropna()                 # 删除含缺失值的行
df.fillna(0)                # 用 0 填充缺失值
df['薪资'].fillna(df['薪资'].mean())  # 用均值填充

# 删除重复行
df.drop_duplicates()
df.drop_duplicates(subset=['姓名'])

# 类型转换
df['年龄'] = df['年龄'].astype(float)
df['入职日期'] = pd.to_datetime(df['入职日期'])

# 重命名列
df.rename(columns={'姓名': 'name', '薪资': 'salary'}, inplace=True)
\`\`\`

## 数据统计与聚合

\`\`\`python
# 基本统计
df['薪资'].mean()     # 均值
df['薪资'].median()   # 中位数
df['薪资'].std()      # 标准差
df['薪资'].max()      # 最大值
df['城市'].value_counts()  # 频次统计

# 分组聚合（groupby）
city_avg = df.groupby('城市')['薪资'].mean()

# 多指标聚合
df.groupby('城市').agg({
    '薪资': ['mean', 'max', 'count'],
    '年龄': 'mean'
})

# 数据透视表
pivot = df.pivot_table(
    values='薪资',
    index='城市',
    columns='部门',
    aggfunc='mean'
)
\`\`\`

## 数据合并

\`\`\`python
df1 = pd.DataFrame({'id': [1, 2, 3], 'name': ['Alice', 'Bob', 'Charlie']})
df2 = pd.DataFrame({'id': [1, 2, 4], 'score': [95, 87, 92]})

# merge（类似 SQL JOIN）
pd.merge(df1, df2, on='id', how='inner')   # 内连接
pd.merge(df1, df2, on='id', how='left')    # 左连接
pd.merge(df1, df2, on='id', how='outer')   # 外连接

# concat（纵向/横向拼接）
pd.concat([df1, df2], axis=0)    # 纵向拼接（行）
pd.concat([df1, df2], axis=1)    # 横向拼接（列）
\`\`\`

## 数据排序与索引

\`\`\`python
df.sort_values('薪资', ascending=False)          # 按薪资降序
df.sort_values(['城市', '薪资'], ascending=[True, False])

# 重置索引
df.reset_index(drop=True)

# 设置索引
df.set_index('姓名')
\`\`\`

## 实战：分析员工数据

\`\`\`python
# 读取数据
df = pd.read_csv('employees.csv', encoding='utf-8')

# 数据清洗
df = df.dropna(subset=['薪资', '年龄'])
df['薪资'] = pd.to_numeric(df['薪资'], errors='coerce')

# 分析：各城市平均薪资 Top 3
top3 = (df.groupby('城市')['薪资']
          .mean()
          .sort_values(ascending=False)
          .head(3))
print(top3)

# 分析：高薪员工占比
high_salary = (df['薪资'] > df['薪资'].quantile(0.75)).mean()
print(f"高薪员工占比：{high_salary:.1%}")
\`\`\`

## 总结

pandas 的核心操作可以归纳为五类：**读取**、**选取**、**清洗**、**聚合**、**合并**。掌握这五类操作，就能应对 80% 以上的日常数据分析任务。
    `
  },
  {
    id: 11,
    title: "Python 文件操作与 f-string 格式化全解",
    excerpt: "基于 Python 官方文档整理，详解 f-string 格式化字符串的完整用法、文件读写的最佳实践（with 语句）、JSON 序列化与反序列化，以及常见陷阱与技巧。",
    category: "Python 基础",
    tags: ["Python", "f-string", "文件操作", "JSON"],
    date: "2024-12-12",
    emoji: "📝",
    readTime: "12 min",
    source: "Python 官方文档 · CC BY 4.0",
    sourceUrl: "https://docs.python.org/zh-cn/3/tutorial/inputoutput.html",
    content: `
## 前言

本文整理自 [Python 官方文档——输入与输出](https://docs.python.org/zh-cn/3/tutorial/inputoutput.html)，遵循 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 协议授权，重点介绍现代 Python 中最常用的格式化和文件操作方式。

## f-string：现代字符串格式化

f-string（格式化字符串字面值）是 Python 3.6+ 引入的特性，是目前**最推荐**的格式化方式：

\`\`\`python
name = "黄shiqin"
age = 25
score = 98.567

# 基本用法
print(f"姓名：{name}，年龄：{age}")

# 格式说明符（冒号后指定）
print(f"分数：{score:.2f}")       # 保留 2 位小数：98.57
print(f"姓名：{name:>10}")        # 右对齐，宽度 10
print(f"年龄：{age:04d}")         # 零填充，宽度 4：0025
print(f"比例：{0.1256:.1%}")      # 百分比：12.6%

# 调试利器：= 说明符（Python 3.8+）
print(f"{name=}, {age=}")        # name='黄shiqin', age=25

# 表达式求值
print(f"明年 {age + 1} 岁")
print(f"大写：{name.upper()}")
\`\`\`

## 其他格式化方式

\`\`\`python
# str.format()（兼容旧代码时使用）
"{} 今年 {} 岁".format("Alice", 25)
"{name} 的分数是 {score:.1f}".format(name="Bob", score=92.5)

# % 格式化（旧式，不推荐）
"Hello, %s! 你有 %d 条消息" % ("Alice", 3)
\`\`\`

## 文件读写

### 推荐用法：with 语句

\`\`\`python
# 写文件
with open('data.txt', 'w', encoding='utf-8') as f:
    f.write("第一行\\n")
    f.write("第二行\\n")

# 读文件（整体读取）
with open('data.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# 逐行读取（大文件推荐）
with open('data.txt', 'r', encoding='utf-8') as f:
    for line in f:
        print(line.strip())   # strip() 去除首尾空白

# 追加写入
with open('data.txt', 'a', encoding='utf-8') as f:
    f.write("追加的一行\\n")
\`\`\`

> 使用 `with` 语句的好处：文件在 `with` 块结束后**自动关闭**，即使发生异常也不会泄漏文件句柄。

### 文件打开模式

| 模式 | 说明 |
|------|------|
| `'r'` | 只读（默认） |
| `'w'` | 写入（覆盖） |
| `'a'` | 追加 |
| `'r+'` | 读写 |
| `'rb'` | 二进制读取 |
| `'wb'` | 二进制写入 |

### 常用文件方法

\`\`\`python
with open('data.txt', 'r', encoding='utf-8') as f:
    f.read()            # 读取全部内容
    f.readline()        # 读取一行
    f.readlines()       # 读取所有行，返回列表
    f.tell()            # 当前文件位置
    f.seek(0)           # 跳转到文件开头
\`\`\`

## JSON 数据序列化

JSON 是最常用的数据交换格式，Python 内置支持：

\`\`\`python
import json

data = {
    "name": "黄shiqin",
    "age": 25,
    "skills": ["Python", "React", "Docker"],
    "active": True
}

# 序列化为字符串
json_str = json.dumps(data, ensure_ascii=False, indent=2)
print(json_str)

# 写入文件
with open('config.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# 从字符串解析
parsed = json.loads(json_str)
print(parsed['name'])   # 黄shiqin

# 从文件读取
with open('config.json', 'r', encoding='utf-8') as f:
    config = json.load(f)
\`\`\`

## 路径操作（pathlib）

Python 3.4+ 推荐使用 `pathlib` 替代字符串拼接路径：

\`\`\`python
from pathlib import Path

# 路径操作
p = Path('/home/user/data')
p / 'file.txt'          # /home/user/data/file.txt
p.parent                # /home/user
p.name                  # data
p.suffix                # （无后缀）
p.exists()              # 是否存在

# 读写文件
path = Path('readme.txt')
path.write_text('Hello, World!', encoding='utf-8')
content = path.read_text(encoding='utf-8')

# 遍历目录
for f in Path('.').glob('*.py'):
    print(f.name)
\`\`\`

## 总结

| 场景 | 推荐方式 |
|------|----------|
| 字符串格式化 | f-string |
| 文件读写 | `with open()` |
| 数据序列化 | `json` 模块 |
| 路径操作 | `pathlib.Path` |
    `
  },
  {
    id: 12,
    title: "Python 异常处理完全指南：try/except/finally 实战",
    excerpt: "基于 Python 官方文档整理，系统讲解异常处理的核心机制：try/except/else/finally 结构、raise 触发异常、自定义异常类、异常链与 ExceptionGroup，帮助你写出更健壮的 Python 代码。",
    category: "Python 基础",
    tags: ["Python", "异常处理", "try-except", "错误调试"],
    date: "2024-12-10",
    emoji: "🛡️",
    readTime: "13 min",
    source: "Python 官方文档 · CC BY 4.0",
    sourceUrl: "https://docs.python.org/zh-cn/3/tutorial/errors.html",
    content: `
## 前言

本文整理自 [Python 官方文档——错误和异常](https://docs.python.org/zh-cn/3/tutorial/errors.html)，遵循 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 协议授权。

## 两类错误

Python 的错误分为两类：

- **语法错误（SyntaxError）**：代码写错了，解析阶段即被发现
- **异常（Exception）**：语法正确，但运行时出错

\`\`\`python
# 常见异常类型
10 / 0              # ZeroDivisionError
undefined_var       # NameError
'2' + 2             # TypeError
int('abc')          # ValueError
[][10]              # IndexError
{}['missing']       # KeyError
open('no_file.txt') # FileNotFoundError
\`\`\`

## try / except 基本结构

\`\`\`python
try:
    x = int(input("请输入数字："))
    result = 100 / x
    print(f"结果：{result}")
except ValueError:
    print("输入不是有效数字！")
except ZeroDivisionError:
    print("不能除以零！")
except Exception as e:
    print(f"未知错误：{e}")
\`\`\`

**执行流程：**
1. 执行 `try` 块中的代码
2. 若无异常 → 跳过所有 `except`
3. 若有异常 → 找到匹配的 `except`，执行后继续
4. 若无匹配 → 异常向上传播

## else 子句

`else` 在 **try 块没有异常时**执行，用于分离"正常逻辑"和"异常处理"：

\`\`\`python
for filename in ['data.json', 'missing.txt']:
    try:
        f = open(filename, 'r')
    except FileNotFoundError:
        print(f"文件不存在：{filename}")
    else:
        # 只在成功打开文件时执行
        data = f.read()
        f.close()
        print(f"读取成功：{len(data)} 字节")
\`\`\`

## finally 子句：必须执行的清理

`finally` 无论如何都会执行，适合释放资源：

\`\`\`python
import sqlite3

def query_db(sql):
    conn = None
    try:
        conn = sqlite3.connect('app.db')
        cursor = conn.cursor()
        cursor.execute(sql)
        return cursor.fetchall()
    except sqlite3.Error as e:
        print(f"数据库错误：{e}")
        return []
    finally:
        if conn:
            conn.close()   # 无论成功与否，都关闭连接
\`\`\`

## raise：主动触发异常

\`\`\`python
def validate_age(age):
    if not isinstance(age, int):
        raise TypeError(f"年龄必须是整数，收到 {type(age).__name__}")
    if age < 0 or age > 150:
        raise ValueError(f"年龄 {age} 超出合理范围 [0, 150]")
    return age

# 重新触发（保留原始异常信息）
try:
    validate_age(-1)
except ValueError as e:
    print(f"捕获到：{e}")
    raise   # 继续向上传播
\`\`\`

## 自定义异常

\`\`\`python
class AppError(Exception):
    """应用基础异常"""
    pass

class AuthError(AppError):
    """认证失败"""
    def __init__(self, message, user=None):
        super().__init__(message)
        self.user = user

class PermissionError(AppError):
    """权限不足"""
    def __init__(self, action, required_role):
        super().__init__(f"执行 '{action}' 需要 '{required_role}' 权限")
        self.action = action
        self.required_role = required_role

# 使用
try:
    raise AuthError("Token 已过期", user="alice")
except AuthError as e:
    print(f"认证错误：{e}，用户：{e.user}")
\`\`\`

## 异常链

\`\`\`python
# 隐式异常链：在 except 中触发新异常
try:
    open('config.json')
except FileNotFoundError as e:
    raise RuntimeError("配置文件加载失败") from e
    # 输出会显示：RuntimeError ... 原始原因是 FileNotFoundError

# 显式切断链：from None
try:
    open('config.json')
except FileNotFoundError:
    raise RuntimeError("配置文件加载失败") from None
\`\`\`

## 完整示例：健壮的 HTTP 请求

\`\`\`python
import json
import urllib.request
import urllib.error

def fetch_json(url, timeout=10):
    """健壮的 JSON 获取函数"""
    try:
        with urllib.request.urlopen(url, timeout=timeout) as resp:
            raw = resp.read().decode('utf-8')
            return json.loads(raw)
    except urllib.error.HTTPError as e:
        raise RuntimeError(f"HTTP 错误 {e.code}：{e.reason}") from e
    except urllib.error.URLError as e:
        raise RuntimeError(f"网络错误：{e.reason}") from e
    except json.JSONDecodeError as e:
        raise ValueError(f"JSON 解析失败：{e}") from e
    except TimeoutError:
        raise TimeoutError(f"请求超时（>{timeout}s）")
    finally:
        print(f"请求完成：{url}")
\`\`\`

## 异常处理最佳实践

| 原则 | 说明 |
|------|------|
| **精确捕获** | 捕获具体异常而非 `Exception`，避免掩盖 bug |
| **早抛晚捕** | 在底层触发异常，在高层统一处理 |
| **善用 finally** | 资源释放放在 `finally`，确保执行 |
| **自定义异常** | 为业务错误定义专属异常类，携带上下文信息 |
| **异常链** | 用 `from` 保留原始错误信息，方便调试 |
    `
  },

  // ===========================
  // 原有技术文章
  // ===========================
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
