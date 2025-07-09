import { BellIcon } from '@heroicons/react/24/outline';

interface NotificationBellProps {
  readonly count: number;
}

export default function NotificationBell({ count }: NotificationBellProps) {
  return (
    <div className="relative">
      <BellIcon className="h-6 w-6 text-gray-600" />
      {count > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
}
