import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal
} from 'react';

interface Tag {
  data: any;
  title: string;
  color: string;
}

export default function Tags(props: Tag) {
  return (
    <div className="max-w-8xl mx-auto py-2">
      <div className="w-full border border-gray-500">
        <h2 className="border-b border-gray-400 bg-gray-600 px-5 py-2 text-2xl font-semibold text-white opacity-80">
          {props?.title}
        </h2>
        <div className="flex flex-row flex-wrap justify-center space-x-4 py-2">
          {props.data?.map(
            (
              tag: {
                color: any;
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
              },
              i: Key | null | undefined
            ) => (
              <span
                className={`inline-flex items-center rounded-md bg-${tag.color}-50 text-s my-2 px-4 py-2 font-medium text-black ring-1 ring-inset ring-${tag.color}-600/10 hover:bg-${tag.color}-200 hover:cursor-pointer`}
                key={i}
              >
                {tag.title}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
