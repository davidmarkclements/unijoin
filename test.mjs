'use strict'
import { strict } from 'assert'
import { join } from 'path'
import unijoin from './index.js'
const { equal } = strict

equal(unijoin('a', 'b'), join('a', 'b'))

equal(unijoin('file:///a', 'b'), join('/a', 'b'))

equal(unijoin('a', 'file:///b'), join('a', 'b'))

console.log('tests passed')
