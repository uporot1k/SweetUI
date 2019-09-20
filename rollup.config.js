import commonjs from 'rollup-plugin-commonjs'; // Конвертирование CommonJS модулей в ES6
import vue from 'rollup-plugin-vue'; // Обработка однофайловых компонентов .vue
import buble from 'rollup-plugin-buble'; // Транспиляция/добавление полифилов для умеренной поддержки браузеров

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/library.esm.js',
      name: capitalize('test'),
    },
    plugins: [
      commonjs(),
      vue({
          css: true, // Динамически внедряем CSS в тег <style>
          compileTemplate: true, // Явное преобразование шаблона в рендер-функцию
      }),
      buble() // Транспиляция в ES5
    ],
  },
  {
    input: 'src/index.js',
    output: {
      format: 'iife',
      file: 'dist/library.js',
      name: capitalize('test'),
    },
    plugins: [
      commonjs(),
      vue({
          css: true, // Динамически внедряем CSS в тег <style>
          compileTemplate: true, // Явное преобразование шаблона в рендер-функцию
      }),
      buble() // Транспиляция в ES5
    ],
  },
];


// import vue from 'rollup-plugin-vue'

// export default  [
//   {
//     input: 'src/index.js',
//     output: {
//       format: 'esm',
//       file: 'dist/library.esm.js'
//     },
//     plugins: [
//       vue()
//     ]
//   },
//   {
//     input: 'src/index.js',
//     output: {
//       format: 'iife',
//       file: 'dist/library.js'
//     },
//     plugins: [
//       vue()
//     ]
//   },
// ]