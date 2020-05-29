import './scss/index.scss'
import { Excel } from '@/components/excel/Excel'
import { Header } from './components/excel/header/Header'
import { Toolbar } from './components/excel/toolbar/Toolbar'
import { Formula } from './components/excel/formula/Formula'
import { Table } from './components/excel/table/Table'

const excel = new Excel(`#app`, {
    components: [Header, Toolbar, Formula, Table]
})
excel.render()
