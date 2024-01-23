"use strict";

const galleryData = [
    {
        title: "Guttleship",
        tags: ["vehicle", "boat", "colorful"],
        images: [
            "Assets/display_images/Guttleship1.png",
            "Assets/display_images/Guttleship2.png",
            "Assets/display_images/Guttleship3.png"
        ]
    },
    {
        title: "Themepark",
        tags: ["exploration"],
        images: [
            "Assets/display_images/Themepark1.png",
            "Assets/display_images/Themepark2.png",
            "Assets/display_images/Themepark3.png"
        ]
    }
];

const wordList = ["vehicle", "boat", "colorful", "exploration"];

// Function to generate HTML for each gallery item
function generateGalleryItem(item) {
    const listItem = document.createElement("li");

    // Title
    const tagDiv = document.createElement("div");

    const titleHeading = document.createElement("h2");
    titleHeading.textContent = item.title;
    tagDiv.appendChild(titleHeading);

    // Tags
    
    item.tags.forEach(tag => {
        const tagLink = document.createElement("a");
        tagLink.classList.add("tag");
        tagLink.textContent = tag;
        tagDiv.appendChild(tagLink);
    });
    listItem.appendChild(tagDiv);

    // Images
    const imageRowDiv = document.createElement("div");
    imageRowDiv.classList.add("image-row");
    item.images.forEach(imageSrc => {
        const image = document.createElement("img");
        image.src = imageSrc;
        image.alt = "Image";
        imageRowDiv.appendChild(image);
    });
    listItem.appendChild(imageRowDiv);

    return listItem;
}

// Function to generate the entire list
function generateGalleryList(data) {
    const listContainer = document.getElementById("galleryList");
    data.forEach(item => {
        const listItem = generateGalleryItem(item);
        listContainer.appendChild(listItem);
    });
}

// Generate the gallery list
generateGalleryList(galleryData);