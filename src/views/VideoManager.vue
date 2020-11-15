<template>
  <div class="mt-4 margin-10">
    <div>
      <h2 class="text-lg text-gray-900 font-semibold capitalize">Add Video</h2>
      <p class="text-gray-600">Choose the url and information to add.</p>

      <form>
        <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label class="text-black-700" for="videoName">Video Name</label>
            <input
              class="form-input border-gray-600 w-full mt-2 mb-2 rounded-md focus:border-indigo-700"
              type="text"
              placeholder="Video name"
            />

            <label class="text-black-700" for="videoLength">Video Length</label>
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
        </div>
      </form>
    </div>

    <div>
      <button
        @click="open = true"
        class="mt-4 px-10 py-1 bg-indigo-900 text-white rounded-md text-sm hover:bg-indigo-700"
      >
        Choose Video
      </button>

      <div
        :class="`modal ${
          !open && 'opacity-0 pointer-events-none'
        } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
      >
        <div
          class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        ></div>

        <div
          class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
        >
          <div
            class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
          >
            <svg
              class="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              />
            </svg>
            <span class="text-sm">(Esc)</span>
          </div>

          <!-- Add margin if you want to see some of the overlay behind the modal-->
          <div class="modal-content py-4 text-left px-6">
            <!--Title-->
            <div class="flex justify-between items-center pb-3">
              <p class="text-2xl font-bold">Choose your video</p>
              <div
                class="modal-close cursor-pointer z-50"
                @click="open = false"
              >
                <svg
                  class="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                  />
                </svg>
              </div>
            </div>

            <!--Body-->
            <div>
              <label class="text-black-700 ml-1" for="videoURL"
                >Insert Video URL</label
              >
              <input
                class="form-input border-gray-600 w-full mt-3 rounded-md focus:border-indigo-700"
                type="text"
                placeholder="Video URL"
              />
            </div>

            <p class="text-red-700 textsize-lg mt-5 ml-1 mb-4">OR</p>

            <div class="">
              <p>You can simply click this button to upload a MP4</p>
              <div class="flex justify-: auto pt-2"></div>
              <button
                class="mt-5 px-20 py-2 bg-indigo-700 text-white rounded-md text-sm hover:bg-indigo-700"
              >
                Upload MP4
              </button>
            </div>

            <div class="mt-5 text-gray-700 text-sm">
              <p>Chosen mp4/URL</p>
            </div>

            <!--Footer-->
            <div class="flex justify-end pt-3">
              <button
                @click="open = false"
                class="px-6 py-3 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
              >
                Cancel
              </button>
              <b-button
                @click="open = false"
                class="px-6 py-3 bg-indigo-600 rounded-md text-white font-medium tracking-wide hover:bg-indigo-500"
              >
                Confirm
              </b-button>
            </div>
          </div>
        </div>
      </div>
      <p class="text-gray-600 border rounded-md py-1 mt-5"> Chosen URL/Filename </p>
    </div>

    <button
      class="mt-5 px-20 py-1 bg-indigo-900 text-white rounded-md text-sm hover:bg-indigo-700"
    >
      Save
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useTableData } from "../hooks/useTableData";

export default defineComponent({
  setup() {
    const { video } = useTableData();
    const open = ref(false);
    return {
      video,
      open,
    };
  },
});
</script>