import React from 'react'

export default function Footer() {
    return (
        <footer class="bg-white">
        <div class="py-5">
            <div class="grid grid-cols-5 mx-16 gap-4 py-3">
                <div class="">
                    <h6 class="text-uppercase font-bold mb-4">Navigation</h6>
                    <ul class="">
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Home</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Books</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">About</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                    <h6 class="text-uppercase font-bold mb-4">Help</h6>
                    <ul class="">
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Payments</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Shipping</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Cancellation</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Returns</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                    <h6 class="text-uppercase font-bold mb-4">Policy</h6>
                    <ul class="">
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Return Policy</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Terms Of Use</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Security</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Privacy</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                    <h6 class="text-uppercase font-bold mb-4">Company</h6>
                    <ul class="">
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Login</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Register</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Sitemap</a></li>
                        <li class="mb-2 hover:underline"><a href="#" class="text-muted">Our Products</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 mb-lg-0">
                    <h6 class="text-uppercase font-bold mb-4">Office Address</h6>
                    <p class="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                    <ul class="space-x-8 mt-4 ">
                        <li class="inline-block">
                            <a class="social-icon text-xs-center text-3xl text-green-500 " target="_blank" href="#">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li class="inline-block">
                            <a class="social-icon text-xs-center text-3xl text-green-500" target="_blank" href="#">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li class="inline-block">
                            <a class="social-icon text-xs-center text-3xl text-green-500" target="_blank" href="#">
                                <i class="fa fa-skype"></i>
                            </a>
                        </li>
                        <li class="inline-block">
                            <a class="social-icon text-xs-center text-3xl text-green-500" target="_blank" href="#">
                                <i class="fa fa-google"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="p-0 m-0 b-0" />
        <div class=" bg-green-400 py-2">
            <div class=" text-center">
                <p class="text-gray-500 mb-0 py-2">© 2021 Orich</p>
            </div>
        </div>
    </footer>
    )
}
