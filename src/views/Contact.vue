<script setup>
import FormError from '@/components/FormError.vue'
import FormSuccess from '@/components/FormSuccess.vue'
import { useWeb3Form } from '@/composables/useWeb3Form'

const { values, errors, status, honeypot, field, errorId, submit, startOver } = useWeb3Form({
  id: 'contact',
  accessKey: '5ef8b433-289a-4ea3-8a47-e122e68c3d6d',
  fields: {
    firstName: { name: 'Jmeno', type: 'name' },
    lastName: { name: 'Prijmeni', type: 'name' },
    email: { name: 'Email', type: 'email' },
    country: { name: 'Zeme', type: 'select' },
    phone: { name: 'Telefonni cislo', type: 'phone' },
    inquiryType: { name: 'Typ dotazu', type: 'select' },
    message: { name: 'Zprava', type: 'message' },
    communications: { name: 'Zasilani', type: 'consent', required: false },
    terms: { name: 'Podminky', type: 'consent' },
  },
})
</script>

<template>
  <div class="relative min-h-screen bg-white font-sans antialiased">
    <div class="absolute top-0 left-0 w-full h-[35%] md:h-[800px] lg:h-[600px] bg-[#383e42] z-0"></div>

    <main class="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8">
      <article class="flex flex-col lg:flex-row min-h-screen lg:items-start pt-12 lg:pt-24">
        <section class="text-white w-full lg:w-1/2 px-4 md:px-10 lg:px-16 mb-12 lg:mb-0">
          <div class="max-w-2xl">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {{ $t('contact.title') }}
            </h1>
            <p class="text-lg md:text-xl text-gray-200 leading-relaxed">
              {{ $t('contact.desc') }}
            </p>
          </div>
        </section>

        <!-- Right side - Dark Grey Background with Form -->
        <section class="py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-16 lg:w-1/2 flex items-center">
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
                      :aria-label="$t('contact.form.name')"
                      :placeholder="$t('contact.form.name') + ' *'"
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
                      :aria-label="$t('contact.form.surname')"
                      :placeholder="$t('contact.form.surname') + ' *'"
                      class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none bg-white"
                      required
                    />
                    <FormError :id="errorId('lastName')" :error="errors.lastName" />
                  </div>
                </div>

                <!-- Email -->
                <div>
                  <input
                    v-model="values.email"
                    v-bind="field('email')"
                    name="Email"
                    type="email"
                    autocomplete="email"
                    :aria-label="$t('contact.form.email')"
                    :placeholder="$t('contact.form.email') + ' *'"
                    class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none bg-white"
                    required
                  />
                  <FormError :id="errorId('email')" :error="errors.email" />
                </div>

                <!-- Country and Phone side by side -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      v-model="values.country"
                      v-bind="field('country')"
                      name="Zeme"
                      :aria-label="$t('contact.form.country')"
                      class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none appearance-none bg-white"
                      required
                    >
                      <option value="" disabled hidden>{{ $t('contact.form.country') }} *</option>
                      <option value="Ceska republika">{{ $t('contact.form.countries[0]') }}</option>
                      <option value="Slovensko">{{ $t('contact.form.countries[1]') }}</option>
                      <option value="Nemecko">{{ $t('contact.form.countries[2]') }}</option>
                      <option value="Rakousko">{{ $t('contact.form.countries[3]') }}</option>
                      <option value="Polsko">{{ $t('contact.form.countries[4]') }}</option>
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
                      :aria-label="$t('contact.form.phone')"
                      :placeholder="$t('contact.form.phone') + ' *'"
                      class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none bg-white"
                      required
                    />
                    <FormError :id="errorId('phone')" :error="errors.phone" />
                  </div>
                </div>

                <!-- Type of inquiry -->
                <div>
                  <select
                    v-model="values.inquiryType"
                    v-bind="field('inquiryType')"
                    name="Typ dotazu"
                    :aria-label="$t('contact.form.inquiry')"
                    class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none appearance-none bg-white"
                    required
                  >
                    <option value="" disabled hidden>{{ $t('contact.form.inquiry') }} *</option>
                    <option value="Prodej">{{ $t('contact.form.inquiries[0]') }}</option>
                    <option value="Podpora">{{ $t('contact.form.inquiries[1]') }}</option>
                    <option value="Admin">{{ $t('contact.form.inquiries[2]') }}</option>
                    <option value="Jine">{{ $t('contact.form.inquiries[3]') }}</option>
                  </select>
                  <FormError :id="errorId('inquiryType')" :error="errors.inquiryType" />
                </div>

                <!-- Message -->
                <div>
                  <label for="contact-message" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.message1') }} *
                  </label>
                  <textarea
                    id="contact-message"
                    v-model="values.message"
                    v-bind="field('message')"
                    name="Zprava"
                    :placeholder="$t('contact.form.message2') + ' *'"
                    rows="4"
                    class="w-full px-4 py-3 border-1 rounded-lg focus:ring-2 outline-none bg-white resize-none"
                    required
                  ></textarea>
                  <FormError :id="errorId('message')" :error="errors.message" />
                </div>

                <!-- Checkboxes -->
                <div class="space-y-4">
                  <div>
                    <div class="flex items-start">
                      <input
                        v-model="values.communications"
                        v-bind="field('communications')"
                        name="Zasilani"
                        type="checkbox"
                        id="communications"
                        class="mt-1 h-4 w-4 text-[#f5a623] focus:ring-[#f5a623] border-black rounded"
                      />
                      <label for="communications" class="ml-3 text-sm text-gray-700">
                        {{ $t('contact.form.communication') }}
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
                        class="mt-1 h-4 w-4 text-[#f5a623] focus:ring-[#f5a623] border-black rounded"
                        required
                      />
                      <label for="terms" class="ml-3 text-sm text-gray-700">
                        {{ $t('contact.form.agreement[0]') }}
                        <a href="#" class="text-black underline font-semibold">{{ $t('contact.form.agreement[1]') }}</a>
                        {{ $t('contact.form.agreement[2]') }}
                        <router-link to="/Legal/GDPR" class="text-black underline font-semibold">
                          {{ $t('contact.form.agreement[3]') }}
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
                  {{ status === 'submitting' ? $t('forms.sending') : $t('contact.form.button') }}
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
