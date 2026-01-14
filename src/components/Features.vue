<template>
  <section class="py-16">
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left side - Image -->
        <div class="flex justify-center lg:justify-start">
          <img :src="imageSrc" :alt="imageAlt" class="max-w-full h-auto" />
        </div>

        <!-- Right side - Features -->
        <div class="space-y-6">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            {{ title }}
          </h2>

          <p class="text-lg text-gray-600 mb-8">
            {{ description }}
          </p>

          <div class="space-y-4">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-start space-x-3"
            >
              <div class="flex-shrink-0 mt-1">
                <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <p class="text-gray-600">
                  <strong>{{ feature.title }}</strong
                  >{{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: 'Feature illustration',
    },
    title: {
      type: String,
      default: 'Powerful Features',
    },
    description: {
      type: String,
      default:
        'From customizable questions to a centralized inbox, our tool is equipped with everything you need for effective feedback management.',
    },
    features: {
      type: Array,
      required: true,
      validator: (features) => {
        return features.every(
          (feature) =>
            feature && typeof feature.title === 'string' && typeof feature.description === 'string',
        )
      },
    },
  },
}
</script>
