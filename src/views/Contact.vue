<template>
  <main class="bg-white">
    <!-- Top Section - Dark Grey Background -->
    <div
      class="bg-[#383e42] text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 relative lg:h-87.5"
    >
      <div class="max-w-screen-2xl mx-auto">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <!-- Left content -->
          <div class="max-w-2xl">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight">Contact Us</h1>

            <div class="space-y-4 md:space-y-6 text-base md:text-lg">
              <p>
                We will be happy to answer any questions you may have. Do not hesitate to contact
                our Otellapps team with any inquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Section - White Background with Hotel Logos -->
    <div class="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 relative">
      <div class="max-w-screen-2xl mx-auto">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div class="flex-1 mr-0 lg:mr-32"></div>

          <!-- Right side - Form overlaps both sections -->
          <div
            class="w-full lg:w-128 bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative z-10 mt-8 lg:-mt-84 border-3 border-black"
          >
            <form class="space-y-6">
              <!-- First Name and Last Name side by side -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name *"
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name *"
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                    required
                  />
                </div>
              </div>

              <!-- Email -->
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                  required
                />
              </div>

              <!-- Country and Phone side by side -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <select
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                    required
                  >
                    <option value="">Country *</option>
                    <option value="cz">Czech Republic</option>
                    <option value="sk">Slovakia</option>
                    <option value="de">Germany</option>
                    <option value="at">Austria</option>
                    <option value="pl">Poland</option>
                  </select>
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number *"
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                    required
                  />
                </div>
              </div>

              <!-- Type of inquiry -->
              <div>
                <select
                  class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                  required
                >
                  <option value="">Type of inquiry *</option>
                  <option value="sales">I'd like to contact sales</option>
                  <option value="support">I'd like to contact support</option>
                  <option value="admin">I'd like to contact admin</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"> Message * </label>
                <textarea
                  placeholder="Your message"
                  rows="4"
                  class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white resize-none"
                  required
                ></textarea>
              </div>

              <!-- Checkboxes -->
              <div class="space-y-4">
                <div class="flex items-start">
                  <input
                    type="checkbox"
                    id="communications"
                    class="mt-1 h-4 w-4 text-[#f5a623] focus:ring-[#f5a623] border-black rounded"
                  />
                  <label for="communications" class="ml-3 text-sm text-gray-700">
                    I agree to receive communications from OtelApps *
                  </label>
                </div>

                <div class="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    class="mt-1 h-4 w-4 text-[#f5a623] focus:ring-[#f5a623] border-black rounded"
                    checked
                    required
                  />
                  <label for="terms" class="ml-3 text-sm text-gray-700">
                    I accept the
                    <a href="#" class="text-gray-700 underline">Terms and Conditions</a>
                    and the
                    <a href="#" class="text-gray-700 underline">Privacy Policy</a>
                    *
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-[#f5a623] hover:bg-[#e0941a] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Custom dropdown arrow */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 40px;
}
</style>
