import React from 'react'

export default function Book(props) {
    return (
        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip  ">
                            <div class="frontside  bg-gradient-to-br from-green-300 to-white-500 w-full mx-auto h-80">
                                <div class="border-none m-4 ">
                                    <div class="p-4 text-center bg-white  transform rotate-6 ">
                                        <p><img class="w-32 h-32  mx-auto rounded-full" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png" alt="card image" /></p>
                                        <h4 class="text-green-500 text-2xl">{props.author}</h4>
                                        <p class="card-text">{props.title}</p>
                                        <p class="text-green-300 my-1">{props.publisher}</p>
                                        <p class="text-gray-400 my-2">{props.published.slice(0,10)}</p>
                                        <a href="#" class="bg-blue-500 p-1 text-white"><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside bg-white w-full h-80">
                                <div class="border-none h-full">
                                    <div class="text-center mt-4 ">
                                        <h4 className="text-green-500 text-2xl">{props.subtitle}</h4>
                                        <p class="card-text">{props.description}</p>
                                        <ul class="space-x-4 mt-4">
                                            <li class="inline-block">
                                                <a class="social-icon text-xs-center text-green-500" target="_blank" href="#">
                                                    <i class="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="inline-block">
                                                <a class="social-icon text-xs-center text-green-500" target="_blank" href="#">
                                                    <i class="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li class="inline-block">
                                                <a class="social-icon text-xs-center text-green-500" target="_blank" href="#">
                                                    <i class="fa fa-skype"></i>
                                                </a>
                                            </li>
                                            <li class="inline-block">
                                                <a class="social-icon text-xs-center text-green-500" target="_blank" href="#">
                                                    <i class="fa fa-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> 
                </div>  

    )
}
