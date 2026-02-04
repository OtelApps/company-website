<template>
  <main class="bg-white">
    <!-- Top Section - Dark Grey Background -->
    <div
      class="bg-[#383e42] text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 relative"
    >
      <div class="max-w-screen-2xl mx-auto">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <!-- Left content -->
          <div class="max-w-2xl">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight">
              Flexibilní cenotvorba, která se přizpůsobí vašim potřebám
            </h1>

            <div class="space-y-4 md:space-y-6 text-base md:text-lg">
              <p>Rádi pro vás připravíme návrh na míru.</p>
              <p>
                Pojďme společně vytvořit řešení, které bude dokonale ladit s vizí vašeho hotelu a podpoří vaši jedinečnost.
                Každý hotel má svou unikátní DNA a my se už teď těšíme, až tu vaši propojíme s technologiemi Otel Apps.
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
      <div class="max-w-screen-2xl mx-auto">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <!-- Left side - Hotel logos -->
          <div class="flex-1 mr-0 lg:mr-32">
            <p class="text-sm text-gray-600 mb-6 md:mb-8 text-center sm:text-left hidden">
              Trusted by the best hotel chains in the world
            </p>

            <!-- Hotel logos grid -->
            <div
              class="hidden grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 ml-2"
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
            <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
              <input type="hidden" name="access_key" value="d963ebcc-55d8-45cd-aa4a-410e51d23ef8">
              <!-- First Name and Last Name side by side -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="Jmeno"
                    type="text"
                    placeholder="Jméno *"
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                    required
                  />
                  <input
                    name="Prijmeni"
                    type="text"
                    placeholder="Příjmení *"
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                    required
                  />
              </div>

              <!-- Work Email -->
                <input
                  name="Email"
                  type="email"
                  placeholder="Pracovní email *"
                  class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                  required
                />

              <!-- Country and Phone number -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <select
                    name="Zeme"
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                    required
                  >
                    <option value="">Země *</option>
                    <option value="Cesko">Česká republika</option>
                    <option value="Slovensko">Slovensko</option>
                    <option value="Nemecko">Německo</option>
                    <option value="Rakousko">Rakousko</option>
                    <option value="Polsko">Polsko</option>
                  </select>
                </div>
                <div>
                  <input
                    name="Telefonni cislo"
                    type="tel"
                    placeholder="Telefonní číslo *"
                    class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                    required
                  />
                </div>
              </div>

              <!-- Job Title -->
              <div>
                <select
                  name="Pracovni titul"
                  class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                  required
                >
                  <option value="">Pracovní titul *</option>
                  <option value="Majitel / Zakladatel">Majitel / Zakladatel</option>
                  <option value="Generalni reditel">Generální ředitel</option>
                  <option value="IT / Technologicky manazer">IT / Technologický manažer</option>
                  <option value="Manazer trzeb">Manažer tržeb</option>
                  <option value="Manazer konzultant">Manažer konzultant</option>
                  <option value="Jine">Jiné</option>
                </select>
              </div>

              <!-- Property Type -->
              <div>
                <select
                  name="Typ nemovitosti"
                  class="w-full px-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                  required
                >
                <option value="">Typ nemovitosti *</option>
                <option value="Hotel">Hotelový řetězec nebo skupina</option>
                <option value="Nezavisly hotel">Nezávislý hotel</option>
                <option value="Jine">Jiné (ne hotel ani hotelová skupina)</option>
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
                    Souhlasím se zasíláním sdělení od OtelApps
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
                    Příjmám
                    <a href="#" class="text-black underline font-semibold">Obchodní podmínky</a>
                    a
                    <a href="#" class="text-black underline font-semibold">Zásady ochrany osobních údajů</a>
                    <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full sm:w-[75%] lg:w-[50%] bg-[#ffa500] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Požádat o demo
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
