(ns frontend.components.input)

(defn view
  [props]
  (let [{:keys [icon type placeholder on-change value]} props]
    [:div {:className "relative mb-6"}
     [:div {:className "absolute inset-y-0 left-0 flex 
                          items-center pl-3 pointer-events-none"}
      [:> icon {:className "size-5 text-orange-500"}]]
     [:input
      {:placeholder placeholder
       :value       value
       :onChange    on-change
       :type        type
       :className   "w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-100 rounded-lg 
                           border border-gray-700 focus:border-orange-500 
                           focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400 
                           transition duration-200"}]]))
