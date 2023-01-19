import React from 'react';

const Footer = () => {
    return (
        <footer class="site-footer section">
            <div class="container pb-3 b-t">
                <div class="row gap-y text-center text-md-start">
                    <div class="col-md-4 me-auto">
                        <img src="img/logo.png" alt="" class="logo"/>
                            <p> <span className='font-md'>Medical</span>, a carefully crafted and powerful HTML5 template, it's perfect to showcase your startup or software</p>
                    </div>
                    <div class="col-md-2">
                        <h6 class="py-2 bold text-uppercase">Company</h6>
                        <nav class="nav flex-column">
                            <a class="nav-item py-2" href="about.html">About</a> <a class="nav-item py-2" href="#">Services</a> <a class="nav-item py-2" href="blog/blog-grid.html">Blog</a>
                        </nav>
                    </div>
                    <div class="col-md-2">
                        <h6 class="py-2 bold text-uppercase">Product</h6>
                        <nav class="nav flex-column">
                            <a class="nav-item py-2" href="#">Features</a> <a class="nav-item py-2" href="#">API</a> <a class="nav-item py-2" href="#">Customers</a>
                        </nav>
                    </div>
                    <div class="col-md-2">
                        <h6 class="py-2 bold text-uppercase">Channels</h6>
                        <nav class="nav flex-column">
                            <a class="nav-item py-2" href="#">Careers</a> <a class="nav-item py-2" href="#">Contact</a> <a class="nav-item py-2" href="#">Search</a>
                        </nav>
                    </div>
                </div>
                <hr class="mt-5"/>
                    <div class="row small align-items-center">
                        <div class="col-md-4">
                            <p class="mt-2 mb-md-0 text-secondary text-center text-md-start">© 2021 5studios. All Rights Reserved</p>
                        </div>
                        <div class="col-md-8">
                            <nav class="nav justify-content-center justify-content-md-end">
                                <a href="#" class="btn btn-circle btn-sm btn-secondary me-3 op-4">
                                    <i class="fab fa-facebook">
                                    </i>
                                </a> <a href="#" class="btn btn-circle btn-sm btn-secondary me-3 op-4">
                                    <i class="fab fa-twitter">
                                    </i>
                                </a> <a href="#" class="btn btn-circle btn-sm btn-secondary op-4">
                                    <i class="fab fa-instagram">
                                    </i>
                                </a>
                            </nav>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;