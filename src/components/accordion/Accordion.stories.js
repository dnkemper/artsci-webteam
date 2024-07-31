import ResearchStub from '../../components/stub/Stub.vue';

export default {
  title: 'Not implemented/Accordion',
  // https://github.com/storybookjs/storybook/issues/14442#issuecomment-1089165153
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    options: {
      showPanel: false,
    },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ResearchStub },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <research-stub
      path="accordion.html"
      title="Accordion"
    >
    </research-stub>
  `,
});

export const Accordion = Template.bind({})