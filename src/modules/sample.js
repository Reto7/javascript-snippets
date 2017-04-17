'use strict'
// import default
import Logger from './logger'
// oder als named import
//import {default as Logger} from './logger'
// import explicit
import {PI as pii} from './logger'
import {PI, NICHTDA} from './logger'

let l = new Logger(console.log)
l.warn('hi')
l.log('du')
l.log([pii, PI, Logger.PI, NICHTDA])