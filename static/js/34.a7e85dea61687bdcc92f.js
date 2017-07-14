webpackJsonp([34],{332:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l={data:function(){return{checked:!0,checkStatus:1,disabled:!1}},methods:{_toogle:function(){this.disabled=!this.disabled},getStatus:function(){this.$message.info("当前状态码为："+this.checkStatus)}}},n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Switch 开关")]),s._v(" "),t("p",[s._v("开关选择器。")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-switch v-model="checked"></v-switch>\n</template>\n\n\n',script:"\n  export default {\n    data: ()=> ({\n      checked: true\n    })\n  };\n",style:null}}},[t("div",{staticClass:"box-demo-show",slot:"component"},[[t("v-switch",{model:{value:s.checked,callback:function(a){s.checked=a},expression:"checked"}})]],2),s._v(" "),t("div",{slot:"description"},[t("h4",{attrs:{id:"jian-dan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jian-dan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 简单")]),s._v(" "),t("p",[s._v("最简单的用法。")])]),s._v(" "),t("div",{staticClass:"highlight",slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checked"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v(" ({\n      "),t("span",{staticClass:"hljs-attr"},[s._v("checked")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    })\n  };\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 简单\n  最简单的用法。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"checked"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v("=>")]),s._v(" ({\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("checked")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    })\n  };\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-switch :disabled="disabled"></v-switch>\n  <br><br>\n  <v-button type="primary" @click="_toogle">Toggle disabled</v-button>\n</template>\n\n\n',script:"\n  export default {\n    data: ()=> ({\n      disabled: false\n    }),\n    methods: {\n      _toogle() {\n        this.disabled = !this.disabled\n      }\n    }\n  };\n",style:null}}},[t("div",{staticClass:"box-demo-show",slot:"component"},[[t("v-switch",{attrs:{disabled:s.disabled}}),s._v(" "),t("br"),t("br"),s._v(" "),t("v-button",{attrs:{type:"primary"},on:{click:s._toogle}},[s._v("Toggle disabled")])]],2),s._v(" "),t("div",{slot:"description"},[t("h4",{attrs:{id:"bu-ke-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bu-ke-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 不可用")]),s._v(" "),t("p",[s._v("Switch 失效状态。")])]),s._v(" "),t("div",{staticClass:"highlight",slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":disabled")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"disabled"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"_toogle"')]),s._v(">")]),s._v("Toggle disabled"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-button")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v(" ({\n      "),t("span",{staticClass:"hljs-attr"},[s._v("disabled")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }),\n    "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      _toogle() {\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".disabled = !"),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".disabled\n      }\n    }\n  };\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 不可用\n  Switch 失效状态。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"disabled"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"_toogle"')]),s._v(">")]),s._v("Toggle disabled"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-button")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v("=>")]),s._v(" ({\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }),\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      _toogle() {\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".disabled = !"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".disabled\n      }\n    }\n  };\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<v-switch> \n  <span slot="checkedChildren">开</span>\n  <span slot="unCheckedChildren">关</span>\n</v-switch>\n<br><br>\n<v-switch> \n  <span slot="checkedChildren">\n    <i class="anticon anticon-check"></i>\n  </span>\n  <span slot="unCheckedChildren">\n    <i class="anticon anticon-cross"></i>\n  </span>\n</v-switch>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",slot:"component"},[t("v-switch",[t("span",{slot:"checkedChildren"},[s._v("开")]),s._v(" "),t("span",{slot:"unCheckedChildren"},[s._v("关")])]),s._v(" "),t("br"),t("br"),s._v(" "),t("v-switch",[t("span",{slot:"checkedChildren"},[t("i",{staticClass:"anticon anticon-check"})]),s._v(" "),t("span",{slot:"unCheckedChildren"},[t("i",{staticClass:"anticon anticon-cross"})])])],1),s._v(" "),t("div",{slot:"description"},[t("h4",{attrs:{id:"wen-zi-he-tu-biao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wen-zi-he-tu-biao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 文字和图标")]),s._v(" "),t("p",[s._v("带有文字和图标。")])]),s._v(" "),t("div",{staticClass:"highlight",slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v(" \n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checkedChildren"')]),s._v(">")]),s._v("开"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"unCheckedChildren"')]),s._v(">")]),s._v("关"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v(" \n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checkedChildren"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("i")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"anticon anticon-check"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("i")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"unCheckedChildren"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("i")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"anticon anticon-cross"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("i")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 文字和图标\n  带有文字和图标。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v(" \n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"checkedChildren"')]),s._v(">")]),s._v("开"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"unCheckedChildren"')]),s._v(">")]),s._v("关"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v(" \n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"checkedChildren"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"anticon anticon-check"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"unCheckedChildren"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("i")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"anticon anticon-cross"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("i")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<v-switch></v-switch>\n<br>\n<v-switch size="small"></v-switch>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",slot:"component"},[t("v-switch"),s._v(" "),t("br"),s._v(" "),t("v-switch",{attrs:{size:"small"}})],1),s._v(" "),t("div",{slot:"description"},[t("h4",{attrs:{id:"liang-chong-da-xiao"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liang-chong-da-xiao","aria-hidden":"true"}},[s._v("¶")]),s._v(" 两种大小")]),s._v(" "),t("p",[t("code",[s._v("size='small'")]),s._v(" 表示小号开关")])]),s._v(" "),t("div",{staticClass:"highlight",slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 两种大小\n  `size='small'` 表示小号开关\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-switch v-model="checkStatus" :true-value="1" :false-value="0"></v-switch>\n  <v-button @click="getStatus" size="small" type="primary">获取状态码</v-button>\n</template>\n\n\n',script:'\n  export default {\n    data: ()=> ({\n      checkStatus: 1\n    }),\n    methods: {\n      getStatus(){\n        this.$message.info("当前状态码为：" + this.checkStatus);\n      }\n    }\n  };\n',style:null}}},[t("div",{staticClass:"box-demo-show",slot:"component"},[[t("v-switch",{attrs:{"true-value":1,"false-value":0},model:{value:s.checkStatus,callback:function(a){s.checkStatus=a},expression:"checkStatus"}}),s._v(" "),t("v-button",{attrs:{size:"small",type:"primary"},on:{click:s.getStatus}},[s._v("获取状态码")])]],2),s._v(" "),t("div",{slot:"description"},[t("h4",{attrs:{id:"zi-ding-yi-zhuang-tai-zhi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zi-ding-yi-zhuang-tai-zhi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 自定义状态值")]),s._v(" "),t("p",[s._v("属性名称："),t("code",[s._v("true-value")]),s._v(" "),t("code",[s._v("false-value")]),t("br"),s._v("\n以下例子定义：选中时为 1 ，未选中时为 0"),t("br"),s._v("\n组件当前状态为选中")])]),s._v(" "),t("div",{staticClass:"highlight",slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"checkStatus"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":true-value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":false-value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"0"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-switch")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-button")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"getStatus"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(">")]),s._v("获取状态码"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-button")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v(" ({\n      "),t("span",{staticClass:"hljs-attr"},[s._v("checkStatus")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n    }),\n    "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      getStatus(){\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.info("),t("span",{staticClass:"hljs-string"},[s._v('"当前状态码为："')]),s._v(" + "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".checkStatus);\n      }\n    }\n  };\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 自定义状态值\n  属性名称：`true-value`  `false-value`\n  以下例子定义：选中时为 1 ，未选中时为 0\n  组件当前状态为选中\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"checkStatus"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":true-value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":false-value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-switch")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"getStatus"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(">")]),s._v("获取状态码"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-button")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": "),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v("=>")]),s._v(" ({\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("checkStatus")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("\n    }),\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      getStatus(){\n        "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$message.info("),t("span",{attrs:{class:"hljs-string"}},[s._v('"当前状态码为："')]),s._v(" + "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".checkStatus);\n      }\n    }\n  };\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5)],1)},v=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"he-shi-shi-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#he-shi-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 何时使用")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[s._v("需要表示开关状态/两种状态之间的切换时；")]),s._v(" "),t("li",[s._v("和 "),t("code",{pre:!0},[s._v("checkbox")]),s._v("的区别是，切换 "),t("code",{pre:!0},[s._v("switch")]),s._v(" 会直接触发状态改变，而 "),t("code",{pre:!0},[s._v("checkbox")]),s._v(" 一般用于状态标记，需要和提交操作配合。")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"dai-ma-yan-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-yan-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 代码演示")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[s._v("¶")]),s._v(" API")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("h3",{attrs:{id:"switch-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switch-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Switch Props")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("属性")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("指定当前是否选中")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("disabeled")]),s._v(" "),t("td",[s._v("指定当前是否被禁用")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("size")]),s._v(" "),t("td",[s._v('开关大小（"default" or "small"）')]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("default")])]),s._v(" "),t("tr",[t("td",[s._v("slot:checkedChildren")]),s._v(" "),t("td",[s._v("选中时的内容")]),s._v(" "),t("td",[s._v("slot node")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("slot:unCheckedChildren")]),s._v(" "),t("td",[s._v("非选中时的内容")]),s._v(" "),t("td",[s._v("slot node")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("true-value")]),s._v(" "),t("td",[s._v("选中时自定义值")]),s._v(" "),t("td",[s._v("Any")]),s._v(" "),t("td",[s._v("-")])]),s._v(" "),t("tr",[t("td",[s._v("false-value")]),s._v(" "),t("td",[s._v("未选中时自定义值")]),s._v(" "),t("td",[s._v("Any")]),s._v(" "),t("td",[s._v("-")])])])])}],_={render:n,staticRenderFns:v},c=_,e=t(0),h=e(l,c,null,null,null);a.default=h.exports},427:function(s,a,t){s.exports=t(332)}});
//# sourceMappingURL=34.a7e85dea61687bdcc92f.js.map