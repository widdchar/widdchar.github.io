let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0 px",
};

const loadImages = (Image) => {
    Image.setAttribute("src", Image.getAttribure("date-src"));
    Image.onload = () => {
        Image.removeAttribute("data-src");
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);

});

if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);


imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
});

} else {
    imagesToLoad.forEach((img)=> {
        loadImages(img);
    });
}