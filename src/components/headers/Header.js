import React from 'react'

export default function Header() {
    return ( 
        <div class="relative bg-white overflow-hidden">
            <div class="max-w-7xl mx-auto ">
                <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                    <nav class="relative bg-gray-300 flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                    
                      <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                          <a href="#" class="font-medium p-4 text-black hover:bg-green-500 ">Home</a>

                          <a href="#" class="font-medium p-4 text-black hover:bg-green-500">Books</a>

                          <a href="#" class="font-medium p-4 text-black hover:bg-green-500">About</a>

                          <a href="#" class="font-medium p-4 text-black hover:bg-green-500">Contact Us</a>

                          <a href="#" class="font-medium p-4 text-green-500  hover:text-green-900 ">Log in</a>
                      </div>
                    </nav>
            </div>

      <main class="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-3xl  animate-bounce tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Enrich your</span>
            <span class="block text-green-600 xl:inline ">Javascript Programing</span>
          </h1>
          <p class="transform rotate-6 mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          </p>
        </div>
      </main>
    </div>
  </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1573165231977-3f0e27806045?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80" alt="" />
            </div>
        </div>

    )
}
