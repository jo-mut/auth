(ns frontend.pages.email-verification
  (:require
   ["react" :as react]
   ["framer-motion" :refer [motion]]
   [frontend.components.input :as input]))

(defn handle-on-change
  [input-refs code set-code index value]
  (let [new-code (assoc code index value)]
    (set-code new-code))
  ;; TODO: handle pasted code
  (when (and (not= value "") (< index 5))
    (when-let [next-input (aget (.-current input-refs) (inc index))]
      (.focus next-input))))

(defn handle-on-key-down [code input-refs index e]
  (when (and (= (.-key e) "Backspace")
             (= (nth code index) "")
             (> index 0))
    (when-let [prev-input (aget (.-current input-refs) (dec index))]
      (.focus prev-input))))

(defn handle-submit [code  event]
  ;; TODO: auto submit once the input if filled
  (.preventDefault event)
  (js/console.log "submited " code))

(defn- f-view [props]
  (let [[code set-code] (react/useState ["" "" "" "" "" ""])
        input-refs       (react/useRef [])]
    [:div {:className "max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl 
                         rounded-2xl shadow-xl overflow-hidden"}
     [:> motion.div
      {:initial    {:opacity 0
                    :y      -50}
       :animate    {:opacity 1
                    :y       0}
       :transition {:duration 0.5}
       :className  "bg-gray-800 bg-opacity-50 backdrop-filter background-blur-xl 
                      rounded-2xl shadow-2xl p-8 w-full max-w-md"}
      [:h2 {:className "text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-emerald-500 
                          text-transparent bg-clip-text"}
       "Verify Your Email"]

      [:p {:className "text-center text-gray-300 mb-6 text-center bg-gradient-to-r from-yellow-400 to-emerald-500 
                       text-transparent bg-clip-text"}
       "Enter the 6 digit code sent to your email"]

      [:form 
       {:on-submit  #(handle-submit code %)
        :className "space-y-6"}
       [:div {:className "flex justify-between"}
        (map-indexed
         (fn [index digit]
           [input/view
            {:key         index
             :ref         (fn [e]
                            (aset (.-current input-refs) index e))
             :max-length  6
             :on-key-down (fn [e]
                            (handle-on-key-down input-refs code index (-> e .-target .-value)))
             :type        "text"
             :value       digit
             :on-change    (fn [e]
                             (handle-on-change input-refs code set-code index (-> e .-target .-value)))
             :class-name   "w-12 h-12 text-center justify-center text-2xl font-bold bg-gray-700 text-white
                           border-2 border-gray-500 rounded-lg focus:border-green-500 focus:outline-none"}])
         code)]
       [:> motion.button
        {:className "mt-5 w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-emerald-600 text-white 
                           font-bold rounded-lg shadow-lg hover:from-orange-600 hover:to-emerald-700 focus:outline-none
                           focus:ring-2 focus:ring-orange-500 focus:fing-offset-2 focus:ring-offset-gray-900 transition 
                           duration-200"
         :whileHover {:scale 1.02}
         :whileTop   {:scale 0.98}
         :type       "submit"}
        "Verify email"]]]]))

(defn view [props]
  [:f> f-view props])