const test = require('ava')
const idx = require('../src/index')

test('create', t => {
  const exported = idx
  t.truthy(exported)
  t.is(typeof exported.build, 'function')
  const { build } = exported
  const runtime = build().brand('test').createRuntime()
  t.is(runtime.brand, 'test')

  t.is(typeof exported.printCommands, 'function')
  t.is(typeof exported.printWtf, 'function')
  t.is(typeof exported.print.info, 'function')
  t.is(typeof exported.subdirectories, 'function')
  t.is(exported.strings.lowerCase('HI'), 'hi')
})
