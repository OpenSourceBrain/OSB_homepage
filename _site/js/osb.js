

$('a[data-bs-toggle="tab"]').on('click', (e) => {
    const activeTab = e.target.id
    const activeElement = document.querySelector('.carousel-item.active')
    activeElement.classList.remove('active')
    const newActiveElement = document.getElementById(`${activeTab}-carousel-item`)
    newActiveElement.classList.add('active')
})

$('#features-carousel').on('slid.bs.carousel', function onSlide (ev) {
    const id = ev.relatedTarget.id;
    const activeTab = document.querySelector('.nav-link.active')
    console.log(activeTab)
    const newActiveTabId = id.replace('-carousel-item', '')
    activeTab.classList.remove('active')
    activeTab.setAttribute('aria-selected', 'false')
    console.log(newActiveTabId)
    const newActiveTab = document.getElementById(newActiveTabId)

    newActiveTab.classList.add('active')
    newActiveTab.setAttribute('aria-selected', 'true')

    console.log(newActiveTabId)
    // activeElement.classList.remove('active')
    // const newActiveElementId = id.replace('-carousel-item', '')
    // console.log(newActiveElement)
    // newActiveElement.classList.add('active')
})
