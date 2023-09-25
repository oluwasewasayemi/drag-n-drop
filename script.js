const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')


fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// this is a for of loop
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// this appends the class of hold
// the set time out enables the hold to occur brfore it goes invisible


function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}


// this goes back to the same place when you let go of the drag
function dragEnd() {
  this.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()

}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}


// we want the div of the class of fill to be in what ever empty box we dropped
function dragDrop() {
    this.className = 'empty'
    this.append(fill)

}