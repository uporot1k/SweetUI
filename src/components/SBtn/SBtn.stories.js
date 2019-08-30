import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/vue';
import SBtn from './SBtn.vue';
import SIcon from '../SIcon/SIcon.vue'



let stories = storiesOf('Button', module);

  stories.addDecorator(withKnobs);
  stories.addDecorator(centered)
  .add('Base', () => ({
    components: {
      's-btn': SBtn,
      's-icon': SIcon
    },
    props: {
      color: {
        default: text('Color', 'yellow')
      },
      text: {
        default: text('Text', 'test')
      }
    },
    template: `<s-btn :rounded="true" :color="color" icon="search">{{text}}</s-btn>
                
    `
  }))
  .add('Small', () => ({
    components: { SBtn },
    template: '<s-btn size="small">Тестовая</s-btn>'
  }))
  .add('Disabled', () => ({
    components: { SBtn },
    template: '<s-btn disabled>Тестовая</s-btn>'
  }))
  // .add('disabled', () => ({
  //   components: { SBtn },
  //   template: '<s-btn >Тестовая</s-btn>'
  // })
