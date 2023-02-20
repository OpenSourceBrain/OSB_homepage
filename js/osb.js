

$('a[data-bs-toggle="tab"]').on('click', (e) => {
    console.log(e.target.id)
    const activeTab = e.target.id
    const activeElement = document.querySelector('.carousel-item.active')
    activeElement.classList.remove('active')
    console.log(`${activeTab}-carousel-item`)
    const newActiveElement = document.getElementById(`${activeTab}-carousel-item`)
    newActiveElement.classList.add('active')
    console.log(newActiveElement)
})
