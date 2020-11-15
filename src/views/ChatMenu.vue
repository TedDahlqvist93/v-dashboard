<template>
  <div>
    <div class="mt-4">
      <div class="mt-6">
        <div class="bg-white shadow rounded-md overflow-hidden my-6">
          <table class="text-left w-full border-collapse">
            <thead class="border-b">
              <tr>
                <th
                  class="py-3 px-5 bg-indigo-800 font-medium uppercase text-sm text-gray-100"
                >
                  Guest name
                </th>
                <th
                  class="py-3 px-5 bg-indigo-800 font-medium uppercase text-sm text-gray-100"
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(i, index) in guestData"
                :key="index"
                class="hover:bg-gray-200"
              >
                <td class="py-4 px-6 border-b text-lg">
                  {{ i.guestNickname }}
                </td>
                <td class="py-4 px-6 border-b text-lg">
                  {{ i.guestEmail }}
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";

import { useTableData } from "../hooks/useTableData";

export default defineComponent({
  setup() {
    const { guestData } = useTableData();
    return {
      guestData,
    };
  },
});
</script>

<style >
</style>