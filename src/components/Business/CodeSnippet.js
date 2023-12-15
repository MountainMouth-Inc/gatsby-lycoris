import React from 'react';

const CodeSnippet = () => {
  return (
    <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
      <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
            <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                # main.py
              </div>
              <div className="border-r border-gray-600/10 px-4 py-2">
                # test.py
              </div>
            </div>
          </div>
          <div className="px-6 pb-14 pt-6 text-gray-50 font-mono">
            <p>import tensorflow as tf</p>
            <p>(x_train, y_train), (x_test, y_test) = text.load_data()</p>
            <p>x_train, x_test = x_train / 255.0, x_test / 255.0</p>
            <p>model = tf.keras.models.Sequential([</p>
            <p className="indent-4">
              tf.keras.layers.Flatten(input_shape=(28, 28)),
            </p>
            <p className="indent-4">
              tf.keras.layers.Dense(128, activation='relu'),
            </p>
            <p className="indent-4">tf.keras.layers.Dropout(0.2),</p>
            <p className="indent-4">tf.keras.layers.Dense(10)</p>
            <p>])</p>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
        aria-hidden="true"
      />
    </div>
  );
};

export default CodeSnippet;
