<template>
  <div class="relative min-h-screen bg-white font-sans antialiased">
    <div class="absolute top-0 left-0 w-full h-[35%] md:h-[800px] lg:h-[600px] bg-[#383e42] z-0"></div>

    <main class="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8">
      <article class="flex flex-col lg:flex-row min-h-screen lg:items-start pt-12 lg:pt-24">
        <section class="text-white w-full lg:w-1/2 px-4 md:px-10 lg:px-16 mb-12 lg:mb-0">
          <div class="max-w-2xl">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {{ $t('bookDemo.title') }}
            </h1>
            <p class="text-lg md:text-xl text-gray-200 leading-relaxed">
              {{ $t('bookDemo.desc') }}
            </p>
          </div>
        </section>

        <!-- Right side - Dark Grey Background with Form -->
        <section
          class="py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 lg:w-1/2 flex items-center"
        >
          <div class="w-full max-w-2xl mx-auto">
            <div
              class="w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 border-1 border-[#383E42]"
            >
              <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
                <input
                  type="hidden"
                  name="access_key"
                  value="24cbe704-4b19-477a-8d0a-691ab2209960"
                />
                <!-- First Name and Last Name side by side -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="Jmeno"
                    type="text"
                    :placeholder="$t('bookDemo.form.name') + ' *'"
                    class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                    required
                  />
                  <input
                    name="Prijmeni"
                    type="text"
                    :placeholder="$t('bookDemo.form.surname') + ' *'"
                    class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                    required
                  />
                </div>

                <!-- Work Email -->
                <input
                  name="Email"
                  type="email"
                  :placeholder="$t('bookDemo.form.email') + ' *'"
                  class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                  required
                />

                <!-- Country and Phone number -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      name="Zeme"
                      class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                      required
                    >
                      <option value="" disabled selected hidden>{{ $t('bookDemo.form.country') }} *</option>
                      <option value="Ceska republika">{{ $t('bookDemo.form.countries[0]') }}</option>
                      <option value="Slovensko">{{ $t('bookDemo.form.countries[1]') }}</option>
                      <option value="Nemecko">{{ $t('bookDemo.form.countries[2]') }}</option>
                      <option value="Rakousko">{{ $t('bookDemo.form.countries[3]') }}</option>
                      <option value="Polsko">{{ $t('bookDemo.form.countries[4]') }}</option>
                    </select>
                  </div>
                  <div>
                    <input
                      name="Telefonni cislo"
                      type="tel"
                      :placeholder="$t('bookDemo.form.phone') + ' *'"
                      class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                      required
                    />
                  </div>
                </div>

                <!-- Job Title -->
                <div>
                  <select
                    name="Pracovni titul"
                    class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                    required
                  >
                    <option value="" disabled selected hidden>{{ $t('bookDemo.form.title') }} *</option>
                    <option value="Majitel / Zakladatel">{{ $t('bookDemo.form.titles[0]') }}</option>
                    <option value="Generalni reditel">{{ $t('bookDemo.form.titles[1]') }}</option>
                    <option value="IT / Technologicky manazer">{{ $t('bookDemo.form.titles[2]') }}</option>
                    <option value="Manazer trzeb">{{ $t('bookDemo.form.titles[3]') }}</option>
                    <option value="Manazer konzultant">{{ $t('bookDemo.form.titles[4]') }}</option>
                    <option value="Jine">{{ $t('bookDemo.form.titles[5]') }}</option>
                  </select>
                </div>

                <!-- Property Type -->
                <div>
                  <select
                    name="Typ nemovitosti"
                    class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                    required
                  >
                    <option value="" disabled selected hidden>{{ $t('bookDemo.form.property') }} *</option>
                    <option value="Hotel">{{ $t('bookDemo.form.properties[0]') }}</option>
                    <option value="Nezavisly hotel">{{ $t('bookDemo.form.properties[1]') }}</option>
                    <option value="Jine">{{ $t('bookDemo.form.properties[2]') }}</option>
                  </select>
                </div>

                <!-- Checkboxes -->
                <div class="space-y-4">
                  <div class="flex items-start">
                    <input
                      name="Sdeleni"
                      type="checkbox"
                      id="communications"
                      class="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      required
                    />
                    <label for="communications" class="ml-3 text-sm text-gray-700">
                      {{ $t('bookDemo.form.communication') }}
                      <span class="text-red-500">*</span>
                    </label>
                  </div>

                  <div class="flex items-start">
                    <input
                      name="Podminky"
                      type="checkbox"
                      id="terms"
                      class="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      checked
                      required
                    />
                    <label for="terms" class="ml-3 text-sm text-gray-700">
                      {{ $t('bookDemo.form.agreement[0]') }}
                      <a href="#" class="text-black underline font-semibold">{{ $t('bookDemo.form.agreement[1]') }}</a>
                      {{ $t('bookDemo.form.agreement[2]') }}
                      <a href="#" class="text-black underline font-semibold">
                        {{ $t('bookDemo.form.agreement[3]') }}
                      </a>
                      <span class="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full sm:w-[75%] lg:w-[50%] bg-[#ffa500] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  {{ $t('bookDemo.form.button') }}
                </button>
              </form>
            </div>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 40px;
}
</style>
