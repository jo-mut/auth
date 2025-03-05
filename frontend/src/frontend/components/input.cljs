(ns frontend.components.input)


(defn sub-type-styles [sub-type]
  (if (= sub-type :default)
    "w-full pl-10 pr-3 py-2  bg-gray-800 bg-opacity-100 rounded-lg 
     border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 
     text-white placeholder-gray-400 transition duration-200"
    "w-12 h-12 text-center justify-center text-2xl font-bold bg-gray-700 text-white
     border-2 border-gray-500 rounded-lg focus:border-green-500 focus:outline-none"))

(defn view
  [props]
  (let [{:keys [icon type placeholder on-change value on-key-down sub-type
                max-length ref key]} props]
    [:div {:className "relative mb-6"}
     [:div {:className "absolute inset-y-0 left-0 flex 
                          items-center pl-3 pointer-events-none"}
      (when icon
        [:> icon {:className "size-5 text-orange-500"}])]
     [:input
      {:key         key
       :max-length  max-length
       :on-key-down on-key-down
       :ref         ref
       :placeholder placeholder
       :value       value
       :onChange    on-change
       :type        type
       :className   (sub-type-styles sub-type)}]]))

