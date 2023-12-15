import React from 'react';
import {
  KeyIcon,
  CommandLineIcon,
  BugAntIcon,
} from '@heroicons/react/24/solid';

const Features = ({ pageContext: { locale: language } }) => {
  const features = [
    {
      icon: BugAntIcon,
      title: '怠慢（Laziness）',
      description:
        'プログラマーは労力を削減するための労力を惜しまないこと。怠惰のために書いたプログラムは他人にも便利であり、ドキュメントを書くことにより自ら他人の質問に答えずに済むようにすること。これがプログラマーの第一の美徳。',
    },
    {
      icon: CommandLineIcon,
      title: '短気（Impatience）',
      description:
        'コンピューターが怠惰であるときにプログラマーが感ずる怒り。短気によって書かれたプログラムは、単に労力を削減するだけではなく、事前に解決しておく、少なくとも既に解決済みのように振る舞う。これがプログラマーの第二の美徳。',
    },
    {
      icon: KeyIcon,
      title: '傲慢（Hubris）',
      description:
        ' ゼウスも罰したもう過剰なまでの驕り。他人がそしりを入れられぬほどのプログラムを書くという誇り、そしてプライド。これがプログラマーの第三の美徳。',
    },
  ];

  return (
    <div className="relative bg-white dark:bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase font-display">
          プログラマーの三大美徳
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-300 tracking-tight sm:text-4xl font-display">
          Values
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          by Larry Wall
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-700 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-cyan-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-gray-50 tracking-tight font-display">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
