import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal
} from 'react';

export default function SampleComponent(props: any) {
  return (
    <div className="max-w-8xl mx-auto py-2">
      <div className="w-full border border-gray-500">
        <h2 className="border-b border-gray-400 bg-gray-600 px-5 py-2 text-2xl font-semibold text-white opacity-80">
          {props.title}
        </h2>
        <div className="m-3 grid grid-cols-2 items-center gap-8 text-center md:grid-cols-3 md:text-justify lg:grid-cols-5">
          {props.data?.map(
            (
              item: {
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
                data:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
              },
              i: Key | null | undefined
            ) => (
              <div key={i}>
                <p className={`mb-2 justify-center text-center text-base font-bold opacity-50`}>
                  {item.title}
                </p>
                <p className="text-center text-base">{item.data}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
