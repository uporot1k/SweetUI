import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean, object, select } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/vue';
import SSwitcher from './SSwitcher.vue';

let stories = storiesOf('Switcher', module);

  stories.addDecorator(withKnobs);
  stories.addDecorator(centered)
  .add('Dual', () => ({
    components: {
      's-switcher': SSwitcher,
    },
    props: {
      items: {
        default: object('Items', ['S', 'M', 'L']),
      }
    },
    template: `
      <s-switcher :items="items"/>
    `,
  }))
  .add('Triple', () => ({
    components: {
      's-switcher': SSwitcher,
    },
    props: {
    },
    template: `
      <s-switcher />
    `,
  }))