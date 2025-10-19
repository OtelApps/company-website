<script setup>
import { ref } from 'vue'

const activeButton = ref('f&b') // Default active button
</script>

<template>
  <!-- Main Content -->
  <main class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
    <section>
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Section - Text Content -->
        <div class="space-y-6 sm:space-y-8">
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Transforming Hotel
            <br />
            Experiences with
            <br />
            Innovative Software
          </h1>

          <p class="text-base sm:text-lg text-gray-700 leading-relaxed">
            Our cutting-edge mobile application empowers hotel guests to access essential services
            at their fingertips, enhancing their stay. With seamless integration for receptionists,
            we streamline operations and elevate guest satisfaction.
          </p>

          <button
            class="w-12/12 sm:w-auto mx-auto sm:mx-0 bg-white text-black border border-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold cursor-pointer"
          >
            Book a demo
          </button>
        </div>

        <!-- Right Section - Image -->
        <div class="flex justify-center lg:justify-start mt-8 lg:mt-0">
          <img
            src="../assets/home/image1.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Hotel app mockup"
          />
        </div>
      </div>
    </section>

    <!-- Centered Half Width Image Section with Text Overlay -->
    <section
      class="relative w-screen left-1/2 -translate-x-1/2 flex justify-center mt-16 sm:mt-20 lg:mt-24 min-h-[681px] sm:min-h-[440px] lg:min-h-[560px]"
    >
      <div class="relative w-full sm:w-4/5 md:w-3/4 lg:w-2/3 h-full">
        <img
          src="../assets/home/analytics.png"
          class="w-full h-auto object-cover translate-y-[40%] sm:translate-y-0"
          alt="Analytics dashboard"
        />
      </div>

      <!-- Text Overlay with full-width semi-transparent background (fills the section) -->
      <div class="absolute inset-0 bg-black/70 flex items-center justify-center">
        <div class="text-center text-white w-full px-4 sm:px-6 lg:px-8">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4"
          >
            Increase your sales and
            <br />
            customer experience
          </h2>
          <p class="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Increase your turnover thanks to a simple and fast ordering system
            <br />
            via our mobile app. Offer all your services conveniently on your
            <br />
            customer's mobile phone.
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20 lg:py-24">
        <!-- Left Section - Image -->
        <div class="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src="../assets/home/image2.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Mobile app interface"
          />
        </div>

        <!-- Right Section - Text Content -->
        <div class="order-1 lg:order-2 space-y-6 sm:space-y-8">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            All your services, just a tap away
          </h2>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              @click="activeButton = 'f&b'"
              :class="[
                'flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer',
                activeButton === 'f&b'
                  ? 'bg-[#ffa500] text-white border-2 border-black'
                  : 'border border-gray-900 text-gray-900 bg-white hover:bg-gray-50',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              F&B Ordering
            </button>

            <button
              @click="activeButton = 'requests'"
              :class="[
                'flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors cursor-pointer',
                activeButton === 'requests'
                  ? 'bg-[#ffa500] text-white border-2 border-black'
                  : 'border border-gray-900 text-gray-900 bg-white hover:bg-gray-50',
              ]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              Requests
            </button>
          </div>

          <!-- Dynamic Content based on active button -->
          <div v-if="activeButton === 'f&b'" class="space-y-4 sm:space-y-6">
            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900">Digital Menus</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1">
                  Interactive and easily accessible menus for your restaurants.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900">Customized orders</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1">
                  Guests can add specific details to their requests if needed.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900">Room Service</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1">
                  Guests can order food and drinks using their phones from the comfort of their
                  rooms.
                </p>
              </div>
            </div>
          </div>

          <div v-if="activeButton === 'requests'" class="space-y-4 sm:space-y-6">
            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900">Amenities</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1">
                  Guests can request extra room amenities anytime, from a toothbrush to a pillow or
                  a hairdryer.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900">Issues</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1">
                  In the event of a malfunctioning facility within the room, guests can report it
                  through the app.
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-3">
              <div
                class="h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-1"
              >
                <div class="h-2 w-2 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 class="text-base sm:text-lg font-semibold text-gray-900">Concierge Chat</h3>
                <p class="text-sm sm:text-base text-gray-600 mt-1">
                  Provide a more personalized service by adding a new communication channel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Staff operations section -->
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Text -->
        <div>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Streamline your staff
            <br />
            operations
          </h2>

          <div class="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <!-- Feature 1 -->
            <div class="flex items-start space-x-4">
              <div
                class="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                  />
                </svg>
              </div>
              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-semibold text-gray-900">
                  Keep requests under control
                </h3>
                <p class="text-sm text-gray-600 mt-1 sm:mt-2">
                  Receive your guests' requests immediately and manage them more efficiently.
                </p>
              </div>
            </div>

            <!-- Feature 2 -->
            <div class="flex items-start space-x-4">
              <div
                class="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  class="h-4 w-4 sm:h-5 sm:w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                  />
                </svg>
              </div>
              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-semibold text-gray-900">
                  Update your services in real time
                </h3>
                <p class="text-sm text-gray-600 mt-1 sm:mt-2">
                  Load and update information about everything in your hotel in real time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="../assets/home/image3.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Staff operations"
          />
        </div>
      </div>
    </section>
    <!-- Feedback section: left image, right text -->
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Image -->
        <div class="flex justify-center lg:justify-start order-2 lg:order-1">
          <img
            src="../assets/home/image4.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Feedback analytics"
          />
        </div>

        <!-- Right: Text -->
        <div class="order-1 lg:order-2">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Get immediate feedback
            <br />
            when it matters most
          </h2>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 sm:mt-6">
            Transform a bad experience into a great one by getting real-time quantitative and
            qualitative feedback about each of your services.
          </p>
        </div>
      </div>
    </section>
    <!-- Branded guest experience: left text, right image -->
    <section class="py-16 sm:py-20 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Text -->
        <div>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Deliver a guest experience
            <br />
            that feels truly yours
          </h2>
          <p class="text-base sm:text-lg text-gray-700 leading-relaxed mt-4 sm:mt-6">
            Forget generic apps. Give your guests a fully branded experience that reflects your
            hotel's identity and adapts to their preferences.
          </p>

          <div class="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h3 class="text-sm sm:text-base font-bold text-gray-900">Branded look & feel</h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                Quickly respond to guest needs with organized request tracking and easy
                communication.
              </p>
            </div>

            <div>
              <h3 class="text-sm sm:text-base font-bold text-gray-900">Showcase top services</h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                Gain valuable insights into guest preferences and enhance service quality.
              </p>
            </div>

            <div class="sm:col-span-2">
              <h3 class="text-sm sm:text-base font-bold text-gray-900">
                Personalized for every guest
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                Quickly respond to guest needs with organized request tracking and easy
                communication.
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img
            src="../assets/home/image5.png"
            class="max-w-full h-auto w-full lg:max-w-none"
            alt="Branded guest experience"
          />
        </div>
      </div>
    </section>
    <section class="py-16 sm:py-20 lg:py-24 bg-white">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Transform Your Hotel Experience
            <br />
            with Our Software
          </h2>
          <p class="mt-4 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            Our innovative software enhances hotel operations, ensuring seamless service for guests.
            <br />
            Experience increased efficiency and satisfaction like never before.
          </p>
        </div>

        <div class="mt-12 sm:mt-16 grid gap-8 sm:gap-12 md:grid-cols-3">
          <!-- Feature 1 -->
          <div class="text-center">
            <div
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                />
              </svg>
            </div>
            <h3 class="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900">
              Increased Efficiency for Hotel Staff
            </h3>
            <p class="mt-2 sm:mt-3 text-sm text-gray-600">
              Streamline daily tasks and reduce response times.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="text-center">
            <div
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                />
              </svg>
            </div>
            <h3 class="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900">
              Enhanced Guest Experience and Satisfaction
            </h3>
            <p class="mt-2 sm:mt-3 text-sm text-gray-600">
              Delight guests with personalized services at their fingertips.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="text-center">
            <div
              class="mx-auto h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="h-5 w-5 sm:h-6 sm:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 16V8a2 2 0 0 0-1.105-1.789l-7-3.5a2 2 0 0 0-1.79 0l-7 3.5A2 2 0 0 0 3 8v8a2 2 0 0 0 1.105 1.789l7 3.5a2 2 0 0 0 1.79 0l7-3.5A2 2 0 0 0 21 16Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.27 6.96 12 11l8.73-4.04M12 22V11"
                />
              </svg>
            </div>
            <h3 class="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-gray-900">
              Streamlined Operations for Maximum Productivity
            </h3>
            <p class="mt-2 sm:mt-3 text-sm text-gray-600">
              Optimize workflows and improve overall hotel management.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
