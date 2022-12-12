class TYPE{
  constructor(obj){
    obj.el instanceof  HTMLElement ? thid.el : this.el = document.querySelector(obj.el)
    this.text = this.el.innerHTML.trim()
    this.el.innerHTML = ''
    this.typing()
  }
  typing(i = 0){
    this.el.innerHTML += this.text[i]
    i++
    if (i < this.text.length) {
      setTimeout(() => {
        this.typing(i)
      },100);
    }
  }
}
const type = new TYPE({
  el:'.header__text'
})
// const type2 = new TYPE({
//   el:'.header-titel'
// })