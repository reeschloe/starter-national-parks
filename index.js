const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
};
  
// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
event.preventDefault();

// 1.  Get the main element
const main = document.querySelector("main");

// 2. Get the list of parks
const parksList = main.querySelectorAll(".park-display");

// 3. Empty the main
main.innerHTML = "";

// 4. Create an array
const parksArray = Array.from(parksList);

// 5. Sort the array
parksArray.sort(sortByName);

// 6. Insert each park into the DOM
parksArray.forEach((park) => {
    main.appendChild(park);
});
};



const sortByRating = (parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display .value").innerText;
    const parkBRating = parkB.querySelector(".rating-display .value").innerText;
    if (parkARating < parkBRating) {
    return -1;
    } else if (parkARating > parkBRating) {
    return 1;
    } else {
    return 0;
    }
}

const ratingSorterClickHandler = (event) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = document.querySelectorAll(".park-display");

    main.innerHTML = "";

    const parksArray = Array.from(parksList);
    parksArray.sort(sortByRating);

    parksArray.forEach((park) => {
    main.appendChild(park);
    })
}



const ready = () => {
    const descriptions = document.querySelectorAll(".description-display")

    for (let description of descriptions.values()) {
        let content = description.innerText;
        if (content.length > 250) {
            content = content.slice(0,250);
            content += '<a href="#">...</a>';
        }
        description.innerHTML = content;
    }

    // const ratings = document.querySelectorAll(".rating-display .value");

    // for (let rating of ratings) {
    //     let ratingValue = parseFloat(rating.innerText);
    //     if (ratingValue > 4.7) {
    //         rating.classList.add("high-rating");
    //         rating.classList.remove("value");
    //     }
    // }

    const parks = document.querySelectorAll(".park-display");
    const numberParks = parks.length;
    const newElement = document.createElement("div");
    newElement.innerText = `${numberParks} exciting parks to visit`;
    newElement.classList.add("header-statement");

    const header = document.querySelector("header");
    header.appendChild(newElement);

    const main = document.querySelector("main");
    const park = main.querySelector(".park-display")
    main.removeChild(park);
    const allBtns = document.querySelectorAll(".rate-button");
    allBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const park = event.target.parentNode;
            park.style.backgroundColor = "#c8e6c9"
    });
    });

    const nameSorter = document.querySelector("#name-sorter");
    nameSorter.addEventListener("click", nameSorterClickHandler);

    const ratingSorter = document.querySelector("#rating-sorter");
    ratingSorter.addEventListener("click", ratingSorterClickHandler);


}

window.addEventListener("DOMContentLoaded", ready)