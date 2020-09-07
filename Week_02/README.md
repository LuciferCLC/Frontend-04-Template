## 学习笔记

### 寻路算法 BFS
---

> 搜索算法常用的是深度优先搜索（DFS）和广度优先搜索（BFS）。在树的遍历中，有两种遍历方式，其中一种就是从根节点一层一层的往下遍历，这就是 BFS；另一种是先由根节点选一条路径直接遍历到叶子节点，这就是 DFS。这两种方式最终都能帮我们找到结果，但是使用 BFS 能帮我们获取最佳路径。

- 绘制迷宫
    - mousemove、mouseup、mousedown
    - `container.addEventListener("contextmenu", e => e.preventDefault());` 取消右键菜单

- 持久化保存
    - localStorage

- BFS 实现：借助队列的先进先出（FIFO）的特性
    - 数组的 push、shift 方法

- 算法数据可视化
    - promise 实现 sleep 方法
    - aysnc/await

- 启发式寻路 估值函数
    - 有最优解 A\*
        - sorted方法来实现有序的数据结构
        	- 二叉堆优化 sort
            	- 最小堆
            	- 插入、删除 O(logN) 查询O(N) 取最大(小)值 O(1)
    - 不一定有最佳路径 A

---

### AST 抽象语法树

---

- 词法分析 分词
    - TokenNumber 0-9
    - Operator + - \* /
    - Whitespace SP
    - LineTerminator LF CR
    - Expression 产生式
        - AdditiveExpression
            - 单独一个乘法也是加法
            - MultiplicativeExpression | AdditiveExpression +|- MultiplicativeExpression
        - MultiplicativeExpression
            - 单独一个数也是乘法
            - Number | MultiplicativeExpression (\*|/) Number
        - Number
        - EOF
        - 终结符 直接从词法中扫描出来的 terminal symbol
        - 非终结符 组合出来的 none terminal symbol
- 语法分析
- LL(left left) 算法
- LR 算法