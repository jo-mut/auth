(ns frontend.components.input)

(defn view
  [props]
  (let [{:keys [icon type placeholder on-change value on-key-down max-length ref key class-name]} props]
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
       :className   class-name}]]))
