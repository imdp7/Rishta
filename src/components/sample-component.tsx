import {
  faAdn,
  faFacebook,
  faInstagram,
  faLinkedin,
  faSnapchat,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const getIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'instagram':
      return faInstagram;
    case 'whatsapp':
      return faWhatsapp;
    case 'facebook':
      return faFacebook;
    case 'snapchat':
      return faSnapchat;
    case 'linkedin':
      return faLinkedin;
    default:
      return faAdn;
  }
};
function calculateAge(dateOfBirth: string): number {
  const dob = new Date(dateOfBirth);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

export default function SampleComponent(props: any) {
  const enhancedData = props.data.reduce(
    (acc: { title: string; data: string }[], item: { title: string; data: string }) => {
      if (item.title.toLowerCase() === 'date of birth' && typeof item.data === 'string') {
        const age = calculateAge(item.data);
        acc.unshift({ title: 'Age', data: `${age}` });
        acc.push(item);
      } else {
        acc.push(item);
      }
      return acc;
    },
    []
  );
  return (
    <div className="max-w-8xl mx-auto py-2">
      <div className="w-full border border-gray-500">
        <h2 className="border-b border-gray-400 bg-gray-600 px-5 py-2 text-2xl font-semibold text-white opacity-80 shadow-2xl">
          {props.title}
        </h2>
        <div className="m-3 grid grid-cols-2 items-center gap-8 text-center md:grid-cols-3 md:text-justify lg:grid-cols-5">
          {enhancedData.data?.map((item: any, i: number) => (
            <div key={i}>
              {item.display !== false && (
                <p className={`mb-2 justify-center text-center text-base font-bold opacity-50`}>
                  {item?.title}
                </p>
              )}
              {item.link ? (
                <div className="mx-auto flex flex-wrap items-center space-x-4">
                  {getIcon(item.title) && <FontAwesomeIcon icon={getIcon(item.title)} size="2xl" />}
                  <Link href={item.link} target="_blank">
                    <p className="text-center text-base text-blue-500 hover:underline hover:underline-offset-8 active:text-blue-900">
                      {item.data}
                    </p>
                  </Link>
                </div>
              ) : (
                <div className="block items-center">
                  {Array.isArray(item.data) ? (
                    // If data is an array, map over it
                    item.data.map((dataItem: any, i: number) => (
                      <p className="list-disc text-center text-base" key={i}>
                        {dataItem}
                      </p>
                    ))
                  ) : (
                    // If data is a string, display it directly
                    <p className="flex-wrap text-center text-base">{item.data}</p>
                  )}
                  {/* Check if subData exists and display it if it does */}
                  {item.subData && <p className="text-center text-sm opacity-65">{item.subData}</p>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
