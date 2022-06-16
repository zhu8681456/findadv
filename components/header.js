const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>


<header>


   <ul>
    <li><a href="index.html">Home</a></li>
        <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">环线</a>
    <div class="dropdown-content">
      <a href="round4.html">四环</a>
      <a href="round5.html">五环</a>
      <a href="round6.html">六环</a>
    </div>
    </li>
    <li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn">高速</a>
      <div class="dropdown-content">
        <a href="airport_expy.html">机场南北线</a>
        <a href="jichang_expy.html">机场高速</a>
        <a href="jingzang_expy.html">京藏</a>
        <a href="jingcheng-expy.html">京承</a>
        <a href="jingha-expy.html">京哈</a>
        <a href="jinghu-expy.html">京沪</a>
        <a href="jingjin-expy.html">京津</a>
        <a href="jingkai-expy.html">京开</a>
        <a href="jingkun-expy.html">京昆</a>
        <a href="jingxing-expy.html">京新</a>
        <a href="tongyan-expy.html">通燕</a>
         </div>
    </li>
      
    <li class="dropdown">
      <a href="javascript:void(0)" class="dropbtn">分类显示</a>
      <div class="dropdown-content">
        <a href="gaodeindex.html">所有点位</a>
        </div>
     </li>
     
     <li class="dropdown">
     <a href="javascript:void(0)" class="dropbtn">待拆除</a>
     <div class="dropdown-content">
       <a href="next.html">待拆除位置</a>
            </div>
    
            


  </ul>
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

