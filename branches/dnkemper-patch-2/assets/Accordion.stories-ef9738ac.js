import{_ as s}from"./Stub-71ec32ac.js";import"./vue.esm-bundler-531372d3.js";import"./utlity-04b79d70.js";import"./Button-bd969cc6.js";import"./Headline-67fd392d.js";const u={title:"Not implemented/Accordion",parameters:{docs:{source:{code:null}},options:{showPanel:!1}}},a=r=>({components:{ResearchStub:s},setup(){return{args:r}},template:`
    <research-stub
      path="accordion.html"
      title="Accordion"
    >
    </research-stub>
  `}),e=a.bind({});var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: {
    ResearchStub
  },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return {
      args
    };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: \`
    <research-stub
      path="accordion.html"
      title="Accordion"
    >
    </research-stub>
  \`
})`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const h=["Accordion"];export{e as Accordion,h as __namedExportsOrder,u as default};