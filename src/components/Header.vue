<template>
  <header class="border-b border-gray-200 bg-white relative">
    <div class="max-w-8xl mx-auto pl-2 sm:pl-3 lg:pl-20 pr-4 sm:pr-6 lg:pr-8">
      <div class="flex justify-between items-center py-3 sm:py-4">
        <div class="flex items-center">
          <router-link to="/">
            <img src="../assets/otelapps.png" alt="OtelApps logo" class="h-8 sm:h-10 w-auto" />
          </router-link>

          <!-- Desktop Navigation (grouped with logo) -->
          <nav class="hidden md:flex items-center space-x-6 lg:space-x-8 ml-4">
            <div class="flex items-center space-x-1 cursor-pointer" @click.stop="toggleProductMenu">
              <span class="text-gray-700 hover:text-gray-900 text-sm lg:text-base">Product</span>
              <svg
                class="w-3 h-3 lg:w-4 lg:h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <div
              class="flex items-center space-x-1 cursor-pointer"
              @click.stop="toggleSolutionsMenu"
            >
              <span class="text-gray-700 hover:text-gray-900 text-sm lg:text-base">Solutions</span>
              <svg
                class="w-3 h-3 lg:w-4 lg:h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
            <router-link to="/Pricing">
              <span class="text-gray-700 hover:text-gray-900 cursor-pointer text-sm lg:text-base"
                >Pricing</span
              >
            </router-link>
            <router-link to="/AboutUs">
              <span class="text-gray-700 hover:text-gray-900 cursor-pointer text-sm lg:text-base"
                >About Us</span
              >
            </router-link>
            <router-link to="/Contact">
              <span class="text-gray-700 hover:text-gray-900 cursor-pointer text-sm lg:text-base"
                >Contact</span
              >
            </router-link>
          </nav>
        </div>

        <!-- Mobile right controls: globe | divider | hamburger -->
        <div class="flex items-center md:hidden space-x-3">
          <div class="p-2 rounded-md text-gray-700">
            <svg
              class="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
              ></path>
            </svg>
          </div>

          <div class="w-px h-6 bg-gray-300"></div>

          <button
            @click.stop="toggleMobileMenu"
            class="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Right side elements -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Language selector -->
          <div class="flex items-center space-x-1 cursor-pointer">
            <svg
              class="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
              ></path>
            </svg>
          </div>

          <!-- Separator -->
          <div class="w-px h-6 bg-gray-300"></div>

          <!-- Log in button -->
          <router-link to="">
            <span
              class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm cursor-pointer"
            >
              Log in</span
            >
          </router-link>

          <!-- Book a demo button -->
          <router-link to="/Pricing">
            <span
              class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm cursor-pointer"
            >
              Book a demo
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 z-50 bg-white">
      <!-- Mobile menu header -->
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
        <router-link to="/" @click="closeMobileMenu">
          <img src="../assets/otelapps.png" alt="OtelApps logo" class="h-8 w-auto" />
        </router-link>

        <div class="flex items-center space-x-4">
          <!-- Language selector -->
          <div class="flex items-center space-x-1 cursor-pointer">
            <svg
              class="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
              ></path>
            </svg>
          </div>

          <!-- Separator -->
          <div class="w-px h-6 bg-gray-300"></div>

          <!-- Close button -->
          <button
            @click="closeMobileMenu"
            class="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu content -->
      <div class="px-4 py-6">
        <!-- Navigation items -->
        <nav class="space-y-0">
          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
            @click.stop="toggleProductMenu"
          >
            <span class="text-gray-900 text-base">Product</span>
            <svg
              class="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div v-if="isProductOpen" class="py-4 border-b border-gray-200">
            <div class="grid grid-cols-1 gap-6">
              <!-- Ecosystem -->
              <div>
                <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700">
                  Ecosystem
                </div>
                <div class="flex items-start space-x-3">
                  <svg
                    class="w-5 h-5 text-gray-900 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                    />
                  </svg>
                  <div>
                    <router-link to="/Product/GuestApp" @click="closeMobileMenu">
                      <div class="font-medium text-gray-900">Guest App</div>
                      <p class="text-sm text-gray-600">
                        Showcase your hotel services to boost your revenue
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Main Features -->
              <div>
                <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700">
                  Main Features
                </div>
                <div class="grid grid-cols-1 gap-y-6">
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7h18M3 12h18M3 17h18"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/HotelDirectory" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900">Hotel Directory</div>
                        <p class="text-sm text-gray-600">
                          Provide detailed information about your hotel
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/MobileOrdering" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900">Mobile Ordering</div>
                        <p class="text-sm text-gray-600">
                          Easy ordering for the guest with no waits
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/InstantFeedback" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900">Instant Feedback</div>
                        <p class="text-sm text-gray-600">
                          Get more feedback at the moments that matter
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6l4 2"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/TaskManager" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900">Task Manager</div>
                        <p class="text-sm text-gray-600">Centralize all your guests requests</p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12h6l3 8 3-16 3 8h3"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/TripPlanner" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900">Trip Planner</div>
                        <p class="text-sm text-gray-600">
                          Create a better experience for your guests
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                      />
                    </svg>
                    <div>
                      <router-link to="/Product/AnalyticsInsights" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900">Analytics & Insights</div>
                        <p class="text-sm text-gray-600">Make better data-driven decisions</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
            @click.stop="toggleSolutionsMenu"
          >
            <span class="text-gray-900 text-base">Solutions</span>
            <svg
              class="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <div v-if="isSolutionsOpen" class="py-4 border-b border-gray-200">
            <div class="grid grid-cols-1 gap-6">
              <!-- Ecosystem -->
              <div>
                <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700">
                  Ecosystem
                </div>
                <div class="grid grid-cols-1 gap-y-6">
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                      />
                    </svg>
                    <div>
                      <router-link to="/Solution/CityCenter" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900">City Center</div>
                        <p class="text-sm text-gray-600">Streamline operations and boost revenue</p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7h18M3 12h18M3 17h18"
                      />
                    </svg>
                    <div>
                      <router-link to="/Solution/Boutiques" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900">Boutiques</div>
                        <p class="text-sm text-gray-600">
                          Deliver personalized and immediate attention
                        </p>
                      </router-link>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <svg
                      class="w-5 h-5 text-gray-900 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <router-link to="/Solution/SmallHotels" @click="closeMobileMenu">
                        <div class="font-medium text-gray-900">Small Hotels</div>
                        <p class="text-sm text-gray-600">Enhance access to your hotel services</p>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/Pricing" @click="closeMobileMenu">
            <div class="py-4 border-b border-gray-200 cursor-pointer">
              <span class="text-gray-900 text-base">Pricing</span>
            </div>
          </router-link>

          <router-link to="/AboutUs" @click="closeMobileMenu">
            <div class="py-4 border-b border-gray-200 cursor-pointer">
              <span class="text-gray-900 text-base">About us</span>
            </div>
          </router-link>

          <router-link to="/Contact" @click="closeMobileMenu">
            <div class="py-4 border-b border-gray-200 cursor-pointer">
              <span class="text-gray-900 text-base">Contact</span>
            </div>
          </router-link>
        </nav>

        <!-- Buttons -->
        <div class="mt-8 space-y-4">
          <router-link to="" @click="closeMobileMenu">
            <span
              class="block w-full border border-black text-gray-900 text-center px-4 py-3 bg-white transition-colors text-base mb-5"
            >
              Log in
            </span>
          </router-link>

          <router-link to="/Pricing" @click="closeMobileMenu">
            <span
              class="block w-full bg-black text-white text-center px-4 py-3 hover:bg-gray-900 transition-colors text-base cursor-pointer"
              >Book a demo</span
            >
          </router-link>
        </div>
      </div>
    </div>
    <!-- Desktop Product mega menu -->
    <div
      v-if="isProductOpen"
      class="hidden md:block absolute -left-53 right-0 z-40 bg-white border-t border-gray-300"
      @click.stop
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- Ecosystem -->
          <div>
            <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700">Ecosystem</div>
            <div class="flex items-start space-x-3">
              <svg
                class="w-5 h-5 text-gray-900 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                />
              </svg>
              <div>
                <router-link to="/Product/GuestApp" @click="isProductOpen = false">
                  <div class="font-medium text-gray-900">Guest App</div>
                  <p class="text-sm text-gray-600">
                    Showcase your hotel services to boost your revenue
                  </p>
                </router-link>
              </div>
            </div>
          </div>

          <!-- Main Features -->
          <div>
            <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700">
              Main Features
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
                <div>
                  <router-link to="/Product/HotelDirectory" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900">Hotel Directory</div>
                    <p class="text-sm text-gray-600">
                      Provide detailed information about your hotel
                    </p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"
                  />
                </svg>
                <div>
                  <router-link to="/Product/MobileOrdering" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900">Mobile Ordering</div>
                    <p class="text-sm text-gray-600">Easy ordering for the guest with no waits</p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <router-link to="/Product/InstantFeedback" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900">Instant Feedback</div>
                    <p class="text-sm text-gray-600">
                      Get more feedback at the moments that matter
                    </p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6l4 2"
                  />
                </svg>
                <div>
                  <router-link to="/Product/TaskManager" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900">Task Manager</div>
                    <p class="text-sm text-gray-600">Centralize all your guests requests</p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12h6l3 8 3-16 3 8h3"
                  />
                </svg>
                <div>
                  <router-link to="/Product/TripPlanner" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900">Trip Planner</div>
                    <p class="text-sm text-gray-600">Create a better experience for your guests</p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 12h2m-1-9a9 9 0 100 18 9 9 0 000-18z"
                  />
                </svg>
                <div>
                  <router-link to="/Product/AnalyticsInsights" @click="isProductOpen = false">
                    <div class="font-medium text-gray-900">Analytics & Insights</div>
                    <p class="text-sm text-gray-600">Make better data-driven decisions</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Desktop Solutions mega menu -->
    <div
      v-if="isSolutionsOpen"
      class="hidden md:block absolute left-0 right-0 z-40 bg-white border-t border-gray-300"
      @click.stop
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <!-- Ecosystem -->
          <div>
            <div class="border-b border-gray-300 pb-2 mb-4 text-sm text-gray-700">Ecosystem</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z"
                  />
                </svg>
                <div>
                  <router-link to="/Solution/CityCenter" @click="isSolutionsOpen = false">
                    <div class="font-medium text-gray-900">City Center</div>
                    <p class="text-sm text-gray-600">Streamline operations and boost revenue</p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                </svg>
                <div>
                  <router-link to="/Solution/Boutiques" @click="isSolutionsOpen = false">
                    <div class="font-medium text-gray-900">Boutiques</div>
                    <p class="text-sm text-gray-600">
                      Deliver personalized and immediate attention
                    </p>
                  </router-link>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-gray-900 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <router-link to="/Solution/SmallHotels" @click="isSolutionsOpen = false">
                    <div class="font-medium text-gray-900">Small Hotels</div>
                    <p class="text-sm text-gray-600">Enhance access to your hotel services</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isMobileMenuOpen: false,
      isProductOpen: false,
      isSolutionsOpen: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
      if (this.isMobileMenuOpen) {
        this.isProductOpen = false
        this.isSolutionsOpen = false
      }
    },
    toggleProductMenu() {
      this.isProductOpen = !this.isProductOpen
      if (this.isProductOpen) this.isSolutionsOpen = false
    },
    toggleSolutionsMenu() {
      this.isSolutionsOpen = !this.isSolutionsOpen
      if (this.isSolutionsOpen) this.isProductOpen = false
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
      this.isProductOpen = false
      this.isSolutionsOpen = false
    },
    onDocumentClick() {
      // Close only the desktop product menu on outside click
      this.isProductOpen = false
      this.isSolutionsOpen = false
    },
  },
  mounted() {
    document.addEventListener('click', this.onDocumentClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.onDocumentClick)
  },
}
</script>
