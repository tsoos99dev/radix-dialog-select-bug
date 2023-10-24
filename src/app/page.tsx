'use client';

import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import { RxDotFilled } from 'react-icons/rx';

const options = ['Apple', 'Banana', 'Kiwi', 'Raspberry', 'Pear'];

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className='flex items-center gap-2 rounded-md px-4 py-2 outline-none hover:bg-slate-100 ring-slate-800 ring-2 text-slate-800 font-bold'>
            <span>Open modal</span>
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className='fixed inset-0 bg-slate-400/50' />
          <Dialog.Content className='flex justify-center fixed left-[50%] top-[50%] w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg border border-slate-50/50 bg-white p-16 text-sm shadow-lg focus:outline-none'>
            <Select.Root defaultValue='Apple'>
              <Select.Trigger asChild>
                <button className='w-min-fit w-24 rounded-md border-none bg-white p-2 text-sm ring-1 ring-slate-300 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500'>
                  <Select.Value />
                </button>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content>
                  <Select.Viewport className='rounded-lg bg-white p-2 shadow-lg dark:bg-slate-800'>
                    {options.map((option, index) => {
                      return (
                        <Select.Item
                          key={index}
                          value={option}
                          className='radix-disabled:opacity-50 relative flex select-none items-center rounded-md px-8 py-2 text-sm font-medium text-slate-700 focus:bg-slate-100 focus:outline-none dark:text-slate-300 dark:focus:bg-slate-900'
                        >
                          <Select.ItemText>{option}</Select.ItemText>
                          <Select.ItemIndicator className='absolute left-0 inline-flex w-[25px] items-center justify-center'>
                            <RxDotFilled />
                          </Select.ItemIndicator>
                        </Select.Item>
                      );
                    })}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
}
