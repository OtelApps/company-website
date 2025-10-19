<template>
  <div class="min-h-screen bg-white">
    <!-- Top Section - Dark Grey Background -->
    <div
      class="bg-[#383e42] text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 relative"
    >
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <!-- Left content -->
          <div class="max-w-2xl">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight">
              Flexible pricing tailored to your needs
            </h1>

            <div class="space-y-4 md:space-y-6 text-base md:text-lg">
              <p>We are excited to create a tailor-made proposal for you</p>
              <p>
                Our pricing model at OtelApps depends on several factors unique to your hotels. So
                We will need to communicate with You for precise pricing details
              </p>
            </div>
          </div>

          <!-- Right side - Empty space for form continuation -->
          <div class="w-96 hidden lg:block"></div>
        </div>
      </div>
    </div>

    <!-- Bottom Section - White Background with Hotel Logos -->
    <div class="bg-white py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 relative">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <!-- Left side - Hotel logos -->
          <div class="flex-1 mr-0 lg:mr-32">
            <p class="text-sm text-gray-600 mb-6 md:mb-8 text-center sm:text-left">
              Trusted by the best hotel chains in the world
            </p>

            <!-- Hotel logos grid -->
            <div
              class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 ml-2"
            >
              <div class="h-16 w-45 sm:w-35 bg-gray-100 rounded flex items-center justify-center">
                <span class="text-gray-400 text-sm">LOGO 1</span>
              </div>
              <div class="h-16 w-45 sm:w-35 bg-gray-100 rounded flex items-center justify-center">
                <span class="text-gray-400 text-sm">LOGO 2</span>
              </div>
              <div class="h-16 w-45 sm:w-35 bg-gray-100 rounded flex items-center justify-center">
                <span class="text-gray-400 text-sm">LOGO 3</span>
              </div>
              <div class="h-16 w-45 sm:w-35 bg-gray-100 rounded flex items-center justify-center">
                <span class="text-gray-400 text-sm">LOGO 4</span>
              </div>
              <div class="h-16 w-45 sm:w-35 bg-gray-100 rounded flex items-center justify-center">
                <span class="text-gray-400 text-sm">LOGO 5</span>
              </div>
              <div class="h-16 w-45 sm:w-35 bg-gray-100 rounded flex items-center justify-center">
                <span class="text-gray-400 text-sm">LOGO 6</span>
              </div>
              <div class="h-16 w-45 sm:w-35 bg-gray-100 rounded flex items-center justify-center">
                <span class="text-gray-400 text-sm">LOGO 7</span>
              </div>
              <div class="h-16 w-45 sm:w-35 bg-gray-100 rounded flex items-center justify-center">
                <span class="text-gray-400 text-sm">LOGO 8</span>
              </div>
            </div>
          </div>

          <!-- Right side - Form overlaps both sections -->
          <div
            class="w-full lg:w-128 bg-white rounded-3xl shadow-2xl p-6 md:p-8 relative z-10 mt-8 lg:-mt-84 border-3 border-black"
          >
            <form class="space-y-6">
              <!-- First Name and Last Name side by side -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                    required
                  />
                </div>
              </div>

              <!-- Work Email -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Work Email <span class="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Provide your corporate email account"
                  class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                  required
                />
              </div>

              <!-- Job Title -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Job title <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                  required
                />
              </div>

              <!-- Property Type -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Property Type <span class="text-red-500">*</span>
                </label>
                <select
                  class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none appearance-none bg-white"
                  required
                >
                  <option value="">What type of property do you represent?</option>
                  <option value="hotel">Hotel</option>
                  <option value="resort">Resort</option>
                  <option value="hostel">Hostel</option>
                  <option value="apartment">Apartment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <!-- Checkboxes -->
              <div class="space-y-4">
                <div class="flex items-start">
                  <input
                    type="checkbox"
                    id="communications"
                    class="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    required
                  />
                  <label for="communications" class="ml-3 text-sm text-gray-700">
                    I agree to receive communications from OtelApps
                    <span class="text-red-500">*</span>
                  </label>
                </div>

                <div class="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    class="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    checked
                    required
                  />
                  <label for="terms" class="ml-3 text-sm text-gray-700">
                    I accept the
                    <a href="#" class="text-black underline font-semibold">Terms and Conditions</a>
                    and the
                    <a href="#" class="text-black underline font-semibold">Privacy Policy</a>
                    <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full sm:w-[75%] lg:w-[50%] bg-[#ffa500] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Request demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookDemo',
}
</script>

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
