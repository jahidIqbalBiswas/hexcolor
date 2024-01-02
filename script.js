function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[parseInt(Math.random() * 16)];
    }
    document.getElementById("displayColor").innerHTML = color;
    document.body.style.backgroundColor = color;
}