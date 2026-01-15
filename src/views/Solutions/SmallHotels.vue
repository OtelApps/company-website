<template>
  <main>
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Section - Text Content -->
          <div class="space-y-6">
            <h1 class="text-4xl lg:text-5xl leading-tight">Elevate the small hotel experience</h1>
            <p class="text-lg text-gray-700 leading-relaxed">
              Modernize your small hotel operations with Mews PMS. Reach the right guests, automate
              manual tasks and enjoy total flexibility to focus on running your property your way.
            </p>
            <button
              class="bg-[#f5a623] hover:bg-orange-400 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
            >
              Book a Demo
            </button>
          </div>

          <!-- Right Section - Placeholder -->
          <div class="flex items-center justify-end">
            <img :src="image1" alt="Small Hotels obrázek" class="w-9/10">
          </div>
        </div>
      </div>
    </section>

    <Advantages
      title="Performance, Simplicity, and Flexibility in One System"
      subtitle="Our Property Management System (PMS) simplifies daily operations, reduces manual
                  labor, and improves the guest journey from booking to check-out."
      :features="smallHotelsAdvantages"
      background-color="bg-[#f4f4f4]"
    />

    <!-- Key Functions Section -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <!-- Left visual placeholder -->
          <div class="lg:col-span-2 flex items-center justify-center">
            <img :src="image2" alt="Small Hotels obrázek" class="w-full">
          </div>

          <!-- Right content: title, subtitle, features -->
          <div class="lg:col-span-3">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Key Functions for Small Hotels
            </h2>
            <p class="text-gray-700 text-lg mb-8 max-w-2xl">
              A comprehensive toolkit to manage your property efficiently, leaving you more time for
              your guests.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              <div
                v-for="(item, index) in keyFunctions"
                :key="index"
                class="flex items-start space-x-4"
              >
                <div class="flex-shrink-0 mt-1">
                  <div class="w-7 h-7 rounded-lg bg-[#f5a623]/20 flex items-center justify-center">
                    <svg class="w-4 h-4 text-[#f5a623]" viewBox="0 0 20 20" fill="currentColor">
                      <path :d="item.icon" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p class="text-gray-700">
                    <span class="font-semibold text-gray-900">{{ item.title }}</span>
                    <span class="ml-1">{{ item.description }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HowItWorks
      title="Built for Simplicity and Flexibility"
      subtitle="Our cloud-native platform is intuitive and fully customizable to fit your needs. No technical expertise required."
      :steps="smallHotelsWork"
      :image="image3"
      image-alt="Small Hotels obrázek"
    />

    <Benefits
      title="The Impact on Your Operations"
      :items="smallHotelsBenefits"
      :rows="1"
      :columns="3"
    />
  </main>
</template>

<script>
import Advantages from '@/components/Advantages.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import image1 from '@/assets/solutions/SmallHotels/1.png'
import image2 from '@/assets/solutions/SmallHotels/2.png'
import image3 from '@/assets/solutions/SmallHotels/3.png'
import Benefits from '@/components/Benefits.vue'

export default {
  name: 'SmallHotels',
  components: {
    Advantages,
    HowItWorks,
    Benefits,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      smallHotelsAdvantages: [
        {
          title: 'Save Time',
          description: 'Automate repetitive tasks and free up your team to focus on guests.',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
        },
        {
          title: 'Better Control',
          description:
            'Manage reservations, rates, and housekeeping from a single, intuitive dashboard.',
          icon: 'M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z',
        },
        {
          title: 'Increase Revenue',
          description: 'Optimize pricing and offer add-ons to maximize profitability.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
        {
          title: 'Better Guest Experience',
          description: 'Faster check-ins, seamless payments, and direct communication.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
        {
          title: 'Faster Checkin-in/out',
          description: 'Offer self-service kiosks and mobile solutions for guest convenience.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
        {
          title: 'Automated Processes',
          description: 'From booking to housekeeping, streamline your entire workflow.',
          icon: 'M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z',
        },
      ],
      keyFunctions: [
        {
          title: 'Cloud-Native Access:',
          description: 'Manage your hotel from anywhere, anytime.',
          icon: 'M3 3h14a1 1 0 011 1v9a2 2 0 01-2 2H6l-3 3V4a1 1 0 011-1z',
        },
        {
          title: 'Rate Management:',
          description: 'Flexible pricing and automatic demand response.',
          icon: 'M4 13h12v2H4v-2zm0-4h12v2H4V9zm0-4h12v2H4V5z',
        },
        {
          title: 'Reservation Engine:',
          description: 'Drive direct bookings and offer add-ons.',
          icon: 'M2 5a2 2 0 012-2h12a2 2 0 012 2v10H2V5zm3 3h10v2H5V8z',
        },
        {
          title: 'Integrated Secure Payments:',
          description: 'Simple and secure transactions.',
          icon: 'M4 6h12v8H4V6zm2 2v4h8V8H6z',
        },
        {
          title: 'Reservation Management:',
          description: 'Timeline view, room assignment, and overview.',
          icon: 'M6 2h8v2H6V2zM4 6h12v10H4V6z',
        },
        {
          title: 'Housekeeping Management:',
          description: 'Real-time updates and smart scheduling.',
          icon: 'M3 10h14v2H3v-2zm0 4h14v2H3v-2z',
        },
        {
          title: 'Self-Service Solutions:',
          description: 'Kiosks and mobile check-in/out.',
          icon: 'M7 2h6v2H7V2zM5 6h10v10H5V6z',
        },
        {
          title: 'Reporting & Analytics:',
          description: 'Make data-driven decisions.',
          icon: 'M3 14h3V6H3v8zm5 0h3V2H8v12zm5 0h3V9h-3v5z',
        },
      ],
      smallHotelsWork: [
        {
          title: 'Easy to Learn',
          description: 'Intuitive interface, dashboards, and role-based training.',
        },
        {
          title: 'Extensive Customization',
          description: 'Connect with over 1000+ integrations and customize to your brand.',
        },
        {
          title: 'OTA Connection',
          description: 'Connect to distribution channels to manage all your bookings in one place.',
        },
      ],
      smallHotelsBenefits: [
        {
          title: 'Time Saved on Admin',
          description:
            'Automation of daily tasks leads to significant time savings for your staff.',
          iconText: '40%',
        },
        {
          title: 'Increased Conversion',
          description: 'Effortless ordering leads to more sales and higher average checks.',
          iconText: '15%',
        },
        {
          title: 'New Revenue Channels',
          description: 'Enable ordering from anywhere, not just the restaurant or bar.',
          iconText: '95%',
        },
      ],
    }
  },
}
</script>
