function buyItem(id) {
    if (typeof window !== "undefined") {
        document.getElementById(id).src =
          "https://image.shutterstock.com/image-vector/sold-stamp-flat-vector-icon-260nw-441691231.jpg";
        // change text
        document.getElementById(id).alt = "sold";
        // create purchased alert
        alert(`You have purchased this item!`);
    }
    else
        console.log(`You have purchased this item!`);
}

export { buyItem };