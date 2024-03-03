const btnContainer = document.getElementById('btn-container');
const cardContainer = document.getElementById('card-container');

const fetchCategories = () => {
    const url = 'https://openapi.programming-hero.com/api/videos/categories';
    fetch(url)
        .then((res) => res.json())
        .then(({ data }) => {
            data.forEach((card) => {
                const newBtn = document.createElement('button');
                newBtn.className = 'btn btn-ghost bg-slate-500 text-white text-lg'
                newBtn.innerText = card.category;
                newBtn.addEventListener('click', () => fetchDataByCategories(card.category_id))
                btnContainer.appendChild(newBtn);
            })
        })
        .catch((error) => console.error('Error fetching categories:', error));
}

const fetchDataByCategories = (categoryId) => {
    const url = `
    https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    fetch(url)
        .then((res) => res.json())
        .then(({ data }) => {
            data.forEach((video) => {
                const newCard = document.createElement('div');
                newCard.innerHTML = `
                <div class="flex lg:flex-row">
            <div id="card-container" class="flex mx-auto  flex flex-col justify-start ml-10 gap-2">
                <div>
                    <img src="images/Rectangle 1.png" alt="">
                </div>
                <div class="flex gap-4 text-black">
                    <img src="images/Ellipse 1.png" alt="">
                    <p class="text-lg font-normal">Building a Winning UX Strategy <br> Using The Keno Model</p>
                </div>
                <div class="flex gap-4">
                    <p>Awlad Hossain</p>
                    <img src="images/fi_10629607.png" alt="">
                </div>
                <div>
                    <p>91k views</p>
                </div>
            </div>
        </div>
                `
                cardContainer.appendChild(newCard);

            })
        })
}

fetchCategories();