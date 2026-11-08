<script setup>
import FormError from '@/components/FormError.vue'
import FormSuccess from '@/components/FormSuccess.vue'
import { useWeb3Form } from '@/composables/useWeb3Form'

const { values, errors, status, honeypot, field, errorId, submit, startOver } = useWeb3Form({
  id: 'pricing',
  accessKey: 'd963ebcc-55d8-45cd-aa4a-410e51d23ef8',
  fields: {
    firstName: { name: 'Jmeno', type: 'name' },
    lastName: { name: 'Prijmeni', type: 'name' },
    email: { name: 'Email', type: 'email' },
    country: { name: 'Zeme', type: 'select' },
    phone: { name: 'Telefonni cislo', type: 'phone' },
    jobTitle: { name: 'Pracovni titul', type: 'select' },
    propertyType: { name: 'Typ nemovitosti', type: 'select' },
    communications: { name: 'Sdeleni', type: 'consent', required: false },
    terms: { name: 'Podminky', type: 'consent' },
  },
})
</script>

<template>
  <div class="relative min-h-screen bg-white font-sans antialiased">
    <div class="absolute top-0 left-0 w-full h-[40%] md:h-[800px] lg:h-[600px] bg-[#383e42] z-0"></div>

    <main class="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8">
      <article class="flex flex-col lg:flex-row min-h-screen lg:items-start pt-12 lg:pt-24">
        <section class="text-white w-full lg:w-1/2 px-4 md:px-10 lg:px-16 mb-12 lg:mb-0">
          <div class="max-w-2xl w-full">
            <h1
              class="text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight"
            >
              {{ $t('pricing.title') }}
            </h1>

            <div class="space-y-4 md:space-y-6">
              <h3 class="text-base sm:text-lg font-semibold">
                {{ $t('pricing.subtitle') }}
              </h3>
              <p class="text-sm sm:text-base">
                {{ $t('pricing.desc') }}
              </p>
            </div>
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
              <FormSuccess v-if="status === 'success'" @again="startOver" />

              <form v-else novalidate class="space-y-6" @submit.prevent="submit">
                <!-- Honeypot proti spamu – lidé ho nevidí, boti ho vyplní -->
                <input
                  v-model="honeypot"
                  type="checkbox"
                  name="botcheck"
                  class="hidden"
                  tabindex="-1"
                  autocomplete="off"
                  aria-hidden="true"
                />

                <!-- First Name and Last Name side by side -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      v-model="values.firstName"
                      v-bind="field('firstName')"
                      name="Jmeno"
                      type="text"
                      autocomplete="given-name"
                      :aria-label="$t('pricing.form.name')"
                      :placeholder="$t('pricing.form.name') + ' *'"
                      class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none bg-white"
                      required
                    />
                    <FormError :id="errorId('firstName')" :error="errors.firstName" />
                  </div>
                  <div>
                    <input
                      v-model="values.lastName"
                      v-bind="field('lastName')"
                      name="Prijmeni"
                      type="text"
                      autocomplete="family-name"
                      :aria-label="$t('pricing.form.surname')"
                      :placeholder="$t('pricing.form.surname') + ' *'"
                      class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none bg-white"
                      required
                    />
                    <FormError :id="errorId('lastName')" :error="errors.lastName" />
                  </div>
                </div>

                <!-- Work Email -->
                <div>
                  <input
                    v-model="values.email"
                    v-bind="field('email')"
                    name="Email"
                    type="email"
                    autocomplete="email"
                    :aria-label="$t('pricing.form.email')"
                    :placeholder="$t('pricing.form.email') + ' *'"
                    class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none bg-white"
                    required
                  />
                  <FormError :id="errorId('email')" :error="errors.email" />
                </div>

                <!-- Country and Phone number -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      v-model="values.country"
                      v-bind="field('country')"
                      name="Zeme"
                      :aria-label="$t('pricing.form.country')"
                      class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none appearance-none bg-white"
                      required
                    >
                      <option value="" disabled hidden>{{ $t('pricing.form.country') }} *</option>
                      <option value="Cesko">{{ $t('pricing.form.countries[0]') }}</option>
                      <option value="Slovensko">{{ $t('pricing.form.countries[1]') }}</option>
                      <option value="Nemecko">{{ $t('pricing.form.countries[2]') }}</option>
                      <option value="Rakousko">{{ $t('pricing.form.countries[3]') }}</option>
                      <option value="Polsko">{{ $t('pricing.form.countries[4]') }}</option>
                    </select>
                    <FormError :id="errorId('country')" :error="errors.country" />
                  </div>
                  <div>
                    <input
                      v-model="values.phone"
                      v-bind="field('phone')"
                      name="Telefonni cislo"
                      type="tel"
                      autocomplete="tel"
                      :aria-label="$t('pricing.form.phone')"
                      :placeholder="$t('pricing.form.phone') + ' *'"
                      class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none bg-white"
                      required
                    />
                    <FormError :id="errorId('phone')" :error="errors.phone" />
                  </div>
                </div>

                <!-- Job Title -->
                <div>
                  <select
                    v-model="values.jobTitle"
                    v-bind="field('jobTitle')"
                    name="Pracovni titul"
                    :aria-label="$t('pricing.form.title')"
                    class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none appearance-none bg-white"
                    required
                  >
                    <option value="" disabled hidden>{{ $t('pricing.form.title') }} *</option>
                    <option value="Majitel / Zakladatel">{{ $t('pricing.form.titles[0]') }}</option>
                    <option value="Generalni reditel">{{ $t('pricing.form.titles[1]') }}</option>
                    <option value="IT / Technologicky manazer">{{ $t('pricing.form.titles[2]') }}</option>
                    <option value="Manazer trzeb">{{ $t('pricing.form.titles[3]') }}</option>
                    <option value="Manazer konzultant">{{ $t('pricing.form.titles[4]') }}</option>
                    <option value="Jine">{{ $t('pricing.form.titles[5]') }}</option>
                  </select>
                  <FormError :id="errorId('jobTitle')" :error="errors.jobTitle" />
                </div>

                <!-- Property Type -->
                <div>
                  <select
                    v-model="values.propertyType"
                    v-bind="field('propertyType')"
                    name="Typ nemovitosti"
                    :aria-label="$t('pricing.form.property')"
                    class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none appearance-none bg-white"
                    required
                  >
                    <option value="" disabled hidden>{{ $t('pricing.form.property') }} *</option>
                    <option value="Hotel">{{ $t('pricing.form.properties[0]') }}</option>
                    <option value="Nezavisly hotel">{{ $t('pricing.form.properties[1]') }}</option>
                    <option value="Jine">{{ $t('pricing.form.properties[2]') }}</option>
                  </select>
                  <FormError :id="errorId('propertyType')" :error="errors.propertyType" />
                </div>

                <!-- Checkboxes -->
                <div class="space-y-4">
                  <div>
                    <div class="flex items-start">
                      <input
                        v-model="values.communications"
                        v-bind="field('communications')"
                        name="Sdeleni"
                        type="checkbox"
                        id="communications"
                        class="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label for="communications" class="ml-3 text-sm text-gray-700">
                        {{ $t('pricing.form.communication') }}
                      </label>
                    </div>
                  </div>

                  <div>
                    <div class="flex items-start">
                      <input
                        v-model="values.terms"
                        v-bind="field('terms')"
                        name="Podminky"
                        type="checkbox"
                        id="terms"
                        class="mt-1 h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        required
                      />
                      <label for="terms" class="ml-3 text-sm text-gray-700">
                        {{ $t('pricing.form.agreement[0]') }}
                        <a href="#" class="text-black underline font-semibold">{{ $t('pricing.form.agreement[1]') }}</a>
                        {{ $t('pricing.form.agreement[2]') }}
                        <router-link to="/Legal/GDPR" class="text-black underline font-semibold">
                          {{ $t('pricing.form.agreement[3]') }}
                        </router-link>
                        <span class="text-red-500">*</span>
                      </label>
                    </div>
                    <FormError :id="errorId('terms')" :error="errors.terms" />
                  </div>
                </div>

                <p
                  v-if="status === 'error'"
                  role="alert"
                  class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {{ $t('forms.failure') }}
                </p>

                <!-- Submit Button -->
                <button
                  type="submit"
                  :disabled="status === 'submitting'"
                  :aria-busy="status === 'submitting' ? 'true' : undefined"
                  class="w-full sm:w-[75%] lg:w-[50%] bg-[#ffa500] text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                >
                  {{ status === 'submitting' ? $t('forms.sending') : $t('pricing.form.button') }}
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
/* Custom dropdown arrow */
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 12px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-right: 40px;
}
</style>
