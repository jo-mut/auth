(ns frontend.components.floating-shape
  (:require ["framer-motion" :refer [motion]]))

(defn view
  [{:keys [color size top left delay]}]
  [:> motion.div
   {:className (str "absolute rounded-full opacity-20 
                     blur-xl" color size)
    :style   (str top left)
    :animate {:y ["0%" "100%" "0%"]
              :x ["0%" "100%" "0%"]
              :rotate [0 360]}
    :transition {:duration  20
                 :ease      "linear"
                 :repeat    "infinity"
                 :delay     delay}
    :aria-hidden true}])