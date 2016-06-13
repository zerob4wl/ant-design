webpackJsonp([107,359],{820:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(28),a(27)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:[["p","\u4f7f\u7528\u53d7\u63a7\u5c5e\u6027\u5bf9\u7b5b\u9009\u548c\u6392\u5e8f\u72b6\u6001\u8fdb\u884c\u63a7\u5236\u3002"],["blockquote",["ol",["li",["p","columns \u4e2d\u5b9a\u4e49\u4e86 fileredValue \u548c sortOrder \u5c5e\u6027\u5373\u89c6\u4e3a\u53d7\u63a7\u6a21\u5f0f\u3002"]]],["ol",["li",["p","\u53ea\u652f\u6301\u540c\u65f6\u5bf9\u4e00\u5217\u8fdb\u884c\u6392\u5e8f\uff0c\u8bf7\u4fdd\u8bc1\u53ea\u6709\u4e00\u5217\u7684 sortOrder \u5c5e\u6027\u662f\u751f\u6548\u7684\u3002"]]],["ol",["li",["p","\u52a1\u5fc5\u6307\u5b9a ",["code","column.key"],"\u3002"]]]]],meta:{order:6,title:"\u91cd\u7f6e\u7b5b\u9009\u548c\u6392\u5e8f",filename:"components/table/demo/reset-filter.md",id:"components-table-demo-reset-filter"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u658c\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u7956\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >42</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed12\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u674e\u5927\u5634\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'4\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u674e\u79c0\u83b2\u5927\u5634\u54e5\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> App <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      filteredInfo<span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >,</span>\n      sortedInfo<span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>pagination<span class="token punctuation" >,</span> filters<span class="token punctuation" >,</span> sorter<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u5404\u7c7b\u53c2\u6570\u662f\'</span><span class="token punctuation" >,</span> pagination<span class="token punctuation" >,</span> filters<span class="token punctuation" >,</span> sorter<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      filteredInfo<span class="token punctuation" >:</span> filters<span class="token punctuation" >,</span>\n      sortedInfo<span class="token punctuation" >:</span> sorter<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >clearFilters</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    e<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> filteredInfo<span class="token punctuation" >:</span> <span class="token keyword" >null</span> <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >clearAll</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    e<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      filteredInfo<span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >,</span>\n      sortedInfo<span class="token punctuation" >:</span> <span class="token keyword" >null</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >setAgeSort</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    e<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      sortedInfo<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        order<span class="token punctuation" >:</span> <span class="token string" >\'descend\'</span><span class="token punctuation" >,</span>\n        columnKey<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> <span class="token punctuation" >{</span> sortedInfo<span class="token punctuation" >,</span> filteredInfo <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >;</span>\n    sortedInfo <span class="token operator" >=</span> sortedInfo <span class="token operator" >||</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    filteredInfo <span class="token operator" >=</span> filteredInfo <span class="token operator" >||</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span>\n      dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n      filters<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> text<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u674e\u7684\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'\u674e\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> text<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u80e1\u7684\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      filteredValue<span class="token punctuation" >:</span> filteredInfo<span class="token punctuation" >.</span>name<span class="token punctuation" >,</span>\n      onFilter<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> record<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> record<span class="token punctuation" >.</span>name<span class="token punctuation" >.</span><span class="token function" >indexOf</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token operator" >===</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n      sorter<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>a<span class="token punctuation" >,</span> b<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> a<span class="token punctuation" >.</span>name<span class="token punctuation" >.</span>length <span class="token operator" >-</span> b<span class="token punctuation" >.</span>name<span class="token punctuation" >.</span>length<span class="token punctuation" >,</span>\n      sortOrder<span class="token punctuation" >:</span> sortedInfo<span class="token punctuation" >.</span>columnKey <span class="token operator" >===</span> <span class="token string" >\'name\'</span> <span class="token operator" >&amp;&amp;</span> sortedInfo<span class="token punctuation" >.</span>order<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n      title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span>\n      dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n      sorter<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>a<span class="token punctuation" >,</span> b<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> a<span class="token punctuation" >.</span>age <span class="token operator" >-</span> b<span class="token punctuation" >.</span>age<span class="token punctuation" >,</span>\n      sortOrder<span class="token punctuation" >:</span> sortedInfo<span class="token punctuation" >.</span>columnKey <span class="token operator" >===</span> <span class="token string" >\'age\'</span> <span class="token operator" >&amp;&amp;</span> sortedInfo<span class="token punctuation" >.</span>order<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n      title<span class="token punctuation" >:</span> <span class="token string" >\'\u5730\u5740\'</span><span class="token punctuation" >,</span>\n      dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n      filters<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> text<span class="token punctuation" >:</span> <span class="token string" >\'\u5357\u6e56\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'\u5357\u6e56\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >{</span> text<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      filteredValue<span class="token punctuation" >:</span> filteredInfo<span class="token punctuation" >.</span>address<span class="token punctuation" >,</span>\n      onFilter<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> record<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> record<span class="token punctuation" >.</span>address<span class="token punctuation" >.</span><span class="token function" >indexOf</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token operator" >===</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n      sorter<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>a<span class="token punctuation" >,</span> b<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> a<span class="token punctuation" >.</span>address<span class="token punctuation" >.</span>length <span class="token operator" >-</span> b<span class="token punctuation" >.</span>address<span class="token punctuation" >.</span>length<span class="token punctuation" >,</span>\n      sortOrder<span class="token punctuation" >:</span> sortedInfo<span class="token punctuation" >.</span>columnKey <span class="token operator" >===</span> <span class="token string" >\'address\'</span> <span class="token operator" >&amp;&amp;</span> sortedInfo<span class="token punctuation" >.</span>order<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>table-operations<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>setAgeSort<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5e74\u9f84\u964d\u5e8f\u6392\u5e8f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>clearFilters<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6e05\u9664\u7b5b\u9009<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>clearAll<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6e05\u9664\u7b5b\u9009\u548c\u6392\u5e8f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{key:"1",name:"\u80e1\u658c",age:32,address:"\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"2",name:"\u80e1\u5f66\u7956",age:42,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed12\u53f7"},{key:"3",name:"\u674e\u5927\u5634",age:32,address:"\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7"},{key:"4",name:"\u674e\u79c0\u83b2\u5927\u5634\u54e5",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7"}],s=c["default"].createClass({displayName:"App",getInitialState:function(){return{filteredInfo:null,sortedInfo:null}},handleChange:function(n,s,a){console.log("\u5404\u7c7b\u53c2\u6570\u662f",n,s,a),this.setState({filteredInfo:s,sortedInfo:a})},clearFilters:function(n){n.preventDefault(),this.setState({filteredInfo:null})},clearAll:function(n){n.preventDefault(),this.setState({filteredInfo:null,sortedInfo:null})},setAgeSort:function(n){n.preventDefault(),this.setState({sortedInfo:{order:"descend",columnKey:"age"}})},render:function(){var s=this.state,a=s.sortedInfo,t=s.filteredInfo;a=a||{},t=t||{};var p=[{title:"\u59d3\u540d",dataIndex:"name",key:"name",filters:[{text:"\u59d3\u674e\u7684",value:"\u674e"},{text:"\u59d3\u80e1\u7684",value:"\u80e1"}],filteredValue:t.name,onFilter:function(n,s){return 0===s.name.indexOf(n)},sorter:function(n,s){return n.name.length-s.name.length},sortOrder:"name"===a.columnKey&&a.order},{title:"\u5e74\u9f84",dataIndex:"age",key:"age",sorter:function(n,s){return n.age-s.age},sortOrder:"age"===a.columnKey&&a.order},{title:"\u5730\u5740",dataIndex:"address",key:"address",filters:[{text:"\u5357\u6e56",value:"\u5357\u6e56"},{text:"\u897f\u6e56",value:"\u897f\u6e56"}],filteredValue:t.address,onFilter:function(n,s){return 0===s.address.indexOf(n)},sorter:function(n,s){return n.address.length-s.address.length},sortOrder:"address"===a.columnKey&&a.order}];return c["default"].createElement("div",null,c["default"].createElement("div",{className:"table-operations"},c["default"].createElement("a",{href:"#",onClick:this.setAgeSort},"\u5e74\u9f84\u964d\u5e8f\u6392\u5e8f"),c["default"].createElement("a",{href:"#",onClick:this.clearFilters},"\u6e05\u9664\u7b5b\u9009"),c["default"].createElement("a",{href:"#",onClick:this.clearAll},"\u6e05\u9664\u7b5b\u9009\u548c\u6392\u5e8f")),c["default"].createElement(o["default"],{columns:p,dataSource:n,onChange:this.handleChange}))}});return c["default"].createElement(s,null)},style:".table-operations {\n  font-size: 12px;\n  text-align: right;\n  margin-bottom: 16px;\n}\n\n.table-operations a {\n  margin-left: 8px;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.table-operations</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >12</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> right<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.table-operations</span> a </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-left</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});