<template>
  <main class="bg-white">
    <!-- Split Layout: Left Dark, Right White with Form -->
    <article class="flex flex-col lg:flex-row min-h-screen">
      <!-- Left side - Dark Grey Background with Text -->
      <section class="bg-[#383e42] text-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-16 lg:w-1/2 flex items-start">
        <div class="max-w-2xl w-full">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            Flexibilní cenotvorba, která se přizpůsobí vašim potřebám
          </h1>

          <div class="space-y-4 md:space-y-6">
            <h3 class="text-base sm:text-lg font-semibold">Rádi pro vás připravíme návrh na míru.</h3>
            <p class="text-sm sm:text-base">
              Pojďme společně vytvořit řešení, které bude dokonale ladit s vizí vašeho hotelu a podpoří vaši jedinečnost.
              Každý hotel má svou unikátní DNA a my se už teď těšíme, až tu vaši propojíme s technologiemi Otel Apps.
            </p>
          </div>
        </div>
      </section>

      <!-- Right side - Dark Grey Background with Form -->
      <section class="bg-[#383e42] py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 lg:w-1/2 flex items-center">
        <div class="w-full max-w-2xl mx-auto">
          <div
            class="w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 border-2 border-[#383E42]"
          >
            <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
              <input type="hidden" name="access_key" value="d963ebcc-55d8-45cd-aa4a-410e51d23ef8">
              <!-- First Name and Last Name side by side -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="Jmeno"
                    type="text"
                    placeholder="Jméno *"
                    class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                    required
                  />
                  <input
                    name="Prijmeni"
                    type="text"
                    placeholder="Příjmení *"
                    class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#ffa500] focus:border-[#ffa500] outline-none"
                    required
                  />
              </div>

              <!-- Work Email -->
                <input
                  name="Email"
                  type="email"
                  placeholder="Pracovní email *"
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
                    <option value="" disabled selected hidden>Země *</option>
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
                  <option value="" disabled selected hidden>Pracovní titul *</option>
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
                  class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                  required
                >
                <option value="" disabled selected hidden>Typ nemovitosti *</option>
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
                Získat nacenění
              </button>
            </form>
          </div>
        </div>
      </section>
    </article>
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