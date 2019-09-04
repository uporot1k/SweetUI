import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean, object, select } from '@storybook/addon-knobs';
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
      size: {
        default: select('Size', ['big', 'small']),
      },
      color: {
        default: text('Color', 'yellow')
      },
      text: {
        default: text('Text', 'Это кнопка')
      },
      outlined: {
        default: boolean('Outlined', false)
      },
      iconPosition: {
        default: select('Icon Position', ['right', 'left'])
      },
      disabled: {
        default: boolean('Disabled', false)
      },
      rounded: {
        default: boolean('Rounded', false)
      }
    },
    template: `
      <s-btn 
        :size="size" 
        :color="color" 
        :outlined="outlined" 
        :iconPosition="iconPosition"
        :disabled="disabled"
        :rounded="rounded"
        type="primary"
      >
        {{text}}
      </s-btn>      
    `,
  }))
  .add('With Icon', () => ({
    components: { SBtn },
    template: '<s-btn icon="search">Тестовая</s-btn>'
  }))
  .add('Disabled', () => ({
    components: { SBtn },
    template: '<s-btn disabled>Тестовая</s-btn>'
  }))
  // .add('disabled', () => ({
  //   components: { SBtn },
  //   template: '<s-btn >Тестовая</s-btn>'
  // })
