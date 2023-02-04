import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const App = () => {
  return (
    <div className="min-h-screen p-4 space-y-4 bg-white dark:bg-zinc-900">
      <div className="flex items-center justify-center gap-x-2">
        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />

        <span className="text-lg font-medium text-gray-900 dark:text-zinc-100">
          Notifications
        </span>

        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />
      </div>

      <div className="flex items-center justify-center gap-x-2">
        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />

        <span className="text-sm font-medium text-gray-600 dark:text-zinc-400">
          Today
        </span>

        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />
      </div>

      <div className="flex items-center justify-center gap-x-2">
        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />

        <button className="px-4 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-sm font-semibold text-gray-700 dark:text-zinc-300 shadow-sm rounded-lg transition-colors">
          Add
        </button>

        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />
      </div>

      <div className="flex items-center justify-center gap-x-2">
        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />

        <div className="flex">
          <button className="px-3 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-l-lg transition-colors">
            <ArrowSmallLeftIcon className="h-4 w-4 text-gray-500 dark:text-zinc-400 stroke-2" />
          </button>

          <button className="px-3 py-2.5 border-t border-b border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
            <PlusIcon className="h-4 w-4 text-gray-500 dark:text-zinc-400 stroke-2" />
          </button>

          <button className="px-3 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-r-lg transition-colors">
            <ArrowSmallRightIcon className="h-4 w-4 text-gray-500 dark:text-zinc-400 stroke-2" />
          </button>
        </div>

        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />
      </div>

      <div className="flex items-center justify-center gap-x-2">
        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />

        <div className="flex">
          <button className="px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 text-sm font-semibold text-gray-700 dark:text-zinc-300 rounded-l-lg transition-colors">
            View all
          </button>

          <button className="px-4 py-2.5 border-t border-b border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 text-sm font-semibold text-gray-700 dark:text-zinc-300 transition-colors">
            Active
          </button>

          <button className="px-4 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 text-sm font-semibold text-gray-700 dark:text-zinc-300 rounded-r-lg transition-colors">
            Inactive
          </button>
        </div>

        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />
      </div>

      <div className="flex items-center justify-center gap-x-2">
        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />

        <button className="px-3 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
          <PlusIcon className="h-4 w-4 text-gray-700 dark:text-zinc-300 stroke-2" />
        </button>

        <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-700" />
      </div>

      <div className="py-16 space-y-4">
        <div className="flex items-center justify-center py-2.5 border-t border-b dark:border-zinc-700">
          <span className="text-lg font-medium text-gray-900 dark:text-zinc-100">
            Notifications
          </span>
        </div>

        <div className="flex items-center justify-center py-2.5 border-t border-b dark:border-zinc-700">
          <span className="text-sm font-medium text-gray-600 dark:text-zinc-400">
            Today
          </span>
        </div>

        <div className="flex items-center justify-center py-2.5 border-t border-b dark:border-zinc-700">
          <button className="px-4 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-sm font-semibold text-gray-700 dark:text-zinc-300 shadow-sm rounded-lg transition-colors">
            Add
          </button>
        </div>

        <div className="flex items-center justify-center py-2.5 border-t border-b dark:border-zinc-700">
          <div className="flex">
            <button className="px-3 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-l-lg transition-colors">
              <ArrowSmallLeftIcon className="h-4 w-4 text-gray-500 dark:text-zinc-400 stroke-2" />
            </button>

            <button className="px-3 py-2.5 border-t border-b border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
              <PlusIcon className="h-4 w-4 text-gray-500 dark:text-zinc-400 stroke-2" />
            </button>

            <button className="px-3 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-r-lg transition-colors">
              <ArrowSmallRightIcon className="h-4 w-4 text-gray-500 dark:text-zinc-400 stroke-2" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center py-2.5 border-t border-b dark:border-zinc-700">
          <div className="flex">
            <button className="px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 text-sm font-semibold text-gray-700 dark:text-zinc-300 rounded-l-lg transition-colors">
              View all
            </button>

            <button className="px-4 py-2.5 border-t border-b border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 text-sm font-semibold text-gray-700 dark:text-zinc-300 transition-colors">
              Active
            </button>

            <button className="px-4 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800 text-sm font-semibold text-gray-700 dark:text-zinc-300 rounded-r-lg transition-colors">
              Inactive
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center py-2.5 border-t border-b dark:border-zinc-700">
          <button className="px-3 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-lg transition-colors">
            <PlusIcon className="h-4 w-4 text-gray-700 dark:text-zinc-300 stroke-2" />
          </button>
        </div>
      </div>

      <div className="pt-16 space-y-4">
        <div className="flex items-center justify-center py-2.5 bg-gray-50 dark:bg-zinc-800 rounded-lg">
          <span className="text-lg font-medium text-gray-900 dark:text-zinc-100">
            Notifications
          </span>
        </div>

        <div className="flex items-center justify-center py-2.5 bg-gray-50 dark:bg-zinc-800 rounded-lg">
          <span className="text-sm font-medium text-gray-600 dark:text-zinc-400">
            Today
          </span>
        </div>

        <div className="flex items-center justify-center py-2.5 bg-gray-50 dark:bg-zinc-800 rounded-lg">
          <button className="px-4 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 text-sm font-semibold text-gray-700 dark:text-zinc-300 shadow-sm rounded-lg transition-colors">
            Add
          </button>
        </div>

        <div className="flex items-center justify-center py-2.5 bg-gray-50 dark:bg-zinc-800 rounded-lg">
          <div className="flex">
            <button className="px-3 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 rounded-l-lg transition-colors">
              <ArrowSmallLeftIcon className="h-4 w-4 text-gray-500 dark:text-zinc-400 stroke-2" />
            </button>

            <button className="px-3 py-2.5 border-t border-b border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors">
              <PlusIcon className="h-4 w-4 text-gray-500 dark:text-zinc-400 stroke-2" />
            </button>

            <button className="px-3 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 rounded-r-lg transition-colors">
              <ArrowSmallRightIcon className="h-4 w-4 text-gray-500 dark:text-zinc-400 stroke-2" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center py-2.5 bg-gray-50 dark:bg-zinc-800 rounded-lg">
          <div className="flex">
            <button className="px-4 py-2.5 bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600 text-sm font-semibold text-gray-700 dark:text-zinc-300 rounded-l-lg transition-colors">
              View all
            </button>

            <button className="px-4 py-2.5 border-t border-b border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 text-sm font-semibold text-gray-700 dark:text-zinc-300 transition-colors">
              Active
            </button>

            <button className="px-4 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-700 text-sm font-semibold text-gray-700 dark:text-zinc-300 rounded-r-lg transition-colors">
              Inactive
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center py-2.5 bg-gray-50 dark:bg-zinc-800 rounded-lg">
          <button className="px-3 py-2.5 border border-gray-300 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-700 rounded-lg transition-colors">
            <PlusIcon className="h-4 w-4 text-gray-700 dark:text-zinc-300 stroke-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
