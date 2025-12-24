import React from 'react';
import { useTheme, getThemeClasses } from '../hooks/useTheme';

export const DailyPrayersContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`p-2 sm:p-4 space-y-2 max-h-[70vh] sm:max-h-[80vh] overflow-y-auto overscroll-contain transition-colors duration-300 ${getThemeClasses(
        theme,
        'textSecondary',
      )}`}
    >
      <h4 className={`text-lg font-bold transition-colors duration-300 ${getThemeClasses(theme, 'textPrimary')}`}>
        Prayers Before Any Task
      </h4>
      <p className='text-sm sm:text-base leading-relaxed space-y-4 break-words'>
        Almighty God, our Help and Refuge, Who know that we can do nothing right without Your guidance and help; direct
        me by Your wisdom and power, that I may accomplish this task and whatever else I do, according to Your divine
        will, so that it may be beneficial to me and others, and to the glory of Your holy name. Amen.
      </p>
      <br />
      <h5 className={`text-lg font-bold transition-colors duration-300 ${getThemeClasses(theme, 'textPrimary')}`}>
        Another Prayer Before Any Task
      </h5>
      <p className='text-sm sm:text-base leading-relaxed space-y-4 break-words'>
        My Lord and Savior, You became man and labored with Your hands until the time of your ministry. Bles me as I
        begin this work. Help me bring it to completion. Lord, enlighten my mind and strengthen my body, that I amy
        accomplish my task according to Your will. Guide me to bring about your works of goodness for Your service and
        glory. Amen.
      </p>
    </div>
  );
};
