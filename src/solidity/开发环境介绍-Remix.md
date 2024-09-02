---
title: 开发环境介绍-Remix
date: 2024-09-02
categories: 
  - Solidity
author: 花千树
tags: 
  - Remix
  - Solidity
---






# 开发环境介绍-Remix

[Remix 官网地址](https://remix.ethereum.org/)

# Remix 介绍

Remix IDE 是一个基于浏览器的集成开发环境（IDE），专门用于用 Solidity 开发以太坊智能合约。它是以太坊官方推荐的开发工具，特别适合新手使用 。

Remix IDE 提供了全面的功能，类似于传统 IDE 的功能，包括代码提示补全、代码高亮、代码警告和错误提示、运行日志输出以及代码调试等 。此外，它还支持自动补全、快速修复功能、丰富的右键菜单以及 AI 功能 。

因为是在线工具，所以 Remix 不需要安装任何依赖，我们只需打开浏览器即可使用 。它还支持多语言切换，目前支持中文和英文 。此外，Remix 还集成了 Etherscan 验证合约的功能，并且可以与 ChatGPT 集成，帮助开发者编写智能合约 。

Remix IDE 是一个功能强大且易于使用的工具，适用于各种级别的开发者，特别是那些刚开始接触以太坊智能合约开发的新手 。

# Remix 基础功能说明

## 1. 面板介绍

![Untitled](%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix%2030e4fbd7961d4ead9755b9ef90534efb/Untitled.png)

可以发现，这个面板与 vscode 的界面非常类似。

## 2. 创建一个新的工作区

按照图片中的操作顺序，即可创建一个新的工作区。

![Untitled](%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix%2030e4fbd7961d4ead9755b9ef90534efb/Untitled%201.png)

创建新的工作区后，会自动生成以下这些文件目录。contract 文件夹下的就是我们编写的智能合约的代码文件。

![Untitled](%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix%2030e4fbd7961d4ead9755b9ef90534efb/Untitled%202.png)

contrac 中自动生成的都是样例文件，可以删除。删除之后，创建一个我们自己要写的合约文件，比如 1_helloworld。

![Untitled](%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix%2030e4fbd7961d4ead9755b9ef90534efb/Untitled%203.png)

## 3. 进入开发

创建完成后，单击该文件，就可以在右边的编码区打开该文件。在这里就可以开始编写代码了。

![Untitled](%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix%2030e4fbd7961d4ead9755b9ef90534efb/Untitled%204.png)

代码写完之后，点击右上角的按钮可以进行编译，也可以点击左边菜单栏的编译器按钮，打开编译页面，点击编译按钮，对代码进行编译，编译成功后会有成功的提示。

![Untitled](%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix%2030e4fbd7961d4ead9755b9ef90534efb/Untitled%205.png)

编译成功后，点击左边菜单栏的部署按钮，按照图片进行设置，设置完成后，点击部署按钮，即可部署已选择的合约。

![Untitled](%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix%2030e4fbd7961d4ead9755b9ef90534efb/Untitled%206.png)

部署成功后，在页面的下方会显示已经部署好的合约，可以在这部分与合约进行交互。左边显示的是代码里定义的公共的属性和函数，点击显示内容，或执行函数。

![Untitled](%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E4%BB%8B%E7%BB%8D-Remix%2030e4fbd7961d4ead9755b9ef90534efb/Untitled%207.png)

刚开始学习的小伙伴，到这里就可以通过 Remix 这个在线开发平台，独立完成一个智能合约的开发、编译、部署了。