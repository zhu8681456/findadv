const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

<style>
/* 设置下拉按钮的样式 */
.dropbtn {
  background-color: #4c9baf;
  color: #white;
  padding:  20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  
}

/* 容器 <div> - 需要放置下拉内容 */
.dropdown {
  position: absolute;
  display: inline-block;
  z-index:10000;
}

/* 下拉内容（默认隐藏） */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* 下拉链接 */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* 悬停时更改下拉链接的颜色 */
.dropdown-content a:hover {background-color: #f1f1f1}

/* 悬停时显示下拉菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}

/* 显示下拉内容时，更改下拉按钮的背景颜色 */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>

<header>


<div class="dropdown">
  <nav>
  <ul> <button class="dropbtn">位置</button>
    <div class="dropdown-content">
      <a href="round4.html">四环</a>
      <a href="round5.html">五环</a>
      <a href="round6.html">六环</a>
      <a href="airport_expy.html">机场南北线</a>
      <a href="jingzang_expy.html">京藏</a>
      <a href="jinggangao-expy.html">京港澳</a>
      <a href="jingha-expy.html">京哈</a>
      <a href="jinghu-expy.html">京沪</a>
      <a href="jingjin-expy.html">京津</a>
      <a href="jingkai-expy.html">京开</a>
      <a href="jingkun-expy.html">京昆</a>
      <a href="jingping-expy.html">京平</a>
      <a href="jingxing-expy.html">京新</a>
      <a href="tongyan-expy.html">通燕</a>
      <a href="erqi.html">二期</a>
      </div>
  </ul>
 
 </nav>
      
</div>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);