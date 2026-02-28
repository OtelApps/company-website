<template>
  <div class="relative min-h-screen bg-white font-sans antialiased">
    <div class="absolute top-0 left-0 w-full h-[35%] md:h-[800px] lg:h-[600px] bg-[#383e42] z-0"></div>

    <main class="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8">
      <article class="flex flex-col lg:flex-row min-h-screen lg:items-start pt-12 lg:pt-24">
        <section class="text-white w-full lg:w-1/2 px-4 md:px-10 lg:px-16 mb-12 lg:mb-0">
          <div class="max-w-2xl">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Kontaktujte nás
            </h1>
            <p class="text-lg md:text-xl text-gray-200 leading-relaxed">
              Máte otázky? My máme odpovědi (a nadšení pro hotelové inovace k tomu). Neváhejte se na
              nás obrátit s jakýmkoliv dotazem, technickým detailem nebo vizí, kterou chcete
              probrat.
            </p>
          </div>
        </section>

        <!-- Right side - Dark Grey Background with Form -->
        <section class="py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 lg:w-1/2 flex items-center">
          <div class="w-full max-w-2xl mx-auto">
            <div
              class="w-full bg-white rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 border-1 border-[#383E42]"
            >
              <form action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
                <input
                  type="hidden"
                  name="access_key"
                  value="5ef8b433-289a-4ea3-8a47-e122e68c3d6d"
                />
                <!-- First Name and Last Name side by side -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="Jmeno"
                      type="text"
                      placeholder="Jméno *"
                      pattern="[A-Za-zÁ-Žá-ž]+"
                      title="Zadej pouze písmena"
                      class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      name="Prijmeni"
                      type="text"
                      placeholder="Příjmení *"
                      pattern="[A-Za-zÁ-Žá-ž]+"
                      title="Zadej pouze písmena"
                      class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                      required
                    />
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <input
                    name="Email"
                    type="email"
                    placeholder="Email *"
                    class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                    required
                  />
                </div>

                <!-- Country and Phone side by side -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      name="Zeme"
                      class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                      required
                    >
                      <option value="" disabled selected hidden>Země *</option>
                      <option value="Ceska republika">Česká republika</option>
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
                      pattern="^\+?[0-9]{7,15}$"
                      title="Zadejte telefonní číslo v mezinárodním formátu"
                      class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white"
                      required
                    />
                  </div>
                </div>

                <!-- Type of inquiry -->
                <div>
                  <select
                    name="Typ dotazu"
                    class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none appearance-none bg-white"
                    required
                  >
                    <option value="" disabled selected hidden>Typ dotazu *</option>
                    <option value="Prodej">Rád bych kontaktoval prodej</option>
                    <option value="Podpora">Rád bych kontaktoval podporu</option>
                    <option value="Admin">Rád bych kontaktoval administrátora</option>
                    <option value="Jine">Jiné</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"> Zpráva * </label>
                  <textarea
                    name="Zprava"
                    placeholder="Vaše zpráva"
                    rows="4"
                    class="w-full px-4 py-3 border-1 border-[#383E42] rounded-lg focus:ring-2 focus:ring-[#f5a623] focus:border-[#f5a623] outline-none bg-white resize-none"
                    required
                  ></textarea>
                </div>

                <!-- Checkboxes -->
                <div class="space-y-4">
                  <div class="flex items-start">
                    <input
                      name="Zasilani"
                      type="checkbox"
                      id="communications"
                      required
                      class="mt-1 h-4 w-4 text-[#f5a623] focus:ring-[#f5a623] border-black rounded"
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
                      class="mt-1 h-4 w-4 text-[#f5a623] focus:ring-[#f5a623] border-black rounded"
                      checked
                      required
                    />
                    <label for="terms" class="ml-3 text-sm text-gray-700">
                      Příjmám
                      <a href="#" class="text-black underline font-semibold">Obchodní podmínky</a>
                      a
                      <a href="#" class="text-black underline font-semibold"
                        >Zásady ochrany osobních údajů</a
                      >
                      <span class="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full sm:w-[75%] lg:w-[50%] bg-[#ffa500] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  Odeslat
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
