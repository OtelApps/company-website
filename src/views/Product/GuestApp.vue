<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Improve your guest<br />
              engagement
            </h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Your customers are already using their phones for everything. STAY gives them broad
              access to all your services: a great opportunity to increase their engagement with
              your hotel.
            </p>
            <button
              class="bg-[#f5a623] hover:bg-orange-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Book a Demo
            </button>
          </div>

          <!-- Right Section - Placeholder -->
          <div class="flex items-center justify-center">
            <div
              class="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-2xl font-medium"
            >
              #
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Features Section -->
    <section class="py-16 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your services will be accessible anytime, anywhere
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the key features that make the Otel Apps solution an indispensable tool for
            modern hotels.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Hotel Directory -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Hotel Directory</h3>
            <p class="text-gray-600">
              Provide a comprehensive overview of your hotel's information and amenities.
            </p>
          </div>

          <!-- Spa Booking -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Spa Booking</h3>
            <p class="text-gray-600">
              Allow guests to seamlessly reserve wellness services and treatments.
            </p>
          </div>

          <!-- Mobile Ordering -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Mobile Ordering</h3>
            <p class="text-gray-600">
              Enable guests to order food and beverages directly from their phones.
            </p>
          </div>

          <!-- Task Manager -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Task Manager</h3>
            <p class="text-gray-600">
              Efficiently manage and track guest requests for prompt service.
            </p>
          </div>

          <!-- Restaurant Reservations -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Restaurant Reservations</h3>
            <p class="text-gray-600">
              Let guests book a table at your hotel's restaurants with ease.
            </p>
          </div>

          <!-- Cabana Bookings -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Cabana Bookings</h3>
            <p class="text-gray-600">
              A simple way for guests to reserve poolside or beachside cabanas.
            </p>
          </div>

          <!-- Instant Feedback -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Instant Feedback</h3>
            <p class="text-gray-600">
              Gather real-time feedback to quickly address issues and improve service.
            </p>
          </div>

          <!-- Analytics & Insights -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Analytics & Insights</h3>
            <p class="text-gray-600">
              Make data-driven decisions with powerful analytics on guest behavior.
            </p>
          </div>

          <!-- And Many More -->
          <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">And Many More...</h3>
            <p class="text-gray-600">
              Concierge Chat, Service Reservations, Destination Guides, Upselling tools, Kids Club,
              and more.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Access Methods Section -->
    <section class="py-32">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Flexible Access for Every Guest
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide multiple ways for your guests to access the app, ensuring a seamless
            experience for everyone.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Web App -->
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Web App</h3>
            <p class="text-gray-600">
              No download required. Guests can access all features instantly through any web
              browser.
            </p>
          </div>

          <!-- Native iOS & Android App -->
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Native iOS & Android App</h3>
            <p class="text-gray-600">
              Offer a fully branded native app with exclusive features like Mobile Room Key for a
              premium experience.
            </p>
          </div>

          <!-- Embedded Integration -->
          <div
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:bg-[#f9fafb] transition-shadow text-center"
          >
            <div
              class="w-16 h-16 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-6"
            >
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">Embedded Integration</h3>
            <p class="text-gray-600">
              Already have any feature that our Ecosystem provides? We can tailor the whole
              solutions to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Why Choose Section -->
    <section class="py-32 bg-[#f4f4f4]">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-8">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Why Choose the Otel Apps Mobile solution?
            </h2>
            <p class="text-lg text-gray-700 leading-relaxed">
              We are dedicated to helping you create unforgettable guest experiences through
              innovative technology.
            </p>

            <!-- Benefits List -->
            <div class="space-y-6">
              <!-- Boost Efficiency -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Boost Efficiency</h3>
                  <p class="text-gray-600">
                    Automate requests and services to free up your staff for more meaningful guest
                    interactions.
                  </p>
                </div>
              </div>

              <!-- Embrace Digitization -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Embrace Digitization</h3>
                  <p class="text-gray-600">
                    Go paperless to save costs and appeal to environmentally conscious travelers.
                  </p>
                </div>
              </div>

              <!-- Enhance Guest Experience -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-6 h-6 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">
                    Enhance the Guest Experience
                  </h3>
                  <p class="text-gray-600">
                    Provide the convenience and personalization modern guests expect and deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Section - Video Placeholder -->
          <div class="flex items-center justify-center">
            <div
              class="w-full h-96 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 text-2xl font-medium"
            >
              #
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Explore More Section -->
    <section class="py-32">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore More from Otel Apps
          </h2>
          <p class="text-lg text-gray-700 max-w-3xl mx-auto">
            Our platform is built to integrate and grow with your hotel.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Integrations -->
          <div
            class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div
              class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Integrations</h3>
            <p class="text-gray-600">Connect with the tools you already use.</p>
          </div>

          <!-- Case Studies -->
          <div
            class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div
              class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Case Studies</h3>
            <p class="text-gray-600">See how other hotels succeed with Otel Apps.</p>
          </div>

          <!-- Blog & Resources -->
          <div
            class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div
              class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Blog & Resources</h3>
            <p class="text-gray-600">Get insights, tips, and product updates.</p>
          </div>

          <!-- Support Center -->
          <div
            class="bg-[#f9fafb] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div
              class="w-12 h-12 bg-[#f5a623] rounded-lg flex items-center justify-center mx-auto mb-4"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Support Center</h3>
            <p class="text-gray-600">Find documentation and get help.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
