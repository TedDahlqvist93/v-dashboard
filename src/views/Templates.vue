<template>
  <div>
    <div>
      <router-link
        class="flex items-center mt-4 py-2 px-6 border-l-4"
        :class="[$route.name === 'Blank' ? activeClass : inactiveClass]"
        to="/blank"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
          />
        </svg>

        <span class="mx-4">Blank</span>
      </router-link>
    </div>
    <div>
      <router-link
        class="flex items-center mt-4 py-2 px-6 border-l-4"
        :class="[$route.name === 'Card' ? activeClass : inactiveClass]"
        to="/card"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
          />
        </svg>

        <span class="mx-4">Card</span>
      </router-link>
    </div>
    <div>
      <router-link
        class="flex items-center mt-4 py-2 px-6 border-l-4"
        :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
        to="/dashboard"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
          />
        </svg>

        <span class="mx-4">Dashboard</span>
      </router-link>
    </div>
    <div>
      <router-link
        class="flex items-center mt-4 py-2 px-6 border-l-4"
        :class="[$route.name === 'Forms' ? activeClass : inactiveClass]"
        to="/forms"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
          />
        </svg>

        <span class="mx-4">Forms</span>
      </router-link>
    </div>
    <div>
      <router-link
        class="flex items-center mt-4 py-2 px-6 border-l-4"
        :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
        to="/modal"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
          />
        </svg>

        <span class="mx-4">Modal</span>
      </router-link>
    </div>
    <div>
      <router-link
        class="flex items-center mt-4 py-2 px-6 border-l-4"
        :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
        to="/tables"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
          />
        </svg>

        <span class="mx-4">Tables</span>
      </router-link>
    </div>
    <div>
      <router-link
        class="flex items-center mt-4 py-2 px-6 border-l-4"
        :class="[$route.name === 'UIElements' ? activeClass : inactiveClass]"
        to="/ui-elements"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
          />
        </svg>
        <span class="mx-4">UI Elements</span>
      </router-link>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import { useSidebar } from "../hooks/useSidebar";

export default defineComponent({
  setup() {
    const { isOpen } = useSidebar();
    const activeClass = ref(
      "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
    );
    const inactiveClass = ref(
      "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
    );

    return {
      isOpen,
      activeClass,
      inactiveClass,
    };
  },
});
</script>