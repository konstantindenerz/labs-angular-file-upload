import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {MainLayoutComponent} from './main-layout.component';
import {MainLayoutModule} from './main-layout.module';

export default {
  title: 'App / Main Layout',
  component: MainLayoutComponent,
  decorators: [
    moduleMetadata({ imports: [MainLayoutModule]}),
  ],
} as Meta;

const Template: Story<MainLayoutComponent> = (args: MainLayoutComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
