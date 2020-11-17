<template>
  <div class="mt-6">
    <div class="bg-white shadow rounded-md overflow-hidden my-6">
      <table class="text-left w-full border-collapse">
        <thead class="border-b">
          <tr>
            <th
              class="py-3 px-5 bg-indigo-600 font-medium uppercase text-sm text-gray-100"
            >
              Video Name
            </th>
            <th
              class="py-3 px-5 bg-indigo-700 font-medium uppercase text-sm text-gray-100"
            >
              Video Description
            </th>
            <th
              class="py-3 px-5 bg-indigo-800 font-medium uppercase text-sm text-gray-100"
            >
              Video Length
            </th>
            <th
              class="py-3 px-5 bg-indigo-900 font-medium uppercase text-sm text-gray-100"
            >
              Scheduled time
            </th>
            <th
              class="py-3 px-5 bg-indigo-900 font-medium uppercase text-sm text-gray-100"
            >
              Edit
            </th>
            <th
              class="py-3 bg-indigo-900 font-medium uppercase text-sm text-gray-100"
            >
              Broadcast
            </th>
            <th
              class="py-3 bg-indigo-900 font-medium uppercase text-sm text-gray-100"
            >
              Embeddation
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(i, index) in video"
            :key="index"
            class="hover:bg-gray-200"
          >
            <td class="py-4 px-6 border-b text-gray-700 text-lg">
              {{ i.videoName }}
            </td>
            <td class="py-4 px-6 border-b text-gray-500">
              {{ i.videoDescription }}
            </td>
            <td class="py-4 px-6 border-b text-gray-500">
              {{ i.videoLength }}
            </td>
            <td class="py-4 px-6 border-b text-gray-500">
              {{ i.videoBroadcastTime }}, {{ i.videoBroadcastDate }}
            </td>
            <td>
              <div>
                <button
                  @click="openEdit = true"
                  class="mt-1 mb-1 px-6 py-3 bg-indigo-500 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
                >
                  Edit
                </button>

                <div
                  :class="`modal ${
                    !openEdit && 'opacity-0 pointer-events-none'
                  } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
                >
                  <div
                    class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
                  ></div>

                  <div
                    class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
                  >
                    <div class="modal-content py-4 text-left px-6">
                      <!--Body-->
                      <div>
                        <label class="text-black-700" for="videoName"
                          >Video Name</label
                        >
                        <input
                          class="form-input border-gray-600 w-full mt-2 mb-2 rounded-md focus:border-indigo-700"
                          type="text"
                          placeholder="Video name"
                        />

                        <label class="text-black-700" for="videoLength"
                          >Video Length</label
                        >
                        <input
                          class="form-input border-gray-600 w-full mt-2 mb-2 rounded-md focus:border-indigo-700"
                          type="text"
                          placeholder="Video length in seconds"
                        />

                        <label class="text-black-700" for="videoDescription"
                          >Video Description</label
                        >
                        <input
                          class="form-input border-gray-600 w-full mt-2 mb-2 rounded-md focus:border-indigo-700"
                          type="text"
                          placeholder="Video description"
                        />
                      </div>
                      <div>
                        <label class="text-black-700 ml-1" for="videoURL"
                          >Insert Video URL</label
                        >
                        <input
                          class="form-input border-gray-600 w-full mt-3 rounded-md focus:border-indigo-700"
                          type="text"
                          placeholder="Current video URL"
                        />
                      </div>
                      <div class="">
                        <div class="flex justify-: auto pt-2"></div>
                        <button
                          class="mt-5 px-20 py-2 bg-indigo-700 text-white rounded-md text-sm hover:bg-indigo-700"
                        >
                          Choose a different Mp4
                        </button>
                      </div>

                      <div class="mt-5 mb-5 text-gray-700 text-sm">
                        <p>Chosen mp4/URL</p>
                      </div>

                      <!--Footer-->
                      <div class="flex justify-end pt-3">
                        <b-button
                          @click="openEdit = false"
                          class="px-6 mr-1 py-3 bg-indigo-700 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
                        >
                          Delete
                        </b-button>
                        <b-button
                          @click="openEdit = false"
                          class="px-6 mr-1 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
                        >
                          Save
                        </b-button>
                        <button
                          @click="openEdit = false"
                          class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div>
                <button
                  @click="openBroadcast = true"
                  class="mt-1 mb-1 px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
                >
                  Broadcast
                </button>

                <div
                  :class="`modal ${
                    !openBroadcast && 'opacity-0 pointer-events-none'
                  } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
                >
                  <div
                    class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
                  ></div>

                  <div
                    class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
                  >
                    <!-- Add margin if you want to see some of the overlay behind the modal-->
                    <div class="modal-content py-4 text-left px-6">
                      <!--Title-->

                      <!--Body-->
                      <div>
                        <label class="text-black-700" for="videoName"
                          >Broadcasting date</label
                        >
                        <input
                          class="form-input border-gray-600 w-full mt-2 mb-2 rounded-md focus:border-indigo-700"
                          type="date"
                          placeholder="Which date"
                        />
                        <label class="text-black-700" for="videoName"
                          >Broadcasting time</label
                        >
                        <input
                          class="form-input border-gray-600 w-full mt-2 mb-2 rounded-md focus:border-indigo-700"
                          type="time"
                          placeholder="What time?"
                        />
                      </div>

                      <!--Footer-->
                      <div class="flex justify-end pt-3">
                        <b-button
                          @click="openBroadcast = false"
                          class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
                        >
                          Schedule
                        </b-button>
                        <button
                          @click="openBroadcast = false"
                          class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td>
              <button
                @click="openGen = true"
                class="mt-1 mb-1 px-6 py-3 bg-indigo-800 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
              >
                Generate
              </button>

              <div
                :class="`modal ${
                  !openGen && 'opacity-0 pointer-events-none'
                } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
              >
                <div
                  class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
                ></div>

                <div
                  class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
                >
                  <!-- Add margin if you want to see some of the overlay behind the modal-->
                  <div class="modal-content py-4 text-left px-6">
                    <!--Title-->
                    <div class="flex justify-between items-center pb-3">
                      <p class="text-2xl font-bold">Video Embed Code</p>
                    </div>
                    <!--Body-->
                    <div>
                      <div>
                        <div
                          class="flex rounded-md bg-white py-4 px-2 overflow-x-auto"
                        >
                          <label>
                            <input
                              type="radio"
                              :class="`form-radio h-5 w-5 text-${c}-600`"
                              name="radio"
                            /><span class="ml-2 mr-2 text-gray-700"
                              >Just video</span
                            >
                          </label>
                          <label>
                            <input
                              type="radio"
                              :class="`form-radio h-5 w-5 text-${c}-600`"
                              name="radio"
                            /><span class="ml-2 text-gray-700"
                              >Video with live chat</span
                            >
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div
                        class="px-5 py-5 text-black text-sm bg-gray-500 rounded"
                      >
                        <v-text-field height="300">Embed code</v-text-field>
                      </div>
                      
                      <div
                        class="px-5 py-5 text-black text-sm bg-gray-500 rounded"
                      >
                        <v-text-field height="300">Embed code</v-text-field>
                      </div>
                      <!--Footer-->
                      <div class="flex justify-end pt-3">
                        <b-button
                          @click="openGen = false"
                          class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
                        >
                          Copy Code
                        </b-button>
                        <button
                          @click="openGen = false"
                          class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useTableData } from "../hooks/useTableData";

export default defineComponent({
  setup() {
    const { video } = useTableData();
    const openEdit = ref(false);
    const openBroadcast = ref(false);
    const openGen = ref(false);
    return {
      video,
      openEdit,
      openBroadcast,
      openGen,
    };
  },
});
</script>

<style >
</style>