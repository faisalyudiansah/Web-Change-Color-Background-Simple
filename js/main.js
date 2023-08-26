    const circles = document.querySelectorAll(".circle, .reset")
    circles.forEach(circle => {
        circle.addEventListener('click', ({target}) => {
            const {backgroundColor} = getComputedStyle(target)
            const {color} = getComputedStyle(target)
            document.body.style.backgroundColor = backgroundColor
            document.body.style.color = color
        })
    })
