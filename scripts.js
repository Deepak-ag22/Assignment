const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">TyreFlex</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Car Tyres</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Bike Tyres</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Tyre Pressure</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Commercial Tyre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Accessories</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">CashBack Offer</a></li>
                        <li><a class="dropdown-item" href="#">Find Tyre Dealers</a></li>
                        <li><a class="dropdown-item" href="#">Compare Tyres</a></li>
                        <li><a class="dropdown-item" href="#">Are you a Tyre Dealer?</a></li>
                        <li><a class="dropdown-item" href="#">Wheel Balancing</a></li>
                        <li><a class="dropdown-item" href="#">Wheel Alignment</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

const detailsSliderHTML=`<div class="row">
            <div class="col-md-8">
                <div class="info-container p-4 bg-light">
                    <h3>SHREE HEMKUNT TYRES AND SERVICES</h3> 
                    <p><i class="bi bi-geo-alt-fill"></i> Plot Number-09 Ground Floor Cisf Campus Road, Ahisna Khand-02 Indirapuram, Ghaziabad, Uttar Pradesh, 201014</p>
                    <p><i class="bi bi-clock-fill"></i> Open - Monday   to   Sunday - 10:00AM to 8:00PM</p>
                    <div class="container mt-4">
                        <h5>Rating</h5>
                        <div class="star-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div> 
                    <div class="container mt-4">
                        <h4 class="text-left margin-left 2px">Customers Reviews</h4>
                        <div id="googleReviewsCarousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Manish Singh</h5>
                                            <p class="card-text">"Excellent service! Highly recommended. The team was very responsive and helpful."</p>
                                                <div class="d-flex justify-content-between">
                                                    <span class="text-muted"><i class="bi bi-geo-alt-fill"></i> Rohini, Delhi</span>
                                                    <span class="text-warning"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Rajesh Kumar</h5>
                                            <p class="card-text">"Great products and quick delivery. I will definitely buy again."</p>
                                            <div class="d-flex justify-content-between">
                                                <span class="text-muted"><i class="bi bi-geo-alt-fill"></i> Chandni Chowk, Delhi</span>
                                                <span class="text-warning"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">Mahesh sisodia</h5>
                                            <p class="card-text">"Fantastic customer support. They went above and beyond to help me with my order."</p>
                                            <div class="d-flex justify-content-between">
                                                <span class="text-muted"><i class="bi bi-geo-alt-fill"></i> Noida, Delhi NCR</span>
                                                <span class="text-warning"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i><i class="bi bi-star"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#googleReviewsCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#googleReviewsCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>               
                </div>
            </div>
            <!-- slider with cards -->
            <div class="col-md-4">
                <div id="cardSlider" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="card">
                                <img src="sp1.png" class="card-img-top" alt="Card Image 1">
                                <div class="card-body">
                                    <h5 class="card-title">Overview</h5>
                                    <p class="card-text">Shop with proper facilities and supervision <br/> shop to try</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <img src="sp2.png" class="card-img-top" alt="Card Image 2">
                                <div class="card-body">
                                    <h5 class="card-title">Overview</h5>
                                    <p class="card-text">Shop with proper facilities and supervision <br/> shop to try</p>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="card">
                                <img src="sp1.png" class="card-img-top" alt="Card Image 3">
                                <div class="card-body">
                                    <h5 class="card-title">Overview</h5>
                                    <p class="card-text">Shop with proper facilities and supervision <br/> shop to try</p>
                                </div>
                            </div>
                        </div>
                        <!-- Add more carousel items as needed -->
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#cardSlider" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#cardSlider" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <br/>
        <div class="carousel-div">
            <ul class="custom-carousel mb-0 list-unstyled">
                <li class="item">
                    <a href="//www.tyreplex.com/mrf-tyres" title="MRF" class="custom-card">
                        <div class="brand-img">
                            <span class="brand-logo brand-mrf"></span>
                        </div>
                        <div class="card-title text-muted">MRF</div>
                    </a>
                </li>
                <li class="item">
                    <a href="//www.tyreplex.com/ceat-tyres" title="CEAT" class="custom-card">
                        <div class="brand-img">
                            <span class="brand-logo brand-ceat"></span>
                        </div>
                        <div class="card-title text-muted">CEAT</div>
                    </a>
                </li>
                <li class="item">
                    <a href="//www.tyreplex.com/goodyear-tyres" title="Good year" class="custom-card">
                        <div class="brand-img">
                            <span class="brand-logo brand-goodyear"></span>
                        </div>
                        <div class="card-title text-muted">Good year</div>
                    </a>
                </li>
                <li class="item">
                    <a href="//www.tyreplex.com/jk-tyres" title="jktyres" class="custom-card">
                        <div class="brand-img">
                            <span class="brand-logo brand-jktyres"></span>
                        </div>
                        <div class="card-title text-muted">JkTyres</div>
                    </a>
                </li>
                <li class="item">
                    <a href="//www.tyreplex.com/apollo-tyres" title="apollo" class="custom-card">
                        <div class="brand-img">
                            <span class="brand-logo brand-apollo"></span>
                        </div>
                        <div class="card-title text-muted">Apollo</div>
                    </a>
                </li>
                <li class="item">
                    <a href="//www.tyreplex.com/bridgestone-tyres" title="bridgestone" class="custom-card">
                        <div class="brand-img">
                            <span class="brand-logo brand-bridgestone"></span>
                        </div>
                        <div class="card-title text-muted">Bridgestone</div>
                    </a>
                </li>
                <li class="item">
                    <a href="//www.tyreplex.com/michelin-tyres" title="michelin" class="custom-card">
                        <div class="brand-img">
                            <span class="brand-logo brand-michelin"></span>
                        </div>
                        <div class="card-title text-muted">michelin</div>
                    </a>
                </li>
                <!-- Add other items similarly -->
            </ul>
        </div>
        <br/>
        <div class="price-label fw-bold text-black">Tyre Sold By Dealer</div>
        <br/>
        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card hover-effect">
                        <img src="tyreapollopic.png" class="card-img-top" alt="Image 1">
                        <div class="card-body">
                            <h5 class="card-title">Apollo Tyres</h5>
                            <p class="card-text">standard typre Grid tube</p>
                            <div class="price-label bold light green">Price: ₹1900</div>
                            <br/>
                            <span class="text-warning"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card hover-effect">
                        <img src="tyreapollopic.png" class="card-img-top" alt="Image 2">
                        <div class="card-body">
                            <h5 class="card-title">Apollo Tyres</h5>
                            <p class="card-text">TubeType tube</p>
                            <div class="price-label bold light green">Price: ₹2100</div>
                            <br/>
                            <span class="text-warning">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card hover-effect">
                        <img src="tyreapollopic.png" class="card-img-top" alt="Image 3">
                        <div class="card-body">
                            <h5 class="card-title">Apollo Tyres</h5>
                            <p class="card-text">Tubetype tubless</p>
                            <div class="price-label bold light green">Price: ₹3100</div>
                            <br/>
                            <span class="text-warning">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card hover-effect">
                        <img src="tyreapollopic.png" class="card-img-top" alt="Image 4">
                        <div class="card-body">
                            <h5 class="card-title">Apollo Tyres</h5>
                            <p class="card-text">Tubeless premium</p>
                            <div class="price-label bold light green">Price: ₹4100</div>
                            <br/>
                            <span class="text-warning">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card hover-effect">
                        <img src="tyreapollopic.png" class="card-img-top" alt="Image 5">
                        <div class="card-body">
                            <h5 class="card-title">Apollo Tyres</h5>
                            <p class="card-text">Bike tyre tubeless</p>
                            <div class="price-label bold light green">Price: ₹1100</div>
                            <br/>
                            <span class="text-warning">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card hover-effect">
                        <img src="tyreapollopic.png" class="card-img-top" alt="Image 6">
                        <div class="card-body">
                            <h5 class="card-title">Apollo Tyres</h5>
                            <p class="card-text">Bike tyre tube standard</p>
                            <div class="price-label bold light green">Price: ₹2100</div>
                            <br/>
                            <span class="text-warning"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card hover-effect">
                        <img src="tyreapollopic.png" class="card-img-top" alt="Image 7">
                        <div class="card-body">
                            <h5 class="card-title">Apollo Tyres</h5>
                            <p class="card-text">bike tyre tubless premium</p>
                            <div class="price-label bold light green">Price: ₹3100</div>
                            <br/>
                            <span class="text-warning"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star"></i></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card hover-effect">
                        <img src="tyreapollopic.png" class="card-img-top" alt="Image 8">
                        <div class="card-body">
                            <h5 class="card-title">Apollo Tyres</h5>
                            <p class="card-text">bike tyres tube premium</p>
                            <div class="price-label bold light green">Price: ₹3300</div>
                            <br/>
                            <span class="text-warning">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-half"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <footer class="bg-light text-dark py-4">
            <div class="container">
                <div class="row">
                    <!-- About Section -->
                    <div class="col-md-4 mb-3">
                        <h5 class="fw-bold text-orange mb-3">TyrePlex</h5>
                        <p>Welcome to TyrePlex, your go-to source for all things tyres.</p>
                        <div class="social-icons">
                            <a href="https://www.facebook.com" target="_blank" class="text-decoration-none">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" class="text-decoration-none">
                                <i class="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links Section -->
                    <div class="col-md-4 mb-3">
                        <h5 class="fw-bold">Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="#" class="text-dark text-decoration-none">Who We Are</a></li>
                            <li><a href="#" class="text-dark text-decoration-none">Are you a Tyre Dealer?</a></li>
                            <li><a href="#" class="text-dark text-decoration-none">Privacy Policy</a></li>
                            <li><a href="#" class="text-dark text-decoration-none">Terms of Use</a></li>
                            <li><a href="#" class="text-dark text-decoration-none">Shipping & Return Policy</a></li>
                        </ul>
                    </div>

                    <!-- Contact Section -->
                    <div class="col-md-4 mb-3">
                        <h5 class="fw-bold">Contact Us</h5>
                        <p>
                            Email: <a href="mailto:info@tyreplex.com" class="text-dark text-decoration-none">info@tyreplex.com</a><br>
                            Phone: +123 456 7890
                        </p>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <p class="mb-0">© 2024 TyrePlex. All rights reserved.</p>
                </div>
            </div>
        </footer>

        `

        document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
        document.getElementById('mydiv').innerHTML = detailsSliderHTML;