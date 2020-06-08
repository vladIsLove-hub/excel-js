import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'
import {changeTitle} from '@/redux/actions'
import {defaultTitle} from '@/constants'
import {debounce} from '@core/utils'
import { ActiveRoute } from '../../core/routes/ActiveRoute'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      ...options,
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
      <input type="text" class="input" value="${title}" />
      <div>
        <div class="button" data-button="remove">
          <i data-button="remove" class="material-icons">delete</i>
        </div>
        <div class="button" data-button="exit">
          <i data-button="exit" class="material-icons">exit_to_app</i>
        </div>
      </div>
    `
  }

  onClick(event){
    const $target = $(event.target)
    if($target.data.button === 'remove'){
      const dicision = confirm('Are you really want delete this table')
      if(dicision){
        localStorage.removeItem('excel' + ActiveRoute.param)
        ActiveRoute.navigate('')
      }
    } else if ($target.data.button === 'exit'){
      ActiveRoute.navigate('')
    }
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}
