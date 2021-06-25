import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {DemoFormPageComponent} from './demo-form-page.component';
import {DemoFormPageModule} from './demo-form-page.module';

export default {
  title: 'App / Demo Form Page',
  component: DemoFormPageComponent,
  decorators: [
    moduleMetadata({imports: [DemoFormPageModule]}),
  ],
} as Meta;

const Template: Story<DemoFormPageComponent> = (args: DemoFormPageComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
