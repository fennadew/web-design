export const sections = {
    // Shows the section that matches with the route
    toggle(hash) {
        document.querySelectorAll('.route').forEach(function (el) {
                el.classList.add('hidden');
            if (el.id === hash) {
                el.classList.remove('hidden')
            }
        })
    }
}
