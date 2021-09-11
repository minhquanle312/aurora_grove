const galleryImages = [
    {
        id: 1,
        path: 'images/gallery/social1.png',
    },
    {
        id: 2,
        path: 'images/gallery/social2.png',
    },
    {
        id: 3,
        path: 'images/gallery/social3.png',
    },
    {
        id: 4,
        path: 'images/gallery/social4.png',
    },
    {
        id: 5,
        path: 'images/gallery/social5.png',
    },
    {
        id: 6,
        path: 'images/gallery/social6.png',
    },
    {
        id: 7,
        path: 'images/gallery/social7.png',
    },
    {
        id: 8,
        path: 'images/gallery/social8.png',
    },
]

const sliderImages = [
    // {
    //     path: 'images/slider/caribou.png',
    //     isActive: true,
    // },
    {
        path: 'images/slider/coffee.png',
        // isActive: false,
    },
    {
        path: 'images/slider/fire.png',
        // isActive: false,
    },
    {
        path: 'images/slider/trees.png',
        // isActive: false,
    },
]

function renderSliderImage() {
    const sliderControl = `
        <a href="#mainCarousel" class="carousel-control-prev" data-slide="prev" role="button">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a href="#mainCarousel" class="carousel-control-next" data-slide="next" role="button">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    `
    const anchorItem = `
        <div class="carousel-item active">
            <img src="images/slider/caribou.png" alt="" class="d-block w-100 rounded shadow">
        </div>
    `

    const sliderImageItem = anchorItem.concat(sliderImages.map(sliderImage => {
        return `
            <div class="carousel-item">
                <img src="${sliderImage.path}" alt="" class="d-block w-100 rounded shadow">
            </div>
        `
    }).join('').concat(sliderControl))
    $('#slider .carousel-inner').html(sliderImageItem)
}

function renderCustomerImage() {
    const customerImageItem = galleryImages.map((galleryImage) => {
        return `
        <div class="col-6 col-lg-3 mb-4 customer-item">
            <img src="${galleryImage.path}" class="img-fluid rounded shadow" data-toggle="modal"
            data-target="#customer-img-${galleryImage.id}">
        </div>

        <div class="modal fade" id="customer-img-${galleryImage.id}" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-body p-0">
                  <img src="${galleryImage.path}" alt="" class="img-fluid d-block w-100 rounded-lg">
                </div>
              </div>
            </div>
          </div>
        `
    }).join('')
    $('#customers-image .row').html(customerImageItem)
}

function render() {
    renderSliderImage()
    renderCustomerImage()
}

; (function () {
    render()
})()