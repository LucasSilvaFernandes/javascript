function tabuada(){
    const num = document.querySelector('input#txtn')
    const tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        alert('por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            const item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}


